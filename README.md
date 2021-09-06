_"Esse tutorial foi baseado em um sistema operacional Windows 10, mudando pouca coisa sobre instalação e configuração em outros sistemas como Linux e Mac"_

_"Se o Windows perguntar sobre instalar, permitir ou confiar devemos permitir"_

**Requerimentos**

**_1º_** instalar o **Node.js** na sua máquina escolhendo a versão do seu sistema operacional, site para download: [https://nodejs.org/](https://nodejs.org/) escolha a versão **LTS**, após fazer o download do instalador, instalar o Node e bem simples, podemos clicar em **Next** marcar a caixinha de aceito de termo clicar em **Next>**, **Next>**, **Next>**, **Next>** até aparecer o botão de **Install>**, após isso aguardamos a instalação do **NODE.js** e clicaremos no botão **Finish**.

**_2º_** instalar o **Postgress** na máquina escolhendo a versão do seu sistema operacional site para download: [https://www.postgresql.org/](https://www.postgresql.org/) clicar no botão download, selecione a versão do seu sistema operacional, clique em **"Download the installer"** de preferência para a versão 13 do postgres ou a versão mais recente do seu sistema operacional, clique em **download** para fazer o download do instalador, após o download inicie o instalador:

**_1ª tela -_** tela de setup clicaremos em **Next>**;

**_2ª tela -_** sobre o diretório de instalação clicaremos em **Next>**;

**_3ª tela -_** sobre os componentes do banco clicaremos em **Next>**;

**_4ª tela_** - sobre diretório data clicaremos em **Next>**;

**_5ª tela_** - sobre password precisamos colocar a senha do usurário postgres nos dois campos em branco a senha é: "**_teste_**" assim que colocar a senha teste "**_teste_**" nos dois campos clicaremos em **Next>**;

**_6ª tela_** - sobre a porta onde o banco vai rodar o postgres o padrão da porta: **_5432_** deixaremos o padrão e clicaremos em **Next>**;

**_7ª tela_** - podemos deixar como default locale e clicar em **Next>**;

**_8ª tela_** - sobre o sumário da instalação clicaremos em **Next>**;

**_9ª tela_** - tela onde tudo está pronto para instalação clicaremos em **Next>**;

"_vamos aguardar a instalação do **postgres** ser concluída..._"

Após a instalação do **postgres** vai aparecer a nossa **_10ª e última tela_** onde vamos desmarcar a opção "**_Stack BUilder may be used to download and install additional tools, drivers and applications to complement your PostgreSQL installation_**" e clicar em **Finish**;

3º instalar o **DBeaver** na máquina escolhendo a versão do seu sistema operacional, site para download: [https://dbeaver.io](https://dbeaver.io/) clique em **Download**, selecione a versão do seu sistema operacional e baixe a versão **Installer**, execute o instalador, e a primeira tela aperte **ok** essa tela vai aparecer novamente para clicarmos em **ok** parecendo que não foi instalado o programa, na segunda tela seguinte marque a opção para aceitar os termos e clique em **Seguinte**, clique em **ok** novamente, **Seguinte**, **Aceito**, **Seguinte**, **Seguinte**, **Instalar**, após isso clique em **Terminar.**

4º instalar o **Visual Studio Code** na máquina escolhendo a versão do seu sistema operacional site para download: [https://code.visualstudio.com/](https://code.visualstudio.com/) a instalação desse programa e bem simples, precisamos apenas clicar em aceitar os termos na primeira tela, e após isso clicar em **Próximo**, **Próximo**, **Instalar**, **Concluir**.

**CONFIGURAÇÂO**

**_1º_** - Abriremos o **DBeaver** podem clicar na primeira tela de tips/dicas em **close**, **_iremos clicar no botão na parte superior onde tem o desenho de uma tomada "new database connection"_** aqui é onde iremos visualizar as informações do nosso banco de dados. Após clicar na tomada vamos selecionar o nosso banco de dados o **postgreSQL** que foi nossa segunda instalação em requisitos, após selecionar **postgreSQL** clicaremos no botão **Next**, " _as vezes o programa pode pedir para fazer download do driver se o seu sistema operacional não tiver e só clicar em_ **download"**, na próxima nova tela devemos inserir a nossa senha no "campo **Password**" onde está em branco colocaremos "**teste**" após digitar a senha clicaremos no botão **Finish**. O sistema vai criar o nosso banco com o nome "postgres" que já e o padrão, esse e o lugar onde salvaremos nossas pesquisas.

**_2º_** - No diretório do github em [https://github.com/dsleite360/iex-project](https://github.com/dsleite360/iex-project) iremos baixar o projeto clicando no botão **Code** o mesmo se destaca na página pela sua cor ser verde. Após clicarmos no botão iremos selecionar a última opção "**Download ZIP**" geralmente esse arquivo e salvo na pasta _\downloads_ do seu computador, vamos até a pasta onde foi feito o download do arquivo, achando o arquivo vamos extrair o mesmo, podemos clicar com o botão direito do mouse sobre o arquivo **_iex-project-master_** e clicar na opção "**_extrair tudo_**" escolha onde você deseja salvar o projeto e clique no botão **Extrair**.

**_3º_** - Agora com a pasta **iex-project-master** extraída, dentro dela existem duas pastas do nosso sistema a pasta backend com o nome de: **iex-backend** e a pasta de frontend com o nome: **iex-frontend** , precisamos acessar a raiz da pasta **iex-backend** colocando o arquivo **.env** que foi disponibilizado esse arquivo e onde ficam as senhas e configurações sensíveis do nosso sistema vamos copiar esse arquivo **.env** acessar a no pasta do backend: **iex-backend** e colar o **.env** na raiz da pasta. **OBS:** "Esse arquivo tem o nome diferente, mas ele tem que possuir esse nome **_".env”,_** sim ele tem um **_"."_** na frente do **_"env"_** assim formando **_.env_** "

**_4º - "Configurando o backend":_** Vamos abrir o editor de código, aqui iremos utilizar o **_Visual Studio Code_** que instalamos no requisito 4º, após abrir **_Visual Studio Code_** clicaremos na parte superior esquerda em **_Arquivo_**>**_Abrir Pasta..._** iremos navegar ate onde nossa pasta do backend lembra do nome ? **_iex-backend_** quando acharmos a nossa pasta do backend clicaremos no botão "**_Selecionar pasta_**", "_pode ser que aparecer alguma mensagem para confiar no autor do projeto se aparecer iremos clicar em **sim, confiamos**_" após selecionar a pasta **_iex-backend_** chegou a hora de instalar o nosso projeto e rodar o mesmo no **_Visual Studio Code_** clique em **_Terminal_**>**_Novo Terminal_** vai abrir uma janela dentro do **_Visual Studio Code_** esse é o nosso **_terminal de comandos_**, clicaremos nele e iremos digitar com o teclado o comando "**_npm install_**" após digitar aperte a tecla **_Enter_** do teclado, o terminal vai começar a instalar as dependências do projeto esse processo pode demorar uma pouco assim que terminar a instalação poderemos usar o nosso **_terminal de comandos_** , agora no **_terminal de comandos_** vamos digitar o seguinte comando "**_npm start_**" se tudo estiver configurado corretamente, o sistema de backend ja vai estar rodando dentro do **_Visual Studio Code_** podemos ver o terminal com algumas linhas coloridas em verde, branco e amarelo e sinal que o nosso sistema backend já está funcionando, "lembrando que precisamos estar com o arquivo **_".env"_** na raiz do projeto para evitar qualquer tipo de erro com o banco de dados", **_"PRECISAMOS DEIXAR O VISUAL STUDIO CODE MINIMIZADO, E ABRIR UMA OUTRA INSTÂNCIA DO VISUAL STUDIO CODE"_**

***OBS MUITO IMPORTANTE ABAIXO:***

**_COMO INFORMADO NO FINAL DO 4º PASSO E MUITO IMPORTANTE DEIXAR O VCODE RODANDO COM O COMANDO "NPM START" ESSE COMANDO QUE FAZ O NOSSO BACKEND FUNCIONAR, AGORA PARA COMEÇAR O PASSO 5 VAMOS ABRIR UM NOVO VISUAL STUDIO CODE, VAMOS PROCURAR ELE NO WINDOWS E ABRIR ASSIM FICANDO COM 2 VISUAL STUDIO CODE EM FUNCIONAMENTO AO MESMO TEMPO_**

***FIM DA OBS***

**_5º "Configurando o frontend":_** agora iremos abrir uma nova instância do **Visual Studio Code** lembrando que já temos um **Visual Studio Code** aberto! Iremos abrir outro, procure o atalho do mesmo no Windows podemos ir no menu iniciar onde tem o ícone/logo do Windows e digitar "**_Visual Studio Code_**" clique em cima para abrir uma nova instância do **Visual Studio Code**, após abrir um novo **Visual Studio Code** vamos praticamente repetir o **_passo nº 4_**, vamos clicar na parte superior esquerda em **_Arquivo_**>**_Abrir Pasta..._** iremos navegar até onde nossa pasta do frontend -> **_iex-frontend_** quando acharmos a nossa pasta do frontend clicaremos no botão "**_Selecionar pasta_**", "_pode ser que aparecer alguma mensagem para confiar no autor do projeto se aparecer iremos clicar em **sim, confiamos**_" após selecionar a pasta **_iex-frontend_** chegou a hora de instalar o nosso projeto e rodar o mesmo no **_Visual Studio Code_** clique em **_Terminal_**>**_Novo Terminal_** vai abrir uma janela dentro do **_Visual Studio Code_** esse é o nosso **_terminal de comandos_**, clicaremos nele e iremos digitar com o teclado o comando "**_npm install_**" após digitar aperte a tecla **_Enter_** do teclado, o terminal vai começar a instalar as dependências do projeto frontend esse processo pode demorar uma pouco assim que terminar a instalação poderemos usar o nosso **_terminal de comandos_** , agora no **_terminal de comandos_** vamos digitar o seguinte comando "**_npm start_**" se tudo estiver configurado corretamente, após isso o próprio sistema já deverá ser aberto no seu navegar para uso, se o mesmo não abrir automaticamente, você precisar abrir o seu navegador de internet, por exemplo o google chrome e digitar na URL: [http://localhost:3000/](http://localhost:3000/)

**RESUMO SOBRE O SISTEMA**

_O sistema é baseado na api IEX onde inserimos um símbolo no input do sistema e quando clicamos no botão buscar o sistema verifica se esse símbolo já existe no banco de dados, se não existir o sistema vai consumir a API da IEX e salvar alguns campos com o nome da empresa, o símbolo de pesquisa, o ultimo preço da cotação e a hora que foi feita a cotação e salva no banco de dados, agora se o símbolo pesquisado já existir no banco de dados o sistema pega as informações do banco e faz uma pequena checagem se essa informação salva no banco de já possuem uma diferença de 15 minutos se tiver ele faz uma nova consulta na API para trazer novos valores e salvar no banco evitando assim consumo desnecessários da API da IEX, o sistema também disponibiliza um status em tempo real via banco de dados onde a cada 10 segundos ele faz uma consulta no banco de dados, se existir símbolos salvos no banco ele vai mostra em tela e atualizando os dados se existir alguma mudança nos dados do banco._

**SOBRE O SISTEMA**

Frontend desenvolvido em: **_REACTJS_**

Backend desenvolvido em **_NESTJS_**
