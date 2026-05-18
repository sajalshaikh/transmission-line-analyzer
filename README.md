# Transmission Line Performance Calculator (PTS-CEP)

An enterprise-grade, responsive full-stack web application designed to simulate, analyze, and evaluate critical electrical power transmission system constraints. This tool provides real-time, asynchronous estimations for line **Voltage Drop** ($V = I \times Z$) and resistive **Power Loss** ($P = I^2 \times R$) using localized computational models.

Developed as part of the Complex Engineering Problem (CEP) requirement for the **Power Transmission Systems** course at **Air University, Islamabad**.

---

## 🚀 Key Highlights & Technical Capabilities

- **Decoupled Architecture:** Built on a split Client-Server model that separates layout elements entirely from the computational math kernel.
- **Asynchronous Data Transport:** Uses the JavaScript **Fetch API** to exchange structural JSON objects silently over network sockets, completely bypassing legacy page refreshes.
- **Modern UI/UX Design System:** Powered by an advanced CSS3 token registry (`:root` variables) featuring CSS Grid card grids, structural flex boxes, and dynamic viewport responsiveness.
- **Secure Handling Mechanics:** Replaces dangerous DOM-writing methods with strict `.innerText` handling patterns to neutralize Cross-Site Scripting (XSS) injection vulnerabilities.

---

## 🛠️ The Tech Stack

### Backend Engine (The Kitchen)
- **Python 3:** Core programming language executing pure mathematical engineering logic.
- **Flask:** Lightweight WSGI web framework operating as a stateless RESTful API endpoint configuration system.

### Frontend Dashboard (The Dining Room)
- **HTML5:** Semantic architecture layout (`<main>`, `<section>`, `<article>`) optimizing document tree parsing.
- **CSS3 Design Tokens:** Unified theme management utilizing clean variables for flexible cross-device visibility.
- **Vanilla JavaScript:** Event-driven network communication interface utilizing modern promise chaining.

---

## 📐 Mathematical Engineering Models

The platform accurately processes power system equations through isolated Python calculations:

### 1. Voltage Drop ($V_{\text{drop}}$)
Models the loss of driving electrical pressure across a designated transmission segment caused by conductor impedance:
$$V_{\text{drop}} = Z \times I$$
*Where $Z = \text{Line Impedance } (\Omega)$, and $I = \text{Load Current } (\text{Amperes})$.*

### 2. Resistive Power Loss ($P_{\text{loss}}$)
Calculates active thermal power leakage dissipating into the surrounding atmosphere as a result of active conductor resistance:
$$P_{\text{loss}} = R \times I^2$$
*Where $R = \text{Line Conductor Resistance } (\Omega)$, and $I = \text{Load Current } (\text{Amperes})$.*

---

## 🛡️ Cybersecurity & Defensive Engineering Blueprint
As a project built for highly audited network infrastructure contexts, the architecture actively treats security as a top priority:

1. **Input Type Restraints:** Input fields implement explicit structural validation attributes (`type="number"`, `min="0"`, `required`) right inside the browser to block invalid characters before network transport.
2. **XSS Vulnerability Mitigation:** Avoids parsing raw JSON text fields via `.innerHTML`. It utilizes strict `.innerText` assignments so the web browser treats execution responses exclusively as safe textual strings.
3. **Encapsulation of Intellectual Property:** Core logic formulas sit quietly inside protected backend containers. Client browsers can only observe interface parameters and clean data results, protecting system source operations.

---

## 📊 Verification Test Matrices

The engine achieves 100% computational compliance when verified against theoretical baselines:

| Engineering Assessment Vector | Input Variable A | Input Variable B | Expected Outcome | System Validation |
| :--- | :--- | :--- | :--- | :--- |
| **Voltage Drop Analysis** | Impedance = $5.0 \ \Omega$ | Current = $10.0 \ \text{A}$ | **$50.00 \ \text{V}$** | ✅ Compliant / Verified |
| **Power Loss Analysis** | Resistance = $3.0 \ \Omega$ | Current = $10.0 \ \text{A}$ | **$300.00 \ \text{W}$** | ✅ Compliant / Verified |

---

## ⚙️ Local Installation & Deployment Guide

Follow these steps to clone and launch this full-stack environment locally on your development machine:

### 1. Clone the Workspace
```bash
git clone [https://github.com/YOUR_USERNAME/transmission-line-calculator.git](https://github.com/YOUR_USERNAME/transmission-line-calculator.git)
cd transmission-line-calculator
