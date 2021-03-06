import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllSlides } from '../../services/slides';
import { API_BASE_URL } from '../../services/index';

function Carrusel() {
  const [ slides, setSlides ] = useState([]);

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

  useEffect(() => {
    getAllSlides()
      .then(res => {
        setSlides(res.data.slides);
      })
      .catch(err => console.log(err));
  }, []);

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
        {slides?.map(slide => {
          return (
            <div key={slide.id}>
              <img src={`${API_BASE_URL}/api/v1/files/${slide?.image?.key}`} className={styles.carouselImage} alt={slide?.text} />
              <div className={styles.carouselLabelContainer}>
                <p className={styles.carouselLabel}>{slide?.text}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carrusel;
