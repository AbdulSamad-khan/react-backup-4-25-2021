import './SeasonDisplay.css';
import React from 'react';

// design pattern recommended to use rather than mutiple ternary statements
let configObject ={
    summer: {

        seasonMessage: 'Let\'s hit the beach',
        iconName: 'sun'
    
    },
    winter: {
        
        seasonMessage: 'Burr It\'s Chilly',
        iconName: 'snowflake'

    }
}

const getSeason = (lat, month) => {
     if(lat > 2 && lat < 9){
         // ternary operator
        return  lat > 0 ? 'summer' : 'winter';
     }else {
         return lat > 0 ? 'winter' : 'summer';
     }
}

const SeasonDisplay = (props) => {
 const season = getSeason(props.lat, new Date().getMonth());
//  const seasonMessage = season === 'winter' ? 'Burr It\'s Chilly' : 'Let\'s hit the beach ';
//  const icon = season === 'winter' ? 'snowflake' : 'sun';

// destructuring of an object
 const {seasonMessage, iconName } = configObject[season];
    return (
        
        <div className = {`season-display ${season}`}>
            <i className={`left-icon massive ${iconName} icon`} ></i>
            <h1 className ="messge">{seasonMessage}</h1>
            <i className={`right-icon massive ${iconName} icon`}></i>
        </div>
        
    );
}
export default SeasonDisplay;