# Casos-de-uso
Repositorio para el control de versiones .
Integracion de los 1eros casos de uso ---> PRUEVA

COMANDOS DE INICIO DE PROYECTO EN EL LOCALHOST
==================================================
De una vez con el Docker instalado, abrir la consola de comandos de tu preferencia y escribir los sig comandos deacuerdo al cumplimientos de las condiciones:

>>>>>En caso de no tener un contenedor con mysql y no tener la bd creada:

>Para crear el contenedor de la bd, la bd con sus respectivas credenciales:
docker run --name mysqlpanaderia -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=panaderia -p 3306:3306 -d mysql

>Para ver los contenedores activos:
docker ps

>Para iingresar a la consola de tu mysql:
docker exec -it mysqlpanaderia -u root -p ===>>>ingresar la contraseña del root{password}

>>>Ya en la consola del mysql 

>Para ver las bd creadas en el local:
show database


>>>>>En caso de ya tener el contenedor creado y asi tambien la bd:

>Para ingresar en la consola de la bd:
docker exec -it mysqlpanaderia bash

>Para iingresar a la consola de tu mysql:
mysql -u root -p ===>>>ingresar la contraseña del root{password}

>>>Ya en la consola del mysql 

>Para ver las bd creadas en el local:
show database;

>Para entrar a nuestra base de datos
use panaderia;

>ya estando en nuestra base de datos, ingresar el scrip que se encuentra en la carpeta "databases"(solo copiar y pegar), esto es para crear las tablas de nuestra base de datos

show tables;
>>>>>>>>