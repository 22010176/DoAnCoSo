if exist certificate/key.key if exist certificate/certificate.crt if exist .env if exist prisma/schema.prisma (
  npm run start
  exit
)

if exist /.env ( 
    rm -rf /.env
)

set "envFile=.env"
@echo off
echo # connector://user_name:password@host:post/database?arguments > %envFile%
echo DATABASE_URL="postgresql://postgres:admin@localhost:5432/test" >> %envFile%
echo MODE="development" >> %envFile%
echo PORT=443 >> %envFile%
echo PRIVATE_KEY_PATH="certificate/key.key" >> %envFile%
echo CERTIFICATE_PATH="certificate/certificate.crt" >> %envFile%

rm -rf certificate
mkdir certificate
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certificate/key.key -out certificate/certificate.crt

echo y | npx prisma migrate dev --name init
npm i @prisma/client

@echo ON
npm run start   