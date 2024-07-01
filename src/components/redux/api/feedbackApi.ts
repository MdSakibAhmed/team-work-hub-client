import baseApi from "./baseApi";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFeedback: builder.mutation({
      query: (body) => ({
        url: "/feedback",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["feedback"],
    }),

    getAllFeedbacks: builder.query({
      query: (arg) => ({
        url: "/feedback",
        params: arg,
      }),
      providesTags: ["feedback"],
    }),
  }),
});
