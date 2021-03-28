import axios from "axios";

const urlpath = () => {
  return "https://backend800.herokuapp.com";
};

export const getCookieValue = (nombreCookie) => {
  var object = {};
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (var i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split("=");
    const foundKey = parts[0].replace(/%3D/g, "=").replace(/%3B/g, ";");
    if (nombreCookie === foundKey) {
      const value = parts.slice(1).join("=");
      if (value !== "{}") object[foundKey] = value;
      return object;
    }
  }
  return "";
};

export const getToken = () => {
  return getCookieValue("tokensession").session;
};

function funcionError(data) {
  console.log("Data", data);
}

function funcionExito(error) {
  console.log("Error", error);
}

export const apiUse = (myobject) => {
  const functionsuccess = myobject.handleSuccessful || funcionExito;
  const functionerror = myobject.handleError || funcionError;
  const myheaders = {
    Authorization: "Bearer " + getToken(),
    "Content-Type": "application/json;charset=UTF-8",
  };

  axios({
    url: urlpath() + myobject.url,
    method: myobject.method,
    data: JSON.stringify(myobject.data),
    headers: Object.assign(myheaders, myobject.headers),
  })
    .then((response) => {
      functionsuccess(response.data);
    })
    .catch((error) => {
      functionerror(error);
    });
};

const logOut = () => {
  document.cookie =
    "session=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  localStorage.clear();
};

export const datauserexist = () => {
  if (getCookieValue("tokensession") && localStorage.getItem("usuario")) {
    return JSON.parse(localStorage.getItem("usuario"));
  } else {
    logOut();
    return {};
  }
};
