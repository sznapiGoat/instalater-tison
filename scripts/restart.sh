#!/usr/bin/env bash
# Rebuild a restartuj produkční server na portu 3399.
set -e
PORT=${1:-3399}
PID=$(netstat -ano | grep "LISTENING" | grep ":$PORT " | head -1 | awk '{print $NF}')
if [ -n "$PID" ]; then taskkill //PID "$PID" //F > /dev/null 2>&1 || true; sleep 1; fi
npm run build 2>&1 | grep -E "Compiled|Failed|error" | head -5
(npx next start -p "$PORT" > "$TEMP/tison-server.log" 2>&1 &)
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/" || true)
  if [ "$code" = "200" ]; then echo "server up on $PORT"; exit 0; fi
  sleep 1
done
echo "server failed to start"; tail -5 "$TEMP/tison-server.log"; exit 1
