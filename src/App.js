import React, { useEffect, useState } from "react";
import getData from "./service/api";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getData();
    setData(response.funcionarios[0]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{data.nome}</h1>
    </div>
  );
}

export default App;
