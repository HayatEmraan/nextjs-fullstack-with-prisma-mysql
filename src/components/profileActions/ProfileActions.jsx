"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const ProfileActions = () => {
  const router = useRouter();
  const handleDeleteAccount = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete your account!",
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
          title: "Your profile has been deleted!",
          showConfirmButton: false,
          timer: 500,
        });
        router.push("/login");
      }
    });
  };
  const handleDeleteProfile = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete your profile!",
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
          title: "Your profile has been deleted!",
          showConfirmButton: false,
          timer: 500,
        });
        router.refresh();
      }
    });
  };
  return (
    <>
      <button
        onClick={handleDeleteAccount}
        className="bg-red-500 text-white py-1 px-2 rounded-lg"
      >
        Delete Account
      </button>
      <button
        onClick={handleDeleteProfile}
        className="bg-red-500 text-white py-1 px-2 rounded-lg"
      >
        Delete Profile
      </button>
    </>
  );
};

export default ProfileActions;
