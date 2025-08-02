# 開發日誌 (Development Log)

## 專案初始化 - 2025-08-02

### 專案結構建立
- ✅ 建立 Angular 前端專案 (Angular 19.2.0)
- ✅ 建立 NestJS 後端專案 (NestJS 11.0.1)
- ✅ 設定 Docker Compose 配置
- ✅ 配置 PostgreSQL 資料庫

### 開發環境設定
- ✅ Docker 容器化設定完成
  - Frontend: Angular 應用 (Port 4200)
  - Backend: NestJS API (Port 3000)
  - Database: PostgreSQL 15 (Port 5432)
- ✅ 健康檢查機制配置
- ✅ 熱重載開發環境設定

### 技術選型
- **前端**: Angular 19.2.0 + TypeScript + SCSS
- **後端**: NestJS 11.0.1 + TypeScript
- **資料庫**: PostgreSQL 15
- **容器化**: Docker + Docker Compose
- **測試**: Jest (後端) + Jasmine/Karma (前端)
- **程式碼品質**: ESLint + Prettier

### 專案配置
- package.json 設定完成
- TypeScript 配置檔設定
- ESLint 和 Prettier 整合
- Docker Dockerfile 建立

---

## 待辦事項 (TODO)

### 高優先級
- [ ] 資料庫 Schema 設計
- [ ] 使用者認證系統 (JWT)
- [ ] API 文件 (Swagger)
- [ ] 環境變數管理

### 中優先級
- [ ] 前端路由設定
- [ ] 狀態管理 (NgRx 或 RxJS)
- [ ] API 服務層建立
- [ ] 表單驗證機制

### 低優先級
- [ ] 單元測試撰寫
- [ ] E2E 測試設定
- [ ] CI/CD 流程建立
- [ ] 生產環境部署配置

---

## 開發記錄

### 2025-08-02
#### 完成項目
- 專案初始化
- Docker 環境設定
- README.md 和 develop.log 建立

#### 遇到的問題
- 無

#### 下次開發重點
- 開始設計資料庫 Schema
- 實作基本的 CRUD API

---

## 技術筆記

### Docker 相關
```bash
# 啟動開發環境
docker-compose up -d

# 查看容器狀態
docker-compose ps

# 查看日誌
docker-compose logs -f [service-name]

# 重建容器
docker-compose up --build -d

# 停止所有服務
docker-compose down
```

### 資料庫連線資訊
```
Host: localhost (Docker 內為 postgres)
Port: 5432
Database: guangxun_db
Username: guangxun_user
Password: guangxun_password
```

### 開發埠口
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000
- Database: localhost:5432

---

## 版本記錄

### v0.0.1 - 2025-08-02
- 專案初始化
- 基本 Docker 環境設定
- Angular + NestJS + PostgreSQL 架構建立

---

## 參考資源

### 官方文件
- [Angular Documentation](https://angular.dev)
- [NestJS Documentation](https://docs.nestjs.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

### 開發工具
- [Docker Compose](https://docs.docker.com/compose/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)