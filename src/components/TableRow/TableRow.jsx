import { EmployeeDetails, TableData } from "./styles";

import IconComponent from "../IconComponent/IconComponent";

const TableRow = ({ data, setData }) => {
  const handleRemoveRow = (rowId) => {
    const newData = [...data];
    const index = data.findIndex((data) => data.id === rowId);

    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <>
      {data.map((item) => {
        return (
          <>
            <EmployeeDetails key={item.id}>
              <div className="nameAndPosition">
                <TableData> {item.nome} </TableData>
                <TableData> {item.cargo} </TableData>
              </div>
              <TableData> {item.filial} </TableData>
              <TableData> {item.matricula} </TableData>
              <TableData> {item.dataAdmissao} </TableData>
              <td>
                <IconComponent
                  alt="Icon with trash"
                  ariaLabel="Icon with trash"
                  width="25"
                  height="25"
                  title="Remove employee"
                  className="deleteIcon"
                  src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"
                  onClick={() => handleRemoveRow(item.id)}
                />
              </td>
            </EmployeeDetails>
          </>
        );
      })}
    </>
  );
};

export default TableRow;
