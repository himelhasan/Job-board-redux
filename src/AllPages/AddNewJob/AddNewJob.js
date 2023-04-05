import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addJobs } from "../../features/jobs/jobsSlice";

const AddNewJob = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submitAddJobs = (data) => {
    dispatch(
      addJobs({
        title: data.title,
        type: data.type,
        salary: data.salary,
        deadline: data.deadline,
      })
    );
    console.log(data);
  };

  return (
    <>
      <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 class="mb-10 text-center lws-section-title">Add New Job</h1>

        <div class="max-w-3xl mx-auto">
          <form class="space-y-6" onSubmit={handleSubmit(submitAddJobs)}>
            <div class="fieldContainer">
              <label for="lws-JobTitle" class="text-sm font-medium text-slate-300">
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                {...register("title")}
              >
                <option value="" hidden selected>
                  Select Job
                </option>
                <option value="Software Developer">Software Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="MERN Stack Developer">MERN Stack Developer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Social Media Manager">Social Media Manager</option>
                <option value="Senior Executive">Senior Executive</option>
                <option value="Junior Executive">Junior Executive</option>
                <option value="Android App Developer">Android App Developer</option>
                <option value="IOS App Developer">IOS App Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobType">Job Type</label>
              <select id="lws-JobType" name="lwsJobType" {...register("type")} required>
                <option value="" hidden selected>
                  Select Job Type
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobSalary">Salary</label>
              <div class="flex border rounded-md shadow-sm border-slate-600">
                <span class="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  class="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  {...register("salary")}
                />
              </div>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                {...register("deadline")}
                required
              />
            </div>

            <div class="text-right">
              <button
                type="submit"
                id="lws-submit"
                class="cursor-pointer btn btn-primary w-fit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default AddNewJob;
