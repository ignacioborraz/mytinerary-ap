import { useState } from "react";
import Display from "./Display";
import Label from "./Label";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;

export default function NavBar() {
  let [show, setShow] = useState(false);
  let options = [
    { to: "/", title: "Home" },
    { to: "/cities", title: "Cities" },
    {
      to: "/signin",
      title: "Log In",
      backgroundColor: "#9F7AEA",
      color: "white",
      hover: "#B794F4",
    },
  ];
  let mail = useSelector((store) => store.users.user?.mail);
  let dispatch = useDispatch();
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
        onClick={() => setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {/* {show ? <Display options={options}/> : null} */} {/* if else */}
      {show && <Display options={options} />} {/* if */}
      <div className="w-full flex justify-between items-center">
        <h1
          className="hidden text-[30px]
        md:flex"
        >
          My Tinerary - {mail}
        </h1>
        {mail && (
          <span
            onClick={() => dispatch(signout())}
            className="h-[50px] text-[20px] px-2 bg-white hover:bg-gray-100 rounded-xl w-[100px] flex justify-center items-center mx-1 cursor-pointer"
            style={{
              backgroundColor: "#9F7AEA",
              color: "white",
              hover: "#B794F4",
            }}
          >
            Sign Out
          </span>
        )}
        <Label options={options} />
      </div>
    </header>
  );
}
