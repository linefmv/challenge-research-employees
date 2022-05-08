import React, { useEffect, useState } from "react";
import getData from "./service/api";
import Header from "./components/Header/Header";
import EmployeesList from "./components/EmployeesList/EmployeesList";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getData();
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     {!!data.itemsFuncionarios &&  <Header employeesItems={data.itemsFuncionarios} />}
      <EmployeesList />
    </>
  );
}

export default App;
