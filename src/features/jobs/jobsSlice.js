import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createJobsApi, getJobsApi } from "./jobsApi";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: "",
  allJobs: [],
  editing: {},
};

export const loadJobs = createAsyncThunk("jobs/loadJobs", async (state, action) => {
  const jobs = await getJobsApi();
  return jobs;
});

export const addJobs = createAsyncThunk("jobs/addJobs", async (data) => {
  const jobs = await createJobsApi(data);
  return jobs;
});

export const modifyJobs = createAsyncThunk(
  "jobs/modifyJobs",
  async (state, action, { id, data }) => {
    const jobs = await createJobsApi(id, data);
    return jobs;
  }
);

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
      })
      .addCase(addJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.allJobs.push(action.payload);
      })
      .addCase(addJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.allJobs = [];
        state.error = action.error?.message;
      })
      .addCase(modifyJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(modifyJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        const indexToUpdate = state.allJobs.findIndex(
          (job) => job.id === action.payload.id
        );
        state.allJobs[indexToUpdate] = action.payload;
      })
      .addCase(modifyJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.allJobs = [];
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
