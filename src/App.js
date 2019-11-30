import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import PortalModal from "./components/PortalModal/PortalModal";


function App() {
  return (
    <>
      <PortalModal />
      <Layout />
    </>
  );
}

export default App;
