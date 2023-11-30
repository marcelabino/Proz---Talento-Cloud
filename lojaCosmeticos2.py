lista_produtos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores'] 

lista_produtos.pop() #remover delineadores na última posição

for i in range(len(lista_produtos)):
    if(lista_produtos[i] == 'batons'): #substituição
        lista_produtos[i] = 'rímel'
    if(lista_produtos[i] == 'loções'):
        lista_produtos[i] = 'cremes hidratantes'
    #print("Temos " + lista_produtos[i] + " à venda!")

lista_produtos.append("água micelar")
lista_produtos.append("corretivo")
print(lista_produtos)
