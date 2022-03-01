import React, { useEffect, useState } from 'react'

import 'react-credit-cards/es/styles-compiled.css';
import useMercadoPago from '../hooks/useMercadopago';
import WelcomeMessage from '../components/Contribuye/WelcomeMessage';
import FormContribuye from '../components/Contribuye/FormContribuye';
import { getDonate } from '../services/contribuye';



function Contribuye() {
    let mp;
    const { resultPayment } = useMercadoPago();

    const [active, setActive] = useState(false);
  

    const onClickActive = _ => active ? setActive(false) : setActive(true)

  
    

    return (
        <div className="flex justify-center p-2">

            {active ?
                 <FormContribuye onClickActive={onClickActive} setActive={setActive}/>:
                <WelcomeMessage onClickActive={onClickActive} ></WelcomeMessage>
            }

          
        </div>
    )
}

export default Contribuye