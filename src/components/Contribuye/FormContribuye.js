import React, { useEffect, useState } from "react";
import useMercadoPago from "../../hooks/useMercadopago";
import Cards from "react-credit-cards";
import SendButton from "../Shared/Buttons/SendButton";
import ProcessBar from "./ProcessBar";
import InputForm from "../Shared/Forms/InputForm";
import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import SweetAlert from "../Shared/Alerts/SweetAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import logoMp from "../../img/logo-MP.png";

function FormContribuye({ onClickActive, setActive }) {
  const [isLoading, setIsLoading] = useState(false);
  const { resultPayment } = useMercadoPago();

  let InitialCard = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
  };
  let InitialValues = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
    cardholderEmail: "",
    identificationType: "",
    identificationNumber: "",
    installments: "",
  };

  const [cardData, setCardData] = useState(InitialCard);

  const validationSchema = Yup.object({
    cardNumber: Yup.number("deben ser números").required(
      "Por favor, ingresa el numero de tarjeta"
    ),
  });

  const styles = {
    input:
      "border-solid rounded-md border-2 h-8 border-teal-500 bg-zinc-100 px-4 py-2 my-2",
  };

  const handleInputChange = (e) => {
    let data = e.target;
    let datanameAtr = e.target.getAttribute("data-name");
    let dataname = data.name;
    datanameAtr ? (dataname = datanameAtr) : (dataname = dataname);

    setCardData({
      ...cardData,
      [dataname]: data.value,
    });
  };
  const handleInputFocus = (e) => {
    let data = e.target;
    let datanameAtr = e.target.getAttribute("data-name");
    let dataname = data.name;
    datanameAtr ? (dataname = datanameAtr) : (dataname = dataname);
    setCardData({
      ...cardData,
      focus: dataname,
    });
  };
  const handleSubmit = (e) => {};

  return (
    <div>
      <div className="flex justify-center mb-10">
        <img className="h-[70px]" src={logoMp}></img>
      </div>

      <Cards
        cvc={cardData.cvc}
        expiry={cardData.cardExpirationMonth + cardData.cardExpirationYear}
        name={cardData.cardholderName}
        number={cardData.cardNumber}
        focused={cardData.focus}
        brand={cardData.issuer}
      ></Cards>

      <Formik
        initialValues={InitialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* id="form-checkout"  */}
        {({
          values,
          errors,
          touched,
          isSubmitting,
          setFieldValue,
          setFieldError,
        }) => (
          <Form
            id="form-checkout"
            className="flex flex-col max-w-xs	"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          >
            <div className="form-control flex flex-col  w-full ">
              <input
                className={styles.input}
                type="tel"
                name="cardNumber"
                id="form-checkout__cardNumber"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-control flex flex-row justify-evenly ">
              <input
                className={styles.input}
                style={{ maxWidth: "100px" }}
                type="tel"
                name="cardExpirationMonth"
                id="form-checkout__cardExpirationMonth"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                className={styles.input}
                style={{ maxWidth: "100px" }}
                type="tel"
                name="cardExpirationYear"
                id="form-checkout__cardExpirationYear"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-control flex flex-col  w-full items-center ">
              <input
                className={styles.input}
                type="tel"
                name="cvc"
                id="form-checkout__securityCode"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                className={styles.input}
                type="text"
                name="cardholderName"
                id="form-checkout__cardholderName"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                className={styles.input}
                type="email"
                name="cardholderEmail"
                id="form-checkout__cardholderEmail"
                onFocus={handleInputFocus}
              />

              <select name="issuer" id="form-checkout__issuer" on></select>
              <select
                name="identificationType"
                id="form-checkout__identificationType"
              ></select>

              <input
                className={styles.input}
                type="text"
                name="identificationNumber"
                id="form-checkout__identificationNumber"
              />
              <ProcessBar />
            </div>
            <div className="form-control" style={{ display: "none" }}>
              <select
                name="installments"
                id="form-checkout__installments"
              ></select>
            </div>
            <div className="form-control">
              <SendButton
                text={"Aportar"}
                id="form-checkout__submit"
              ></SendButton>
            </div>
            {resultPayment == "Created" ? (
              <SuccessAlert
                successMsg={"Se ha realizado el pago exitosamente"}
                setSuccessMsg={true}
              ></SuccessAlert>
            ) : resultPayment == false ? (
              <ErrorAlert seterror={true}></ErrorAlert>
            ) : null}

            <progress
              value="0"
              style={{ display: "none" }}
              className="progress-bar"
            >
              Cargando...
            </progress>

            <SendButton text={"Volver"} click={onClickActive} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormContribuye;
