@echo off
TITLE Servidor ACC - 2
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_2="C:\Users\Ignacio\Desktop\pepe\2-Server-Hungaroring-Mixto"

cls
echo Levantando ACC SERVER 2
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 2...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_2%"
start accServer2.exe