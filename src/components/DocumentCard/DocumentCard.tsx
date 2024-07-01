import { Link } from "react-router-dom";
import { TDocument } from "../../types";


const DocumentCard = ({title,content,_id}:TDocument) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">
          {content}
        </p>
        <Link to={`/document/${_id}`} >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
        </Link>
      </div>
    );
};

export default DocumentCard;