import HomeComp from "@/components/homeComp/HomeComp";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* button */}
      <div className="my-4">
        <Link
          href="/profile"
          className="flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-full mx-auto"
        >
          <div className="flex sm:flex-cols-12 gap-2">
            <div className="col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </div>
            <div className="col-span-2 pt-2">Enter Profile</div>
          </div>
        </Link>
      </div>

      <main className="flex justify-center items-center min-h-[calc(100vh-350px)]">
        <HomeComp />
      </main>
    </div>
  );
}
