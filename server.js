/*
  Nome do arquivo: server.js
  Descrição: Este arquivo contém a configuração e inicialização do servidor.
  Autor: Michelle D. Pacheco
  Data: 30/04/2024
*/


import { fastify } from "fastify";

const server = fastify()

// Rota para criar um novo vídeo
server.post('/videos', () =>{

    // Retorna uma resposta de sucesso com o novo vídeo criado
    // Se ocorrer algum erro durante o processo de criação do vídeo, ele será capturado aqui
    // Retorna uma resposta de erro indicando o problema

    return 'teste'
})


// http://localhost:3333
server.listen({
    port: 3333,
})