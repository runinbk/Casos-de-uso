create table USUARIO
(
 id int not null auto_increment , 
 login varchar(40) not null, 
 password varchar(40) not null, 
 primary key (id)
);
 
create table CARGO 
( 
  id int not null auto_increment , 
  nombre varchar (120) not null, 
  sueldo float not null, 
  primary key (id)
);
 
create table EMPLEADO
(
  id int not null auto_increment , 
  nombre varchar(40) not null, 
  apellido varchar(40) not null, 
  ci int not null, 
  direccion varchar(120) not null, 
  sexo varchar(1) not null,
  idCargo int not null, 
  idUsuario int not null, 
  primary key (id),
  foreign key (idCargo) references CARGO ( id)
   ON UPDATE CASCADE
   ON DELETE CASCADE, 
  foreign key (idUsuario) references USUARIO ( id)
   ON UPDATE CASCADE
   ON DELETE CASCADE 
);
