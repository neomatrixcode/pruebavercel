import React, { useState } from "react";
import { connect } from "react-redux";
import { setRuta, setLogueo } from "../redux/Actions";

const Formuilarioreserva = (props) => {
  return (
    <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
      <div className="h-full border rounded shadow bg-white">
        <form>
          <div className="flex text-sm py-3 px-4 border-b">
            <input
              className="appearance-none block w-1/2 h-2 py-3  leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="text"
              name="fecha"
              placeholder="Fecha"
            />
            <input
              className="appearance-none block w-1/2 h-2 py-3  leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="text"
              name="duracion"
              placeholder="Duracion"
            />
          </div>
          <div className="flex flex-col p-4  items-center">
            <div class="rounded-full text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5  bg-indigo-400">
              <i className={"fas fa-user text-3xl"}></i>
            </div>
            {props.Logueo?.tipo === "propietario" ? (
              <>
                <h3 className="text-lg mb-3 font-semibold font-heading ">
                  <select name="paseador" className="form-select selectf">
                    <option key={1}>Paseador1</option>
                  </select>
                </h3>
                <div className="text-lg mb-3 font-semibold font-heading ">
                  <i
                    className={
                      "fas fa-star-of-life text-base text-gray-900 mx-1"
                    }
                  ></i>
                  -
                </div>
              </>
            ) : (
              <h3 className="text-lg mb-3 font-semibold font-heading ">
                Paseador1
              </h3>
            )}
            <h3 className="text-sm mb-3 font-semibold font-heading ">
              <input
                className="appearance-none block py-3  leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                name="nota"
                placeholder="Nota"
              />
            </h3>
            {props.Logueo?.tipo === "propietario" ? (
              <div class=" text-gray-900 text-center inline-flex items-center justify-center w-12  mb-2  ">
                <select name="perro" className="form-select selectf">
                  <option key={1}>Fido</option>
                </select>
              </div>
            ) : null}
            <span className="text-gray-500 text-sm">
              <input
                className="appearance-none block  h-2 py-3  leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                name="tags"
                placeholder="Tags"
              />
            </span>
          </div>
          <input
            type="submit"
            value="Crear"
            className="text-sm inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
          ></input>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Formuilarioreserva);
