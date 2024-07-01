import { FaUserCircle } from "react-icons/fa";
import { TFeedback } from "../../types";


const FeedbackCard = ({feedback}:{feedback:TFeedback}) => {
    return (
        <div className="border p-4 mt-4">
              <div className="mb-4">
                {" "}
                <FaUserCircle
                  className="text-gray-500 inline-block"
                  size="30px"
                />{" "}
                <span className="inline ">{feedback.userId.username}</span>
              </div>

              <p>{feedback.content}</p>
            </div>
    );
};

export default FeedbackCard;