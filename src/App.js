import React, { useEffect, useState } from "react";
import getData from "./service/api";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import "./App.css";
import { Footer } from "./components/Footer/styles";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getData();
    setData(response.itemsFuncionarios);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <EmployeesList employeesItems={data} />
      <Footer/>
    </>
  );
}

export default App;
