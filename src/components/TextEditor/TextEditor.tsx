import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { io, Socket } from "socket.io-client";
import "./TextEditor.css";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/auth/authSlice";

interface TextEditorProps {
  documentId: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ documentId }) => {
  const [quillContent, setQuillContent] = useState<string>("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const quillRef = useRef<ReactQuill | null>(null);
  const user = useSelector(selectUser);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [username] = useState<string>(user?.username as string);

  useEffect(() => {
    // connect socket
    const newSocket = io(
      `${
        process.env.NODE_ENV == "development"
          ? "http://localhost:5000"
          : "https://team-work-hub-server.onrender.com"
      }`
    );
    setSocket(newSocket);

    newSocket.emit("joinDocument", documentId);
    newSocket.on("message", (data: { text: string; sender: string }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.text, sender: data.sender },
      ]);
    });

    newSocket.on("loadDocument", (document: { content: string }) => {
      setQuillContent(document.content);
    });

    newSocket.on("receiveChanges", (delta) => {
      if (quillRef.current) {
        const editor = quillRef.current.getEditor();
        editor.updateContents(delta);
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, [documentId]);

  const handleQuillChange = (
    content: string,
    delta: unknown,
    source: string
  ) => {
    if (source === "user") {
      socket?.emit("sendChanges", delta);
      socket?.emit("saveDocument", { content: quillContent });
    }
    setQuillContent(content);
  };
  const sendMessage = () => {
    if (message.trim()) {
      socket?.emit("message", { text: message, sender: username });
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  const toolbarOptions = [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme

    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  return (
    <div className=" flex gap-4 md:flex-row-reverse flex-col">
      <div className="md:w-3/4 w-full">
        <ReactQuill
          ref={quillRef}
          value={quillContent}
          onChange={(content, delta, source) =>
            handleQuillChange(content, delta, source)
          }
          modules={{
            toolbar: toolbarOptions,
          }}
          style={{ height: "500px" }}
        />
      </div>

      <div className="md:w-1/4 w-full mt-28 md:mt-0 ">
        <h1 className="text-2xl text-center bg-blue-800 p-4 text-white rounded">
          Chat with your teams
        </h1>
        <div className="chat-container">
          <div className="chat-window">
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index}>
                  <p>{msg.sender}</p>
                  <p className="message my-message">{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
              />
              <button
                className="bg-blue-800  rounded px-5"
                onClick={sendMessage}
              >
                <FiSend color="white" size={"18px"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
