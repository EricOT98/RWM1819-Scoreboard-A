class ScoreboardManager
{
  constructor()
  {
    this.scoreboard =  []
    this.count = 0;
    this.playerName = "";

  }

  initBoard(object)
  {

    this.scoreboard = object
    console.log(this.scoreboard)
  }
  //Takes user input, adds the score which is passed
  //to the function along with a userID which is created
  //To the leaderboardd as an object in the form {name: "Aaron", score:100, playerID:1}
  addToBoard(score)
  {

    if(this.count <1)
    {
      while (this.playerName == "")
      {
          this.playerName = prompt ("Please enter your name","");
      }
      this.playerID = this.scoreboard.length + 1;
      var object = {name: this.playerName, score: score, playerID: this.playerID}
      this.scoreboard.push(object);
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
