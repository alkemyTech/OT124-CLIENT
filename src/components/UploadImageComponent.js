import React, { useEffect } from "react";
import { API_BASE_URL } from "../services";
import { useDropzone } from "react-dropzone";

const DropZone = (props) => {
  const { isDragActive, getInputProps, isDragReject } = props;
  return (
    <>
      <div className="flex text-lg text-gray-600">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          {isDragReject ? (
            <p>Formato de archivo no soportado</p>
          ) : (
            <>
              <span>Subir una imagen</span>
              <input
                className={`dropzone ${isDragActive && " bg-gray-200"}`}
                {...getInputProps()}
              />
              {isDragActive ? (
                <p>Soltar acá la imagen ...</p>
              ) : (
                <p className="pl-1">O arrastrar y soltar</p>
              )}
            </>
          )}
        </label>
      </div>
      <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
    </>
  );
};


const UploadImageComponent = (props) => {
  const { setFieldValue, setFieldError, file, keyFile, error, touched } = props;
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: "image/*",
      maxFiles: 1,
      onDrop: (acceptedFiles) => {
        if (acceptedFiles.length){
            const filePreview = acceptedFiles?.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
              }))
              return setFieldValue('image', filePreview) 
        }
      },
    });
    useEffect(()=>{
        if (isDragReject){
        setFieldError('image', 'Formato de archivo no soportado')
        }
        else{
        setFieldError('image', null)
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDragReject])

  return (
    <>
      <div className="mx-auto my-3 flex flex-col justify-center items-center">
        <div
          className={`flex w-3/6 h-3/6 justify-center relative shadow-lg ${
            !file && "px-6 pt-5 pb-6"
          } ${
            error && touched
              ? "border  border-red-500"
              : "border-2 border-gray-300 border-dashed"
          } 
          rounded-md transform ease-in-out hover:scale-110 duration-200`}
          {...getRootProps()}
        >
          <div className="space-y-1 text-center">
            {file && (
              <button
                className="bg-red-500 text-white rounded-xl px-2 transform hover:scale-110 mx-3 right-0 absolute z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setFieldValue("image", null);
                }}
              >
                <span className=" text-2xl">🗑</span>
              </button>
            )}
            {file ? (
              <>
                <img
                  className={`${
                    isDragActive && " opacity-30"
                  } object-scale-down z-0`}
                  alt=""
                  src={`${
                    file[0].preview || `${API_BASE_URL}/api/v1/files/${keyFile}`
                  }`}
                />
              </>
            ) : (
              <>
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <DropZone
                  isDragActive={isDragActive}
                  getInputProps={getInputProps}
                  isDragReject={isDragReject}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImageComponent;