import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props.data)
    const { picture, name, age, time } = props.data
    return (
        <div className='Card'>
            <div className='InsideCard'>
                <div className='img-card'>
                    <img src={picture} alt="" />
                </div>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p><small>Time required: {time} min</small></p>
                <button className='btn-list'>Add to List</button>
            </div>
        </div>
    );
};

export default Card;