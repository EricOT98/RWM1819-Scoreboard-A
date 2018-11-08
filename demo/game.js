class Game
{
  constructor()
  {
    gameNs.scoreboard = new ScoreboardManager();
    gameNs.scoreboard.startTimer();
    gameNs.scoreboard.clearSessionStorage();
    gameNs.scoreboard.initBoard("session");
    this.score = 100;
    gameNs.scoreboard.addToBoard(this.score);
    console.log(gameNs.scoreboard.getBoard());

  }
  update(){
     window.requestAnimationFrame(gameNs.game.update);
    gameNs.scoreboard.getDisplayTimer();



  }
}
