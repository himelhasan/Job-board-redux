import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <nav>
        <ul class="space-y-4">
          <li>
            <Link to="/" class="main-menu menu-active" id="lws-alljobs-menu">
              <i class="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul class="space-y-6 lg:space-y-2">
              <li>
                <Link class="sub-menu" to="/jobs/internship" id="lws-internship-menu">
                  <i class="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </Link>
              </li>
              <li>
                <Link class="sub-menu" to="/jobs/fulltime" id="lws-fulltime-menu">
                  <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </Link>
              </li>
              <li>
                <Link to="/jobs/remote" class="sub-menu" id="lws-remote-menu">
                  <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/add-new-job" class="main-menu" id="lws-addJob-menu">
              <i class="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
