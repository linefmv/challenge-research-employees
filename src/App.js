import React, { useEffect, useState } from "react";
import getData from "./service/api";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

import "./App.css";

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
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
