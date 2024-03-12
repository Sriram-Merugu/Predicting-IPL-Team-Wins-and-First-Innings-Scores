# Importing essential libraries
from flask import Flask, render_template, request
import pickle
import numpy as np
import json

app = Flask(__name__)

# Importing all the required data
with open('./static/team_winners.json') as f:
    team_winners_data = json.load(f)
teams = team_winners_data[1]['variables']['teams']
venues = team_winners_data[1]['variables']['venues']


# Home page
@app.route('/')
def home():
    return render_template('home.html')


# First Innings Score Prediction
@app.route('/predict', methods=['POST', 'GET'])
def predict():
    temp_array = list()

    if request.method == 'POST':

        batting_team = request.form['batting-team']
        temp_array += [1 if i == batting_team else 0 for i in teams]

        bowling_team = request.form['bowling-team']
        temp_array += [1 if i == bowling_team else 0 for i in teams]

        overs = float(request.form['overs'])
        runs = int(request.form['runs'])
        wickets = int(request.form['wickets'])
        runs_in_prev_5 = int(request.form['runs_in_prev_5'])
        wickets_in_prev_5 = int(request.form['wickets_in_prev_5'])

        temp_array = temp_array + [overs, runs, wickets, runs_in_prev_5, wickets_in_prev_5]

        # Load the Linear Regression Model
        filename = './models/first-innings-score-lr-model.pkl'
        regressor = pickle.load(open(filename, 'rb'))

        data = np.array([temp_array])
        my_prediction = int(regressor.predict(data)[0])

        return render_template('predict.html', x=0, lower_limit=my_prediction - 10, upper_limit=my_prediction + 5)
    else:
        return render_template('predict.html', x=0, teams=teams)


# Team Win Prediction
@app.route('/teamwin')
def teamwin():
    return render_template('predict.html', venues=venues, x=1, teams=teams)


@app.route('/teamwinner', methods=['POST', 'GET'])
def teamwinner():
    data = [1, 0, 0]
    if request.method == 'POST':
        batting_team = request.form['batting-team']

        tmp = [1 if i == batting_team else 0 for i in teams]
        tmp.pop(0)
        data += tmp

        bowling_team = request.form['bowling-team']
        tmp = [1 if i == bowling_team else 0 for i in teams]
        tmp.pop(0)
        data += tmp

        toss_winner = request.form['toss-winner']
        tmp = [1 if i == toss_winner else 0 for i in teams]
        tmp.pop(0)
        data += tmp

        decision = request.form['toss-decision']
        if decision == 'field':
            data.append(1)
        else:
            data.append(0)

        data.append(0)
        venue = request.form['venue']
        tmp = [1 if i == venue else 0 for i in venues]
        data += tmp

        # Load the Bagging Classifier model
        filename1 = './models/predicting-matches.pkl'
        model, encoder = pickle.load(open(filename1, 'rb'))
        my_pred = model.predict([data])

        decoded_labels = encoder.inverse_transform(my_pred)

        return render_template('predict.html', x=1, team=decoded_labels[0], venues=venues, teams=teams)
    else:
        render_template('predict.html', x=1, teams=teams, venues=venues)


# All the teams which have previously won the matches
@app.route('/teams')
def team():
    return render_template('teams.html', team_winners=team_winners_data[0]['teams'])


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
