import React, { useState } from "react";
import { setRuta, setLogueo } from "../redux/Actions";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { apiUse } from "../services/functions";
import Labelerror from "../components/LabelError";
import Modaldanger from "../components/modal/danger";
import Modalsuccess from "../components/modal/success";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
});

const Registerpaseador = (props) => {
  const [modaldangererrorConfig, setmodaldangererrorConfig] = useState({});
  const [modalsuccessConfig, setmodalsuccessConfig] = useState({});

  function closeModaldangererror(e) {
    const newdataconfig = { ...modaldangererrorConfig };
    newdataconfig.isOpen = false;
    setmodaldangererrorConfig(newdataconfig);
  }

  function closeModalsuccess(e) {
    const newdataconfig = { ...modalsuccessConfig };
    newdataconfig.isOpen = false;
    setmodalsuccessConfig(newdataconfig);
    props.setRuta("loginpaseador");
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSuccessful = (data) => {
    console.log("exito");
    localStorage.setItem("usuario", JSON.stringify(data));
    props.setLogueo(data);
    setmodalsuccessConfig({
      isOpen: true,
      message: "Registro exitoso, por favor inicie sesion",
    });
  };

  const handleError = (error) => {
    setmodaldangererrorConfig({
      isOpen: true,
      message: error?.response?.data?.usuario?.username?.[0],
    });
  };

  const sendData = (dataform) => {
    apiUse({
      url: "/api/paseadores/",
      method: "POST",
      data: { usuario: dataform, reputacion: 0 },
      handleSuccessful: handleSuccessful,
      handleError: handleError,
    });
  };

  return (
    <>
      <Modalsuccess title="Exito" config={modalsuccessConfig}>
        <button
          type="button"
          className="button-principal-modal button-modal-color-danger"
          onClick={closeModalsuccess}
        >
          Cerrar
        </button>
      </Modalsuccess>
      <Modaldanger title="Error" config={modaldangererrorConfig}>
        <button
          type="button"
          className="button-principal-modal button-modal-color-danger"
          onClick={closeModaldangererror}
        >
          Cerrar
        </button>
      </Modaldanger>
      <section className="py-8">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-center text-xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mb-4">
            Crear cuenta de Paseador
          </h2>
          <form onSubmit={handleSubmit(sendData)}>
            <div className="mb-4">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                name="username"
                ref={register}
                placeholder="Username"
              />
            </div>

            <div className="mb-4">
              <Labelerror error={errors}>
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="text"
                  name="password"
                  ref={register}
                  placeholder="Password"
                />
              </Labelerror>
            </div>

            <div className="mb-4 mt-4">
              <input
                type="submit"
                value="Crear"
                className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
              ></input>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setRuta: (ruta) => dispatch(setRuta(ruta)),
  setLogueo: (datos) => dispatch(setLogueo(datos)),
});

export default connect(null, mapDispatchToProps)(Registerpaseador);
