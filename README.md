# User register form

User register form is an app, where you can register user, fill data inside modal window and save it. Saved data appears inside the table bellow. You can edit entered users data by clicking its row on the table. All the data is saved to browsers local storage.

### Prerequisites
Before you start installing things, make sure that you have:
```
"node": ">=10.0.0",
"npm": ">=6.0.0"
```

### Installing 
Install dependencies:
```
$ npm install
```
Start the project:
```
$ npm start
```

### Folder structure

App contains 7 folders in src directory:

- **blocks** holds main project blocks which are contained with other smaller components.
- **components** holds smallest components which are reused in all the project.
- **modals** holds modal windows.
- **pages** holds project pages. Because it is just one page app it contains just one page in it.
- **state** is responsible for all redux stuff and app logic.
- **style** holds main style guidlines and varables. All other styles are separated inside components
- **utils** holds reusable functions of the project. It also contains redux store setup

### Main Project libraries

- **React** main project library on which all app is based.
- **Redux** for centralizing application's state and logic.
- **Redux-saga**  middleware for redux to handle side effect.
- **React-places-autocomplete**  A React component to build a customized UI for Google Maps Places Autocomplete.

### Todo list

- Make better validations including min characters length, email input and number input;
- Create email and number inputs components;
- Add filters to table that you could filter user data and sort it;
- Make app mobile friendly;
- Fully test with all browsers;
- Table pagination or infinity scroll after 10 rows;
