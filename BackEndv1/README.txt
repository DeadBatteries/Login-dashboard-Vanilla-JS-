# 🔐 Login & Dashboard Seguro — Node.js + Vanilla JS

Sistema completo de autenticação com sessão, desenvolvido com **Node.js puro (sem frameworks) no backend e JavaScript Vanilla (ES Modules) no frontend.

---

## 🚀 Demonstração

* Login com validação de credenciais
* Criação de sessão com token seguro
* Dashboard protegido por autenticação
* Logout com invalidação de sessão

---

## 🧠 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Entender profundamente como funciona autenticação
* Construir um sistema sem abstrações (sem Express, sem bibliotecas)
* Aprender na prática, resolvendo problemas reais de desenvolvimento
* Simular um fluxo real de login utilizado em aplicações web

---

## 🏗️ Arquitetura

```
project/
│
├── backend/
│   ├── server.js
│   ├── session.json
│   └── storage.js
│
├── frontend/
│   ├── html/
│   ├── css/
│   └── js/
│       ├── api/
│       ├── render/
│       └── script.js
```

---

## 🔧 Tecnologias Utilizadas

* Node.js (HTTP nativo)
* JavaScript (ES Modules)
* Fetch API
* Cookies (HttpOnly)
* JSON como armazenamento
* CSS (gerado com auxílio de IA)

---

## 🔐 Funcionalidades

### ✅ Login

* Validação de email e senha
* Resposta com status HTTP adequado (200 / 401)

### 🔑 Sessão

* Geração de token seguro com `crypto`
* Armazenamento de sessões em `session.json`
* Associação: `token → usuário`

### 🍪 Autenticação via Cookie

* Cookie HttpOnly (não acessível via JS)
* Persistência de sessão no navegador

### 🔒 Rota protegida (`/dashboard`)

* Leitura e validação do cookie
* Verificação da sessão no backend
* Retorno dos dados do usuário autenticado

### 🚪 Logout

* Remoção da sessão do servidor
* Expiração do cookie no navegador

---

## 🔄 Fluxo da Aplicação

1. Usuário faz login
2. Backend valida credenciais
3. Backend gera token e salva sessão
4. Cookie HttpOnly é enviado ao navegador
5. Frontend acessa `/dashboard`
6. Backend valida sessão
7. Dados do usuário são retornados
8. Dashboard é renderizado dinamicamente

---

## 🎯 Aprendizados Técnicos

Durante o desenvolvimento, foram resolvidos diversos problemas reais:

* MIME Types (`application/javascript`)
* Estruturação de servidor de arquivos estáticos
* Caminhos relativos e resolução de paths
* Uso correto de ES Modules (`type="module"`)
* Diferença entre Network vs execução de scripts
* Ordem de execução do DOM (`DOMContentLoaded`)
* Debug de erros silenciosos
* Integração frontend ↔ backend sem frameworks

---

## 🧠 Metodologia

O projeto foi desenvolvido com uma abordagem de aprendizado:

* Teoria + prática simultânea
* Construção manual de todas as funcionalidades
* Debugging intensivo de erros reais
* Uso de IA como suporte técnico e ferramenta de aprendizado

> O CSS da interface foi gerado com auxílio de IA, enquanto toda a lógica, arquitetura e implementação do sistema foram desenvolvidas manualmente.

---

## ⚠️ Limitações Atuais

* Armazenamento em JSON (não escalável)
* Senhas não estão criptografadas 
* Sem banco de dados real
* Sem proteção contra CSRF

---

## 🚀 Possíveis Melhorias

* Migrar para Node.js + Express
* Implementar banco de dados (MongoDB/PostgreSQL)
* Hash de senha (script)
* Refresh tokens / JWT
* Sistema de permissões (roles)
* Melhorias de UI/UX

---

## 💼 Sobre o Projeto

Este projeto demonstra:

* Capacidade de construir sistemas do zero
* Entendimento profundo de autenticação
* Resolução de problemas reais
* Evolução rápida em backend e frontend

---

## 📌 Conclusão

Este não é apenas um projeto funcional, mas uma base sólida para sistemas reais, com foco em **segurança, entendimento técnico e boas práticas**.

---
