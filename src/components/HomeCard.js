import React from "react";
import { API_BASE_URL } from "../services";
import exampleImage from "../img/3.jpg";

export default function HomeCard(props) {
  const styles = "w-[200px] h-[150px] object-cover";

  return (
    <img
      className={styles}
      src={`${API_BASE_URL}/api/v1/files/${props.img}`}
      alt={props.name}
    ></img>
  );
}
