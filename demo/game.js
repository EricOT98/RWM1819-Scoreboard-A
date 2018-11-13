class Game
{
  constructor()
  {
    gameNs.scoreboard = new ScoreboardManager();
    gameNs.scoreboard.startTimer();
    gameNs.scoreboard.clearSessionStorage();
    gameNs.scoreboard.initBoard("local");
    this.score = 50;
    gameNs.scoreboard.addToBoard(this.score);
    //gameNs.scoreboard.filterName("jack");
    //gameNs.scoreboard.filterTime(-1);
    //gameNs.scoreboard.filterScore(-1);
    gameNs.scoreboard.filterSPM(-1);

    console.log(gameNs.scoreboard.getBoard());

  }
  update(){
     window.requestAnimationFrame(gameNs.game.update);
    gameNs.scoreboard.getDisplayTimer();



  }
}
