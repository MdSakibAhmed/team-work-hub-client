import { Dispatch, SetStateAction } from "react";
import { FormSubmitHandler } from "../../types";
import Button from "../../shared/Button";

const AddFeedback = ({
  handleAddFeedback,
  feedback,
  setFeedback,
}: {
  handleAddFeedback: FormSubmitHandler;
  feedback: string;
  setFeedback: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <form className="mt-6" onSubmit={handleAddFeedback}>
      <div className="mb-4">
        <label
          htmlFor="feedback"
          className="block text-gray-700 font-bold mb-2"
        >
          Your Feedback:
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          name="feedback"
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your feedback here..."
        ></textarea>
      </div>
      <div className="flex ">
  
        <Button
          type="submit"
          styles="bg-blue-800 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold py-2 px-4 rounded-lg"
          label="Add "
        />
      </div>
    </form>
  );
};

export default AddFeedback;
