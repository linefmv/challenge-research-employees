import { Container, Image } from "./styles";
import Logo from "../../assets/image/logo-softplan.png";
import DropdownButton from "../DropdownButton/DropdownButton";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <Container>
      <Image src={Logo} />
      <DropdownButton />
      <SearchBar />
    </Container>
  );
};

export default Header;
