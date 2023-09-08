import { useRef, useState } from "react";
import UserData from "../components/UserData";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
const { update_user } = user_actions;

export default function Profile() {
  const user = useSelector((store) => store.users.user);
  //console.log(user);
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const password = useRef("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  async function handleUpdate() {
    try {
      let data = {};
      if (name.current.value) {
        data.name = name.current.value;
      }
      if (lastName.current.value) {
        data.lastName = lastName.current.value;
      }
      if (country.current.value) {
        data.country = country.current.value;
      }
      if (photo.current.value) {
        data.photo = photo.current.value;
      }
      if (password.current.value) {
        data.password = password.current.value;
      }
      //console.log(data);
      dispatch(update_user({ data }));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col flex-grow items-center justify-center md:flex-row md:justify-evenly">
      <UserData user={user} show={show} setShow={setShow} />
      {show && (
        <form className="flex flex-col items-center justify-center p-[20px] w-[360px] h-[400px] bg-red-200 sm:bg-white my-[20px] md:my-0">
          <h1 className="text-[36px] font-bold text-center mb-[10px]">
            Update!
          </h1>
          <input
            ref={name}
            type="text"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="name"
            id="name"
            defaultValue=""
            placeholder="Type Name"
          />
          <input
            ref={lastName}
            type="text"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="lastName"
            id="lastName"
            defaultValue=""
            placeholder="Type Last Name"
          />
          <input
            ref={country}
            type="text"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="country"
            id="country"
            defaultValue=""
            placeholder="Type Country"
          />
          <input
            ref={photo}
            type="text"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="photo"
            id="photo"
            defaultValue=""
            placeholder="Type Photo"
          />
          <input
            ref={password}
            type="password"
            className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="password"
            id="password"
            defaultValue=""
            placeholder="Type Password"
          />
          <input
            type="button"
            className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            value="Update!"
            onClick={handleUpdate}
          />
        </form>
      )}
    </div>
  );
}
