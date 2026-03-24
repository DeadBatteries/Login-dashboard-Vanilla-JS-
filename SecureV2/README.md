# Login+Dashboard
Sistema de login + dashboard em JavaScript puro, desenvolvido para estudo de autenticação, manipulação de estado e exploração de vulnerabilidades como XSS e session forgery.

# 🔐 Secure Auth System (Vanilla JS)

## 📌 Overview

This project is a **pure JavaScript (Vanilla JS) authentication system** built with the goal of learning:

* Frontend architecture
* Authentication flows
* Web security vulnerabilities
* Practical attack and defense techniques

The system evolved from a **basic login implementation** into a **token-based authentication model**, with intentional vulnerabilities explored and later mitigated.

---

## 🎯 Objectives

* Build a functional login + dashboard system
* Understand how authentication works in real applications
* Simulate real-world vulnerabilities
* Learn how attackers exploit systems
* Apply security best practices to fix them

---

## 🧱 Technologies Used

* JavaScript (Vanilla)
* LocalStorage (as mock database/session)
* Modular structure (separation of concerns)

---

## ⚙️ Features

* User login system
* Session persistence using LocalStorage
* Token-based authentication
* Dynamic DOM rendering
* Modular architecture:

  * `auth.js`
  * `storage.js`
  * `render.js`

---

## 🚨 Vulnerabilities Explored

### 1. Session Forgery

**Issue:**
User session was stored directly in LocalStorage.

```js
localStorage.setItem("session", user)
```

**Exploit:**
An attacker could manually inject a fake session via browser console:

```js
localStorage.setItem("session", JSON.stringify({...}))
```

**Impact:**
Unauthorized access without valid credentials.

---

### 2. XSS (Cross-Site Scripting)

**Issue:**
User data was rendered using `innerHTML`.

```js
element.innerHTML = userInput;
```

**Exploit:**
Injected malicious payload:

```html
<img src=x onerror=alert('XSS')>
```

**Impact:**
Execution of arbitrary JavaScript in the browser.

---

## 🛡️ Security Improvements

### ✅ 1. Token-Based Authentication

* Replaced user session with a **UUID token**
* Token is generated on login:

```js
crypto.randomUUID()
```

* Stored in:

  * User object
  * LocalStorage (session)

---

### ✅ 2. Session Validation

* Session is validated by matching token with stored users:

```js
users.find(u => u.token === token)
```

* Invalid or tampered sessions are automatically cleared

---

### ✅ 3. XSS Protection

* Replaced `innerHTML` with `textContent`

```js
element.textContent = userInput;
```

* Prevents execution of injected HTML/JS

---

### ✅ 4. Data Integrity

* Ensured full user array is updated and persisted
* Avoided overwriting LocalStorage with partial data

---

## 🧠 Key Learnings

* Never trust client-side data
* LocalStorage is easily manipulated
* XSS is one of the most dangerous frontend vulnerabilities
* Authentication must rely on **unpredictable identifiers (tokens)**
* Security must be validated **on every read**, not just on write
* Data structure consistency is critical

---

## ⚠️ Known Limitations

This is a **frontend-only simulation**, so:

* Tokens can still be accessed via JavaScript (LocalStorage)
* No real backend validation
* No HTTP-only cookies or secure headers

---

## 🚀 Next Steps

Planned improvements:

* Simulate token theft via XSS
* Implement protection strategies
* Migrate authentication logic to a backend (Node.js)
* Explore JWT-like systems
* Add role-based access (admin/user)

---

## 📚 Learning Approach

This project was built with a **hands-on security mindset**:

1. Build feature
2. Break it (attack)
3. Understand the flaw
4. Fix it properly

---

## 👨‍💻 Development Notes

* All logic and implementation were written manually
* AI tools (ChatGPT, Claude) were used as **copilots for guidance and learning**, not for code generation
* Focus was on understanding, not copying

---

## 🔥 Final Thoughts

This project represents a transition from:

> “making things work”

to:

> “understanding how systems break and how to secure them”

---

## 📌 Author

Developed as part of a personal study journey in **JavaScript, security, and web architecture**.
