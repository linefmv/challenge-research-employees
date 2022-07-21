import React, { useEffect, useState } from "react";

import getData from "../../services/getData";
import EmployeesList from "../../components/EmployeesList/EmployeesList";
import Footer from "../../components/Footer/Footer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const FindYourEmployees = () => {
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
};

export default FindYourEmployees;
