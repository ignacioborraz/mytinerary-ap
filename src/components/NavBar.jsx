import { useState } from "react";
import Display from "./Display";
import Label from "./Label";

export default function NavBar() {
  let [show,setShow] = useState(false)
  let options = [
    {to: "/", title: "Home"},
    {to: "/cities", title: "Cities"},
    {to: "/signin", title: "Log In", backgroundColor: "#4F46E5", color: "white"}
  ]
  return (
    <header className="h-[87px] px-10 bg-red-200 flex justify-start items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[50px] h-[50px] bg-white p-[5px] rounded-xl cursor-pointer
        md:hidden"
        onClick={()=>setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {/* {show ? <Display options={options}/> : null} */} {/* if else */}
      {show && <Display options={options}/>} {/* if */}
      <div className="w-full flex justify-between items-center">
        <h1 className="hidden text-[30px]
        md:flex">
          My Tinerary
        </h1>
        <Label options={options} />
      </div>
    </header>
  );
}
