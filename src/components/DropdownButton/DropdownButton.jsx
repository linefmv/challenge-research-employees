import { Container } from "./styles";
import React, { useState, useEffect } from "react";
import getData from "../../service/api";

const DropdownButton = ({ onChange }) => {
  const [data, setData] = useState([]);
  // const [getValueInsideOption, setOptionValue] = useState("");
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
        {removeLastElementInArray.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </Container>
  );
};

export default DropdownButton;
