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
                { name: 'Johan Rodert', salary: 800, increase: false, id: 1, rise: true },
                { name: 'Sebastian Patric', salary: 3000, increase: false, id: 2, rise: false },
                { name: 'Valentin Zoltons', salary: 6700, increase: false, id: 3, rise: false },
                { name: 'Zor As', salary: 900, increase: false, id: 4, rise: false },
            ]
        };
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }))
    }


    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        console.log(`incries ${id}`)
    }

    onToggleRice = (id) => {
        console.log(`Rice ${id}`)
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
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRice={this.onToggleRice}/>
                <EmployeesAddForm
                    onAdd={this.addItem} />

                <div>
                    <WhoAmI name='Jos' />
                    <WhoAmI name='Loas' />
                </div>
            </div>
        );
    }
}

export default App;
