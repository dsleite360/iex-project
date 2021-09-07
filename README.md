"*Esse tutorial foi baseado em um sistema operacional Windows 10, mudando pouca coisa sobre instalação e configuração em outros sistemas como Linux e Mac*"

"*Se o Windows perguntar sobre instalar, permitir ou confiar em alguma instalação ou configuração do software devemos permitir*"

### Requerimentos



1º - Instalar o **Node.js** na sua máquina escolhendo a versão do seu sistema operacional, site para download: https://nodejs.org/ escolha a versão **LTS**, após fazer o download do instalador e executar, instalar o **Node.js** é bem simples, podemos clicar em **Next>**, marcar a caixinha de aceito do termo, clicar em **Next>**, **Next>**, **Next>**, **Next>** até aparecer o botão de **Install>**, após isso aguardamos a instalação do **NODE.js** e clicaremos no botão **Finish**>.


2º - Instalar o **Postgress** na sua máquina escolhendo a versão do seu sistema operacional, site para download: https://www.postgresql.org/ clicar no botão **download**, selecione a versão do seu sistema operacional, clique em "**Download the installer**" de preferência para a versão ***13 do Postgress*** ou a versão mais recente do seu sistema operacional, após o download inicie o instalador:


1ª tela - tela de setup clicaremos em **Next>**;

2ª tela - sobre o diretório de instalação clicaremos em **Next>**;

3ª tela - sobre os componentes do banco clicaremos em **Next**>;

4ª tela - sobre diretório data clicaremos em **Next>**;

5ª tela - sobre password precisamos colocar a senha do usurário postgres nos dois campos em branco a senha é: "teste" assim que colocar a senha "teste" nos dois campos, clicaremos em **Next**>;

6ª tela - sobre a porta onde o banco vai rodar o postgres o padrão da porta: **5432** deixaremos o padrão e clicaremos em **Next**>;

7ª tela - podemos deixar como default locale e clicar em **Next**>;

8ª tela - sobre o sumário da instalação clicaremos em **Next**>;

9ª tela - tela onde estará pronto para instalação clicaremos em **Next**>;


"*Vamos aguardar a instalação do postgres ser concluída...*"


Após a instalação do **Postgres**, vai aparecer a nossa 10ª e última tela onde vamos "**DESMARCAR**" a opção "***Stack BUilder may be used to download and install additional tools, drivers and applications to complement your PostgreSQL installation***" e clicar no botão **Finish>**;


3º Instalar o **DBeaver** na sua máquina escolhendo a versão do seu sistema operacional, site para download: https://dbeaver.io clique em **Download**, selecione a versão do seu sistema operacional e baixe a versão "**Installer**", execute o instalador. Na primeira tela aperte **ok**,  essa tela vai aparecer novamente para clicarmos em **ok** em algum momento não se preocupe, parecendo que não foi instalado o programa. Nas telas seguintes, marque a opção para aceitar os termos e clique em **Seguinte>**, clique em **ok>** novamente, **Seguinte>**,  **Aceito>**, **Seguinte>** , **Seguinte>**, **Instalar>**, após isso clique em **Terminar>**.


4º Instalar o **Visual Studio Code** na máquina escolhendo a versão do seu sistema operacional, site para download: https://code.visualstudio.com/ a instalação desse programa é bem simples, precisamos apenas clicar em aceitar os termos na primeira tela, e após isso clicar em **Próximo>**, **Próximo>**, **Instalar>**, **Concluir>**.



### CONFIGURAÇÂO



1º Abriremos o **DBeaver** e clicaremos na primeira tela de tips/dicas em **close**, iremos clicar no botão na parte superior à esquerda onde tem o desenho de uma tomada "new database connection" aqui é onde iremos visualizar as informações do nosso banco de dados. Após clicar na tomada vamos selecionar o nosso banco de dados o **postgreSQL** que foi nossa segunda instalação em requisitos, após selecionar **postgreSQL** clicaremos no botão **Next>**, "*às vezes o programa pode pedir para fazer download do driver, se o seu sistema operacional não tiver e só clicar em download*". Na próxima tela devemos inserir/digitar a nossa senha nos dois campos  "**Password**" onde está em branco e  colocaremos a senha "***teste***", após colocar a senha e confirmar a mesma clicaremos no botão **Finish**. O sistema vai criar o nosso banco com o nome "**postgres**" que já é o padrão, esse é o lugar onde salvaremos nossas pesquisas.


2º No diretório do github em https://github.com/dsleite360/iex-project iremos baixar o projeto clicando no botão **Code**, *o mesmo se destaca no início da página pela sua cor ser verde*. Após clicarmos no botão iremos selecionar a última opção "**Download ZIP**", geralmente esse arquivo é salvo na pasta\downloads do seu computador. Iremos até a pasta onde foi feito o download do arquivo, vamos selecionar o arquivo e extrair o mesmo, podemos clicar com o botão direito do mouse sobre o arquivo **iex-project-master.zip** e após abrir uma janela clicar na opção "extrair tudo" ou *"extract to here" se voce possuir o programa winrar*, escolha onde você deseja salvar o projeto e clique no botão Extrair.


3º Agora com a pasta **iex-project-master** extraída, dentro dela existem duas pastas do nosso sistema:  pasta backend com o nome de **iex-backend** e a pasta de frontend com o nome **iex-frontend**. Precisamos acessar a raiz da pasta **iex-backend** e colocar o arquivo “.env “que foi disponibilizado, *esse arquivo é onde ficam as senhas e configurações sensíveis do nosso sistema*. Vamos copiar o arquivo **.env** ,  acessar a pasta do backend, **iex-backend** e colar o arquivo na raiz da pasta. OBS: "Esse arquivo pode parecer estranho, mas ele tem de possuir esse nome exato **".env"** sim ele tem um **"."** na frente do **"env"** assim formando **.env** ".


