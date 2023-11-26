print("Digite o seu nome completo:")
nome = str(input())

executar = True

while(executar == True):
    print("Qual o seu ano de nascimento?")
    try:
        ano = int(input())
        if (ano < 1922) or (ano > 2021):
            print("O ano precisa está entre 1922 e 2021")
        else:
            idade = 2022 - ano
            executar = False
    except:
        print("Os anos precisam ser números inteiros.")