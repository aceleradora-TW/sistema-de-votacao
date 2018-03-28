# Sistema de Votação

Tentativa de automatizar o processo de recolhimento e apuração dos votos do pitch de projetos da Aceleradora.

__O que isso aqui deve fazer:__

- Mostrar a lista dos projetos que estão sendo apresentados;
- Permitir que alunas votem nos projetos diretamente dos seus dispositivos (móveis ou não) de maneira individual;
- Permitir a apuração dos votos de maneira isolada/privada, sem que ninguém veja o resultado antes do devido momento;

__O que isso aqui não deve fazer:__

- Receber novos projetos


# Tecnologia e processo

Por enquanto, Node e Vue.js. Com a intenção de manter o projeto próximo da realidade da Aceleradora.

A ideia é manter o processo bem simples e por isso, este repositório foi integrado diretamente com o Heroku e cada vez que algo novo for adicionado na `master`, ocorrerá um novo deploy para staging. 

A `master` não receberá commits diretamente (pois isso implica em um novo deploy). Toda e qualquer alteração deve ser feita através de pull requests.


__Ambientes:__

- [Staging](http://votacao-aceleradora.herokuapp.com/)
