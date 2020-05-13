import './SeasonDisplay.css';
import React from 'react';



const seasonConfig = {
    summer : {
        text : "Let's hit the beach!",
        icon : "massive sun icon"
    },
    winter : {
        text : "Burr, it is chilly!",
        icon : "massive  icon"
    }
};

const getSeason = (lat, month) => {
if (month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
}
else{
   return  lat < 0 ? 'winter' : 'summer';
}
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const icon = season === 'winter'? seasonConfig.winter.icon : seasonConfig.summer.icon;
    const text = season === 'winter'? seasonConfig.winter.text: seasonConfig.summer.text;
    return (
        <div className = {`season-display ${season}`}>
        <i className = {`icon-left ${icon}`}/>
        <h1>{text}</h1>
        <i className = {`icon-right ${icon}`}/>
        </div>
    )
};

export default SeasonDisplay;