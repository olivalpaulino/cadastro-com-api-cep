## Projeto Formulário de Cadastro React com a API ViaCEP

O projeto formulário de cadastro React consome a api ViaCep disponibilizado em: https://viacep.com.br/ 

# Descrição do Projeto:

O projeto consistem em um formulário simples, com 5 campos (inputs), para inserção de dados. Os campos são: Nome Completo, Logradouro, Bairro, Cep, Estado e Cidade. <br>
O campo Cep possui um botão para realizara pesquisa, via consumo da API ViaCEP. Caso Encontre as informações, ele preenche os demais campos com elas. 

# Recursos Utilizados para Este Projeto:

Neste projeto, utilizei o hook **useState** em conjunto com **programação assíncrona** (assync, await e fetch). <br>
Também utilizei a criação dos componentes: Input, Botao e Formulario (que possui um conjunto de Input e Botao).

# Para Realizar o Download e Preparação do Projeto:

Após baixar o projeto com o comando: **git clone https://github.com/olivalpaulino/cadastro-com-api-cep** <br>
Acesse a pasta do projeto com: **cd cadastro-com-api-cep** <br>
Por fim, execute o comando: **npm install** para baixar as dependências necessárias

# Para executar o Projeto

Basta executar o comando: **npm start**