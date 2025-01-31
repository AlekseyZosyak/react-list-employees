import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+'
        }
    }
    start = () => {
        this.setState({
            years: this.state.years + 1
        })
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <h1>My name is {name}, age - {this.state.years}</h1>
                <button onClick={this.start}>+</button>
            </div>
        )
    }
}




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Johan Rodert', salary: 800, increase: true, id: 1, like: false },
                { name: 'Sebastian Patric', salary: 3000, increase: false, id: 2, like: false },
                { name: 'Valentin Zoltons', salary: 6700, increase: false, id: 3, like: false },
                { name: 'Zor As', salary: 900, increase: false, id: 4, like: false },
            ]
        };
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            console.log(index)
        })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm />

                <div>
                    <WhoAmI name='Jos' />
                    <WhoAmI name='Loas' />
                </div>
            </div>
        );
    }
}

export default App;
