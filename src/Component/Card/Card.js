import React from 'react';
import './Card.css'
const Card = (props) => {

    console.log(props.handle)
    const { picture, name, age, time, id } = props.data
    const { handle } = props;
    return (
        <div className='Card'>
            <div className='InsideCard'>
                <div className='img-card'>
                    <img src={picture} alt="" />
                </div>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p><small>Time required: {time} min</small></p>
                <button className='btn-list' onClick={() => handle(id)}>Add to List</button>
            </div>
        </div>
    );
};

export default Card;