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

      ### Exercício 4

#### Descrição

- Crie as seguintes classes utilizando javascript:

  - Uma classe Character que representa um personagem de um jogo

    - Ela deverá possuir atributos para nome, pontos de vida, de ataque e de defesa.
    - Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character) e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo.

  - Uma classe Thief que representa um personagem de um tipo diferente

    - Ela deve herdar os atributos de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.

  - Uma classe Mage que representa outro tipo de personagem e também herda de Character

    - No entanto, essa classe também deve ter um atributo para pontos de magia.
    - Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos pontos de magia.
    - A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem alvo (passado como argumento do método) em um valor de duas vezes os pontos de magia do personagem atual.

  - Uma classe Warrior que representa outro tipo de personagem e também herda de Character

    - Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.
    - Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.
    - Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).

    ## Projeto Guiado

#### Descrição

> Projeto simulando uma Bookstore criado com classes usando os conceitos aprendidos de POO. Todo o projeto foi desenvolvido durante as aulas com o professor, algumas dificuldades diferentes das aulas foram encontradas, porém, elas foram resolvidas e o projeto foi concluido com sucesso.

## Meta

Davis Lamenha Sampaio - [Linkedin](https://www.linkedin.com/in/davislamenha/) - davislamenha@gmail.com

[Meu Github](https://github.com/davislamenha)
