import React, { useEffect, useState } from "react";
import getData from "./service/api";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getData();
    setData(response.funcionarios);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
