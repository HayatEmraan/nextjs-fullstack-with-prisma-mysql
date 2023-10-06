"use client";
import React from "react";

const LoginComp = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    fetch("/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* component */}
      <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
        <div className="relative hidden xl:block xl:w-1/2 h-full">
          <img
            className="absolute h-auto w-full object-cover"
            src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
            alt="my zomato"
          />
        </div>
        <div className="w-full xl:w-1/2 p-8">
          <form onSubmit={handleLogIn}>
            <h1 className=" text-2xl font-bold">Sign in to your account</h1>
            <div>
              <span className="text-gray-600 text-sm">
                Don&apos;t have an account?{" "}
              </span>
              <span className="text-gray-700 text-sm font-semibold">
                Sign up
              </span>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
            </div>
            <div className="mb-6 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your email"
              />
              <a
                className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex w-full mt-8">
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
