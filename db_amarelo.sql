create database amarelo_db;
use amarelo_db;

create table cadastroAdm(
	cadUnico INT primary key,
    nome VARCHAR(255),
    telefone VARCHAR(12),
    cidade VARCHAR(255)
);

create table cadastroUser(
	CPF INT primary key,
    nome VARCHAR(255) not null,
    nascimento date not null,
    telefone VARCHAR(12) not null,
    cep  VARCHAR(8) not null,
    cidade TEXT not null,
    bairro TEXT not null,
    logradouro TEXT not null,
    numero TEXT not null
);

create table cadastroApadrinhado(
	id INT primary key,
	nome TEXT not null
);

create table casosAdm(
	nomePadrinho  
);

select * from cadastroadm;