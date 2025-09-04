#!/bin/bash
nohup npm run dev -- --host --port 8081 > output.log 2>&1 &
