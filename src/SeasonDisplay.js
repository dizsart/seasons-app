import React from 'react';

const seasonConfig = {
    summer : {
        text : "Let's hit the beach!",
        icon : "sun icon"
    },
    winter : {
        text : "Burr, it is chilly!",
        icon : "snowflake icon"
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
        <div>
        <div>Season Display</div>
        <i className = {icon}/>
        <div>{text}</div>
        <i className = {icon}/>
        </div>
    )
};

export default SeasonDisplay;