CREATE TABLE users (
  id  INT PRIMARY KEY,
  username  VARCHAR
);

CREATE TABLE book (
  id  INT PRIMARY KEY,
  title  VARCHAR,
  pub_year  INT,
  book_genre  INT
);

CREATE TABLE users_book (
  book_id  INT PRIMARY KEY,
  user_id  INT,
  rating decimal(2,1),
  reading_time TIME,
  owned BOOLEAN
);

CREATE TABLE genre (
  id  INT PRIMARY KEY,
  genre_name  VARCHAR
);

ALTER TABLE users_book ADD FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE users_book ADD FOREIGN KEY (book_id) REFERENCES book(id);

ALTER TABLE book ADD FOREIGN KEY (book_genre) REFERENCES genre(id);

INSERT INTO genre (id, genre_name)
VALUES
(1, 'Romance'),
(2, 'Conto'),
(3, 'Literatura infantil'),
(4, 'Crônicas');

INSERT INTO book (id, title, pub_year, book_genre)
VALUES

-- Romances
(1, 'Perto do coração selvagem', 1943, 1),
(2, 'O lustre', 1946, 1),
(3, 'A cidade sitiada', 1949, 1),
(4, 'A maçã no escuro', 1961, 1),
(5, 'A paixão segundo G.H.', 1964, 1),
(6, 'Uma aprendizagem ou O livro dos prazeres', 1969, 1),
(7, 'Água viva', 1973, 1),
(8, 'A hora da estrela', 1977, 1),
(9, 'Um sopro de vida', 1978, 1),

-- Contos
(10, 'Alguns contos', 1952, 2),
(11, 'Laços de família', 1960, 2),
(12, 'A legião estrangeira', 1964, 2),
(13, 'Felicidade clandestina', 1971, 2),
(14, 'Onde estivestes de noite', 1974, 2),
(15, 'A via crucis do corpo', 1974, 2),
(16, 'A bela e a fera', 1979, 2),

-- Literatura infantil
(17, 'O mistério do coelho pensante', 1967, 3),
(18, 'A mulher que matou os peixes', 1968, 3),
(19, 'A vida íntima de Laura', 1974, 3),
(20, 'Quase de verdade', 1978, 3),
(21, 'Como nasceram as estrelas', 1987, 3),

--Crônicas
(22, 'Para não esquecer', 1978, 4),
(23, 'A descoberta do mundo', 1984, 4);

