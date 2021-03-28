export const setRuta = (ruta) => {
  return {
    type: "SET_RUTA",
    ruta: ruta,
  };
};

export const setLogueo = (datos) => {
  return {
    type: "SET_LOGUEO",
    datos: datos,
  };
};
