import {
  EmployeeDetails,
  EmployeeName,
  EmployeeRegister,
  EmployeePosition,
  EmployeeBranch,
  EmployeeAdmission,
} from "./styles";

const EmployeesList = ({ employeesData }) => {
  return (
    <>
      {employeesData.map((item) => {
        return (
          <>
            <EmployeeDetails key={item.id}>
              <EmployeeName> {item.nome} </EmployeeName>
              <EmployeeRegister> {item.matricula} </EmployeeRegister>
              <EmployeePosition> {item.cargo} </EmployeePosition>
              <EmployeeBranch> {item.filial} </EmployeeBranch>
              <EmployeeAdmission> {item.dataAdmissao} </EmployeeAdmission>
            </EmployeeDetails>
          </>
        );
      })}
    </>
  );
};

export default EmployeesList;
