CREATE DATABASE db_amarelo; 
USE db_amarelo;

create table cadastroADM(
	cadUnico INT PRIMARY KEY NOT NULL,
   	nome VARCHAR(255),
   	telefone VARCHAR(12),
   	cidade VARCHAR(255)
);

CREATE TABLE padrinho(
cpf INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
telefone VARCHAR(11) NOT NULL unique,
cep VARCHAR(8) NOT NULL,
cidade VARCHAR(255),
logradouro VARCHAR(255) NOT NULL,
numero_casa VARCHAR(255) NOT NULL,
complemento VARCHAR(255),
senha VARCHAR(255) NOT NULL
);

CREATE TABLE instituicao(
	id INT primary key auto_increment,
    nome VARCHAR(255) NOT NULL,
    logradouro VARCHAR(255) NOT NULL,
	cidade VARCHAR(255),
	numero_casa VARCHAR(255) NOT NULL,
	complemento VARCHAR(255)
);

CREATE TABLE apadrinhado(
	nome VARCHAR(255) NOT NULL,
	cpf INT PRIMARY KEY,
    dataNasc DATE,
    instituicao VARCHAR(255)
);

CREATE TABLE casos(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nomePadrinho VARCHAR(255),
  cpfPadrinho INT unique,
  nomeApadrinhado VARCHAR(255),
  cpfApadrinhado INT unique,
  instituicao VARCHAR(255),
  cadAssistente INT NOT NULL,
  descricao TEXT,
  
  FOREIGN KEY (cpfApadrinhado) REFERENCES apadrinhado(cpf),
  FOREIGN KEY (cpfPadrinho) REFERENCES padrinho(cpf),
  FOREIGN KEY (cadAssistente) REFERENCES cadastroADM(cadunico)
);


SELECT padrinho.nome, apadrinhado.nome FROM casos
INNER JOIN padrinho ON padrinho.id = casos.id_padrinho
INNER JOIN apadrinhado ON apadrinhado.id = casos.id_apadrinhado
WHERE casos.id = 1;


select * from cadastroADM;
select * from padrinho;
select * from instituicao;
select * from apadrinhado;
select * from casos;

drop table cadastroADM;
drop table padrinho;
drop table instituicao;
drop table apadrinhado;
drop table casos;

SELECT cadunico, nome from cadastroadm where cadunico = "1" and nome = "teste";