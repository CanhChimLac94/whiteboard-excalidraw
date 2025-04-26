#!/usr/bin/env bash

# git clone https://github.com/excalidraw/excalidraw.git
# git clone https://github.com/excalidraw/excalidraw-room.git

npm install --global yarn

cd ./excalidraw && yarn && yarn start &
cd ./excalidraw-room && yarn && yarn start:dev
