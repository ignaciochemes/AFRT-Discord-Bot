@echo off
TITLE Servidor ACC - 1
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_1="C:\Users\Ignacio\Desktop\pepe\7-Practice-Server-2"

cls
echo Levantando ACC SERVER 1.
timeout 1 >nul
cls
echo Levantando ACC SERVER 1..
timeout 1 >nul
cls
echo Levantando ACC SERVER 1...
cd /d C:
cd "%SERVER_ACC_1%"
start "" accServer.exe