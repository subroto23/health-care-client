import { TagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const authAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMetaData: build.query({
      query: ({ id }) => ({
        url: `/meta-data`,
        method: "GET",
      }),
      providesTags: [TagTypes.METADTA],
    }),
  }),
});

export const { useGetMetaDataQuery } = authAPi;
