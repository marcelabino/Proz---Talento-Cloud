create TABLE cadastro (
 id_pessoa INTEGER PRIMARY KEY,
 nome varchar(50) NOT NULL
);

CREATE table endereco (
id_endereço INTEGER PRIMARY key,
  rua varchar(50) NOT NULL,
  cidade VARCHAR(50) not NULL,
  estado VARCHAR(30) Not NULL
  CONSTRAINT fk_pessoa FOREIGN KEY (id_pessoa) REFERENCES cadastro (id_pessoa)
);

INSERT into cadastro(id_pessoa, nome) values (1,'Maria');
INSERT into cadastro(id_pessoa, nome) values (2,'Pedro');
INSERT into cadastro(id_pessoa, nome) values (3,'João');

SELECT*from cadastro;




