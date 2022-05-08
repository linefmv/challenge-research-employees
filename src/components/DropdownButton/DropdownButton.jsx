import { Container } from "./styles";

const DropdownButton = ({ employeesItems }) => {
const removeLastElementInArray = employeesItems.slice(0, -1);
  return (
    <Container>
      <label>Filtrar por</label>
      <select>
        {removeLastElementInArray.map(item =>
        <option value="{item}">{item}</option>
        )}
      </select>
    </Container>
  );
};

export default DropdownButton;
