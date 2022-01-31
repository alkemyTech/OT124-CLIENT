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
  return( 
  <div className='flex justify-center w-full'>
    <div className=' w-3/4'>
    <Carousel autoFocus={true} >
    {seeder.map(e => {
      return(
        <div>
        <img src={e.imgUrl} className='max-h-[35rem]' />
        <p className="legend">{e.text}</p>
          </div>
      )
    })}
    </Carousel>
  </div>
</div>
)
}

export default Carrusel;
