import React,{ Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import {robots} from './robots';


class App extends Component{
    constructor(){
        super()
        this.state = { 
            robots: robots,
            Searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({Searchfield: event.target.value})
    }


    render(){
        const filteredrobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase());
        })
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots={filteredrobots} />
            </div>
            );
    }
}

export default App;