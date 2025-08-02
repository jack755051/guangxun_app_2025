# 使用 Node.js 20 作為基礎映像
FROM node:20-alpine

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安裝依賴
RUN npm install

# 安裝 Angular CLI
RUN npm install -g @angular/cli

# 複製應用程式碼
COPY . .

# 暴露端口
EXPOSE 4200

# 啟動命令
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
