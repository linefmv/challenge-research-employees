import { Container, Image } from "./styles";
import Logo from "../../assets/image/logo-softplan.png";
import DropdownButton from "../DropdownButton/DropdownButton";
import SearchBar from "../SearchBar/SearchBar";
import React, { useState } from "react";

const Header = ({ employeesItems, setData, searchData }) => {
  const [filterValue, setFilterValue] = useState("");
  const [getValueInsideOption, setOptionValue] = useState("");

  const handleFilter = (event) => {
    const filterByName = (value) =>
      value.nome.toLowerCase().includes(event.target.value.toLowerCase());
    const filterByCompany = (value) =>
      value.filial.toLowerCase().includes(event.target.value.toLowerCase());
    const filterByRegitration = (value) =>
      value.matricula.toLowerCase().includes(event.target.value.toLowerCase());

    if (event.target.value === "") {
      setData(searchData);
    }
    if (getValueInsideOption === "Funcionário(a)") {
      const filterDataName = searchData.filter(filterByName);
      setData(filterDataName);
    }
    if (getValueInsideOption === "Filial") {
      const filterDataCompany = searchData.filter(filterByCompany);
      setData(filterDataCompany);
    } else {
      const filterDataRegistration = searchData.filter(filterByRegitration);
      setData(filterDataRegistration);
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
