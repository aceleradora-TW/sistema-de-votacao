# Sistema de Votação

[![CircleCI](https://circleci.com/gh/aceleradora-TW/sistema-de-votacao/tree/master.svg?style=svg)](https://circleci.com/gh/aceleradora-TW/sistema-de-votacao/tree/master)

Tentativa de automatizar o processo de recolhimento e apuração dos votos do pitch de projetos da Aceleradora.

__O que isso aqui deve fazer:__

- Mostrar a lista dos projetos que estão sendo apresentados;
- Permitir que alunas votem nos projetos diretamente dos seus dispositivos (móveis ou não) de maneira individual;
- Permitir a apuração dos votos de maneira isolada/privada, sem que ninguém veja o resultado antes do devido momento;

__O que isso aqui não deve fazer:__

- Receber novos projetos

# Executando o projeto

Idealmente, o `package.json` pode servir como guia do projeto.

Para executar todos os testes:

```
npm test
```

Para executar a aplicação em modo desenvolvimento:

```
npm run dev
```

No modo desenvolvimento é possível utilizar o [Vue Dev Tools](https://github.com/vuejs/vue-devtools)

Para executar a aplicação em modo produção:

```
npm start
```


# Tecnologia e processo


__Tecnologia__

A adoção das tecnologias desde projeto tem como intenção mantê-lo mais próximo possível da realidade da Aceleradora, podendo este projeto servir como referência (assim queremos hehe) para dúvidas pontuais à respeito do ecossistema Node. 

Este é um projeto muito pequeno e às vezes vai parecer que as tecnologias adotadas são excessivamente complexas para resolver este problema (o velha dilema de `esta aplicação poderia ser uma planilha no Excel`). Talvez seja verdade, mas o mais importante aqui é ter esse projeto como uma referência e um meio de aprendizado para pessoas acelerandas e mentoras.

Tecnologias e plataformas adotadas:

__Front-end/Single Page Application__

- [Vue.js](https://vuejs.org/)
- [Webpack](https://webpack.js.org/)
- [Node.js](https://nodejs.org/en/)

__Back-end__

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)

__Testes__

- [Jest](https://facebook.github.io/jest/)
- [Cypress](https://cypress.io)

__Plataformas__

- [Heroku](https://heroku.com)
- [MLab](https://mlab.com/)

__Integração/Entrega contínua__

A ideia é manter o processo bem simples e rápido. Este repositório foi integrado diretamente com o Heroku e cada vez que algo novo for adicionado na `master`, ocorrerá um novo deploy para staging automaticamente, portanto, nosso objetivo é sempre manter a `master` verde e pronta para ir para produção.

Por motivos de ordem, a `master` não receberá commits diretamente, pois isso implica em um novo deploy, e permitir deploy de toda e qualquer alteração sem uma verificação prévia não é uma boa ideia. 

Toda e qualquer alteração deve ser feita através de pull requests. Cada vez que um pull request for aberto, as mudanças introduzidas no mesmo serão verificadas pela nossa bateria de testes automatizados configurados no Circle CI. Se os testes passarem, estamos autorizadas a fazer o merge dessas alterações na `master`, onde uma nova bateria de testes deve correr e, finalmente, se tudo estiver bem, o deploy para o ambiente de staging.


__Ambientes:__

- [Staging](http://votacao-aceleradora.herokuapp.com/)


__Documentação (ágil):__

Um dos princípios da filosofia ágil é a de que tenhamos como prioridade maior o software funcionando do que uma vasta documentação. Por conta disso, idealmente, a maior parte da documentação sobre as decisões tomadas neste projeto estarão presentes nas cards do [kanban](https://github.com/aceleradora-TW/sistema-de-votacao/projects/1), nas [descrições das Pull Requests](https://github.com/aceleradora-TW/sistema-de-votacao/pull/7#issuecomment-377109980), nas [mensagens de commit](https://github.com/aceleradora-TW/sistema-de-votacao/commits/master), nos casos testes e no próprio código.
