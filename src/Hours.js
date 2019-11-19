import React from 'react';

const Hours = ({ name }) => {
    return (
        <div className="hours">
            <h5 style={{ textAlign: "center", fontWeight: "bold", color: "black" }}>{name}</h5>
        </div>
    );
};

export default Hours;