import React from "react";
import { Slash } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { Settings } from 'lucide-react';
import { CircleFadingPlus } from 'lucide-react';
import { Bell } from 'lucide-react';


import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs ";

const Nav = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString("en-US", { month: "short" });
  const day = now.getDate();

  return (
    <div className="w-full flex justify-between items-center p-4 shadow-lg">
      {/* <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Suppliers</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          
        </BreadcrumbList>
      </Breadcrumb> */}
      <DynamicBreadcrumbs />
      <div className="flex items-center justify-center space-x-7 text-sm">
        <div className="grid grid-cols-3 ">
          <div className="col-span-3 w-full">
            {month} {day}
          </div>
          <div className="col-span-3 w-full text-xs text-end">{year}</div>
        </div>
        <div>
          <form className="max-w-md ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-1 ps-10 text-sm text-gray-900  rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </form>
        </div>
        <CircleHelp className="w-5"/>
        <Settings className="w-5"/>
        <CircleFadingPlus className="w-5"/>
        <Bell className="w-5"/>
      </div>
    </div>
  );
};

export default Nav;
