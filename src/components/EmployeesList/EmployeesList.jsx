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
import IconComponent from "../IconComponent/Icon";

const EmployeesList = ({ employeesItems }) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectValueOption, setOptionValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response.funcionarios);
      setSearchData(response.funcionarios);
    };
    fetchData();
  }, []);

  const handleFilter = (event) => {
    if (event.target.value === "") {
      setData(searchData);
    }
    if (selectValueOption === "Funcionário(a)") {
      const filterConfig = searchData.filter((item) =>
        item.nome.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    }
    if (selectValueOption === "Filial") {
      const filterConfig = searchData.filter((item) =>
        item.filial.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    } else {
      const filterConfig = searchData.filter((item) =>
        item.matricula.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    }
    setFilterValue(event.target.value);
  };
  const handleRemove = (rowId) => {
    const newData = [...data];
    const index = data.findIndex((data) => data.id === rowId);

    newData.splice(index, 1);
    setData(newData);
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => a.nome.localeCompare(b.nome));
    setData(sortedData);
  };
  return (
    <Container>
      {!!employeesItems && (
        <DropdownButton onChange={(e) => setOptionValue(e.target.value)} />
      )}
      <SearchBar
        value={filterValue}
        onInput={(event) => handleFilter(event)}
        type="search"
      />
      <table>
        <thead>
          {employeesItems.map((item, index) => {
            return (
              <th key={index} scope="col">
                {item}
                <IconComponent
                  onClick={handleSort}
                  className="caretImg caret"
                  rel="icon"
                  src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-down-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                  alt=""
                />
              </th>
            );
          })}
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <EmployeeDetails key={index}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGb3wWKOEGiZOiTSiZDoeHUAsyJPim4hWKGEXu5b_iWFxT-Lg-Lv5lqt4Jk4-i5XAbc0M&usqp=CAU"
                  alt=""
                  className="avatar"
                />
                <EmployeeName> {item.nome} </EmployeeName>
                <EmployeePosition> {item.cargo} </EmployeePosition>
                <EmployeeBranch> {item.filial} </EmployeeBranch>
                <EmployeeRegister> {item.matricula} </EmployeeRegister>
                <EmployeeAdmission> {item.dataAdmissao} </EmployeeAdmission>
                <IconComponent
                  className="image"
                  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-gradient-kiranshastry.png"
                  onClick={() => handleRemove(item.id)}
                />
              </EmployeeDetails>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default EmployeesList;
