import { useEffect, useState } from "react";
import useScript from "./useScript";
import { formConfig } from "../components/Contribuye/FormMePaConfig";
import { API_BASE_URL } from "../services";
import { postDonate } from "../services/contribuye";

export default function useMercadoPago() {
    const [resultPayment, setResultPayment] = useState(undefined);
    const [amount, setAmount] = useState(500);
    const [resourcePercentage, setResource] = useState(0);
   // const [infoData, setInfoData] = useState(false);

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    useEffect(() => {
        if (MercadoPago) {
            const mp = new MercadoPago("TEST-6680d852-fbe4-4bce-ac70-458531385f4d");
            const cardForm = mp.cardForm({
                amount: `${amount}`,
                form: formConfig,
                callbacks: {
                    onFormMounted: (error) => {
                        if (error)
                        setResultPayment(false)
                            return console.warn(
                                "Form Mounted handling error: ",
                                error
                            );
                    },

                    onSubmit: (event) => {

                        event.preventDefault();
                        console.log(cardForm.getCardFormData())
                        postDonate(cardForm.getCardFormData())

                            .then((data) => {
                                console.log(data, "data res")
                                if (data.data == 'Created') {
                                console.log(data.data)
                                    setResultPayment(data.data)
                                } else {
                                    setResultPayment(false)
                                }
                                //window.location.reload();
                            })
                            .catch((err) => {
                                setResultPayment(err);
                            });
                    },
                    onFetching: (resource) => {
                        // Animate progress bar

                        setResource(resource)
                        const progressBar =
                            document.querySelector(".progress-bar");
                        progressBar.removeAttribute("value");

                        return () => {
                            progressBar.setAttribute("value", "0");
                        };
                    },
                },
            });
        }
    }, [MercadoPago]);

    return { resultPayment, resourcePercentage };
}