import { useState } from "react";

export default function NavBar() {
  let [show,setShow] = useState(false)
  return (
    <header className="h-[87px] px-10 bg-red-200 flex justify-start items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[50px] h-[50px] bg-white p-[5px] rounded-xl cursor-pointer"
        onClick={()=>setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {show ? (
        <div className="flex ms-5 absolute top-[70px] left-[70px] gap-2 flex flex-col bg-pink-400 p-2 rounded-xl">
        <p className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1">
          Home
        </p>
        <p className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1">
          Sign In
        </p>
        <p className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1">
          Sign Up
        </p>
      </div>
      ) : (null)}
      
    </header>
  );
}
