import { docApi } from "../redux/api/docApi";
import { TDocument } from "../../types";
import DocumentCard from "../DocumentCard/DocumentCard";

const AllDocs = () => {
  const { isLoading, data } = docApi.useGetAllDocsQuery({});
  return (
    <div className="mt-8">
      <h1 className=" text-center text-4xl">Edit content with real-time collaboration</h1>
    <div className="flex justify-center mt-6 gap-4 flex-col md:flex-row items-center ">
      {!isLoading &&
        data.data.map((doc: TDocument) => (
          <DocumentCard title={doc.title} content={doc.content} _id={doc._id} />
        ))}
    </div>
    </div>
  );
};

export default AllDocs;
