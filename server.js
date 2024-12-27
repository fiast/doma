const fs = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Загружать данные из YAML
const loadHouseData = (houseId) => {
  const filePath = path.join(__dirname, 'data', `${houseId}.yaml`);
  if (!fs.existsSync(filePath)) throw new Error('File not found');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents);
};


// Загружать список всех домов (имён файлов)
const getHousesList = () => {
  const dataDir = path.join(__dirname, 'data');
  const files = fs.readdirSync(dataDir);
  return files
    .filter(file => file.endsWith('.yaml')) // Фильтруем только YAML файлы
    .map(file => ({
      id: file.replace('.yaml', ''), // Используем имя файла как ID
      дом: loadHouseData(file.replace('.yaml', '')).дом // Извлекаем поле "дом" из YAML
    }));
};


app.use(cors());




// Маршрут для отображения данных по дому
app.get('/house/:id', (req, res) => {
  try {
    const houseData = loadHouseData(req.params.id);
    res.json(houseData);
  } catch (error) {
    res.status(404).send('House not found');
  }
});


// Маршрут для получения списка всех домов
app.get('/houses', (req, res) => {
  try {
    const housesList = getHousesList();
    res.json(housesList); // Возвращаем список домов
  } catch (error) {
    res.status(500).send('Error loading house list');
  }
});


// Запуск сервера
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

