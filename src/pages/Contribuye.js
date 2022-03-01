import React, { useEffect, useState } from 'react'

import 'react-credit-cards/es/styles-compiled.css';
import useMercadoPago from '../hooks/useMercadopago';
import WelcomeMessage from '../components/Contribuye/WelcomeMessage';
import FormContribuye from '../components/Contribuye/FormContribuye';
import { getDonate } from '../services/contribuye';
import CenterResponsiveContainer from '../components/Shared/Containers/CenterResponsiveContainer';



function Contribuye() {
    let mp;
    const { resultPayment } = useMercadoPago();

    const [active, setActive] = useState(false);
  

    const onClickActive = _ => active ? setActive(false) : setActive(true)

  
    

    return (
        <CenterResponsiveContainer>
        <div className="flex justify-center p-2 max-w-[500px]">

            {active ?
                 <FormContribuye onClickActive={onClickActive} setActive={setActive}/>:
                <WelcomeMessage onClickActive={onClickActive} ></WelcomeMessage>
            }

          
        </div>
        </CenterResponsiveContainer>
    )
}

export default Contribuye