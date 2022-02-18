import React from 'react';
import SpinSVGButton from '../Loaders/SpinSVGButton';


const styles = "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-96 transform hover:scale-105 easy-in duration-300"

function SendButton(props) {
    const {isSubmitting} = props
    return ( 
        <div className="flex justify-center my-4">
            <button
              className={`${styles}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && <SpinSVGButton />}
              Enviar
            </button>
          </div>     
     );
}

export default SendButton;