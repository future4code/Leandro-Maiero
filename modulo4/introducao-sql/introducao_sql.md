Exercício 1 - 

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

VARCHAR(255) PRIMARY KEY - terá no maxímo 255 caracteres e sera seu ID.
NOT NULL - não será valido campo vazio.
DATE NOT NULL - somente datas no formato YY/MM/DD e não será valido o campo vazio.
________________________________________________________________________________________

b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.

SHOW TABLES - mostra todas as tabelas.
SHOW DATABASES - mostra o local onde está sendo armazenada suas aplicações 
________________________________________________________________________________________

c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.

id	varchar(255)	NO	PRI	
name	varchar(255)	NO		
salary	float	NO		
birth_date	date	NO		
gender	varchar(6)	NO		

ele mostra uma tabela com os dados da e suas preferências.
________________________________________________________________________________________

Exercício 2 -

O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
_________________________________________________________________________________________________________

b)  Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

diz que a entrada está duplicada e não deixa executar o comando
_________________________________________________________________________________________________________

c) 

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Error Code: 1136. Column count doesn't match value count at row 1

o erro acontece devido as quantidades de parametros estarem divergentes com a quantidade de informações inseridas a tabela.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
_______________________________________________________________________________________________________

d) 

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
Error Code: 1364. Field 'name' doesn't have a default value

o erro acontece devido estar faltando o parametro name e o mesmo está designado como NOT NULL, portanto só será aceito com o devido parametro preechido.
_________________________________________________________________________________________________________

e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

o erro acontece devido a informações da data esta como numero e so será aceita com "" (string) por padrão SQL

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
_________________________________________________________________________________________________________

f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Will Smitch",
  266000000,
  "1968-09-25", 
  "male"
);
_________________________________________________________________________________________________________

Exercício 3 -

a) Escreva uma query que retorne todas as informações das atrizes

SELECT id, name, salary, birth_date from Actor WHERE gender = "female"

002	Glória Pires	1200000	1963-08-23
003	Fernanda Montenegro	300000	1929-10-19
005	Juliana Paes	719333	1979-03-26
_______________________________________________________________________________________________________

b)  Escreva uma query que retorne o salário do ator com o nome Tony Ramos

SELECT salary from Actor where name = "Tony Ramos"

'400000'
_________________________________________________________________________________________________________

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

SELECT * from Actor where gender = "invalid"

aparece todos os campos da tabela como NULL
_________________________________________________________________________________________________________

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

SELECT id, name, salary from Actor where salary between 0 and "500000"

001	Tony Ramos	400000
003	Fernanda Montenegro	300000
004	Antônio Fagundes	400000
________________________________________________________________________________________________

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

SELECT id, nome from Actor WHERE id = "002"

Error Code: 1054. Unknown column 'nome' in 'field list'

SELECT id, name from Actor WHERE id = "002"

002	Glória Pires

aconsteceu o erro devido ao dado inserido não ser fiel ao já designido ao criar a tabela como name invés de nome.
________________________________________________________________________________________________

Exercício 4 -

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

SELECT * FROM Actor WHERE (name LIKE "A%" ) AND salary > 350000;

004	Antônio Fagundes	400000	1949-04-18	male
________________________________________________________________________________________________

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

select * from Actor Where name like "%G%" or name like "%g%";

002	Glória Pires	1200000	1963-08-23	female
003	Fernanda Montenegro	300000	1929-10-19	female
004	Antônio Fagundes	400000	1949-04-18	male
________________________________________________________________________________________________

d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%" ) AND salary between 350000 and "900000";

001	Tony Ramos	400000	1948-08-25	male
004	Antônio Fagundes	400000	1949-04-18	male
005	Juliana Paes	719333	1979-03-26	female
________________________________________________________________________________________________

Exercício 5 - Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

a) 

CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL unique,
    synopsis text NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
________________________________________________________________________________________________

b)

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina 
  do casamento. Um dia eles são atingidos por um fenômeno inexplicável
  e trocam de corpos",
  "2006-01-06", 
  "7"
  );
________________________________________________________________________________________________

c)

    INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
  A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá 
  mais morar com ela",
  "2012-12-27", 
  "10"
  );
________________________________________________________________________________________________

d)

    INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. A vida de abusos acaba 
  por acarretar sua morte precoce.",
  "2017-02-11", 
  "8"
  );
