import {
  Container,
  EmployeeDetails,
  EmployeeName,
  EmployeeRegister,
  EmployeePosition,
  EmployeeBranch,
  EmployeeAdmission,
} from "./styles";
import IconComponent from "../IconComponent/Icon";

const TableRow = ({ data, setData }) => {
  
    const handleRemoveRow = (rowId) => {
    const newData = [...data];
    const index = data.findIndex((data) => data.id === rowId);

    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <>
            <EmployeeDetails key={index}>
              <td>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGb3wWKOEGiZOiTSiZDoeHUAsyJPim4hWKGEXu5b_iWFxT-Lg-Lv5lqt4Jk4-i5XAbc0M&usqp=CAU"
                  alt=""
                  className="avatar"
                />
              </td>
              <div className="ceoAndName">
                <EmployeeName> {item.nome} </EmployeeName>
                <EmployeePosition> {item.cargo} </EmployeePosition>
              </div>
              <EmployeeBranch> {item.filial} </EmployeeBranch>
              <EmployeeRegister> {item.matricula} </EmployeeRegister>
              <EmployeeAdmission> {item.dataAdmissao} </EmployeeAdmission>
              <td>
                <IconComponent
                  className="image"
                  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-gradient-kiranshastry.png"
                  onClick={() => handleRemoveRow(item.id)}
                />
              </td>
            </EmployeeDetails>
          </>
        );
      })}
    </Container>
  );
};

export default TableRow;
