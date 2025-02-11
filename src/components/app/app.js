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
                { name: 'Johan Rodert', salary: 800, increase: false, id: 1, rise: false },
                { name: 'Sebastian Patric', salary: 3000, increase: false, id: 2, rise: false },
                { name: 'Valentin Zoltons', salary: 6700, increase: false, id: 3, rise: false },
                { name: 'Zor As', salary: 900, increase: false, id: 4, rise: false },
            ],
            term: '',
            filter: ''
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

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

        //     return {
        //         data: newArr
        //     }
        // })
    }

    // onToggleRice = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'moreThen1000': 
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter: filter})
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increase={increase} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
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
