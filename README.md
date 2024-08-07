# 🍽️ Calories Manager RESTful Web Services

## 📚 Project Overview

Manage daily calorie consumption, developed by **Avichai** and **Nitzan**.

## 👥 Team

- **Avichai** - avichai504@gmail.com
- **Nitzan** - 167nitzan@gmail.com

## 🗄️ Database

### 🧑‍🤝‍🧑 Users Collection

- `id`, `first_name`, `last_name`, `birthday` 🎂

### 🍔 Calories Collection

- `user_id`, `year`, `month`, `day`, `id` (server-generated), `description`, `category` (breakfast, lunch, dinner, other), `amount` 🥗

### 🗃️ Initial Data

- `id`: 123123, `first_name`: Moshe, `last_name`: Israeli, `birthday`: January 10th, 1990 🎉

## 🔗 Application Endpoints

### ➕ Add Calorie Entry

- **Endpoint**: `/addcalories/`
- **Method**: POST 📬
- **Parameters**: `user_id`, `year`, `month`, `day`, `description`, `category`, `amount`

### 🧑 Get User Details

- **Endpoint**: `/users/:id`
- **Method**: GET 📬

### 📊 Get Calorie Report

- **Endpoint**: `/report/`
- **Method**: GET 📬
- **Parameters**: `user_id`, `year`, `month`

### ℹ️ About Developers

- **Endpoint**: `/about/`
- **Method**: GET 📬

## 📝 Code Style

Follow the [JavaScript Style Guide](http://www.abelski.com/courses/stylejs/languagerules.pdf). 📜
