# Chatbot Multilíngue com Firebase

Este é um chatbot multilíngue para atendimento ao cliente, integrado com Firebase para armazenamento de dados.

## Funcionalidades

- Suporte a três idiomas: Português, Inglês e Espanhol
- 8 departamentos com perguntas específicas
- Coleta de informações do cliente (nome, telefone, e-mail, CNPJ)
- Armazenamento de dados no Firebase Firestore
- Interface responsiva e amigável

## Estrutura do Banco de Dados

### Coleção: departamentos
Documentos com os campos:
- `nome`: Nome do departamento
- `perguntas`: Array com as perguntas frequentes

### Coleção: contatos
Documentos com os campos:
- `nome`: Nome completo do cliente
- `telefone`: Telefone do cliente
- `email`: E-mail do cliente
- `cnpj`: CNPJ do cliente
- `idioma`: Idioma selecionado (PT/EN/ES)
- `departamento`: Departamento selecionado
- `desejaHumano`: Boolean indicando se deseja atendimento humano
- `criadoEm`: Timestamp da criação do registro

## Configuração

### 1. Criar projeto no Firebase

1. Acesse o [Console do Firebase](https://console.firebase.google.com/)
2. Clique em "Criar projeto" ou "Adicionar projeto"
3. Siga as instruções para configurar seu projeto

### 2. Configurar o Firestore

1. No console do Firebase, clique em "Firestore Database" no menu lateral
2. Clique em "Criar banco de dados"
3. Escolha as regras de segurança (para teste, use o modo de teste)
4. Selecione a localização do seu banco de dados

### 3. Configurar a coleção de departamentos

1. No Firestore, clique em "Iniciar coleção"
2. Nomeie a coleção como `departamentos`
3. Adicione documentos com a seguinte estrutura:

Exemplo para o departamento "Recursos Humanos (RH)":
```javascript
{
  nome: "Recursos Humanos (RH)",
  perguntas: [
    "Como enviar meu currículo?",
    "Há vagas abertas atualmente?",
    "Vocês oferecem estágio?",
    "Como funciona o processo seletivo?",
    "A empresa tem programa de trainee?"
  ]
}