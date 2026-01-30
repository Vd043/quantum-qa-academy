#!/usr/bin/env bash
# Kills any process on port 4321, then starts the Vite dev server on the same port.

PORT=4321

echo "Checking port $PORT..."
PID=$(lsof -ti :$PORT 2>/dev/null)

if [ -n "$PID" ]; then
  echo "Killing process $PID on port $PORT"
  kill $PID 2>/dev/null || kill -9 $PID 2>/dev/null
  sleep 1
fi

echo "Starting dev server on port $PORT"
exec npx vite
