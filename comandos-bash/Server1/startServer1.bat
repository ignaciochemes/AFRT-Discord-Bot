@echo off
TITLE Servidor ACC - 1
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_1="C:\Users\Ignacio\Desktop\pepe\1-Server-Tu-Hermana"

cls
echo Levantando ACC SERVER 1
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 1...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_1%"
start accServer1.exe