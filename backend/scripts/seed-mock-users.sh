#!/bin/bash
# seed-mock-users.sh
# Batch load USER mock data to PostgreDB

API_URL="http://localhost:3000/users"  # 容器內 port 如不同需調整
# 取得腳本所在目錄的絕對路徑
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MOCK_FILE="${SCRIPT_DIR}/../mock/mock-user.json"

if [ ! -f "$MOCK_FILE" ]; then
  echo "❌ 找不到 mock-user.json 於路徑: $MOCK_FILE"
  exit 1
fi

echo "📤 開始匯入 mock users..."

# 檢查 jq 是否安裝
if ! command -v jq &> /dev/null; then
  echo "❌ jq 未安裝，請先安裝 jq"
  exit 1
fi

cat "$MOCK_FILE" | jq -c '.[]' | while read row; do
  echo "匯入資料: $row"
  response=$(curl -s -X POST "$API_URL" \
    -H "Content-Type: application/json" \
    -d "$row")
  echo "回應: $response"
done

echo "✅ 匯入完成！"