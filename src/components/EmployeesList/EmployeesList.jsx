import React, { useEffect, useState } from "react";
import getData from "../../service/api";
import Header from "../Header/Header";
import TableRow from "../TableRow/TableRow";

import { Container } from "./styles";
import TableHead from "../TableHead/TableHead";

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

  return (
    <Container>
      <Header
        employeesItems={employeesItems}
        searchApiData={searchApiData}
        setData={setData}
      />
      <table>
        <TableHead
          employeesItems={employeesItems}
          setData={setData}
          data={data}
        />
        <tbody>
          <TableRow data={data} setData={setData} />
        </tbody>
      </table>
    </Container>
  );
};

export default EmployeesList;
