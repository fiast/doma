import React from 'react';
import '../styles/HouseCardTemplate.css';
const HouseCardTemplate = ({ houseData }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="card mx-auto" style={{ maxWidth: '600px' }}>
                <div className="card-body">
                    <h2 className="card-title text-center">{houseData.дом}</h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><i className="bi bi-house-door"></i> Площадь дома</td>
                                <td>{houseData.площадь_дома}</td>
                            </tr>
                            <tr>
                                <td><i className="bi bi-people-fill"></i> Количество квартир</td>
                                <td>{houseData.количество_квартир}</td>
                            </tr>
                            <tr>
                                <td><i className="bi bi-building"></i> Управляющая компания</td>
                                <td>{houseData.управляющая_компания}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Отчетность</h3>
                    <ul>
                        {houseData.отчетность.map((report, index) => (
                            <li key={index}><i className="bi bi-file-earmark-text"></i>
                                <a href={report.ссылка} target="_blank" rel="noopener noreferrer" className="text-primary">
                                    {report.отчет}
                                </a> ({report.дата})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HouseCardTemplate;

