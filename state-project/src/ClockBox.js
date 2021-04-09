import React from 'react';

const ClockBox = (props) => {
    return (
        <div className="ui centered card" style = {{marginTop: '200px' }}>
            <h1 style ={{textAlign:'center', color: 'blue'}}>Clock is Essential</h1>
            <div className="image">
                <img src="https://img.etimg.com/thumb/msid-76477438,width-650,imgsize-46542,,resizemode-4,quality-100/time-istock.jpg" />
            </div>
            <div className="content" style = {{textAlign: 'center'}}>
                <a className="header">{props.clock}</a>
            </div>
        </div>
    );
}

export default ClockBox;