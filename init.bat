
if exist certificate/key.key if exist certificate/certificate.crt if exist .env if exist prisma/schema.prisma (
  npm i
  exit
)

set "envFile=.env"

@echo off
if exist %envFile% ( 
    rm -rf %envFile%
)

echo # Sửa lại theo dữ liệu cá nhân >> %envFile%
echo # database://user:password@host:port/database >> %envFile%
echo MYSQL_URL="mysql://root:admin@localhost:3306/test" >> %envFile%
echo POSTGRES_URL="postgresql://postgres:admin@localhost:5432/test" >> %envFile%
echo MODE="development" >> %envFile%
echo PORT=443 >> %envFile%
echo PRIVATE_KEY_PATH="certificate/key.key" >> %envFile%
echo CERTIFICATE_PATH="certificate/certificate.crt" >> %envFile%

rm -rf certificate
mkdir certificate
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certificate/key.key -out certificate/certificate.crt

@echo ON
npm i 