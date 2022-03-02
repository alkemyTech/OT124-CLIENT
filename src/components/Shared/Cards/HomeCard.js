import React from "react";
import { API_BASE_URL } from "../../../services";
import { Link } from "react-router-dom";
import SmallButton from "../Buttons/SmallButton";

export default function HomeCard(props) {
  const styles = {
    container:
      "w-[200px] h-[150px] rounded-lg hover:scale-105 hover:shadow-xl transition-all",
    image:
      "object-cover w-[100%] h-[100%] rounded-lg shadow-md hover:shadow-xl",
    cover:
      "md:opacity-0 rounded-lg md:hover:opacity-100 absolute md:bg-[rgb(186,230,253,0.8)] w-[200px] h-[150px] md:ease-in duration-100 grid justify-center content-center",
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
