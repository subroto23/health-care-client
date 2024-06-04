import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    initialPayment: build.mutation({
      query: (data) => ({
        url: `/payments/init-payment/${data?.id}`,
        method: "POST",
        data,
        contentType: "application/json",
      }),
    }),
  }),
});

export const { useInitialPaymentMutation } = paymentApi;
