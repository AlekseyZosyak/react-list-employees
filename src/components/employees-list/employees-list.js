import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name='Johan Rodert' salary={800 + ' ' + '€'}/>
            <EmployeesListItem name='Sebastian Patric' salary={3000 + ' ' + '€'}/>
            <EmployeesListItem name='Valentin Zoltons' salary={6700 + ' ' + '€'}/>
        </ul>
    )
}

export default EmployeesList;