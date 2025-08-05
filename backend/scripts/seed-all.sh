#!/bin/bash

# 取得腳本所在目錄的絕對路徑
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "📦 開始匯入所有 mock-card 資料..."
bash "${SCRIPT_DIR}/seed-mock-cards.sh"

# echo "📦 開始匯入所有 mock-user 資料..."
# bash "${SCRIPT_DIR}/seed-mock-users.sh"

echo "🎉 所有資料匯入完成！"