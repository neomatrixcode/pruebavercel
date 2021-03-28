import React, { useState } from "react";
import { connect } from "react-redux";
import { setRuta, setLogueo } from "../redux/Actions";
import { apiUse } from "../services/functions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Labelerror from "../components/LabelError";
import Modaldanger from "../components/modal/danger";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
});

const Loginpropietario = (props) => {
  const [modaldangererrorConfig, setmodaldangererrorConfig] = useState({});

  function closeModaldangererror(e) {
    const newdataconfig = { ...modaldangererrorConfig };
    newdataconfig.isOpen = false;
    setmodaldangererrorConfig(newdataconfig);
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const crearCuenta = (e) => {
    props.setRuta("registerpropietario");
  };

  const handleSuccessful = (data) => {
    document.cookie =
      "tokensession=" + data.access + ";path=/;max-age=" + 60 * 60 * 24 * 3;
    localStorage.setItem("usuario", JSON.stringify({ tipo: "propietario" }));
    props.setLogueo({ tipo: "propietario" });
    props.setRuta("panel");
  };

  const handleError = (error) => {
    setmodaldangererrorConfig({
      isOpen: true,
      message: error?.response?.data?.detail,
    });
  };

  const sendData = (data) => {
    apiUse({
      url: "/api/token/",
      method: "POST",
      data: data,
      handleSuccessful: handleSuccessful,
      handleError: handleError,
    });
  };

  return (
    <>
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
            Ingresar como Propietario
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
                value="Entrar"
                className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
              ></input>
            </div>
          </form>
          <div className="flex flex-row-reverse ">
            <div className=" text-sm font-display font-semibold text-gray-700 text-center">
              No tengo cuenta
              <a
                onClick={crearCuenta}
                className=" pl-1 cursor-pointer text-indigo-600 hover:text-indigo-800"
              >
                crea una
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setRuta: (ruta) => dispatch(setRuta(ruta)),
  setLogueo: (datos) => dispatch(setLogueo(datos)),
});

const mapStateToProps = (state) => ({
  Logueo: state.Logueo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Loginpropietario);
