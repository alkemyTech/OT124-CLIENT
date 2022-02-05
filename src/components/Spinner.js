import React from "react";
import {TailSpin} from  'react-loader-spinner'
import "../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function Spinner(props) {
  return (
    <div>
      <TailSpin color="#00BFFF" height={100} width={100}/>
    </div>
  );
}

export default Spinner;

