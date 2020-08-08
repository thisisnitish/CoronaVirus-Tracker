import React from 'react';

const spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
               {props.message}
            </div>
        </div>
    );
};

export default spinner;