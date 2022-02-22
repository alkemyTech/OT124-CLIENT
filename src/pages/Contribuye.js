import React, { useEffect, useState } from 'react'
import useScript from '../hooks/useScript';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


function Contribuye() {
  let mp;
  const resultPayment = useMercadoPago();
  const InitialCard = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
}
  const [cardData, setCardData] = useState(InitialCard);
  const { MercadoPago } = useScript(
    "https://sdk.mercadopago.com/js/v2",
    "MercadoPago"
);
 
const handleInputChange = (e) => {
  setCardData({
      ...cardData,
      [e.target.dataset.name || e.target.name]: e.target.value,
  });
};

const handleInputFocus = (e) => {
  setCardData({ ...cardData, focus: e.target.dataset.name || e.target.name });
};


  return (
    <div className="flex justify-center p-2">
    <Cards
     cvc={cardData.cvc}
     expiry={cardData.cardExpirationMonth + cardData.cardExpirationYear}
     name={cardData.cardholderName}
     number={cardData.cardNumber}
     focused={cardData.focus}
     brand={cardData.issuer}
    ></Cards>
     <form id="form-checkout">
                <div className="form-control">
                    <input
                        type="tel"
                        name="cardNumber"
                        id="form-checkout__cardNumber"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="tel"
                        name="cardExpirationMonth"
                        id="form-checkout__cardExpirationMonth"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cardExpirationYear"
                        id="form-checkout__cardExpirationYear"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cvc"
                        id="form-checkout__securityCode"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="cardholderName"
                        id="form-checkout__cardholderName"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="email"
                        name="cardholderEmail"
                        id="form-checkout__cardholderEmail"
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <select
                        name="issuer"
                        id="form-checkout__issuer"
                        on
                    ></select>
                    <select
                        name="identificationType"
                        id="form-checkout__identificationType"
                    ></select>
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="identificationNumber"
                        id="form-checkout__identificationNumber"
                    />
                </div>
                <div className="form-control">
                    <select
                        name="installments"
                        id="form-checkout__installments"
                    ></select>
                </div>
                <div className="form-control">
                    <button type="submit" id="form-checkout__submit">
                        Pagar
                    </button>
                </div>
                <progress value="0" className="progress-bar">
                    Cargando...
                </progress>
            </form>
            {resultPayment && <p>{JSON.stringify(resultPayment)}</p>}
    </div>
  )
}

export default Contribuye