import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV == "development"
      ? "http://localhost:5000/api"
      : "https://team-work-hub-server.onrender.com/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["document", "feedback"],
});

export default baseApi;
