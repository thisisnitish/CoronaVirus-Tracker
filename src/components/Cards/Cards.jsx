import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CardComponent from './Card/Card';
import Spinner from '../../spinner';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return <Spinner message="Loading..."/>;
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardComponent
                    className={styles.infected}
                    cardTitle="Infected"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Active Cases from COVID around the world"
                />
                <CardComponent
                    className={styles.recovered}
                    cardTitle="Recovered"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Recovered Cases from COVID around the world"
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Deaths Caused by COVID around the world"
                />
            </Grid>
        </div>
    );
};

export default Info;