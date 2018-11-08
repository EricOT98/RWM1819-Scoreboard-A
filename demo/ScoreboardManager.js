class ScoreboardManager
{
  constructor()
  {
    this.scoreboard =  []
    this.count = 0
    this.playerName = ""
    this.session = false
    this.local = false

    this.storageType = "none";

  }
  clearLocalStorage()
  {

    localStorage.removeItem('Scoreboard');

  }
  clearSessionStorage()
  {
    sessionStorage.removeItem('Scoreboard');
  }
  initBoard(storageType)
  {

    if(storageType == "local" || storageType == "Local"){
      this.storageType = "local"
      if((localStorage.getItem('Scoreboard') === null))
      {

        localStorage.setItem('Scoreboard', JSON.stringify(this.scoreboard));
      }
      this.scoreboard = JSON.parse(localStorage.getItem('Scoreboard'));

      if(this.scoreboard == null)
      {
        this.scoreboard = []
      }
    }
    else if (storageType == "session" || storageType == "Session") {
      this.storageType = "session"
      if((sessionStorage.getItem('Scoreboard') === null))
      {

        sessionStorage.setItem('Scoreboard', JSON.stringify(this.scoreboard));
      }
      this.scoreboard = JSON.parse(sessionStorage.getItem('Scoreboard'));

      if(this.scoreboard == null)
      {
        this.scoreboard = []
      }
    }
    else{
      console.log("Please enter a valid storage type")
    }


  }
  //Takes user input, adds the score which is passed
  //to the function along with a userID which is created
  //To the leaderboardd as an object in the form {name: "Aaron", score:100, playerID:1}
  addToBoard(score)
  {

    if(this.count <1)
    {
      while (this.playerName === "")
      {
          this.playerName = prompt ("Please enter your name","");
      }

        this.playerID = this.scoreboard.length + 1
        var object = {name: this.playerName, score: score, playerID: this.playerID}
        this.scoreboard.push(object);

        switch(this.storageType) {
            case "local":
            localStorage.setItem('Scoreboard', JSON.stringify(this.scoreboard));
              break;
            case "session":
            sessionStorage.setItem('Scoreboard', JSON.stringify(this.scoreboard));
              break;
      }
        this.count = this.count + 1;
    }

  }

  getBoard()
  {
    return this.scoreboard
  }

  filterName(name)
  {
    //Filter
    var wanted = this.scoreboard.filter(function(scoreboard)
    {
      return (scoreboard.name == name);
    })
  }
}
