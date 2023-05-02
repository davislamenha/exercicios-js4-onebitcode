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

### Exercício 4

#### Descrição

- Construir uma aplicação em javascript que simula o funcionamento de um banco, com as funcionalidades de depósito, transferência e empréstimos em uma conta bancária. Para isso, crie as seguintes classes:

  - Deposit: Deverá possuir um atributo para o valor e um atributo para a data de criação.
  - Transfer: Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência, o valor e a data de criação.
  - Loan: Deverá possuir um atributo estático privado para a taxa de juros e que possuir um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem. Deverá possuir os atributos para o valor do empréstimo e para a data de criação. Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo.
  - Installment: Deve possuir atributos para: o valor da parcela, o número dela e sua situação (paga ou pendente).
  - Account: Deve possuir atributos para: o saldo, todos os depósitos realizados, todos os empréstimos, todas as transferências e para o dono da conta. O atributo do saldo deve ser privado e somente de leitura, ou seja, seu valor não pode ser reatribuído, somente podendo ser modificado através dos depósitos, empréstimos e transferências. Deve possuir um método para fazer um novo depósito, onde o valor do deposito será acrescentado ao saldo e a instância de Deposit ao atributos array de depósitos. Deve possuir um método para fazer um novo empréstimo, que deverá acrescentar o valor do empréstimo ao saldo e salvar a instância de Loan no atributo array de empréstimos. Deve possuir um método de fazer uma transferência, onde é verificado se a transferência foi feita para o dono da conta ou pelo dono da conta para outro usuário. Se feito para o dono da conta, o valor dela deve ser acrescentado ao saldo. Se feito pelo dono da conta para outro usuário, o valor dela deve ser descontado do saldo. Além disso, a transferência deve ser salva no atributo array de transferências.
  - User: Deve possuir atributos para nome completo, email e conta.
  - App: Deve possuir um método estático para criar um novo usuário que só permite criar um usuário por email, ou seja, se o email já estiver sendo usado por outro usuário não deverá ser utilizado novamente. Deve possuir um método estático para encontrar um usuário a partir do seu email. Deve possuir métodos estáticos para realizar as operações de depósito, transferência e empréstimo. Elas devem ter como parâmetro as informações necessárias, como o email do usuário que está realizando a operação e o valor. Deve possuir um método para alterar a taxa dos empréstimos.

## Meta

Davis Lamenha Sampaio - [Linkedin](https://www.linkedin.com/in/davislamenha/) - davislamenha@gmail.com

[Meu Github](https://github.com/davislamenha)
