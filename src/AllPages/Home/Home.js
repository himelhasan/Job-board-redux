import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader";
import SingleJobList from "./SingleJobList";
import { useDispatch, useSelector } from "react-redux";
import { loadJobs } from "../../features/jobs/jobsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const jobsState = useSelector((state) => state.jobs);
  const { isLoading, isError, error, allJobs } = jobsState || {};

  useEffect(() => {
    dispatch(loadJobs());
  }, [dispatch]);

  console.log(allJobs);

  // decide what to display

  let content;

  if (isLoading) content = <p>Loading</p>;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && allJobs?.length === 0)
    content = <div className="col-span-12">No Jobs Found</div>;
  if (!isError && !isLoading && allJobs?.length > 0)
    content = allJobs.map((job) => <SingleJobList key={job.id} job={job} />);

  return (
    <>
      <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <HomeHeader />
        <div class="jobs-list">{content}</div>
      </main>
    </>
  );
};

export default Home;
