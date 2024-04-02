CREATE TABLE Compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_compra DATE,
    quantidade INT
);

DELIMITER //
CREATE PROCEDURE LevantamentoDiario(data_atual DATE, total_compras INT)
BEGIN
   
   -- Data atual
    SET data_atual = CURDATE();

    -- Contagem de compras por dia
    SELECT SUM(quantidade) INTO total_compras
    FROM Compras
    WHERE data_compra = data_atual;

    -- Exibir resultado
    IF total_compras IS NOT NULL THEN
        SELECT CONCAT('No dia ', data_atual, ' foram comprados ', total_compras, ' produtos.') AS Resultado;
    ELSE
        SELECT CONCAT('No dia ', data_atual, ' não houve compras.') AS Resultado;
    END IF;
END;
//
DELIMITER ;