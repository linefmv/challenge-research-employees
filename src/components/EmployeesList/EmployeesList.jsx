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
import DropdownButton from "../DropdownButton/DropdownButton";

const EmployeesList = ({ employeesItems }) => {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [getValueInsideOption, setOptionValue] = useState("");

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
    } if (getValueInsideOption === 'Funcionário(a)')  {
      const filterConfig = searchApiData.filter((item) =>
        item.nome.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    }
    if (getValueInsideOption === 'Filial')  {
      const filterConfig = searchApiData.filter((item) =>
        item.filial.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    } else {
      const filterConfig = searchApiData.filter((item) =>
      item.matricula.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setData(filterConfig);
    }
    setFilterValue(event.target.value);
  };

  return (
    <Container>
     {!!employeesItems &&
      <DropdownButton 
      onChange={(e) => setOptionValue(e.target.value)}
      />
    }
      <SearchBar
        value={filterValue}
        onInput={(event) => handleFilter(event)}
        type="search"
      />
      <table>
        <thead>
          <tr>
            {employeesItems.map((item) => {
              return <th scope="col">{item}</th>;
            })}
          </tr>
        </thead>
        {data.map((item) => {
          return (
            <tbody>
              <EmployeeDetails >
                <EmployeeName> {item.nome} </EmployeeName>
                <EmployeePosition> {item.cargo} </EmployeePosition>
                <EmployeeBranch> {item.filial} </EmployeeBranch>
                <EmployeeRegister> {item.matricula} </EmployeeRegister>
                <EmployeeAdmission> {item.dataAdmissao} </EmployeeAdmission>
              </EmployeeDetails>
            </tbody>
          );
        })}
      </table>
    </Container>
  );
};

export default EmployeesList;
