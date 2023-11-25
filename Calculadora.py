def menu():
    print("Qual operação você deseja fazer?")
    print("1 - Soma") 
    print("2 - Subtração")
    print("3 - Multiplicação")
    print("4 - Divisão")
    print("0 - Sair")
      
menu() #exibir menu
operacao = int(input())

while (operacao != 0):
    if (operacao < 0) or (operacao > 4):
        print("Essa opção não existe!")
        menu()
    print("Digite N1: ")
    n1 = int(input())
    print("Digite N2: ")
    n2 = int(input())
    if (operacao == 1):
        res = n1 + n2
    if (operacao == 2):
        res = n1 - n2
    if (operacao == 3):
        res = n1 * n2
    if (operacao == 4):
        res = n1 / n2
    print("O resultado é: ", res)