import React from "react";
import { API_BASE_URL } from "../../../services";
import exampleImage from "../../../img/3.jpg";
import { Link } from "react-router-dom";
import SmallButton from "../Buttons/SmallButton";

export default function HomeCard(props) {
  const styles = {
    container: "w-[200px] h-[150px]",
    image: "object-cover w-[100%] h-[100%]",
    cover:
      "opacity-0 hover:opacity-100 absolute bg-[rgb(186,230,253,0.8)] w-[200px] h-[150px] ease-in duration-100 grid justify-center content-center",
  };

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <Link to={"/" + props.type + "/" + props.id}>
          <SmallButton text={props.name} />
        </Link>
      </div>
      <img
        className={styles.image}
        src={`${API_BASE_URL}/api/v1/files/${props.img}`}
        alt={props.name}
      ></img>
    </div>
  );
}
