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

    //Payments Verify
    verifyPayments: build.query({
      query: (arg) => ({
        url: `/payments/validation-payment`,
        method: "GET",
        params: arg,
      }),
    }),
  }),
});

export const { useInitialPaymentMutation, useVerifyPaymentsQuery } = paymentApi;
