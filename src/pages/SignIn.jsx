import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signin } = user_actions;

export default function SignIn() {
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();
  function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    dispatch(signin({ data }))
      .then((res) => {
        //console.log(res);
        if (res.payload.token) {
          Swal.fire({
            icon: "success",
            title: "Logged in!",
          });
          navigate("/");
        } else if (res.payload.messages.length > 0) {
          //let html = res.payload.messages.join('<br>')
          let html = res.payload.messages
            .map((each) => `<p>${each}</p>`)
            .join("");
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
            html,
          });
        }
      })
      .catch((err) => console.log(err));
  }
  let user = useSelector((store) => store);
  //console.log(user);
  return (
    <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white m-auto">
      <h1 className="text-[36px] font-bold text-center mb-[10px]">Sign In!</h1>
      <input
        ref={mail_signin}
        type="text"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="mail_signin"
        id="mail_signin"
        defaultValue=""
        placeholder="Type Mail"
      />
      <input
        ref={password_signin}
        type="password"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="password_signin"
        id="password_signin"
        defaultValue=""
        placeholder="Type Password"
      />
      <input
        type="button"
        className="mb-[10px] w-full shadow bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        value="Sign In!"
        onClick={handleSignIn}
      />
      <p>
        Don't you have an account?{" "}
        <Anchor
          className="text-[20px] font-bold text-primary cursor-pointer"
          to="/signup"
        >
          Sign up!
        </Anchor>
      </p>
    </form>
  );
}
