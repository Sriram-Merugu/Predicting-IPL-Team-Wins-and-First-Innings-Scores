## Flask Cricket Prediction App


This is a Flask application that allows users to make predictions about cricket matches. The application uses machine learning models to predict the outcome of the match, as well as the score for the first innings.

## Getting Started

To get started with this application, you will need to have the following prerequisites installed:

- Python 3.x
- Flask
- Numpy
- Pickle
- Json
Once you have these prerequisites installed, you can run the application by following these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the python app.py command to start the Flask server.
4. Open your web browser and navigate to http://localhost:5000 to access the application.

## Predicting the First Innings Score

To predict the score for the first innings, follow these steps:

1. Navigate to the /predict route in your web browser.
2. Select the batting and bowling teams from the dropdown menus.
3. Enter the number of overs, runs, wickets, runs scored in the previous 5 overs, and wickets taken in the previous 5 overs.
4. Click the Predict button to submit the form.
5. The predicted score for the first innings will be displayed on the page.

## Predicting the Match Winner

To predict the winner of the match, follow these steps:

1. Navigate to the /teamwin route in your web browser.
2. Select the batting and bowling teams from the dropdown menus.
3. Select the toss winner from the dropdown menu.
4. Select the toss decision (bat or field) from the dropdown menu.
5. Select the venue from the dropdown menu.
6. Click the Predict button to submit the form.
7. The predicted winner of the match will be displayed on the page.

## Data

The application uses the following data sources:

- Team winners data: `./static/team_winners.json`
- First innings score prediction model: `./models/first-innings-score-lr-model.pkl`
- Match winner prediction model: `./models/predicting-matches.pkl`

These data sources are loaded when the application starts, and are used to make predictions about cricket matches.

## Technologies

This application was built using the following technologies:

- Flask: A lightweight web framework for Python.
- Numpy: A library for working with arrays and matrices in Python.
- Pickle: A library for serializing and deserializing Python objects.
- Json: A library for working with JSON data in Python.



## License

This project is licensed under the [MIT License](LICENSE).

