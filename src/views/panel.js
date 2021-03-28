import React, { useState } from "react";
import { connect } from "react-redux";
import { setRuta, setLogueo } from "../redux/Actions";
import Formulariomascota from "../components/formulariomascota";
import Formularioreserva from "../components/formularioreserva";

const Panel = (props) => {
  const [mascota, setmascota] = useState("");
  const [hashtag, sethashtag] = useState("");

  return (
    <>
      {props.Logueo?.tipo === "propietario" ? (
        <section className="pb-8 pt-2 px-4 mb-8 bg-gray-50  rounded">
          <div className="flex items-center justify-between py-3 px-4 ">
            <h2 className="text-center text-xl text-indigo-900 font-display font-semibold lg:text-left  xl:text-bold mb-4">
              Mis mascotas
            </h2>

            <input
              className="appearance-none block py-3  w-1/2  sm:w-1/4 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="text"
              placeholder="filtrar por nombre"
            />
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
              <div className="h-full border rounded shadow">
                <div className="flex flex-col p-4  bg-white">
                  <h3 className="text-3xl mb-3 font-semibold font-heading ">
                    Fido
                  </h3>
                  <span>chihuahua</span>
                  <span className="text-indigo-500">pequeño</span>
                </div>
              </div>
            </div>
            <Formulariomascota></Formulariomascota>
          </div>
        </section>
      ) : null}

      <section className="pb-8 pt-2 px-4 mb-8 bg-gray-50  rounded">
        <div className="flex items-center justify-between py-3 px-4 ">
          <h2 className="text-center text-xl text-indigo-900 font-display font-semibold lg:text-left  xl:text-bold mb-4">
            Reservas
          </h2>

          <input
            className="appearance-none block py-3  w-1/2  sm:w-1/4 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            placeholder="filtrar por hashtag"
          />
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
            <div className="h-full border rounded shadow bg-white">
              <div className="flex items-center justify-between py-3 px-4 border-b">
                <h3 className="text-lg font-semibold font-heading">
                  12-04-2021
                </h3>
                <span className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">
                  1 hora
                </span>
              </div>
              <div className="flex flex-col p-4  items-center">
                <div class="rounded-full text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5  bg-indigo-400">
                  <i className={"fas fa-user text-3xl"}></i>
                </div>
                <h3 className="text-lg mb-3 font-semibold font-heading ">
                  Paseador1
                </h3>
                <div className="text-lg mb-3 font-semibold font-heading ">
                  <i
                    className={
                      "fas fa-star-of-life text-base text-gray-900 mx-1"
                    }
                  ></i>
                  5
                </div>
                <h3 className="text-sm mb-3 font-semibold font-heading ">
                  Hoy pasearemos en la plaza xd
                </h3>
                <div class=" text-gray-900 text-center inline-flex items-center justify-center w-12  mb-2  ">
                  <i className={"fas fa-paw text-base px-1"}></i>
                  <i className={"fas fa-paw text-base px-1"}></i>
                  {props.Logueo?.tipo === "propietario" ? (
                    <i
                      className={
                        "cursor-pointer fas fa-plus-circle text-base px-1 text-gray-300 hover:text-green-500"
                      }
                    ></i>
                  ) : null}
                </div>
                <span className="text-gray-500 text-sm">#plaza del centro</span>
              </div>
            </div>
          </div>
          <Formularioreserva></Formularioreserva>
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

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
