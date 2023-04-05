import axiosInstance from "../../utils/axios";

export const getJobsApi = async () => {
  const response = await axiosInstance.get("/jobs");
  return response.data;
};

export const createJobsApi = async (data) => {
  const response = await axiosInstance.post("/jobs", data);
  return response.data;
};
export const updateJobsApi = async ({ id, data }) => {
  const response = await axiosInstance.put(`id/${id}`, data);
  return response.data;
};
