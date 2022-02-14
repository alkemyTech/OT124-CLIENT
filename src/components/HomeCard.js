import React from "react";
import { API_BASE_URL } from "../services";
import exampleImage from "../img/3.jpg";
import { Link } from "react-router-dom";

export default function HomeCard(props) {
  const styles = "w-[200px] h-[150px] object-cover";

  return (
    <Link to={"/" + props.type + "/" + props.id}>
      <img
        className={styles}
        src={`${API_BASE_URL}/api/v1/files/${props.img}`}
        alt={props.name}
      ></img>
    </Link>
  );
}
