#!/usr/bin/env bash
sed -i "s/MY_API_KEY/$MY_API_KEY/g" ./src/environments/environment.prod.ts
