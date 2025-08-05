#!/bin/bash

echo "🚀 啟動 seed container 執行 mock 匯入..."

#docker compose run --rm backend bash ./scripts/seed-all.sh

bash ./backend/scripts/seed-all.sh

echo "✅ 匯入完成！"