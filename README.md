# 🪙 CoinStats Register & Login System

A simple front-end user registration and login system that assigns each user a **unique CoinStats Redirection Account Link** based on the order in which they register. Ideal for managing limited-access account redirections such as affiliate logins, wallet trackers, or credential-based link verification.

---

## 🔗 Live Demo

> Coming soon (once GitHub Pages is deployed)

---

## 📁 Project Details

- **Repository**: `coinstats-register-Login`
- **Owner**: [Binancewebonline](https://github.com/Binancewebonline)
- **Email**: `coinstatssystem@outlook.com`

---

## 🚀 How It Works

1. First user to register gets redirected to:
   - `https://coinstats.app/p/6ZMCaw6MoUJe19M`
2. Second user gets the second link, and so on.
3. Each user is associated with one link upon registration and always redirected to it upon login.

---

## 🔐 Redirection Accounts

| User Order | User ID            | Redirection Link                                             |
|------------|--------------------|--------------------------------------------------------------|
| 1st        | `6ZMCaw6MoUJe19M`  | https://coinstats.app/p/6ZMCaw6MoUJe19M                     |
| 2nd        | `MnWIlxup31WTwie`  | https://coinstats.app/p/MnWIlxup31WTwie                     |
| 3rd        | `AODn1d7anqTWlQG`  | https://coinstats.app/p/AODn1d7anqTWlQG                     |
| 4th        | `YlaLJkOhuai4nAx`  | https://coinstats.app/p/YlaLJkOhuai4nAx                     |
| 5th        | `UpnvcxwHNgeZRld`  | https://coinstats.app/p/UpnvcxwHNgeZRld                     |

---

## 📦 Technologies Used

- ✅ HTML5
- ✅ CSS3
- ✅ JavaScript (Vanilla)
- 🗂 localStorage (for in-browser credential handling)

---

## 🧪 Local Setup Instructions

```bash
git clone https://github.com/Binancewebonline/coinstats-register-Login.git
cd coinstats-register-Login
open index.html
