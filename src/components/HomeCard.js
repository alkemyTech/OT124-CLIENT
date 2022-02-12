import React from "react";
import exampleImage from "../img/3.jpg";

export default function HomeCard(props) {
  const styles = "w-[200px] h-[150px]";

  return <img className={styles} src={props.img}></img>;
}
