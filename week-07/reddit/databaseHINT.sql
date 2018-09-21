mysql -u root -p

SHOW DATABASES;

USE REDDIT;

CREATE TABLE posts (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR (200) NOT NULL,
  url VARCHAR (200) NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  score INTEGER NOT NULL DEFAULT 0
  );



SELECT * FROM posts
WHERE id= ${id};

