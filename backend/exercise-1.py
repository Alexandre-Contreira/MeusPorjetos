import random

# array com as palavras 
# selecionar a palavra aleatoriamente
# informar o usuario para advinhar animal 
# nao pode aceitar numeros
# receber as letras atraves do usuario atraves do input 
# realizar a comparação das letras com a palavra selecionada 

animais = ['macaco','elefante','girafa','leao'] 

palavra_selecionada = random.choice(animais)

print('Adivinhe o animal: ' + ', '.join(animais)  )

palavra_digitada = input('digite o nome do animal:')

while palavra_digitada != palavra_selecionada :
    print ("tente novamente!!!")
    palavra_digitada = input('digite o nome do animal:')

    if palavra_digitada == palavra_selecionada:
       print('otimo vc acertou miserave')
       break    

#exit()


 
 