import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
library.add(faHouse);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
