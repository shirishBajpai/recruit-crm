## Recruit-CRM Project Summary
The recruit-crm project is a candidate management application designed to fetch and display candidate details from an API. The key features and functionalities include:

### Fetching Candidate Details:

- The application fetches candidate details from the API endpoint http://localhost:30001/candidate-details.
- The fetched candidate details are displayed on a board for easy viewing.

### Editing Candidate Details:

- Users can edit candidate details by clicking on an edit icon (pen icon) located at the top right corner of the header.
- When the edit icon is clicked, a form is displayed where users can modify the candidate details.

### State Management with Redux:

- Redux is used for managing the state of the application.
- The candidate details fetched from the API are stored in the Redux store.
- Any changes made to the candidate details are also managed through Redux, ensuring a centralized and consistent state across the application.

### Saving Changes:

- Once the user edits the candidate details, the changes can be saved by submitting the form.
- The updated candidate details are sent back to the server using a PUT request to the API endpoint http://localhost:30001/candidate-details.


This project provides a seamless way to manage candidate information with a user-friendly interface and robust state management using Redux.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `API's`

API runs at [http://localhost:3001](http://localhost:3001) to view it in your browser.

