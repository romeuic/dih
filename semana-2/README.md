# Semana 2 - Exercícios práticos de Javascript

## [M1S02] - Ex 1 - Primeiros passos

Em uma pasta apropriada crie um documento HTML5, chamado **"index.html"**, em que a linguagem seja português do Brasil, o conjunto de caracteres seja UTF-8, e que o conteúdo preencha toda a área do navegador, com o título na aba de "DEV in House". O corpo deve conter um título (h1) com o conteúdo "Semana 2" e um parágrafo contendo o texto "Este é o resultado do primeiro exercício da segunda semana do curso DEVinHouse.".

No mesmo documento, adicione uma linha horizontal entre o título e o parágrafo, e duas quebras de linha no parágrafo, uma logo após a palavra "exercício" e outra logo após a palavra "semana".

Criar uma pasta com o nome de **"scripts"**, em seguida, crie um arquivo com o nome **"script.js"**.

No mesmo documento, insira algum emoji de sua escolha no parágrafo.

Dica: https://emojipedia.org -> Codepoints -> "U+" por "&#x"  
https://www.andiamo.co.uk/resources/iso-language-codes

## [M1S02] - Ex 2 - Alerte o usuário

Utilizando Javascript, emita um alerta para o usuário com uma informação importante.

Dica: Lembre-se da estrutura "scripts" criada no exercício anterior.  
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

## [M1S02] - Ex 3 - Faça com que o usuário confirme antes de seguir

Utilizando Javascript, peça a confirmação do usuário ao clicar em algum botão, perguntando se ele deseja realmente realizar essa ação.

Dica: Lembre-se da estrutura "scripts" criada no exercício anterior.  
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

## [M1S02] - Ex 4 - Peça o nome do usuário e exiba na tela

Faça com que o navegador do usuário pergunte o nome dele(a). Utilizando o método "alert", exiba o nome inserido pelo usuário.

Dica: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

## [M1S02] - Ex 5 - Pergunte ao usuário

**_Para realizar esse exercício, utilize o console do navegador._**

Pergunte ao usuário:

1. nome (**prompt**);
2. idade (**prompt**);
3. gosta de praticar algum esporte? (**confirm**)

Crie <ins>3 variáveis</ins> para guardar as respostas do usuário:

1. deve receber um valor textual (**string**);
2. deve receber um valor numérico (**number**);
3. deve receber um valor de verdadeiro ou falso (**boolean**).

Faça com que esses 3 valores sejam exibidos no <ins>**console do navegador**</ins>.

Dica: https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt  
https://developer.mozilla.org/pt-BR/docs/Web/API/window/confirm

## [M1S02] - Ex 6 - Pergunte nome e sobrenome e exiba na tela

Faça 2 prompts ao usuário:

1. no primeiro, pergunte o seu sobrenome;
2. no segundo, pergunte o seu nome.

Em seguida, exiba na tela um **"alert"**, contendo o nome completo do usuário, na ordem correta (**ou seja: Nome Sobrenome**).

Dica: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert  
https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt

## [M1S02] - Ex 7 - Pergunte o último sobrenome e exiba em letras maiúsculas, junto do tamanho

Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um **"alert"** contendo o texto **"Olá, X. Seu sobrenome contém Y letras"**, onde **X** é o sobrenome em letras maiúsculas, e **Y** é a quantidade de letras desse sobrenome.

Dica: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert  
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length  
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

## [M1S02] - Ex 8 - Pergunte o ano atual e o ano de nascimento, exiba na tela a idade

Faça 2 prompts ao usuário:

1. no primeiro, pergunte o ano de nascimento;
2. no segundo, pergunte o ano atual.

Em seguida, exiba na tela um **"alert"** contendo o texto **"Sua idade é X ou Y"**, onde **X** é a idade do usuário, caso ele já tenha feito aniversário neste ano, e **Y** é a idade caso ele ainda não tenha aniversariado no ano corrente.

Dica: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert  
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math

## [M1S02] - Ex 9 - Construa uma calculadora

Faça 3 prompts ao usuário:

1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer ("+", "-", "\*" ou "/");
2. no segundo, pergunte o primeiro valor que deseja calcular;
3. no terceiro, o segundo valor que deseja calcular.

Em seguida, realize o cálculo e exiba na tela um **"alert"** contendo o texto **"O resultado do seu cálculo é: X"**, onde **X** é o resultado final do cálculo solicitado pelo usuário.

Dica: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert  
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math

## [M1S02] - Ex 10 - Alerte as horas para o usuário

Construa um script que alerta o horário no momento de acesso, no formato "23:59" (HH:mm).

Dica: Lembre-se da estrutura "scripts" criada no exercício anterior.  
https://codare.aurelio.net/2009/04/03/javascript-obter-e-mostrar-data-e-hora

## [M1S02] - Ex 11 - Construa uma calculadora de P.A.

Ao entrar na página, seu script deve realizar 2 prompts ao usuário:

1. um solicitando um "valor inicial";
2. outro um valor para a "raíz".

Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela.

**<ins style="color:red">Relembrando</ins>**: **P.A.** (**Progressão Aritmética**) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz.

**<ins style="color:blue">Exemplo</ins>**: **Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.**

Dica: https://matematicabasica.net/progressao-aritmetica  
https://www.javascriptprogressivo.net/2018/12/progressao-aritmetica-pa-em-javascript.html
