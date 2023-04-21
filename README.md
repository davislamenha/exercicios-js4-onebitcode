# EXERCÍCIOS DO MODULO DE JAVASCRIPT IV

## ONE BIT CODE

> Exercícios para estudo e prática propostos no modulo de Javascript IV (POO).

## Descrição dos Exercícios

### Exercício 1

#### Descrição

- Crie, em arquivos separados, as seguintes classes utilizando javascript:

  - **User**, que deverá possuir:
    - um atributo **fullname**, atribuível na instanciação
    - um atributo **email**, atribuível na instanciação
    - um atributo **password**, atribuível na instanciação
    - um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
  - **Product**, que deverá possuir:
    - um atributo **name**, atribuível na instanciação
    - um atributo **description**, atribuível na instanciação
    - um atributo **price**, atribuível na instanciação
    - um atributo **inStock**, inicializado sempre em 0
    - um método **addToStock**, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
    - um método **calculateDiscount**, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado.

### Exercício 2

#### Descrição

- Crie uma aplicação javascript que simule um funcionamento básico de blog utilizando classes e associações.

  - Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários. As instâncias de Post também devem ter um método específico para adição de comentários nelas.

  - Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, que é o autor do post. Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um método específico para criação de posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no array e então retornar o post criado.

  ### Exercício 3

#### Descrição

- Crie um conjunto de classes em javascript para auxiliar na interação com o DOM.
  - Você deverá criar, no mínimo, 4 classes diferentes:
    - Uma classe para um elemento genérico do DOM (dica: utilize o nome Component, pois o nome Element poderá gerar conflitos com a implementação do navegador).Essa classe deverá possuir um atributo privado para armazenar a referência ao elemento do DOM e um método de acesso para ler o valor desse atributo.Ela também deve possuir um método build para criar o elemento que deve ser chamado uma vez no construtor, mas também deve ser possível chamá-lo novamente através da instância.Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela instância a qualquer momento.
    - Essa classe deverá possuir um atributo privado para armazenar a referência ao elemento do DOM e um método de acesso para ler o valor desse atributo.
    - Ela também deve possuir um método build para criar o elemento que deve ser chamado uma vez no construtor, mas também deve ser possível chamá-lo novamente através da instância.
    - Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela instância a qualquer momento.
    - Uma classe específica para elementos input, que deve ser uma subclasse da classe Component.
    - Uma classe específica para elementos label, que deve ser uma subclasse da classe Component e no seu construtor deve ser possível indicar como primeiro parâmetro qual será o seu conteúdo em texto.
    - Uma classe específica para elementos form, que deve ser uma subclasse da classe Component e possuir um método para adicionar elementos como filhos (através das instâncias das classes Component e suas subclasses).

## Meta

Davis Lamenha Sampaio - [Linkedin](https://www.linkedin.com/in/davislamenha/) - davislamenha@gmail.com

[Meu Github](https://github.com/davislamenha)
