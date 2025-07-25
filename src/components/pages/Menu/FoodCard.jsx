import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';

const FoodCard = () => {
    const [card, setCard] = useState([]);

    const instantAxios = useAxios();

    useEffect(() => {
        instantAxios.get('/menu/:id')
        .then(res => {
            console.log(res.data);
            setCard(res.data)
        }) 
    }, [instantAxios])

    console.log(card.length);

    return (
        <div>
            <h2>Food Hodde? {card}</h2>
        </div>
    );
};

export default FoodCard;