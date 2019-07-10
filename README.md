<p align="center">
  <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5bc4845c3a10040001a46c1c/0x0.png"/>
  <h1 align="center"> Challege Arquivei </h1>
  <p align="center"> Frontend </p>
</p>

<p align="center">
  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg"/>
</p>

# :file_folder: Organização das pastas

### Principais Pastas

    .
    ├── ...
    ├── src                     # Arquivos principais
    │   ├── components          # Components com seu respectivo unit test
    │   ├── images              # Imagens e Icones estilizados
    │   └── redux               # Implementação do redux
    │   │   ├── actions 
    │   │   ├── reducers
    │   │   ├── store
    │   ├── screens             # Telas principais do programa
    │   ├── utils               # Itens uteis (Neste caso para a config do firebase)
    │   ├── setupTests.js       # Config inicial do enzyme para unit tests
    │   ├── Styles.css          # Estilos principais (Pouco usado pela ausencia de tanto foco em design)
    │   ├── App.js              # Config da barra de Navegação e Router entre telas
    ├── ...

# :hammer: Solução Problema das promoções

* Usando dois parametrôs, a quantidade total da compra e a quantidade de todas as compras. O algoritmo analisa se a compra atual (levando em conta seu histórico de comprar) se encaixa na primeira promoção (0.09 centavos), se sobrar consultas, manda para a segunda promoção (0.16 centavos) e cobram o valor padrão nas que sobrarem (0.24 centavos).

# :fire: Justificativa do uso Firebase

* O firebase poderia ser evitado, usando o redux-persist, criando um array que se manteria salvo, e seria contatenado um novo valor a cada compra, porem optei por usar o firebase para mostrar uma forma diferente de trabalhar com tais dados, e manter salvos tanto o cartão como o usuário, independente do redux.

* Vale lembrar que o redux-persist está sendo usado para manter salvo alguns valores de forma mais fácil do que acessar a base de dados todas as vezes.

# :lipstick:Auxílio Interface

* Como foi dito que o foco não estava na interface, foram usadas algumas bibliotecas prontas para ajudar.

* semantic-iu : https://semantic-ui.com
* react-bootstrap: https://react-bootstrap.github.io (usada inclusiva para manter a responsividade do site.)


# :mag_right: Unit Tests

### Função de promoção da Arquivei

* Testado dentro do componente BuyConsult.test.js, pois o pagamento da consulta faz parte de seu escopo. (Função sale)

```
expect(sale(0, 2)).toBe(0.18);
expect(sale(0, 1000)).toBe(90.00);
expect(sale(0, 1024)).toBe(93.84);
expect(sale(0, 2500)).toBe(370.00);
expect(sale(0, 10000)).toBe(2170.00);
```

### Demais testes

* PropTypes utilizados.

* Testes de renderização condicional de componentes em UserRegister.test.js. Há uma visualização diferente caso já tenha usuário e/ou cartão cadastrado.

* Foram criados alguns testes para verificar o funcionamento das actions, diretamente na pasta actions.

# :chart_with_upwards_trend: Funcionamento do gráfico

* Gráfico do número da compra em função da quantidade comprada

* Está responsivo com uma análise feita à mão pra descobrir tamanho da tela

* A responsividade funciona quando o componente é renderizado em uma tela, caso seja mexido seu comprimento com a mão, a responsividade não está funcionando, apenas quando já abre em determinada largura.


# :books: Bibliotecas

* react-credit-cards para tornar a interface do cartão de crétido mais dinâmica e divertida.

* prop-types e check-prop-types: Uso de PropTypes e uso em testes unitários.

* check-prop-types, enzyme, enzyme-adapter-react-16 e jest-enzyme para realizar os teste unitários

* firebase, uso de banco de dados simples para mostrar armazenar cadastros e exibir lista de compras.

* axios para buscar informações de uma url

* recharts para a criação do gráfico

# :abc: Consulta API - axios

* Primeiramente tentei encomprar uma url para que com passagem de paramêtros pudesse ser buscado informações sobre notas fiscais eletrônicas, porém algumas que era usadas direto da receita federal, estavam com captcha, procurei em alguns fórums, mas não achei nada relevante

* Resolvi usar uma url do github (Buscar foto e nome do usuário), apenas para mostrar o funcionamento do axios, de maneira simples.

* Vale lembrar que a busca do github foge completamente ao escopo do projeto, é meramente ilustrativo.

# :clipboard: Algumas Justificativas

* React-Hooks simples, usado para render condicional.

* Redux-persist foi usado apenas para gerar facilitar o trabalho visual e iterações de maneira mais fáci, para que não fosse acessado do banco de dados toda vez.

* Como usei consulta ao banco de dados firebase, algumas classes possuem componentWillMount e utilização de states, Poderia ter sido feito usando React-Hooks ou outra solução, mas por simplicidade tratei diretamente na classe.

* Gostaria de justificar a mistura de português/inglês que acabou ocorrendo no código. Tenho costume de fazer em inglês e no meu emprego atual era pedido em português.

* Não usei redux-thunk pois a consulta a api é simples e rápida

* A divisão dos arquivos e pasta está feito da maneira que venho trabalhando, acredito que tenha algumas boas práticas e organizações mais agradáveis.

* Para o Redux, dividi as actions conforme os pilares centrais do projeto, que ao meu ver foram Card (Cartão de crédito), User (Informações Pessoais) e Consult (Consultas). Poderia ter sido criado mais alguns para algumas manipulações, porém decidi manter o foco nestes.

* O site não foi criado TDD, de forma que criei alguns testes posteriormente.

* Como foi dito que o foco não estava no design mas sim na experiência, usei alguns componentes prontos estilizados com react-bootstrap e semantic-ui, apenas para agilidade.
