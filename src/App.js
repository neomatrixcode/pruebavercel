import React from "react";
import { connect } from "react-redux";
import Layout from "./components/layout";
import Homepage from "./views/homepage";
import Loginpaseador from "./views/loginpaseador";
import Loginpropietario from "./views/loginpropietario";
import Registerpaseador from "./views/registerpaseador";
import Registerpropietario from "./views/registerpropietario";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Panel from "./views/panel";

function App(props) {
  switch (props.ruta) {
    case "homepage":
      return (
        <div className="container mx-auto px-4">
          <Navbar />
          <Homepage />
          <Footer />
        </div>
      );

    case "loginpaseador":
      return (
        <Layout>
          <Loginpaseador />
        </Layout>
      );

    case "loginpropietario":
      return (
        <Layout>
          <Loginpropietario />
        </Layout>
      );

    case "registerpaseador":
      return (
        <Layout>
          <Registerpaseador />
        </Layout>
      );

    case "registerpropietario":
      return (
        <Layout>
          <Registerpropietario />
        </Layout>
      );

    case "panel":
      return (
        <Layout>
          <Panel />
        </Layout>
      );

    case undefined:
      return (
        <Layout>
          <Homepage />
        </Layout>
      );

    default:
      return (
        <Layout>
          <Homepage />
        </Layout>
      );
  }
}

const mapStateToProps = (state) => ({
  ruta: state.Ruta,
});

export default connect(mapStateToProps)(App);
