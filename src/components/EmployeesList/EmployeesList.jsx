import React, { useEffect, useState } from "react";
import getData from "../../service/api";
import IconComponent from "../IconComponent/Icon";
import Header from "../Header/Header";
import TableRow from "../TableRow/TableRow";

import { Container } from "./styles";

const EmployeesList = ({ employeesItems }) => {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response.funcionarios);
      setSearchApiData(response.funcionarios);
    };
    fetchData();
  }, []);

  const handleSortNamebyAsc = () => {
    const sortedData = [...data].sort((a, b) => a.nome.localeCompare(b.nome));
    setData(sortedData);
  };

  return (
    <Container>
      <Header
        employeesItems={employeesItems}
        searchApiData={searchApiData}
        setData={setData}
      />
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
          <TableRow data={data} setData={setData} />
        </tbody>
      </table>
    </Container>
  );
};

export default EmployeesList;
