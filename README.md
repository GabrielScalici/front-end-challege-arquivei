# ChallengeFrontEnd



# Bibliotecas

* react-credit-cards para tornar a interface do cartão de crétido mais dinâmica e divertida.

* prop-types e check-prop-types: Uso de PropTypes e uso em testes unitários.

* check-prop-types, enzyme, enzyme-adapter-react-16 e jest-enzyme para realizar os teste unitários

# Algumas Justificativas

* No começo pensei em lidar com o armazenamento usando o redux-persist, porém comecei a ter dificuldades de usar os estados para alterar componentes e salvar informações, então optei por criar um banco de dados simples do firebase. (Principalmente na parte de histórico de compras, achei que ficaria um pouco mais próximo da realidade).

* Como usei consulta ao banco de dados firebase, algumas classes possuem componentWillMount e utilização de states, Poderia ter sido feito usando React-Hooks, mas achei que seria mais simples e rápido tratar diretamente na classe.

* Gostaria de justificar a mistura de indiomas que acabou ocorrendo no código, pois tenho costume de fazer em inglês e no meu trabalho atual foi decido que fizessemos tudo em português. Terei mais atenção das próxima vez.

* Não usei redux-thunk pois não há consultas a api, de forma que para a complexidade deste projeto, achei mais simples implementar na ausência de middlewares.

* A divisão dos arquivos e pasta está feito da maneira que venho trabalhando, acredito que tenha algumas boas práticas e organizações mais agradáveis.

* Para o Redux, dividi as actions conforme os pilares centrais do projeto, que ao meu ver foram Card (Cartão de crédito), User (Informações Pessoais) e Consult (Consultas). Poderia ter sido criado mais alguns para algumas manipulações, porém decidi manter o foco nestes.

* Intalei um componente npm para tornar mais visual o cadastro do cartão de crédito, espero não ter fugido muito do escopo do projeto.

* Não criei o site com TDD (Baseado em testes), de forma que os criei posteriormente.

* Como foi dito que o foco não estava no design mas sim na experiência, usei alguns componentes prontos estilizados com react-bootstrap e semantic-ui, apenas para agilidade.