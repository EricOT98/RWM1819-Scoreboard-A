class ScoreboardManager
{
  constructor()
  {
    this.scoreboard =  []


    this.count = 0;
    this.score = 0;
    this.playerName = "";

  }

  initBoard(object){

    this.scoreboard = object
    console.log(this.scoreboard)
  }

  addToBoard(score)
  {

    if(this.count <1)
    {
      while (this.playerName == "") {
          this.playerName = prompt ("Please enter your name","");
      }
    this.playerID = this.scoreboard.length + 1;
    var object = {name: this.playerName, score: score, playerID: this.playerID}
    this.scoreboard.push(object);



      console.log(this.scoreboard)
      this.count = this.count + 1;
    }


  }

  getBoard()
  {

  }

  displayBoard()
  {

  }

  startTimer(){

  }
  filterName(name){
    //Filter
    var wanted = this.scoreboard.filter(function(scoreboard)
    {
      return (scoreboard.name == name);
    })
  }
}
