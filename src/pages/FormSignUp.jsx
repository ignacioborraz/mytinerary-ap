import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function Form() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(
        apiUrl + "users/signup", //url del endpoind de creacion
        data //objeto con los datos para crear
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className="flex flex-col grow justify-evenly items-center w-4/5">
      <input
        ref={name}
        type="text"
        className="w-4/5 py-4 text-center"
        name="name"
        id="name"
        defaultValue=""
        placeholder="Type Name"
      />
      <input
        ref={lastName}
        type="text"
        className="w-4/5 py-4 text-center"
        name="lastName"
        id="lastName"
        defaultValue=""
        placeholder="Type Last Name"
      />
      <input
        ref={country}
        type="text"
        className="w-4/5 py-4 text-center"
        name="country"
        id="country"
        defaultValue=""
        placeholder="Type country"
      />
      <input
        ref={photo}
        type="text"
        className="w-4/5 py-4 text-center"
        name="photo"
        id="photo"
        defaultValue=""
        placeholder="Type Photo"
      />
      <input
        ref={mail}
        type="text"
        className="w-4/5 py-4 text-center"
        name="mail"
        id="mail"
        defaultValue=""
        placeholder="Type Mail"
      />
      <input
        ref={password}
        type="password"
        className="w-4/5 py-4 text-center"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Type Password"
      />
      <input
        type="button"
        className="bg-red-400 text-white w-4/5 py-4 text-center cursor-pointer"
        value="Sign Up!"
        onClick={handleSignUp}
      />
      <p>
        Already have an account?{" "}
        <Anchor
          className="text-[20px] font-bold text-red-800 cursor-pointer"
          to='/auth/signin'
        >
          Sign in
        </Anchor>
      </p>
    </form>
  );
}
