# 베이스 이미지로 Node.js 20 사용 (Alpine 기반)
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 파일 복사
COPY package*.json ./

# dependencies 설치
RUN npm install --frozen-lockfile

# 앱 소스 복사
COPY . .

# 타입스크립트 빌드 (만약 빌드 과정이 필요하다면)
RUN npm run build

# Next.js 애플리케이션의 런타임 포트 (기본값: 3000)
EXPOSE 3000

# 앱 시작 명령어
CMD ["npm", "start"]
