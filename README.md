This project is demoed for create-todo-app<br>

## Add Firebase to Your Project

- Go to [Firebase Console](https://console.firebase.google.com/), and create a new project called create-todo-app.
- Create a new Realtime Database and make Firebase Authentication with Google account available.
- Create config file in this project, and put your API key, projectID, databaseURL and authDomain into it.

```
cd src/firebase
touch config.js
```

- Installs Firebase-CLI

```
npm install -g firebase-tools
```

- The more details you can follow by [My Medium Blog](https://medium.com/@oasis10702/%E5%89%8D%E7%AB%AF%E4%BA%BA%E7%9A%84%E6%95%91%E6%98%9Ffirebase%E7%9A%84%E7%94%A8%E9%80%94%E8%88%87%E5%AF%A6%E4%BD%9Ctodolist-c7af49fe3104)

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all packages which this project need.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
