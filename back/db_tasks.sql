use db_tasks;

create table cadastroadm(
	cadunico INT primary key,
    nome VARCHAR(255),
    telefone VARCHAR(12),
    cidade VARCHAR(255)
);

select * from cadastroadm;