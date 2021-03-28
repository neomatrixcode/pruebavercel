import React, { useState } from "react";
import { connect } from "react-redux";
import { setRuta, setLogueo } from "../redux/Actions";

const Formuilariomascota = (props) => {
  return (
    <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
      <div className="h-full border rounded shadow">
        <div className="flex flex-col p-4  bg-white">
          <form>
            <h3 className="text-sm mb-3 font-semibold font-heading ">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                name="nombre"
                placeholder="Nombre"
              />
            </h3>
            <span className="text-sm">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                name="raza"
                placeholder="Raza"
              />
            </span>
            <span className="text-xs text-indigo-500">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                name="tamaño"
                placeholder="Tamaño"
              />
            </span>
            <div className="mb-4 mt-4">
              <input
                type="submit"
                value="Crear"
                className="text-sm inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setRuta: (ruta) => dispatch(setRuta(ruta)),
  setLogueo: (datos) => dispatch(setLogueo(datos)),
});

const mapStateToProps = (state) => ({
  Logueo: state.Logueo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Formuilariomascota);
