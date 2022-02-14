
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Dropzone from 'react-dropzone'
import { useParams } from "react-router";
//import { Organization } from "../../../services/backOffice";
import { useDispatch } from "react-redux";
import OrganizationsList from "./OrganizationsList";
import UploadImageComponent from "../../../components/UploadImageComponent";
//when endpoint to get all organizations exists
let organizations = [
    {
        id: "1",
        name: "org-1",
        image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
        address: "adress-org-1",
        phone: "3131-1313",
        email: "org.1@gmail.com",
        welcomeText: "we are organization "
    },
    {
        id: "2",
        name: "org-2",
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        address: "adress-org-2",
        phone: "3131-1313",
        email: "org.2@gmail.com",
        welcomeText: "we are organization "
    },
    {
        id: "3",
        name: "org-3",
        image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
        address: "adress-org-3",
        phone: "3131-1313",
        email: "org.3@gmail.com",
        welcomeText: "we are organization "
    },
]

function EditOrganization() {
    const styles = {
        field: "w-full border-b-4 border-[#9ac9fb] my-2 p-2 outline-none",
        button: "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-96",
        error: " text-red-500 text-lg",
        sendDiv: " flex py-2 justify-around items-center bg-red-300 border-b-4 rounded-md",
        send: "text-red-800 text-lg	 py-2 px-2 border-red-800",
        sendX : "text-white	 rounded-md py-2  px-2 cursor-pointer"
    }
    const FILE_SIZE = 10000000; // Bytes (5MB)
    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png",
    ];

    const ErrorComponent = (props) => <p className={styles.error} >{props.children}</p>;
    //const [sender,setSender]= useState(false)
    //const  dispatch = useDispatch()
    const { id } = useParams()
    const [isDisabled, setIsDisabled] = useState(true);
    const [orgData,setOrgData] = useState({
        name: "",
        sender: false,
        id: "",
        image: ""

    })
    useEffect(() => {
        //Organization(id)
    }, [])

    const validationSchema = Yup.object({
        name: Yup.string().required("Por favor ingresa el nombre de la organización"),
        sender: Yup.bool().oneOf([true], 'una vez creado el endpoint de editar organizaciones, modificar este componente y crear un servicio para modificar ')
    });
    const MessagePopup = (props) => (
        <div  className={`${styles.sendDiv}`}>
            <p className={`${styles.send}`} >{props.children}</p>
            <p  onClick={() =>  setOrgData({sender:false})} className={`${styles.sendX}`} > x</p>
        </div>
    )

    const onSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm();
       setOrgData({sender:true}) ;


    }
   

   
    return (
        <div>
            <OrganizationsList organizations={organizations} setOrgData={setOrgData}></OrganizationsList>
            <Formik initialValues={orgData} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ values, setFieldValue, isSubmitting, errors, touched, setFieldError }) => (
                <Form className=" container mx-auto px-5" >
                    <ErrorMessage component={MessagePopup} name="sender" />
                    <div className=" w-full">
                        <Field className={`${styles.field} h-16`} name="name" value={orgData.name} placeholder="Nombre" type="text" />
                        <ErrorMessage component={ErrorComponent} name="name" />
                    </div>
                    <UploadImageComponent
                       setFieldValue={setFieldValue}
                       setFieldError={setFieldError}
                       file={values?.image}
                       keyFile={values?.key}
                       disabled={isDisabled}
                       error={errors.image}
                       touched={touched.image}
                       />
                    <div className="flex justify-center my-4">
                        <button className={`${styles.button}`} type="submit">
                            Enviar
                        </button>
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    )

}

export default EditOrganization;
