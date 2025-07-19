import axios from "axios";
import { changeType } from "@/features/loadingSlice";

const instance = axios.create();

export const setupInterceptors = (store) => {
  let requestCount = 0;

  const judgeLoading = (isLoading) => {
    if (isLoading) {
      if (requestCount === 0) {
        store.dispatch(changeType(isLoading));
      }
      requestCount++;
    } else {
      requestCount--;
      if (requestCount <= 0) {
        requestCount = 0;
        store.dispatch(changeType(isLoading));
      }
    }
  };

  instance.interceptors.request.use(
    (config) => {
      judgeLoading(true);
      return config;
    },
    (error) => {
      judgeLoading(false);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      judgeLoading(false);
      return response;
    },
    (error) => {
      judgeLoading(false);
      return Promise.reject(error);
    }
  );
};

export default instance;
