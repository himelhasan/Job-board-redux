import axiosInstance from "../../utils/axios";

export const getJobsApi = async () => {
  const response = await axiosInstance.get("/jobs");
  return response.data;
};
