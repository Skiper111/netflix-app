import React from "react";
import ListToggle from "./ListToggle";

const Item = (props) => {
    let style = {
        backgroundImage: `url(${props.backDrop})`
    };

    return (
        <div className='Item' style={style}>
            <div className='overlay'>
                <div className='title'>{props.name}</div>
                <div className='rating'>{props.rating}</div>
                <div className='plot'>{props.overview}</div>
                <ListToggle/>
            </div>
        </div>
    )
};

export default Item;