import { Container, Image } from "./styles";
import Logo from "../../assets/image/logo-softplan.png";

const Header = () => {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  );
};

export default Header;
