import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/HomeTemplate.css';


const HomeTemplate = () => {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        // Запрос на сервер для получения данных о домах
        axios.get('http://localhost:3001/houses')
            .then(response => {
                setHouses(response.data); // Сохраняем данные о домах в состояние
            })
            .catch(error => {
                console.error("There was an error fetching the house data!", error);
            });
    }, []);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2>Выберите дом</h2>
            <ul className="list-unstyled text-center">
                {houses.map((house, index) => (
                    <li key={index} className="my-3">
                        <a className="btn btn-primary px-4 py-2" href={`/house/${house.id}`}>
                            {house.дом}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeTemplate;

