CREATE table clientes (
id SERIAL PRIMARY key,
  nome VARCHAR(50) not NULL,
  telefone VARCHAR(20) NOT NULL
);

ALTER TABLE clientes add COLUMN
data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

INSERT INTO clientes (nome, telefone) VALUES
('Maria', '(81) 2345-6243'),
('João', '(81) 3748-6573')

SELECT * FROM clientes;

CREATE FUNCTION TotalClientesCadastrados(data_consulta DATE) RETURNS INT as $$
    DECLARE total_clientes INT;
BEGIN
    SELECT COUNT(*) INTO total_clientes
    FROM clientes
    WHERE DATE(data_cadastro) = data_consulta;

    RETURN total_clientes;
END;
$$ LANGUAGE plpgsql;

SELECT totalclientescadastrados('2024-04-05') as totalClientes;