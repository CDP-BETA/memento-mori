#!/bin/bash

python /app/app.py &
nginx -g "daemon off;"