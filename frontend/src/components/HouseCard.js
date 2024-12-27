import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HouseCardTemplate from '../templates/HouseCardTemplate';


const HouseCard = () => {
    const { id } = useParams();
    const [houseData, setHouseData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/house/${id}`)
            .then((response) => {
                setHouseData(response.data);
                setError(null);
            })
            .catch((err) => {
                setHouseData(null);
                setError('Ошибка загрузки данных по дому');
            });
    }, [id]);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!houseData) {
        return <p>Загрузка...</p>;
    }

    // Используем шаблон для отображения
    return <HouseCardTemplate houseData={houseData} />;
};

export default HouseCard;

