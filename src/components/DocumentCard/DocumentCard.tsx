import { Link } from "react-router-dom";
import { TDocument } from "../../types";
import { FcEditImage } from "react-icons/fc";


const DocumentCard = ({title,_id}:TDocument) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white px-8 py-4  flex-1 border w-full">
        <div className="font-bold text-xl mb-6">{title}</div>
        <Link to={`/document/${_id}`} >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
         <FcEditImage className="inline-block" size={"30px"} /> <span>Edit Content</span>
        </button>
        </Link>
      </div>
    );
};

export default DocumentCard;