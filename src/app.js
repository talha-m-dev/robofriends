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

    onSearchChange(event){
        console.log(event.target.value);

    }


    render(){
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots} />
            </div>
            );
    }
}

export default App;