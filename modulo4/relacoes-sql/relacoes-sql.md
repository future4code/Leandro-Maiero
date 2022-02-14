Exercício 1 - 

a)

Foreign Key é o campo que estabele relação entre tabelas.

b)

INSERT INTO Rating VALUES (
	"001", "Filme aleatório, texto aleatório", "9", "001"
);

c)

Não cadastra, pois não encontrou o id da tabela 

d)

ALTER TABLE Filmes DROP COLUMN avaliacao;

e)

Não deleta, porque ela é referente a outra tabela.

Exercício 2 - 


c)

Não encontrada, pois a chave está referenciada

d)

Para a exclusão do ator teria que apagar a associação da tabela anterior

Exercício 3 - 

a)

O ON serve para relacionar a coluna de uma tabela a coluna de outra tabela

b)

SELECT Filmes.nome as nome, Filmes.id as id, Rating.rate as nota 
FROM Filmes
JOIN Rating ON Filmes.id = Rating.movie_id;