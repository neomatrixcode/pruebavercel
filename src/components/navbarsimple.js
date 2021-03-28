import React, { useState } from "react";
import { connect } from "react-redux";
import { setRuta, setLogueo } from "../redux/Actions";
import { getCookieValue, datauserexist } from "../services/functions";

const Navbarsimple = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const logOut = () => {
    document.cookie =
      "tokensession=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.clear();
    props.setRuta("homepage");
    props.setLogueo({});
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4">
      <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <a
          className="text-xl text-indigo-600 font-semibold font-heading"
          href="#"
          onClick={(e) => {
            props.setRuta(
              getCookieValue("tokensession") ? "panel" : "homepage"
            );
          }}
        >
          Dogger
        </a>
      </div>

      <div
        className={
          "lg:flex  items-center bg-white   " +
          (navbarOpen ? " block rounded  " : " hidden shadow-none")
        }
        id="example-navbar-warning"
      >
        <ul className="flex flex-col lg:flex-row list-none mr-auto">
          <li className="flex items-center">
            {props.Logueo?.tipo ? (
              <span
                className={
                  " text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
              >
                <i
                  className={
                    " text-gray-900 far fa-user text-lg leading-lg mr-2"
                  }
                />
                {props.Logueo.tipo}
              </span>
            ) : null}
          </li>
        </ul>

        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="flex items-center">
            {props.Logueo?.tipo ? (
              <button
                className={
                  "bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                onClick={logOut}
                style={{ transition: "all .15s ease" }}
              >
                Cerrar sesión
              </button>
            ) : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setRuta: (ruta) => dispatch(setRuta(ruta)),
  setLogueo: (datos) => dispatch(setLogueo(datos)),
});

const mapStateToProps = (state) => ({
  Logueo: state.Logueo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbarsimple);
