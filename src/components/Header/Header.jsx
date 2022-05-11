import { Container, Image } from "./styles";
import Logo from "../../assets/image/logo-softplan.png";
import DropdownButton from "../DropdownButton/DropdownButton";
import SearchBar from "../SearchBar/SearchBar";
import React, { useState } from "react";

const Header = ({ employeesItems, setData, searchApiData }) => {
  const [filterValue, setFilterValue] = useState("");
  const [getValueInsideOption, setOptionValue] = useState("");

  const handleFilter = (event) => {
    const filterByName = (value) => value.nome.toLowerCase().includes(event.target.value.toLowerCase());
    
    if (event.target.value === "") {
      setData(searchApiData);
    }
    if (getValueInsideOption === "Funcionário(a)") {
      const filterData = searchApiData.filter(filterByName)
      setData(filterData);
    }
    if (getValueInsideOption === "Filial") {
      const filterConfig = searchApiData.filter((item) =>
        item.filial.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    }
    if (getValueInsideOption === "Matricula") {
      const filterConfig = searchApiData.filter((item) =>
        item.matricula.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    }
    setFilterValue(event.target.value);
  };

  return (
    <Container>
      <Image src={Logo} />
      {!!employeesItems && (
        <DropdownButton
          data={employeesItems}
          onChange={(e) => setOptionValue(e.target.value)}
          setOptionValue={setOptionValue}
        />
      )}

      <SearchBar value={filterValue} onInput={(event) => handleFilter(event)} />
    </Container>
  );
};

export default Header;
