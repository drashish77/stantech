# Tasq - Task Management Project

Tasq is a task management application built using Next.js and Tailwind CSS, with authentication and database services provided by Firebase. This project enables users to manage their tasks efficiently by offering features such as task creation, updating, deletion, and a comprehensive table display with search and sorting functionalities.

## Demo

https://tasqq.netlify.app/

## Table of Contents

- Features
- Getting Started
- Authentication
- Usage
- Dependencies
- Contributing
- License

## Features

### Task Management

- Create new tasks
- Update existing tasks
- Delete tasks

## Firestore Integration

- Tasks are saved and retrieved from Firebase Firestore database.

## Table Display

- View all tasks in a table format
- Search tasks by name and status
- Sort tasks by name and status

## Authentication

- Sign up for a new account
- Log in with an existing account
- Log out once tasks are managed

## Getting Started

To get started with Tasq, follow these steps:

1 - Clone the repository:

```bash
git clone https://github.com/drashish77/stantech
```

2. Install dependencies:

```bash
cd tasq
yarn add
```
3. Set up Firebase:

- Create a Firebase project on the Firebase Console.
- Add a web app to your project and obtain the Firebase configuration.
- Replace the placeholder values in firebase.js with your Firebase configuration in the project root folder.

4. Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
NEXT_PUBLIC_SITE_URL=https://tasqq.netlify.app
NEXT_PUBLIC_SITE_ENV=development
NEXT_PUBLIC_YOUR_API_KEY=AIzaSyDpfFrODuI_vCZNLvfgJQUJbqj28HPo8E4
NEXT_PUBLIC_YOUR_AUTH_DOMAIN=tasq-1.firebaseapp.com
NEXT_PUBLIC_YOUR_PROJECT_ID=tasq-1
NEXT_PUBLIC_YOUR_STORAGE_BUCKET=tasq-1.appspot.com
NEXT_PUBLIC_YOUR_MESSAGING_SENDER_ID=690734504926
NEXT_PUBLIC_YOUR_APP_ID=1:690734504926:web:461dd7c73c19badbb01b4f
```

5. Run the application:

```bash
yarn dev
```

## Authentication
Tasq uses Firebase Authentication for user sign-up, login, and logout functionalities. Users must sign in to access and manage their tasks.

## Usage
- Sign Up or Log In to your Tasq account.
- Once authenticated, you can:
- Create new tasks
- Update existing tasks
- Delete tasks
- View all tasks in a table
- Search for tasks by name and status
- Sort tasks by name and status

### Dependencies
Tasq relies on the following key dependencies:

Next.js: React framework for building web applications.
Tailwind CSS: Utility-first CSS framework.
Firebase: Backend services for authentication and database.

### Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## Authors

- [@ashish](https://www.github.com/drashish77)

### License
This project is licensed under the MIT License.

Happy task managing with Tasq!
