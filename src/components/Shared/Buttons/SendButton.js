import React from "react";
import SpinSVGButton from "../Loaders/SpinSVGButton";

const styles =
  "flex justify-center bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-[100%] transform hover:scale-105 easy-in duration-300";

const skeletonStyles =
  "bg-gray-200 text-transparent rounded py-2 mt-2 px-4 w-96 mx-auto my-4 animate-pulse";

function SendButton(props) {
  const { isSubmitting, isLoading, text } = props;
  return (
    <div className="flex justify-center my-4">
      {isLoading ? (
        <div className={skeletonStyles}>hidden</div>
      ) : (
        <button className={styles} type="submit" disabled={isSubmitting}>
          {isSubmitting && <SpinSVGButton />}
          {text}
        </button>
      )}
    </div>
  );
}

export default SendButton;
