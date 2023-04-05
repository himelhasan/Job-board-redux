import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobsApi } from "./jobsApi";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: "",
  allJobs: [],
};

export const loadJobs = createAsyncThunk("jobs/loadJobs", async (state, action) => {
  const jobs = await getJobsApi();
  return jobs;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loadJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allJobs = action.payload;
      })
      .addCase(loadJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.allJobs = [];
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
