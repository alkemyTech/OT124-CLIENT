import React, { useEffect, useState } from "react";
import useMercadoPago from "../../hooks/useMercadopago";
import { getDonate } from "../../services/contribuye";
import SendButton from "../Shared/Buttons/SendButton";
import Donators from "./Donators";

function WelcomeMessage({ onClickActive }) {
  // let { amount, setAmount } = useMercadoPago()
  let [thinkAmount, setThinkAmount] = useState("$500");
  let [color, setColor] = useState(false);
  const [donate, setDonate] = useState();

  useEffect(() => {
    async function fetchData() {
      let donateRes = await getDonate();
      console.log(donate);
      setDonate(donateRes?.data);
    }
    fetchData();
    return () => {
      fetchData();
    };
  }, []);

  let amountsArray = [500, 1000, 2000];
  let styles = {
    title: "text-4xl text-emerald-500 text-center",
    amounts: "text-4xl text-sky-500 text-center",
    text: "text-xl text-slate-600 m-8",
    set: "text-slate-300 font-black	text-3xl",
  };
  function setAmountFun(e) {
    setThinkAmount(e.currentTarget.textContent);
  }
  function establecerMontoDefinitivo() {
    setColor(true);
  }
  return (
    <div className="">
      <div className="flex flex-row bg-transparent  text-sky-500 rounded py-4 my-8 px-4  border border-sky-500 justify-evenly">
        {donate ? (
          <>
            <h4 className={styles.title}>{donate?.award}</h4>
            <h4 className={styles.amounts}>Aportes: {donate?.amounts}</h4>
          </>
        ) : (
          <h4 className={styles.amounts}>No tiene donaciones aún</h4>
        )}
      </div>

      <h4 className={styles.title}>Contribuye para bien</h4>
      <p className={styles.text}>
        La colaboración es un pilar importante para mantener en pie
        organizaciones. los aportes estan destinados para insumos y intrumentos,
        utensillos y herramientas.
      </p>
      <p className={styles.text}>
        Para esto, es necesario contribuir con lo que uno pueda aportar,
        pequeños aportes solidarios nos ayudan a subsistir día a día.
      </p>
      <div className="flex sm:flex-row flex-col items-center justify-row justify-around">
        {amountsArray.map((e) => {
          return (
            <div className="w-[120px]">
              <SendButton text={"$" + e} click={setAmountFun} />
            </div>
          );
        })}
      </div>

      <div className="flex justify-row justify-around">
        <p
          className={
            "bg-transparent  text-sky-500 font-semibold   rounded py-2 mt-2 px-4 " +
            (color ? styles.set : null)
          }
        >
          {thinkAmount}
        </p>
      </div>
      <div className="grid justify-center">
        <div className=" w-[200px] ">
          {!color ? (
            <>
              <SendButton
                text={"Establecer monto"}
                click={establecerMontoDefinitivo}
              />
            </>
          ) : (
            <SendButton text={"Contribuye"} click={onClickActive} />
          )}
          {/* <Donators/> */}
        </div>
      </div>
    </div>
  );
}

export default WelcomeMessage;
