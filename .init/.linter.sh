#!/bin/bash
cd /home/kavia/workspace/code-generation/modern-marketing-consulting-website-139382-139411/frontend_web
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

