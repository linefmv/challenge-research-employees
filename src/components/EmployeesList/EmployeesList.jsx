import { Container } from "./styles";
import React, { useEffect, useState } from "react";
import getData from "../../service/api";
import SearchBar from "../SearchBar/SearchBar";
import DropdownButton from "../DropdownButton/DropdownButton";
import IconComponent from "../IconComponent/Icon";
import TableRow from "../TableRow/TableRow";

const EmployeesList = ({ employeesItems }) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchApiData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectValueOption, setOptionValue] = useState("");

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

  
  const handleSortNamebyAsc = () => {
    const sortedData = [...data].sort((a, b) => a.nome.localeCompare(b.nome));
    setData(sortedData);
  };
  return (
    <Container>
        <DropdownButton data={employeesItems} onChange={(e) => setOptionValue(e.target.value)} />
      <SearchBar value={filterValue} onInput={(event) => handleFilter(event)} />
      <table>
        <thead>
          <tr>
            {employeesItems.map((item, index) => {
              return (
                <th key={index} scope="col">
                  {item}
                  <IconComponent
                    onClick={handleSortNamebyAsc}
                    className="caretImg caret"
                    rel="icon"
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-down-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="Icon with arrow down"
                  />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <TableRow data={data} setData={setData}/>
        </tbody>
      </table>
    </Container>
  );
};

export default EmployeesList;
