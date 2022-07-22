import React, { useEffect, useState, useContext } from "react";

import getData from "../../service/api";
import EmployeesList from "../../components/EmployeesList/EmployeesList";
import Footer from "../../components/Footer/Footer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import StoreContext from '../../components/Store/StoreContext';


const FindYourEmployees = () => {
  const [data, setData] = useState([]);
  const { setToken } = useContext(StoreContext);

  const fetchData = async () => {
    const response = await getData();
    setData(response.itemsFuncionarios);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <button type="button" onClick={() => setToken(null)}>
        Sair
      </button>
      <EmployeesList employeesItems={data} />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default FindYourEmployees;
