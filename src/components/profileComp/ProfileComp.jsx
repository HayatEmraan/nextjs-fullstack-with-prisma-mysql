"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const ProfileComp = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const middle = e.target;
    const address = middle.address.value;
    const city = middle.city.value;
    const country = middle.country.value;
    console.log(address, city, country);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update your profile!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your profile has been updated!",
          showConfirmButton: false,
          timer: 500,
        });
        router.refresh();
      }
    });
  };
  return (
    <>
      {/* component */}
      <div className="max-w-screen-md px-10 py-2 mx-4 mt-8 bg-white rounded-lg shadow md:mx-auto border-1">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Profile Details
            </h2>
            <p className="text-gray-500 mb-6">
              Please enter your personal details.
            </p>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>
                <div className="lg:col-span-2">
                  <form
                    onSubmit={handleSubmit}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        name="address"
                        required
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder="Dhaka, Bangladesh"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder="Dhaka"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="country">Country </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder="Bangladesh (BD)"
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComp;
