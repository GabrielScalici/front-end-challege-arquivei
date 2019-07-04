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
    ├── ...

# :chart_with_upwards_trend: Solução Problema das promoções

* As variaveis ficaram em português por costume e porque ficou mais fácil de entender a lógica para mim.

* Usando dois parametrôs, a quantidade total da compra e a quantidade de todas as compras. O algoritmo analisa se a compra atual (levando em conta seu histórico de comprar) se encaixa na primeira promoção (0.09 centavos), se sobrar consultas, manda para a segunda promoção (0.16 centavos) e cobram o valor padrão nas que sobrarem (0.24 centavos).

# :fire: Justificativa do uso Firebase

* O firebase poderia ser evitado, usando o redux-persist, criando um array que se manteria salvo, e seria contatenado um novo valor a cada compra, porem optei por usar o firebase para mostrar uma forma diferente de trabalhar com tais dados, e manter salvos tanto o cartão como o usuário, independente do redux.

* Vale lembrar que o redux-persist está sendo usado para manter salvo alguns valores de forma mais fácil do que acessar a base de dados todas as vezes.

# :mag_right: Unit Tests

# :books: Bibliotecas

* react-credit-cards para tornar a interface do cartão de crétido mais dinâmica e divertida.

* prop-types e check-prop-types: Uso de PropTypes e uso em testes unitários.

* check-prop-types, enzyme, enzyme-adapter-react-16 e jest-enzyme para realizar os teste unitários

* firebase, uso de banco de dados simples para mostrar armazenar cadastros e exibir lista de compras.

# :clipboard: Algumas Justificativas

* Redux-persist foi usad, apenas para gerara impressão visual e iterações de maneira mais fáci, para que não fosse acessado do banco de dados toda vez.

* Como usei consulta ao banco de dados firebase, algumas classes possuem componentWillMount e utilização de states, Poderia ter sido feito usando React-Hooks ou outra solução, mas por simplicidade tratei diretamente na classe.

* Gostaria de justificar a mistura de português/ingl6es que acabou ocorrendo no código. Tenho costume de fazer em inglês e no meu emprego atual era pedido em português.

* Não usei redux-thunk pois não há consultas a api, de forma que para a complexidade deste projeto, achei mais simples implementar na ausência de middlewares.

* A divisão dos arquivos e pasta está feito da maneira que venho trabalhando, acredito que tenha algumas boas práticas e organizações mais agradáveis.

* Para o Redux, dividi as actions conforme os pilares centrais do projeto, que ao meu ver foram Card (Cartão de crédito), User (Informações Pessoais) e Consult (Consultas). Poderia ter sido criado mais alguns para algumas manipulações, porém decidi manter o foco nestes.

* Foi instalado um componente npm para tornar mais visual o cartão de crédito.

* O site não foi criado baseado em testes, de forma que os criei posteriormente.

* Como foi dito que o foco não estava no design mas sim na experiência, usei alguns componentes prontos estilizados com react-bootstrap e semantic-ui, apenas para agilidade.
