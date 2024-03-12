
function validateForm() {
        var battingTeam = document.getElementById("batting-team").value;
        var bowlingTeam = document.getElementById("bowling-team").value;
        var overs = document.getElementById("overs").value;
        var runs = document.getElementById("runs").value;
        var wickets = document.getElementById("wickets").value;
        var runsInPrev5 = document.getElementById("runs_in_prev_5").value;
        var wicketsInPrev5 = document.getElementById("wickets_in_prev_5").value;

        // Reset error messages
        document.getElementById("batting-team-error").innerHTML = "";
        document.getElementById("bowling-team-error").innerHTML = "";
        document.getElementById("overs-error").innerHTML = "";
        document.getElementById("runs-error").innerHTML = "";
        document.getElementById("wickets-error").innerHTML = "";
        document.getElementById("runs-in-prev-5-error").innerHTML = "";
        document.getElementById("wickets-in-prev-5-error").innerHTML = "";

        // Check if any field is empty
        if (battingTeam === "") {
            document.getElementById("batting-team-error").innerHTML = "Please select a batting team";
            shakeField("batting-team");
            
            return false;
        }

        if (bowlingTeam === "") {
            document.getElementById("bowling-team-error").innerHTML = "Please select a bowling team";
            shakeField("bowling-team");
            
            return false;
        }

        if (overs === "") {
            document.getElementById("overs-error").innerHTML = "Please enter the number of overs";
            shakeField("overs");
            
            return false;
        }

        if (runs === "") {
            document.getElementById("runs-error").innerHTML = "Please enter the number of runs";
            shakeField("runs");
            
            return false;
        }

        if (wickets === "") {
            document.getElementById("wickets-error").innerHTML = "Please enter the number of wickets";
            shakeField("wickets");
            
            return false;
        }

        if (runsInPrev5 === "") {
            document.getElementById("runs-in-prev-5-error").innerHTML = "Please enter the runs scored in the previous 5 overs";
            shakeField("runs_in_prev_5");
            
            return false;
        }

        if (wicketsInPrev5 === "") {
            document.getElementById("wickets-in-prev-5-error").innerHTML = "Please enter the wickets taken in the previous 5 overs";
            shakeField("wickets_in_prev_5");
            
            return false;
        }

        // Check if batting team and bowling team are different
        if (battingTeam === bowlingTeam) {
            document.getElementById("bowling-team-error").innerHTML = "Batting team and Bowling team should be different";
            shakeField("batting-team");
            shakeField("bowling-team");
            
            return false;
        }

        // Check if input fields for overs, runs, wickets, runs_in_prev_5, wickets_in_prev_5 are numeric
        if (isNaN(parseFloat(overs)) || isNaN(parseFloat(runs)) || isNaN(parseInt(wickets)) || isNaN(parseFloat(runsInPrev5)) || isNaN(parseInt(wicketsInPrev5))) {
            document.getElementById("submit-error").innerHTML = "Overs, Runs, Wickets, Runs in Previous 5 Overs, and Wickets in Previous 5 Overs must be numeric values";

            
            return false;
        }

        // Check if overs are greater than or equal to 5.0
        if (parseFloat(overs) < 5.0) {
            document.getElementById("overs-error").innerHTML = "Overs must be greater than or equal to 5.0";
            shakeField("overs");
            return false;
        }
    
        // If all validations pass, return true to submit the form
        return true;
    }

    function validateFormWin() {
        var battingTeam = document.getElementById("batting-team").value;
        var bowlingTeam = document.getElementById("bowling-team").value;
        var tossWinner = document.getElementById("toss-winner").value;

        // Reset error messages
        document.getElementById("batting-team-error").innerHTML = "";
        document.getElementById("bowling-team-error").innerHTML = "";
        document.getElementById("toss-winner-error").innerHTML = "";

        // Check if any field is empty
        if (battingTeam === "") {
            document.getElementById("batting-team-error").innerHTML = "Please select a batting team";
            shakeField("batting-team");
            return false;
            
        }

        if (bowlingTeam === "") {
            document.getElementById("bowling-team-error").innerHTML = "Please select a bowling team";
            shakeField("bowling-team");
            return false;
        }
        // Check if batting team and bowling team are different
        if (battingTeam === bowlingTeam) {
            document.getElementById("bowling-team-error").innerHTML = "Batting team and Bowling team should be different";
            shakeField("bowling-team");
            
            return false;
        }
        if ((tossWinner !== bowlingTeam)&&(tossWinner !== battingTeam)) {
            document.getElementById("bowling-team-error").innerHTML = "Toss Winner Team should not be different from Batting team and Bowling team";
            shakeField("toss-winner");
            return false;
        }

        if (tossWinner === "") {
            document.getElementById("toss-winner-error").innerHTML = "Please select the toss winner";
            shakeField("toss-winner");
            
            return false;
        }

        // If all validations pass, return true to submit the form
        return true;
    }


    function shakeField(fieldId) {
      console.log("HIIIII");
        var field = document.getElementById(fieldId);
        field.classList.add("shake");
        setTimeout(function () {
            field.classList.remove("shake");
        }, 3000);
    }



  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach((carousel) => {
    let currentIndex = 0;

    function showCard(index) {
      const cardWidth = carousel.querySelector('.card').offsetWidth;
      carousel.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    function nextCard() {
      currentIndex = (currentIndex + 1) % carousel.querySelectorAll('.card').length;
      showCard(currentIndex);
    }

    function prevCard() {
      currentIndex = (currentIndex - 1 + carousel.querySelectorAll('.card').length) % carousel.querySelectorAll('.card').length;
      showCard(currentIndex);
    }

    setInterval(nextCard, 1500); // Auto slide every 3 seconds
  });

