@echo off
start cmd /c json-server --watch db.json
start cmd /c ng serve --open
