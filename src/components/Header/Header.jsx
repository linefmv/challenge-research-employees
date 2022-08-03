import { Container, Image, SingOut } from "./styles";
import Logo from "../../assets/image/findLogo.png";
import DropdownButton from "../DropdownButton/DropdownButton";
import SearchBar from "../SearchBar/SearchBar";
import React, { useState, useContext } from "react";
import StoreContext from "../../components/Store/StoreContext";

const Header = ({ employeesItems, setData, searchData }) => {
  const [filterValue, setFilterValue] = useState("");
  const [getValueInsideOption, setOptionValue] = useState("");
  const { setToken } = useContext(StoreContext);

  const handleFilter = (event) => {
    if (event.target.value === "") {
      setData(searchData);
    }

    if (
      getValueInsideOption === "Escolha seu Filtro" ||
      getValueInsideOption === ""
    ) {
      const filterConfig = searchData.filter((item) => {
        return (
          item.nome.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.matricula
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item.filial
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item.cargo.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.dataAdmissao
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
      });
      setData(filterConfig);
    }

    if (getValueInsideOption === "Funcionário(a)") {
      const filterConfig = searchData.filter((item) =>
        item.nome.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    }

    if (getValueInsideOption === "Filial") {
      const filterConfig = searchData.filter((item) =>
        item.filial.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    }

    if (getValueInsideOption === "Matricula") {
      const filterConfig = searchData.filter((item) =>
        item.matricula.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filterConfig);
    }

    setFilterValue(event.target.value);
  };

  return (
    <Container>
      <Image src={Logo} width="162" height="82" alt="find you employees" />
      {!!employeesItems && (
        <DropdownButton
          data={employeesItems}
          onChange={(e) => setOptionValue(e.target.value)}
          setOptionValue={setOptionValue}
        />
      )}
      <SearchBar value={filterValue} onInput={(event) => handleFilter(event)} />
      <SingOut type="button" onClick={() => setToken(null)}>
        Sair
      </SingOut>
    </Container>
  );
};

export default Header;
