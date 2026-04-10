# 🔐 Login Dashboard Security Lab

Projeto prático focado em **autenticação, sessões e exploração de vulnerabilidades web (XSS / CSRF)** utilizando **Node.js puro** e **JavaScript Vanilla**.

---

## 🎯 Objetivo

Construir um sistema completo de autenticação **do zero**, entendendo:

* Como sessões funcionam internamente
* Como cookies HttpOnly operam
* Como ataques reais exploram falhas no frontend/backend
* Como pensar como atacante **e** como defensor

---

## 🏗️ Estrutura do Projeto

```
/backend        → servidor HTTP + autenticação + sessões
/frontend       → interface (login + dashboard)
/attack-site    → simulação de ataques (XSS / CSRF)
```

---

## 🚀 Tecnologias

* Node.js (sem frameworks)
* JavaScript Vanilla (ES Modules)
* HTTP nativo (`http.createServer`)
* File System (`fs`) para persistência de sessão
* Fetch API

---

## 🔐 Funcionalidades Implementadas

### Backend

* Login com validação de credenciais
* Geração de sessão com `crypto.randomBytes`
* Armazenamento de sessão em arquivo (`session.json`)
* Cookie HttpOnly
* Rota protegida (`/api/dashboard`)
* Logout com invalidação de sessão

---

### Frontend

* Login via Fetch API
* Controle de autenticação por status HTTP
* Renderização dinâmica do dashboard
* Redirecionamento baseado em autenticação

---

## 💣 Segurança e Ataques Explorados

### ✔ XSS (Cross-Site Scripting)

* DOM-based XSS via URL (`URLSearchParams`)
* Execução de código via `innerHTML`
* Payloads com:

  * `<img onerror=...>`
  * `<svg onload=...>`

---

### ✔ CSRF (Cross-Site Request Forgery)

* Requisições POST automáticas
* Exploração sem interação do usuário
* Testes com formulários e fetch

---

### ✔ Exfiltração de dados

* Uso de XSS para acessar `/api/dashboard`
* Envio de dados para servidor externo
* Testes com:

  * `fetch()`
  * `new Image()` (bypass CORS)

---

## ⚠️ Vulnerabilidades Identificadas

* Uso inseguro de `innerHTML`
* Falta de sanitização de inputs
* Dependência de dados da URL sem validação
* Ausência de proteção contra XSS (CSP, escaping)

---

## 🧪 Como Rodar o Projeto

### 1️⃣ Backend

```
cd backend
node server.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

### 2️⃣ Attack Site

```
cd attack-site
npx serve
```

Servidor rodando em (exemplo):

```
http://localhost:8080
```

---

## 🧠 Como Testar XSS

Acesse:

```
http://localhost:3000/html/login.html?name=<img src=x onerror=alert(1)>
```

---

## 🧠 Aprendizados

* Segurança web não depende apenas do backend
* O frontend pode ser o maior vetor de ataque
* Cookies HttpOnly **não protegem contra XSS**
* XSS permite executar ações como o próprio usuário
* Pequenos erros (`innerHTML`) podem gerar grandes vulnerabilidades

---

## 🚀 Próximos Passos

* Implementar proteção contra XSS (escape / sanitização)
* Adicionar Content Security Policy (CSP)
* Migrar backend para Express
* Implementar autenticação com cookies seguros + HttpOnly + SameSite
* Criar sistema de cadastro real
* Persistência com banco de dados

---

## ⚠️ Aviso

Este projeto é apenas para fins educacionais.

Não utilize essas técnicas em sistemas reais sem autorização.

---

## 👨‍💻 Autor

Desenvolvido como laboratório prático de aprendizado em segurança web e desenvolvimento fullstack.
