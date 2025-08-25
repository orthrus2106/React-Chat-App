
# React Chat

A simple real-time chat application built with modern technologies.

## Features

- Authentication: register and log in with a username and password
- Real-time messaging using WebSockets
- Language support: English and Russian (i18n)
- Channel management:
  - Create channels
  - Rename channels
  - Delete channels
- Profanity filter using leo-profanity
- Responsive design for mobile and desktop
- Form validation and error handling
- Notifications for user actions and errors

## Tech Stack

- React
- Redux Toolkit
- RTK Query
- WebSockets
- Bootstrap 5
- i18next
- React Toastify
- Formik and Yup
- Rollbar (error tracking)

## Screenshots

### 🖥️ Desktop

**Main page**
<p align="center">
  <img src="images/main_page_desktop.png" width="600">
</p>

**Creating channel**
<p align="center">
  <img src="images/create_channel_desktop.png" width="600">
</p>

---

### 📱 Mobile

**Main page**
<p align="center">
  <img src="images/main_page_mobile.png" width="300">
</p>

**Channel management**
<p align="center">
  <img src="images/create_channel_mobile.png" width="300">
</p>

**Login page**
<p align="center">
  <img src="images/login_mobile.png" width="300">
</p>


## How to run locally

```bash
git clone https://github.com/orthrus2106/React-Chat-App.git
make install
make develop
```