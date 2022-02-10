import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.jpg'
//https://www.npmjs.com/package/react-responsive-carousel

let seeder = [
  {imgUrl:`${img1}`,text:'hola que talco'},
  {imgUrl:`${img2}`,text:'como andamio'},
  {imgUrl:`${img3}`,text:'que container'},
]
// replace "seeder" by incoming array
function Carrusel() {

  const styles = {
    carouselContainer: "flex justify-center w-full my-[25px] bg-slate-200 z-10",
    carouselImage: "max-w-[30rem] object-contain",
    carouselLabel: "absolute w-full bottom-[10%] ",
    prevArrow:
      "absolute flex justify-center items-center h-12 w-12 z-10 cursor-pointer text-5xl text-white transition-all duration-200 rounded-full top-[40%] left-[5%] bg-[rgb(0,0,0,0.3)] hover:bg-[rgb(0,0,0,1)]",
    nextArrow:
      "absolute flex justify-center items-center h-12 w-12 z-10 cursor-pointer text-5xl text-white transition-all duration-200 rounded-full top-[40%] right-[5%] bg-[rgb(0,0,0,0.3)] hover:bg-[rgb(0,0,0,1)]",
  };

  const prevArrow = (handler) => {
    return (
      <div className={styles.prevArrow} onClick={handler}>
        {"<"}
      </div>
    );
  };
  const nextArrow = (handler) => {
    return (
      <div className={styles.nextArrow} onClick={handler}>
        {">"}
      </div>
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        autoFocus={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        renderArrowPrev={prevArrow}
        renderArrowNext={nextArrow}
      >
        {seeder.map((e) => {
          return (
            <div key={e.imgUrl}>
              <img src={e.imgUrl} className={styles.carouselImage} />
              <div className={styles.carouselLabel}>{e.text}</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carrusel;
