
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

## Demo

***Main page Desktop:***
![Screenshot 1](images/main_page_desktop.png)
***Creating channel Desktop:***
![Screenshot 2](images/create_channel_desktop.png)
***Main page Mobile:***
![Screenshot 3](images/main_page_mobile.png)
***Channel management Mobile:***
![Screenshot 4](images/create_channel_mobile.png)
***Login page Mobile:***
![Screenshot 5](images/login_mobile.png)
## How to run locally

```bash
git clone https://github.com/orthrus2106/React-Chat-App.git
make install
make develop
```