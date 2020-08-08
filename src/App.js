import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component{
    state = {
      data: {},
      country: '',  
    }

    //we are making componentDidMount an async function so that it can fetch the data from the api which is already an async function
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render(){
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID"/>
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/>
            </div>
        );
    }
}

export default App;