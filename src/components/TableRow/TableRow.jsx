import { EmployeeDetails, TableData } from "./styles";

import IconComponent from "../IconComponent/Icon";

const TableRow = ({ data, setData }) => {
  const handleRemoveRow = (rowId) => {
    const newData = [...data];
    const index = data.findIndex((data) => data.id === rowId);

    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <EmployeeDetails key={index}>
              <TableData>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGb3wWKOEGiZOiTSiZDoeHUAsyJPim4hWKGEXu5b_iWFxT-Lg-Lv5lqt4Jk4-i5XAbc0M&usqp=CAU"
                  alt=""
                  className="avatar"
                />
              </TableData>
              <div className="nameAndPosition">
                <TableData> {item.nome} </TableData>
                <TableData> {item.cargo} </TableData>
              </div>
              <TableData> {item.filial} </TableData>
              <TableData> {item.matricula} </TableData>
              <TableData> {item.dataAdmissao} </TableData>
              <td>
                <IconComponent
                  className="deleteIcon"
                  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-gradient-kiranshastry.png"
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
