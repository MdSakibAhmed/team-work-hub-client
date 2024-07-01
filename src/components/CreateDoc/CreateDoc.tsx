import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { docApi } from "../redux/api/docApi";

const CreateDoc = () => {
  const [formData, setFormData] = useState<{title:string,content:string}>({
    title:"",
    content: "",
  });
  const navigate = useNavigate();

  const [create] = docApi.useCreateDocMutation();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // Add form submission logic here
    const res = await create(formData).unwrap();
    console.log(res);

    if (res.statusCode == 201) {
      Swal.fire("Successfully created", "", "success");

      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Create A Doc
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email or username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <input
              type="text"
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Create Doc
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDoc;
