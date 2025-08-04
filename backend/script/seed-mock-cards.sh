#!/bin/bash
# seed-mock-cards.sh
# Batch load CARD mock data to PostgreDB

API_URL="http://localhost:3000/cards"  # 容器內 port 如不同需調整
MOCK_FILE="./mock/mock-card.json"

if [ ! -f "$MOCK_FILE" ]; then
  echo "❌ 找不到 mock-card.json"
  exit 1
fi

echo "📤 開始匯入 mock cards..."

cat $MOCK_FILE | jq -c '.[]' | while read row; do
  curl -s -X POST $API_URL \
    -H "Content-Type: application/json" \
    -d "$row"
done

echo "✅ 匯入完成！"