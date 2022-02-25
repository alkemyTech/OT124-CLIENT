import React from "react";
import { GoogleLogin } from "react-google-login";
import { API_CLIENT_ID } from "../../../services";
import GoogleIcon from "../../Auth/GoogleIcon";

export default function GoogleButton(props) {
  const { handleSubmit } = props;

  const styles = `bg-transparent hover:bg-sky-500 text-sky-500 
    font-semibold hover:text-white border border-sky-500 
    hover:border-transparent rounded py-2 mt-2 px-4 w-[100%]
    transform hover:scale-105 easy-in duration-300`;

  return (
    <GoogleLogin
      clientId={API_CLIENT_ID}
      render={(props) => (
        <button
          onClick={props.onClick}
          className={" inline-flex items-center " + styles}
          disabled={props.disabled}
        >
          <GoogleIcon className="hover:bg-sky-500" />
          <span className={"w-full mt-1 ml-2"}>Continuar con Google</span>
        </button>
      )}
      onSuccess={handleSubmit}
      cookiePolicy={"single_host_origin"}
    />
  );
}
