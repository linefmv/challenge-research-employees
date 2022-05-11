import { Container } from "./styles";
import React, { useState, useEffect } from "react";
import getData from "../../service/api";

const DropdownButton = ({ onChange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response.itemsFuncionarios);
    };
    fetchData();
  }, []);
  const removeLastElementInArray = data.slice(0, -1);

  return (
    <Container>
      <label>Filtrar por </label>
      <select onChange={onChange}>
        <option>Escolha seu Filtro</option>
        {removeLastElementInArray.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default DropdownButton;
