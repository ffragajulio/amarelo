CREATE DATABASE db_amarelo; 
USE db_amarelo;

create table cadastroADM(
	id INT PRIMARY KEY auto_increment,
	cadUnico INT NOT NULL,
   	nome VARCHAR(255),
   	telefone VARCHAR(12),
   	cidade VARCHAR(255)
);

CREATE TABLE padrinho(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
telefone VARCHAR(11) NOT NULL,
cpf VARCHAR(11) NOT NULL,
senha VARCHAR(255) NOT NULL,
foto_perfil TEXT,
cep VARCHAR(8) NOT NULL,
cidade VARCHAR(255),
logradouro VARCHAR(255) NOT NULL,
numero_casa VARCHAR(255) NOT NULL,
complemento VARCHAR(255)
);

CREATE TABLE apadrinhado(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	cpf VARCHAR(11),
	foto_perfil TEXT,
	estado VARCHAR(255),
	cidade VARCHAR(255),
	logradouro VARCHAR(255) NOT NULL,
	numero_casa VARCHAR(255) NOT NULL,
	complemento VARCHAR(255)
);

CREATE TABLE casos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_apadrinhado INT NOT NULL,
  id_padrinho INT NOT NULL,
  descricao TEXT NOT NULL,
  status ENUM('Aberto','Fechado'),
  FOREIGN KEY (id_apadrinhado) REFERENCES apadrinhado(id),
  FOREIGN KEY (id_padrinho) REFERENCES padrinho(id)
);

SELECT padrinho.nome, apadrinhado.nome FROM casos
INNER JOIN padrinho ON padrinho.id = casos.id_padrinho
INNER JOIN apadrinhado ON apadrinhado.id = casos.id_apadrinhado
WHERE casos.id = 1;

select * from casos;
select * from padrinho;
select * from cadastroadm;

drop table casos;
drop table padrinho;
drop table cadastroADM;

SELECT cadunico, nome from cadastroadm where cadunico = "1" and nome = "teste";

INSERT INTO cadastroadm(cadunico, nome, telefone, cidade) VALUES(1, 'teste', 1, 'teste');