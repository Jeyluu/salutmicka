CREATE DATABASE salutmicka;
USE salutmicka;

-- TABLE AUTEUR

CREATE TABLE auteur (
auteurid INT PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(255)

);

-- TABLE ARTICLE

CREATE TABLE article (
articleid INT PRIMARY KEY AUTO_INCREMENT,
titre VARCHAR(50),
image VARCHAR(255),
auteurId INT,
description VARCHAR(255),
FOREIGN KEY (auteurId) REFERENCES auteur(auteurid)

);


-- AJOUTER UN AUTEUR

INSERT INTO auteur ( nom) 
VALUES 
('Voltaire'),
('Socrate');

-- AFFICHER UN AUTEUR

SELECT * FROM auteur;

-- AJOUTER UN AUTEUR

INSERT INTO article (titre, image, description, auteurId) 
VALUES 
('Le Rouge et le noir', 'lerougelenoir.jpg', 'Livre de Stendahl et non de Voltaire', 1);


-- AFFICHER UN ARTICLE

SELECT * FROM article;