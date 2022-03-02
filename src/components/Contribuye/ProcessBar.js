import React, { useEffect } from 'react';
import Progressbar from 'react-js-progressbar';
import useMercadoPago from '../../hooks/useMercadopago';


export default function ProcessBar() {

  let { resourcePercentage } = useMercadoPago()

 // console.log(resourcePercentage)
  let [percentage, setPercentage] = React.useState(0);

  useEffect(() => {
    switch (resourcePercentage) {
      case 'identificationTypes':
        setPercentage(10)
        break;
      case 'paymentMethods':
        setPercentage(25)
        break;
        case 'issuers':
        setPercentage(50)
        break;
      case 'installments':
        setPercentage(75)

        break;
      case 'cardToken':
        setPercentage(100)

        break;
      default:
        setPercentage(0)
    }

    return () => {
      
    }
  }, [resourcePercentage])


  return (
    <>
      <div id='progressbarContainer'>
        <Progressbar
          input={percentage}
          pathWidth={5}
          size={100}
          shape={'semi circle'}
          pathColor={['#7bb', '#7ff']} // use an array for gradient color.
          trailWidth={10}
          trailColor='#363636' // use a string for solid color.
          textStyle={{ fill: 'blue' }} // middle text style
        >
        </Progressbar>
      </div>
    </>
  );
}