4º *Configurando o backend*: Vamos abrir o editor de código, aqui iremos utilizar o **Visual Studio Code** que instalamos no requisito 4º anteriormente. Após abrir **Visual Studio Code**, clicaremos na parte superior à esquerda em **Arquivo>Abrir Pasta** se o seu **Visual Studio Code** for inglês vamos clicar em **File> Open Folder** . Navegar até nossa pasta do backend lembra do nome? **iex-backend**. Quando achar a nossa pasta do backend clicaremos no botão "**Selecionar pasta**". *"Pode ser que aparecer alguma mensagem para confiar no autor do projeto, se aparecer iremos clicar em sim, confiamos".* Após selecionar a pasta **iex-backend**, chegou a hora de instalar o nosso projeto e rodar o mesmo no **Visual Studio Code**. Clique em **Terminal>Novo Terminal**, abrirá uma janela dentro do **Visual Studio Code**, *esse é o nosso terminal de comandos*. Clicaremos nele e iremos digitar com o comando "***npm install***", após digitar, dê **Enter** . O terminal começará a instalar as dependências do projeto, esse processo pode demorar um pouco. Assim que terminar a instalação poderemos usar o nosso terminal de comandos, digitando o seguinte comando "***npm start***". Se tudo estiver configurado corretamente, o sistema de backend já vai estar rodando dentro do Visual Studio Code. Poderemos ver o terminal com algumas linhas coloridas em verde, branco e amarelo, sinal que o nosso sistema backend já está funcionando. Lembrando que precisamos estar com o arquivo "**.env**" na raiz do projeto para evitar qualquer tipo de erro com o banco de dados. "***PRECISAMOS DEIXAR O VISUAL STUDIO CODE MINIMIZADO E ABRIR OUTRA INSTÂNCIA DO VISUAL STUDIO CODE***"


    **OBS MUITO IMPORTANTE ABAIXO:**
                  
***"COMO INFORMADO NO FINAL DO 4º PASSO, É MUITO IMPORTANTE DEIXAR O VISUAL STUDIO CODE RODANDO COM O COMANDO "NPM START", É ESSE COMANDO QUE FAZ O NOSSO BACKEND FUNCIONAR. AGORA PARA COMEÇAR O  5º PASSO, ABRIREMOS UM NOVO VISUAL STUDIO CODE NO WINDOWS, E ASSIM FICAMOS COM 2 VISUAL STUDIO CODE EM FUNCIONAMENTO AO MESMO TEMPO".***

    **FIM DA OBS**


5º "*Configurando o frontend*": Agora abriremos uma nova instância do **Visual Studio Code**. Lembrando que já temos um Visual Studio Code aberto! Procure o atalho do mesmo no Windows, podendo ir ao menu iniciar onde tem o ícone/logo do Windows e digitar, "**Visual Studio Code**". Clique em cima do ícone para abrir uma nova instância do **Visual Studio Code**. Praticamente repetiremos o passo nº 4,  clicaremos na parte superior à esquerda em **Arquivo>Abrir Pasta**, iremos navegar até pasta do frontend, **iex-frontend**, quando acharmos a nossa pasta do frontend clicaremos no botão "**Selecionar pasta**". *"Pode ser que apareça alguma mensagem para confiar no autor do projeto, se aparecer iremos clicar em sim, confiamos"*. Após selecionar a pasta **iex-frontend**, chegou a hora de instalar o nosso projeto e rodar o mesmo no **Visual Studio Code**. **Clique em Terminal>Novo Terminal** , abrirá uma janela dentro do **Visual Studio Code**, esse é o nosso terminal de comandos. Clicaremos nele e digitaremos o comando "**npm install**". Após digitar, aperte a tecla **Enter**, o terminal vai começar a instalar as dependências do projeto frontend, esse processo pode demorar um pouco. Assim que terminar a instalação, poderemos usar o nosso terminal de comandos, digitando o seguinte comando, "**npm start**". Se configurado corretamente, o próprio sistema  deverá abrir no seu navegar para uso. Se o mesmo não abrir automaticamente, você vai precisar abrir o seu navegador de internet, por exemplo o google chrome e digitar na URL: http://localhost:3000/



### RESUMO SOBRE O SISTEMA



*O sistema é baseado na API IEX onde inserimos um símbolo no input do sistema e quando clicamos no botão buscar, o sistema verifica se esse símbolo já existe no banco de dados, se não existir o sistema vai consumir a API da IEX e salvar alguns campos com o nome da empresa, o símbolo de pesquisa, o último preço da cotação, a hora que foi feita a cotação e salva no banco de dados. Agora se o símbolo pesquisado já existir no banco de dados, o sistema pega as informações do banco e faz uma pequena checagem, se essa informação salva no banco já possuir uma diferença de 15 minutos, o sistema fará uma nova consulta na API para trazer novos valores e salvar no banco, evitando assim consumo desnecessários da API da IEX. O sistema também disponibiliza um status em tempo real via banco de dados onde a cada 10 segundos ele faz uma consulta no banco de dados, se existir símbolos salvos no banco ele vai mostra em tela e atualizará os dados se existir alguma mudança.*



### SOBRE O SISTEMA



Frontend desenvolvido em:  **_"REACTJS"_**

Backend desenvolvido em  **_"Nodejs/NESTJS"_**
