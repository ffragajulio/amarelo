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
estado VARCHAR(255),
cidade VARCHAR(255),
logradouro VARCHAR(255) NOT NULL,
numero_casa VARCHAR(255) NOT NULL,
complemento VARCHAR(255)
);

CREATE TABLE casos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  descricao TEXT NOT NULL,
  status VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES padrinho(id) ON DELETE CASCADE ON UPDATE CASCADE
);

select * from padrinho;

select * from cadastroadm;

INSERT INTO cadastroadm(cadunico, nome, telefone, cidade) VALUES(1, 'teste', 1, 'teste');