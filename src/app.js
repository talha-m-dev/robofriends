import React from 'react';
import Searchbox from './Searchbox';
import CardList from './CardList';
import {robots} from './robots';
const App = () => {
    return(
    <div className='tc'>
        <h1>RoboFriends</h1>
        <Searchbox />
        <CardList robots={robots} />
    </div>
    );
}

export default App;