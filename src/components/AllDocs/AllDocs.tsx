import { docApi } from "../redux/api/docApi";
import { TDocument } from "../../types";
import DocumentCard from "../DocumentCard/DocumentCard";

const AllDocs = () => {
  const { isLoading, data } = docApi.useGetAllDocsQuery({});
  return (
    <div>
      {!isLoading &&
        data.data.map((doc: TDocument) => (
          <DocumentCard title={doc.title} content={doc.content} _id={doc._id} />
        ))}
    </div>
  );
};

export default AllDocs;
