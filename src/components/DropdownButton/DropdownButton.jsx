import { Container } from "./styles";

const DropdownButton = ({
  data,
  onChange,
  getValueInsideOption,
  setOptionValue,
}) => {
  const removeLastElementInArray = data.slice(0, -1);
  return (
    <Container>
      <label>Filtrar por: </label>
      <select
        onChange={onChange}
        getValueInsideOption={getValueInsideOption}
        setOptionValue={setOptionValue}
      >
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
