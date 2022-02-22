import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../img/1.png'
import img2 from '../../img/2.png'
import img3 from '../../img/3.jpg'
//https://www.npmjs.com/package/react-responsive-carousel

let seeder = [
  { imgUrl: `${img1}`, text: "Esto es un epigrafe." },
  { imgUrl: `${img2}`, text: "Esto es otro epigrafe." },
  { imgUrl: `${img3}`, text: "Otro epigrafe mas." },
];
// replace "seeder" by incoming array
function Carrusel() {
  const styles = {
    carouselContainer:
      "flex justify-center align-center mb-[50px] bg-slate-100",
    carouselImage: "h-[30rem] object-contain place-self-center",
    carouselLabelContainer:
      "absolute flex justify-center w-full bottom-[3%] border-black",
    carouselLabel:
      "z-10 inline rounded text-white px-5 py-3 bg-[rgb(14,165,233,1)] ",
    prevArrow:
      "absolute flex justify-center items-center h-12 w-12 z-10 cursor-pointer text-5xl text-white transition-all duration-200 rounded-full top-[50%] left-[5%] bg-[rgb(14,165,233,0.3)] hover:bg-[rgb(14,165,233,1)]",
    nextArrow:
      "absolute flex justify-center items-center h-12 w-12 z-10 cursor-pointer text-5xl text-white transition-all duration-200 rounded-full top-[50%] right-[5%] bg-[rgb(14,165,233,0.3)] hover:bg-[rgb(14,165,233,1)]",
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
              <div className={styles.carouselLabelContainer}>
                <p className={styles.carouselLabel}>{e.text}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carrusel;