________________________________________________________________________________________________

e) Pesquise algum filme brasileiro e crie ele na tabela

      INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "004", 
  "Minha Mãe É uma Peça",
  "Dona Hermínia é uma mulher de meia idade, divorciada do marido,que a trocou
   por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina
   e Juliano,sem se dar conta que eles já estão bem grandinhos.",
  "2013-06-21", 
  "8"
  );
________________________________________________________________________________________________

Exercício 6 - 

a) Retorne o id, título e avaliação a partir de um id específico;

SELECT id, title, rating from Movie WHERE id = "003"

003	Dona Flor e Seus Dois Maridos	8
________________________________________________________________________________________________

b) Retorne um filme a partir de um nome específico;

SELECT * from Movie WHERE title LIKE "%Peça%"

004	Minha Mãe É uma Peça	Dona Hermínia é uma mulher de meia idade, divorciada do marido,que a trocou
    por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina
    e Juliano,sem se dar conta que eles já estão bem grandinhos.	2013-06-21	8
________________________________________________________________________________________________

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

select id, title, synopsis from Movie where rating > 7



002	Doce de mãe	Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
   A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
   empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá 
   mais morar com ela
003	Dona Flor e Seus Dois Maridos	Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
   que só quer saber de farras e jogatina nas boates. A vida de abusos acaba 
   por acarretar sua morte precoce.
004	Minha Mãe É uma Peça	Dona Hermínia é uma mulher de meia idade, divorciada do marido,que a trocou
    por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina
    e Juliano,sem se dar conta que eles já estão bem grandinhos.
________________________________________________________________________________________________

Exercício 7 -

a) Retorna um filme cujo título contenha a palavra vida

SELECT * from Movie WHERE title LIKE "%vida%";
________________________________________________________________________________________________
b)  Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

SELECT * FROM Movie WHERE title LIKE "%Dona%" OR synopsis LIKE "%Flor%";
________________________________________________________________________________________________
c) Procure por todos os filmes que já tenham lançado:

select * from Movie where release_date  < "2022-01-31";
________________________________________________________________________________________________
d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7

  SELECT * FROM Movie WHERE release_date < "2022-01-31" AND (
  title LIKE "%mãe%" OR synopsis LIKE "%vida%") AND rating > 7;
________________________________________________________________________________________________

SQL -

USE `carver-leandro-gino-maiero`;
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW databases;
DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Teste Erro Id",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Will Smitch",
  266000000,
  "1968-09-25", 
  "male"
);

SELECT * FROM Actor;

SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

SELECT salary from Actor where name = "Tony Ramos";

SELECT * from Actor where gender = "invalid";

SELECT id, name, salary from Actor where salary between 0 and "500000";  

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor WHERE (name LIKE "A%" ) AND salary > 350000;

select * from Actor Where name like "%G%" or name like "%g%";

SELECT * FROM Actor WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%" ) AND salary between 350000 and "900000";

CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL unique,
    synopsis text NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

select * from Movie;

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina 
  do casamento. Um dia eles são atingidos por um fenômeno inexplicável
  e trocam de corpos",
  "2006-01-06", 
  "7"
  );
  
  INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
  A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá 
  mais morar com ela",
  "2012-12-27", 
  "10"
  );
  
    INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. A vida de abusos acaba 
  por acarretar sua morte precoce.",
  "2017-02-11", 
  "8"
  );
  
      INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "004", 
  "Minha Mãe É uma Peça",
  "Dona Hermínia é uma mulher de meia idade, divorciada do marido,que a trocou
   por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina
   e Juliano,sem se dar conta que eles já estão bem grandinhos.",
  "2013-06-21", 
  "8"
  );
  
SELECT id, title, rating from Movie WHERE id = "003";

SELECT * from Movie WHERE title LIKE "%Peça%";

select id, title, synopsis from Movie where rating > 7;

SELECT * from Movie WHERE title LIKE "%vida%";
 
SELECT * FROM Movie WHERE title LIKE "%Dona%" OR synopsis LIKE "%Flor%";

select * from Movie where release_date  < "2022-01-31";

SELECT * FROM Movie
WHERE release_date < "2022-01-31" AND 
      (title LIKE "%mãe%" OR
      synopsis LIKE "%vida%") AND rating > 7;






















