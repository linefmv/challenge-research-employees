import IconComponent from "../IconComponent/IconComponent";
import { Container } from "./styles";

const TableHead = ({ employeesItems, data, setData }) => {
  
  const handleSortNamebyAsc = () => {
    const sortedData = [...data].sort((a, b) => a.nome.localeCompare(b.nome));
    setData(sortedData);
  };
  
  return (
    <Container>
      <tr>
        {employeesItems.map((item, index) => {
          return (
            <th key={index} scope="col">
              {item}
              <IconComponent
                onClick={handleSortNamebyAsc}
                className="caretImg caretIcon"
                rel="icon"
                src="https://img.icons8.com/material-sharp/24/000000/alphabetical-sorting-2.png"
                alt="Icon with arrow down"
              />
            </th>
          );
        })}
      </tr>
    </Container>
  );
};

export default TableHead;
