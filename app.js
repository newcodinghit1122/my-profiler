const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { processData, calculateStandardDeviation } = require('./utils/dataProcessor');
const connectDB = require('./config/database');
const DataModel = require('./models/dataModel');

const app = express();
const port = 3000;

// 데이터베이스 연결
connectDB();

// 바디 파서 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// EJS를 뷰 엔진으로 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Multer 설정
const upload = multer({ dest: 'uploads/' });

// 파일 업로드 라우트
app.post('/upload', upload.single('file'), async (req, res) => {
    const filePath = req.file.path;
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = processData(data);
    const results = {
        min: Math.min(...parsedData),
        max: Math.max(...parsedData),
        avg: parsedData.reduce((acc, val) => acc + val, 0) / parsedData.length,
        standardDeviation: calculateStandardDeviation(parsedData)
    };

    // 결과를 데이터베이스에 저장
    const newData = new DataModel(results);
    await newData.save();

    res.render('result', { data: results });
});

// 홈 페이지 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
