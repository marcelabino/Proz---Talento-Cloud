CREATE TABLE Produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    preco DECIMAL(10, 2),
    quantidade INT
);

CREATE TABLE Estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quantidade_total INT
);

INSERT INTO Produtos (id, nome, preco, quantidade) VALUES (1,'Arroz', 5.00, 50); 

SELECT * FROM Produtos;

DELIMITER //
CREATE TRIGGER atualizar_estoque AFTER INSERT ON Produtos
FOR EACH ROW
BEGIN
    Declare total_estoque INT;
    SELECT SUM(quantidade) INTO total_estoque FROM Produtos;
    UPDATE Estoque SET quantidade_total = total_estoque;
END;
//
DELIMITER ;
