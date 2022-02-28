import React, { useState, useEffect } from "react";
import {profileGetMine, profileDelete, profileUpdate} from "../../services/Profile"
import DeleteAlert from "../Shared/Alerts/DeleteAlert";

import ProfileForm from "./ProfileForm";


export default function ProfileBody () {
    const [profile, setProfile] = useState(undefined)
    const [isLoad, setIsLoad] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [editing, setEditing] = useState(false)

    const amount = 10

    useEffect(() => {
       async function fetchData() {
           try {
               const response = await profileGetMine();
               if (response?.data === undefined) {
                   setProfile(undefined)
               } else {
                   setProfile(response?.data)
               }
           } catch (e) {
               console.error(e);
               setProfile("error")
           }
       };
       fetchData();
   }, [isLoad]);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
      }, []);

    return (
        <>
        {(profile === undefined | profile === "error") ? <p>No data</p>  : 
            editing ?  
                <ProfileForm id = {profile.id} firstName= {profile.firstName} lastName= {profile.lastName} email={profile.email} editing = {editing} setEditing = {setEditing}/>
            :
                <div className=" h-48 grid grid-cols-2 md:m-0 mx-4">
                    <div className="flex flex-row text-2xl col-start-1 col-end-2">
                        <h3>{profile.firstName}</h3>
                        <h3>{profile.lastName}</h3>
                    </div>
                    <h4 className=" text-lg text-gray-400 col-start-1 col-end-2">{profile.email}</h4>
                    <div className=" flex content-center border-2 h-3 rounded-md my-2 col-start-1 col-end-2">
                        {amount === 0 ? <div className=" bg-sky-600 w-2 h-2 rounded-md" /> : <div className=" bg-sky-600 w-14 h-2 rounded-md" />}
                    </div>
                    <div className=" grid col-start-2 col-end-3 row-start-1 row-end-4">
                        <div className=" self-center justify-self-center border-2 rounded-full w-16 h-16 md:w-20 md:h-20 bg-slate-500 "></div>
                    </div>
                    <div className=" grid grid-cols-2 gap-5 col-start-1 col-end-3 my-4">
                        <DeleteAlert
                            styles={
                                " bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1  hover:bg-red-600"
                            }
                            id={profile.id}
                            title={"ELIMINAR"}
                            message={"¿Desea eliminar su cuenta?"}
                            afterMessage={"Cuenta eliminada con éxito"}
                            service={profileDelete}
                            setIsLoad={setIsLoad}
                            isLoad={isLoad}
                        />
                        <button onClick={() => setEditing(true)} className=" bg-sky-500 text-white shadow shadow-sky-800 rounded-sm px-4 py-1  hover:bg-sky-600">Editar</button>
                    </div>
                </div>
        }
    
        </>  
    )
}

/**
 * 
 * <Formik
            initialValues={{ firstName: '', lastname: '', email: '' }}
            validationSchema={ProfileSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
              <input
                className=" border-2"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                className=" border-2"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
   </Formik>
 * 
 * 
 * 
 * 
 * <Formik
                initialValues={initialValues}
                validationSchema={ProfileSchema}
                onSubmit={handleSubmit}
            >
        {({ errors, touched }) => (
            <Form className="flex flex-col p-5">
                    <h3 className=" text-lg">Editar usuario</h3>
                        <InputForm
                            errors={errors.firstname}
                            touched={touched.firstname}
                            name={"firstName"}
                            placeholder={profile.firstName}
                            type={"text"}
                            isLoading={isLoading}
                        />
                        <InputForm
                            errors={errors.lastname}
                            touched={touched.lastname}
                            name={"lastName"}
                            placeholder={profile.lastName}
                            type={"text"}
                            isLoading={isLoading}
                        />
                        <InputForm
                            errors={errors.email}
                            touched={touched.email}
                            name={"email"}
                            placeholder={profile.email}
                            type={"text"}
                            isLoading={isLoading}
                        />
                    <div className=" grid gap-4 grid-cols-2 col-start-1 col-end-3 p-2 justify-self-center">
                        <button type="submit"  onClick={handleSubmit} className=" mt-4  max-w-fit md:max-w-fit h-12 p-2 justify-self-center  border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">Confirmar</button>
                        <button type="" onClick={() => setEditing(false)} className=" mt-4  max-w-fit md:max-w-fit h-12 p-2 justify-self-center  border rounded border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500">Cancelar</button>
                    </div>
                    {error && (
                     <ErrorAlert setError={setError} message={showErrorMessage} />
                    )}
                    {successMsg && (
                        <SuccessAlert
                            successMsg={successMsg}
                            setSuccessMsg={setSuccessMsg}
                    />
          )}
            </Form>
        )}
            </Formik>
 * 
 */

