nodejs,express app sample for user request management , using nodejs,express, express-gateway.io and openweathermap.org/api 

for installation :

make sure you have npm installed (https://nodejs.org/en/)

clone or download repo

open terminal :

cd root

npm install

then run the server with:

npm start



open another terminal and replace {APIKEY} in 


curl -H "Authorization: apiKey {APIKEY}" localhost:3000/{city name},{country code}

e.g:

curl -H "Authorization: apiKey 65MSOnXLbTe4bAVoKDD6Dh:1WafzGidMw5wtO5jh7SVsI" localhost:3000/sydney,au

with apiKeys generated by running following commands in a new terminal while server is running :

eg users create
eg credentials create -c USERNAME -t key-auth -q


(these APIKEYS are stored in memory and will be reseted after server restart and will not be authorized on your machine ,although this can be resolved by using redis
 and import/export data to restore in-memory database on other machines;unfortunatly windows(my os) is not officially supported by redis)

65MSOnXLbTe4bAVoKDD6Dh:1WafzGidMw5wtO5jh7SVsI

2aOtxwdAWeZqlDny8Km4lA:509QXzRmWwb6XS4phjV7W8

3D9qV8wX7hq3VidNh03vsQ:08EkFlZOfMKrr2Zz3FetSk

1ZeZhVpN7J6WIODLCrqORR:2tOH8QIlkUsnHnZNaUmMt7

2HnoOnTdtYvhr20BLpufCg:1nIGWoCw9trj8Jt41lVGm1

* notice each key has a limit of 5 requests per hour 
(you can change that at ./congif/gateway.config.yml under -rate-limit)

developed by sarabadaniali@yahoo.com

