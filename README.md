# 💰 User Payout Management System

A **Node.js + Express + MongoDB** backend application that simulates a user payout management system. It allows businesses to manage users, sales, advance payouts, reconciliations, wallet balances, and withdrawals through REST APIs.

---

# 🚀 Features

* 👤 User Management
* 💼 Automatic Wallet Creation
* 🛍️ Sales Management
* 💸 Advance Payout Processing (10% of Earnings)
* ✅ Sale Reconciliation
* 💰 Wallet Management
* 🏦 Withdrawal Requests
* 🔄 Failed Withdrawal Refund
* 📋 Transaction History
* ✅ Request Validation (Joi)
* ⚠️ Global Error Handling
* 🏗️ Clean MVC Architecture

---

# 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Joi
* dotenv

---

# 📁 Project Structure

```text
User-Payout-System/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── validators/
├── assets/
├── app.js
├── package.json
├── README.md
└── .env.example
```

---

# ⚙️ Installation

```bash
git clone <repository-url>

cd User-Payout-System

npm install
```

Create a `.env` file.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string
```

Start the server.

```bash
npm start
```

or

```bash
npm run dev
```

---

# 🌐 Base URL

```
http://localhost:3000
```

---

# 📌 API Endpoints

## 👤 Users

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| POST   | /users   | Create User   |
| GET    | /users   | Get All Users |

---

## 🛍️ Sales

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| POST   | /sales     | Create Sale    |
| GET    | /sales     | Get All Sales  |
| GET    | /sales/:id | Get Sale by ID |
| PATCH  | /sales/:id | Update Sale    |

---

## 💸 Payout

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| POST   | /payouts/advance       | Process Advance Payout |
| PATCH  | /payouts/reconcile/:id | Reconcile Sale         |

---

## 🏦 Withdrawals

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| POST   | /withdrawals            | Create Withdrawal        |
| PATCH  | /withdrawals/:id/status | Update Withdrawal Status |

---

# 📷 Screenshots

## 🟢 API Running



assets/screenshots/Screenshot 2026-07-19 153809.jpg


---

## 👤 Create User

![Create User](<assets/screenshots/Screenshot 2026-07-19 143935.png-1.jpg>)

---

## 👥 Get Users

![Get Users](<assets/screenshots/Screenshot 2026-07-19 144410-1.jpg>)

---

## 🛍️ Create Sale

![Create Sale](<assets/screenshots/Screenshot 2026-07-19 144616-1.jpg>)

---

## 📋 Get All Sales

![Get Sales](<assets/screenshots/Screenshot 2026-07-19 144816-1.jpg>)

---

## 💸 Process Advance Payout

![Advance Payout](<assets/screenshots/Screenshot 2026-07-19 145341-1.jpg>)

---

## ✅ Reconcile Sale

![Reconcile Sale](<assets/screenshots/Screenshot 2026-07-19 150134-1.jpg>)

---

## 🏦 Create Withdrawal

![Create Withdrawal](<assets/screenshots/Screenshot 2026-07-19 150748-1.jpg>)

---


## ❌ Re-Withdrawal Within 24 Hour

![Re-Withdrawal](<assets/screenshots/Screenshot 2026-07-19 152714-1.jpg>)

---

## 🗄️ Users Collection

![Users Collection](<assets/screenshots/Screenshot 2026-07-19 154916-1.jpg>)

---

## 💼 Wallet Collection

![Wallet Collection](<assets/screenshots/Screenshot 2026-07-19 155003-1.jpg>)

---

## 🛒 Sales Collection

![Sales Collection](<assets/screenshots/Screenshot 2026-07-19 155050-1.jpg>)

---

## 💳 Transactions Collection

![Transactions Collection](<assets/screenshots/Screenshot 2026-07-19 155127-1.jpg>)

---

## 🏦 Withdrawals Collection

![Withdrawals Collection](<assets/screenshots/Screenshot 2026-07-19 155239-1.jpg>)

---

# 🔄 Business Workflow

```text
Create User
      │
      ▼
Wallet Created Automatically
      │
      ▼
Create Sale
      │
      ▼
Advance Payout (10%)
      │
      ▼
Wallet Updated
      │
      ▼
Sale Reconciliation
      │
      ▼
Remaining Amount Added
      │
      ▼
Withdrawal Request
      │
      ▼
Completed / Failed
      │
      ├──────────────┐
      ▼              │
Completed        Failed
                     │
                     ▼
             Wallet Refunded
```

---

# 📂 Database Collections

* Users
* Wallets
* Sales
* Transactions
* Withdrawals

---

# 🧪 Testing

The APIs were tested using **Hoppscotch**.

Tested modules:

* ✅ User APIs
* ✅ Sales APIs
* ✅ Advance Payout
* ✅ Reconciliation
* ✅ Withdrawal
* ✅ Failed Withdrawal Refund
* ✅ Wallet Updates
* ✅ Transaction Creation

---

# 📌 Future Improvements

* JWT Authentication
* Role-Based Authorization
* Pagination
* Swagger/OpenAPI Documentation
* Docker Support
* Unit & Integration Testing
* MongoDB Transactions for Production
* CI/CD Pipeline

---

## 👨‍💻 Built by

Amarnath Gupta (panditgupta01)

GitHub: https://github.com/panditgupta01 <br>
LinkedIn: https://linkedin.com/in/panditgupta01 <br>
Twitter/X: https://twitter.com/panditgupta01 <br>
Instagram: https://www.instagram.com/panditgupta01 <br>

---
