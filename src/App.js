import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import Styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{

    //we are making componentDidMount an async function so that it can fetch the data from the api which is already an async function
    async componentDidMount(){
        const data = await fetchData();
        console.log(data);
    }

    render(){
        return(
            <div className={Styles.container}>
                <Cards/>
                <CountryPicker/>
                <Chart/>
            </div>
        );
    }
}

export default App;