import ProfileActions from "@/components/profileActions/ProfileActions";
import ProfileComp from "@/components/profileComp/profileComp";
import React from "react";

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-screen-md px-10 py-6 mx-4 mt-20 bg-white rounded-lg shadow md:mx-auto border-1">
        <div className="flex flex-col items-start w-full m-auto sm:flex-row">
          <div className="flex mx-auto sm:mr-10 sm:m-0">
            <div className="items-center justify-center w-20 h-20 m-auto mr-4 sm:w-32 sm:h-32">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="object-cover w-20 h-20 mx-auto rounded-full sm:w-32 sm:h-32"
              />
            </div>
          </div>
          <div className="flex flex-col pt-4 mx-auto my-auto sm:pt-0 sm:mx-0">
            <div className="flex flex-col mx-auto sm:flex-row sm:mx-0 ">
              <h2 className="flex pr-4 text-xl font-light text-gray-900 sm:text-3xl capitalize">
                Alex noah7
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full pt-5">
          <h1 className="text-lg font-medium text-gray-800 sm:text-xl">
            Address : Jl. Raya Bogor
          </h1>
          <p className="text-sm text-gray-500 md:text-base">City : Bogor</p>
          <p className="text-sm text-gray-500 md:text-base">
            Country : Indonesia
          </p>
        </div>
        <div className="flex pt-2 gap-4">
          <ProfileActions />
        </div>
      </div>
      <ProfileComp />
    </div>
  );
};

export default Page;
