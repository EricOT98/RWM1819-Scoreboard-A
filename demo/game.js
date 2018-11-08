class Game
{
  constructor()
  {

    this.scoreboard = new ScoreboardManager();
    this.scoreboard.clearLocalStorage();
    this.scoreboard.initBoard("Local");
    this.score = 100;
    this.scoreboard.addToBoard(this.score);
    console.log(this.scoreboard.getBoard());

  }
}
