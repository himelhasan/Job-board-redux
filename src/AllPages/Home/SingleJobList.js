import React from "react";

const SingleJobList = ({ job }) => {
  const { id, title, deadline, salary, type } = job;

  return (
    <div class="lws-single-job">
      <div class="flex-1 min-w-0">
        <h2 class="lws-title">{title}</h2>
        <div class="job-footers">
          <div class="lws-type">
            {/*
             <!-- Fulltime - #FF8A00,  -->
             <!-- Internship - #FF5757,  -->
             <!-- Remote - #56E5C4,  -->
            */}

            {type === "Full Time" && (
              <i class={`fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5`}></i>
            )}
            {type === "Internship" && (
              <i class={`fa-solid fa-stop !text-[#FF5757] text-lg mr-1.5`}></i>
            )}
            {type === "Remote" && (
              <i class={`fa-solid fa-stop !text-[#56E5C4] text-lg mr-1.5`}></i>
            )}

            {type}
          </div>
          <div class="lws-salary">
            <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div class="lws-deadline">
            <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <span class="hidden sm:block">
          <button type="button" class="lws-edit btn btn-primary">
            <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span class="sm:ml-3">
          <button type="button" class="lws-delete btn btn-danger ">
            <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleJobList;
