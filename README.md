# My Profiler

My Profiler는 Node.js를 활용하여 파일 업로드, 데이터 가공, 결과 시각화를 수행하는 프로파일러입니다. 이 프로젝트는 사용자가 업로드한 데이터 파일을 서버에서 처리하여 데이터의 최소값(MIN), 최대값(MAX), 평균값(AVG), 표준편차(Standard Deviation)를 계산하고, 이를 웹 브라우저를 통해 시각적으로 표현하는 기능을 제공합니다.

## 주요 기능

- 파일 업로드: 웹 브라우저를 통해 텍스트 파일(inputFile.txt)을 서버로 업로드
- 데이터 가공: 업로드된 파일의 데이터를 읽어 최소값, 최대값, 평균값, 표준편차 계산
- 결과 반환: 계산된 결과를 JSON 형식으로 클라이언트에 반환
- 결과 시각화: 반환된 데이터를 기반으로 그래프(히스토그램, 파이차트 등)를 통해 시각적으로 표현

## 사용 기술

- Node.js: 서버 사이드 스크립팅
- Express: 웹 서버 프레임워크
- Multer: 파일 업로드 처리
- Chart.js: 데이터 시각화
- EJS: 템플릿 엔진

## 설치 방법

1. 프로젝트 클론

```bash
git clone https://github.com/newcodinghit1122/my-profiler.git
cd my-profiler
