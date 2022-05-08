import {
  Container,
  EmployeeDetails,
  EmployeeName,
  EmployeeRegister,
  EmployeePosition,
  EmployeeBranch,
  EmployeeAdmission,
} from "./styles";
import React, { useEffect, useState } from "react";
import getData from "../../service/api";
import SearchBar from "../SearchBar/SearchBar";

const EmployeesList = () => {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response.funcionarios);
      setSearchApiData(response.funcionarios);
    };
    fetchData();
  }, []);

  const handleFilter = (event) => {
    if (event.target.value === "") {
      setData(searchApiData);
    } else {
      const filterConfig = searchApiData.filter(item =>
        item.nome.toLowerCase().includes(event.target.value.toLowerCase()),
        );
      setData(filterConfig);
    }
    setFilterValue(event.target.value);
  };
  return (
    <Container>
      <SearchBar
        value={filterValue}
        onInput={(event) => handleFilter(event)}
        type="search"
      />
      {data.map((item) => {
        return (
          <>
            <EmployeeDetails key={item.id}>
            <EmployeeName> {item.nome} </EmployeeName>
            <EmployeeRegister> {item.matricula} </EmployeeRegister>
            <EmployeePosition> {item.cargo} </EmployeePosition>
            <EmployeeBranch> {item.filial} </EmployeeBranch>
            <EmployeeAdmission> {item.dataAdmissao} </EmployeeAdmission>
            </EmployeeDetails>
            </>
            );
          })}
    </Container>
  );
};

export default EmployeesList;
