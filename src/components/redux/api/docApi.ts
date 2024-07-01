import baseApi from "./baseApi";

export const docApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDoc: builder.mutation({
      query: (body) => ({
        url: "/document",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["document"],
    }),

    getAllDocs: builder.query({
      query: (arg) => ({
        url: "/document",
        params: arg,
      }),
      providesTags: ["document"],
    }),
  }),
});


