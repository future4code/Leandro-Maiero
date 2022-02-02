Exercício 1 - 
Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder:

a) ALTER TABLE Actor DROP COLUMN salary;

Ecomando ecluira a coluna dos salarios dos atores.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

Esse comando muda o nome de uma propriedade da tabela.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

Esse comando muda o tipo de propriedade porem mantem o mesmo nome.


d)  Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

  ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
____________________________________________________________________________

Exercício 2 -

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

 update Actor set name = "Bananinha", birth_date = "2015-03-08" where id = "003";

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

update Actor set name = upper("Juliana Paes") WHERE id = "005";

update Actor set name = ("Juliana Paes") WHERE id = "005";

c) Escreva uma query que atualize todas as informações do ator com o id 005


    UPDATE Actor SET
    name = "Tom Cruise",
    birth_date = "1962-03-07",
    salary = 581397675,
    gender = "male"
    WHERE id = "005";



d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

 update Actor set name = ("Juliana Paes") WHERE id = "255"

Diz que 0 linhas foram afetadas devido as informaçoes não pertencerem a tabela
____________________________________________________________________________

Exercício 3 -

a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

DELETE FROM Actor WHERE	(gender = "male") AND salary > 1000000
____________________________________________________________________________

Exercício 4 -

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

Este comando exibe a quantidade de male e de female

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética:

SELECT id, name FROM Actor ORDER BY name DESC;

c) Faça uma query que retorne todos os atores ordenados pelo salário

SELECT * FROM Actor ORDER BY salary;

d) Faça uma query que retorne os atores com os três maiores salarios

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) Faça uma query que retorne a média de salário por gênero

SELECT AVG(salary), gender FROM Actor GROUP BY gender;
____________________________________________________________________________

Exercicício 6 - 

a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

ALTER TABLE Movie ADD playing_limit_date DATE;

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.

ALTER TABLE Movie CHANGE rating rating FLOAT;

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

UPDATE Movie SET playing_limit_date = "2021-11-20" WHERE id = "004";

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

DELETE FROM Movie WHERE id = "004"

O comando foi aceito porem não altera a tabela 
____________________________________________________________________________

códigos no SQL -

SELECT * FROM Actor;
      
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

update Actor set name = "Fernanda Montenegro", birth_date = "2015-03-08" where id = "003";

update Actor set name = upper("Juliana Paes") WHERE id = "005";

update Actor set name = ("Juliana Paes") WHERE id = "005";

UPDATE Actor SET
name = "Tom Cruise",
birth_date = "1962-03-07",
salary = 581397675,
gender = "male"
WHERE id = "005";

update Actor set name = ("Juliana Paes") WHERE id = "255";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE	(gender = "male") AND salary > 1000000;

SELECT COUNT(*), gender FROM Actor GROUP BY gender;

SELECT COUNT(*), gender FROM Actor GROUP BY gender;

SELECT id, name FROM Actor ORDER BY name DESC;

SELECT * FROM Actor ORDER BY salary;

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

SELECT * FROM Movie;

ALTER TABLE Movie ADD playing_limit_date DATE; 

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie SET playing_limit_date = "2021-11-20" WHERE id = "004";

DELETE FROM Movie WHERE id = "004";






