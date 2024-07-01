import { useParams } from "react-router-dom";
import TextEditor from "../TextEditor/TextEditor";
import { SyntheticEvent, useState } from "react";
import { feedbackApi } from "../redux/api/feedbackApi";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import { TFeedback } from "../../types";
import AddFeedback from "../AddFeedback/AddFeedback";

const EditDocument = () => {
  const { docId } = useParams();
  const [isOpenField, setIsOpenField] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>("");

  const user = useSelector(selectUser);

  const { data, isLoading } = feedbackApi.useGetAllFeedbacksQuery({
    documentId: docId,
  });
  // add feedback api
  console.log(data);

  const [create] = feedbackApi.useCreateFeedbackMutation();
 
  const handleAddFeedback = async (e: SyntheticEvent) => {
    e.preventDefault();
    const reqBody = {
      userId: user?.userId,
      documentId: docId,
      content: feedback,
    };

    const res = await create(reqBody).unwrap();
    if (res.statusCode == 201) {
      Swal.fire("Successfully created", "", "success");
      console.log(res);
      setIsOpenField(false);
      setFeedback("");
    }
  };
  return (
    <div className=" flex m-6 gap-2">
      <div className="w-3/4 ">
        {docId && <TextEditor documentId={docId} />}
      </div>
      <div className="w-1/4">
        <h1 className="text-center text-xl border rounded bg-blue-800 text-white p-4">
          Feedback
        </h1>

        {!isOpenField && (
          <div className="flex mt-4 ">
            <button
              onClick={() => setIsOpenField(true)}
              className="text-white bg-blue-800 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold py-2 px-4 rounded-lg"
            >
              add Feedback
            </button>
          </div>
        )}

        {isOpenField && (
          <AddFeedback handleAddFeedback={handleAddFeedback} feedback={feedback} setFeedback={setFeedback}/>
        )}

        {!isLoading &&
          data.data.map((feedback: TFeedback) => (
            <FeedbackCard feedback={feedback} />
          ))}
      </div>
    </div>
  );
};

export default EditDocument;
