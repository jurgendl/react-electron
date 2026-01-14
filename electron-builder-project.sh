#!/bin/bash
node clean.cjs
yarn build
npx electron-builder
read -p "..."