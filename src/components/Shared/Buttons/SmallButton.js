import React from "react";

const styles =
  "flex text-[12px] justify-center bg-white hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded p-1 w-20 easy-in duration-300";

function SmallButton(props) {
  const { text } = props;
  return (
    <button className={styles} type="button">
      {text}
    </button>
  );
}

export default SmallButton;
