<p align="center">
  <img src="https://cdn-landing.arquivei.com.br/wp-content/uploads/2017/11/logo-arquivei-600x600.png?x15117"/>
  <h1 align="center"> Challege Arquivei </h1>
  <p align="center"> Frontend </p>
</p>

<p align="center">
  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg"/>
</p>


# :chart_with_upwards_trend: Solução Problema das promoções

* As variaveis ficaram em português por costume e porque ficou mais fácil de entender a lógica para mim.

* Funciona basicamente com dois parametrôs, a quantidade total da atual compra e a quantidade de todas as compras. O código basicamente analisa se a compra atual (Quantidade total de compras já efetuadas) se encaixa na primeira promoção (0.09 centavos), se sobrar consultas para serem computadas manda para a segunda promoção (0.16 centavos) e se sobrar consultas para serem computadas cobram o valor padrão (0.24 centavos).

# :books: Bibliotecas

* react-credit-cards para tornar a interface do cartão de crétido mais dinâmica e divertida.

* prop-types e check-prop-types: Uso de PropTypes e uso em testes unitários.

* check-prop-types, enzyme, enzyme-adapter-react-16 e jest-enzyme para realizar os teste unitários

# :clipboard: Algumas Justificativas

* No começo pensei em lidar com o armazenamento usando o redux-persist, porém comecei a ter dificuldades de usar os estados para alterar componentes e salvar informações, então optei por criar um banco de dados simples do firebase. (Principalmente na parte de histórico de compras, achei que ficaria um pouco mais próximo da realidade).

* Como usei consulta ao banco de dados firebase, algumas classes possuem componentWillMount e utilização de states, Poderia ter sido feito usando React-Hooks, mas achei que seria mais simples e rápido tratar diretamente na classe.

* Gostaria de justificar a mistura de indiomas que acabou ocorrendo no código, pois tenho costume de fazer em inglês e no meu trabalho atual foi decido que fizessemos tudo em português. Terei mais atenção das próxima vez.

* Não usei redux-thunk pois não há consultas a api, de forma que para a complexidade deste projeto, achei mais simples implementar na ausência de middlewares.

* A divisão dos arquivos e pasta está feito da maneira que venho trabalhando, acredito que tenha algumas boas práticas e organizações mais agradáveis.

* Para o Redux, dividi as actions conforme os pilares centrais do projeto, que ao meu ver foram Card (Cartão de crédito), User (Informações Pessoais) e Consult (Consultas). Poderia ter sido criado mais alguns para algumas manipulações, porém decidi manter o foco nestes.

* Intalei um componente npm para tornar mais visual o cadastro do cartão de crédito, espero não ter fugido muito do escopo do projeto.

* Não criei o site com TDD (Baseado em testes), de forma que os criei posteriormente.

* Como foi dito que o foco não estava no design mas sim na experiência, usei alguns componentes prontos estilizados com react-bootstrap e semantic-ui, apenas para agilidade.
