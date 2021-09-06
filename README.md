### Requerimentos

1º instalar o Node.js na sua máquina escolhendo a versão do seu sistema operacional,  
site para download: https://nodejs.org/ escolha a versão LTS acima da 14, a instalação 
do Node e bem simples, pode clicar em next>next>next até a instalação ser concluída.

2º instalar o Postgress na máquina escolhendo a versão do seu sistema operacional  
site para download: https://www.postgresql.org/ de preferência para a versão 13 do postgress
a primeira tela podemos clicar em next, segunda sobre o diretorio de instalação clicar em next,
terceira tela sobre os componentes do banco clicar em next, quarta tela diretorio data clicar em next
na tela Password precisamos colocar a senha "postgres" nos dois campos de senha da tela e clicar em
next, na tela de seleção da porta podemos deixar a padrão "5432" apos essa tela podemos clicar em next 
ate ele comecar a fazer a instalação do banco, após terminar essa parte de instalação vai aparecer
mais uma tela onde podemos desmarcar a opão *Stack Builder may be used to download and install...
e clicar no botão Finish.

3º instalar o DBeaver na máquina escolhendo a versão do seu sistema operacional,
site para download: https://dbeaver.io a instação desse programa e bem simples, precisamos apenas
clicar em next ou seguinte, ok, seguinte ate o termino da instalação.

4º instalar o Visual Studio Code na máquina escolhendo a versão do seu sistema operacional
site para download: https://code.visualstudio.com/ a instação desse programa e bem simples, precisamos apenas
clicar em aceitar os termos na primeira tela, e apos isso clicar em proximo > proximo >instalar.



### CONFIGURAÇÂO


1º Abriremos o DBeaver podem clicar na primeira tela em close, ele vai abrir uma nova janela onde 
precisamos escolher o nosso banco de dados PostgreSQL, apos selecionar postgreSQL clicaremos em 
next, nessa nova tela devemos inserir a nossa senha no campo Password onde esta em branco colocaremos
"postgres" após digitar a senha clicaremos no botão Finish. Apos aguardar alguns segundos nossa conexão 
com o banco esta ok, devemos clicar com o botao direito do mouse em cima do postgres onde vai abrir
algumas opões, clicaremos na segunda onde esta escrito Create -> Database, na nova pequena tela que
abriu colocaremos o nome do nosso banco de dados, Database name: "iex_backend" e clicaremos em ok,
o nosso banco de dados ira aparecer na listagem podemos colocar ele como default clicando com o
botão direito em cima e clicando em Set as default, já podemos fechar o DBeaver.

2º no diretorio do github em https://github.com/dsleite360/iex-project iremos baixar o projeto 
clicando no botão verde Code em seguida clique em Download Zip e salve em algum lugar onde iremos rodar
o projeto. Após o download da pasta do projeto precisamos extrair os aquivos, podemos clicar duas vezes
em cima do zip e arrastar a pasta iex-project-master para fora do zip.

3º colocando o arquivo .env no backend do projeto, iremos navegar na pasta iex-project-master\iex-backend 
e colocaremos o arquivo .env que foi disponibilizado dentro desta pasta ou seja na raiz da pasta iex-backend.

4º "configurando o backend" > iremos abrir o editor de codigo, aqui iremos utilizar o VSCODE que instalamos no requisito 4º,
apos abrir VSCODE clicaremos na parte superior em Arquivo>Abrir Pasta... iremos navegar ate a nossa pasta 
\iex-backend e clicaremos no botão Selecionar pasta, apos selecionar a pasta \iex-backend clicaremos em
Terminal>Novo Terminal com o termina aberto, iremos digitar "npm install" apos digitar clique no botão Enter 
no teclado, vamos aguardar o gerenciador instalar as dependencias do sistema para que o mesmo possa funcionar
podemos acompanhar o processo sendo executado dentro do terminal, acabando a instalação iremos executar um 
novo comando no terminal "npm start". O sistema do backend sera inicializado, apos isso podemos minimizar o 
VSCODE, o nosso backend ja esta pronto para ser utilizado. "OBS IMPORTANTE: não podemos fechar e essa 
instancia do vscode o que iremos fazer agora e abrir outra instancia do VSCODE".

5º "configurando o frontend" > agora iremos abrir uma nova instância do VSCODE procure o atalho do mesmo na sua 
maquina e clique em abrir, iremos fazer uma configuração muito parecida com a do backend apos abrir uma nova
instância do VSCODE iremos em Arquivo>Abrir Pasta... iremos navegar ate a nossa pasta 
\iex-frontend e clicaremos no botão Selecionar pasta, apos selecionar a pasta \iex-frontend clicaremos em
Terminal>Novo Terminal com o termina aberto, iremos digitar "npm install", após a istalação das dependencias
executar um novo comando no terminal "npm start", apos isso o propio sistema ja devera ser aberto no seu navegar
para uso, se o mesmo não abrir automaticamente, voce precisar abrir o seu navegador de internet, google chrome
e digitar na URL: http://localhost:3000/


##RESUMO SOBRE O SISTEMA

	O sistema e e baseado na api IEX onde inserimos um símbolo no input do sistema e quando clicamos no botão buscar
o sistema verifica se esse símbolo já existe no banco de dados, se nao existir o sistema vai consumir a 
API da IEX e salvar alguns campos com o nome da empresa, o simbolo de pesquisa, o o ultimo preço da cotação e a hora que 
foi feita a cotação e salva no banco de dados, agora se o símbolo pesquisado ja existir no banco de dados o sistema pega as
informações do banco e faz uma pequena checagem se essa informação salva no banco de ja possuem uma diferença de 15 minutos
se tiver ele faz uma nova consulta na API para trazer novos valores e salvar no banco evitando assim consumo desnecessarios da 
API da IEX, o sistema tambem disponibiliza um status em tempo real via banco de dados onde a cada 10 segundos ele faz uma consulta 
no banco de dados, se existir simbolos salvos no banco ele vai mostra em tela.

## SOBRE O SISTEMA

frontend desenvolvido em: REACTJS
backend desenvolvido em: NEST
