import React from "react";
import SpinSVGButton from "../Loaders/SpinSVGButton";

const styles =
  "flex justify-center bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-[100%] transform hover:scale-105 easy-in duration-300";

const skeletonStyles =
  "bg-gray-200 text-transparent rounded py-2 mt-2 px-4 w-96 mx-auto my-4 animate-pulse";

function SendButton(props) {
  const { isSubmitting, isLoading, click, text, idButton,img} = props;
//   let {img} = props
//  let { url, width, height } = img 
  return (
    <div className="flex justify-center my-4">
      {isLoading ? (
        <div className={skeletonStyles}>hidden</div>
      ) : (
        <button className={styles} type="submit" id={idButton} disabled={isSubmitting} onClick={click}>
          {img && <img src={img.url} style={{marginRight:'12px'}} width={img.width} height={img.height}></img>}
          {isSubmitting && <SpinSVGButton />}
          {text}
        </button>
      )}
    </div>
  );
}

export default SendButton;
