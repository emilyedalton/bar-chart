import React from 'react';

const Bar = ({ percent, name }) => {
    return (
        <div className="bars"
            style={{ height: `${percent}%` }} >
            <h5 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>{name}</h5>
        </div>
    );
};

export default Bar;