# 光迅應用程式 (Guangxun App)

一個基於 Angular + NestJS + PostgreSQL 的全端 Web 應用程式。

## 專案架構

```
guangxun_app/
├── frontend/          # Angular 前端應用
├── backend/           # NestJS 後端 API
├── docker-compose.yml # Docker 容器編排
├── README.md         # 專案說明文件
└── develop.log       # 開發日誌
```

## 技術棧

### 前端 (Frontend)
- **框架**: Angular 19.2.0
- **語言**: TypeScript
- **樣式**: SCSS
- **測試**: Jasmine, Karma
- **建置**: Angular CLI

### 後端 (Backend)
- **框架**: NestJS 11.0.1
- **語言**: TypeScript
- **測試**: Jest
- **程式碼品質**: ESLint, Prettier

### 資料庫
- **資料庫**: PostgreSQL 15
- **容器化**: Docker

## 快速開始

### 前置需求
- Node.js (建議 LTS 版本)
- Docker & Docker Compose
- Git

### 使用 Docker 啟動 (推薦)

1. 複製專案
```bash
git clone <repository-url>
cd guangxun_app
```

2. 啟動所有服務
```bash
docker-compose up -d
```

3. 訪問應用程式
- **前端**: http://localhost:4200
- **後端 API**: http://localhost:3000
- **資料庫**: localhost:5432

### 本地開發環境

#### 啟動資料庫
```bash
docker-compose up -d postgres
```

#### 後端開發
```bash
cd backend
npm install
npm run start:dev
```

#### 前端開發
```bash
cd frontend
npm install
npm run start
```

## 可用指令

### 後端指令
```bash
npm run start         # 啟動應用
npm run start:dev     # 開發模式 (熱重載)
npm run start:debug   # 除錯模式
npm run build         # 建置專案
npm run test          # 執行測試
npm run test:e2e      # 執行端對端測試
npm run lint          # 程式碼檢查
npm run format        # 程式碼格式化
```

### 前端指令
```bash
npm run start         # 啟動開發伺服器
npm run build         # 建置專案
npm run test          # 執行測試
npm run watch         # 監控模式建置
```

### Docker 指令
```bash
# 啟動所有服務
docker-compose up -d

# 查看服務狀態
docker-compose ps

# 查看日誌
docker-compose logs [service-name]

# 停止所有服務
docker-compose down

# 重新建置並啟動
docker-compose up --build -d
```

## 開發規範

### 程式碼風格
- 使用 TypeScript 嚴格模式
- 遵循 ESLint 規則
- 使用 Prettier 進行程式碼格式化
- 變數和函數命名使用駝峰式命名法

### Git 提交規範
- feat: 新功能
- fix: 錯誤修復
- docs: 文件更新
- style: 程式碼格式調整
- refactor: 程式碼重構
- test: 測試相關
- chore: 建置或工具相關

### 分支策略
- `main`: 主分支，穩定版本
- `develop`: 開發分支
- `feature/*`: 功能分支
- `hotfix/*`: 緊急修復分支

## 資料庫配置

### 連線設定
- **主機**: localhost (Docker 內為 postgres)
- **埠口**: 5432
- **資料庫**: guangxun_db
- **使用者**: guangxun_user
- **密碼**: guangxun_password

## 部署

### 生產環境部署
1. 設定環境變數
2. 建置 Docker 映像
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 疑難排解

### 常見問題

1. **連接埠衝突**
   - 確認 3000, 4200, 5432 埠口未被其他應用使用

2. **Docker 容器啟動失敗**
   - 檢查 Docker 服務是否正常運行
   - 查看容器日誌：`docker-compose logs [service-name]`

3. **資料庫連線失敗**
   - 確認 PostgreSQL 容器已啟動且健康檢查通過
   - 檢查環境變數設定

## 授權

此專案使用 UNLICENSED 授權。

## 聯絡資訊

如有任何問題或建議，請聯絡開發團隊。
