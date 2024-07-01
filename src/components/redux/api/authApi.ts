import baseApi from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body,
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
        
      })
      ,
    }),

 
  }),
});


