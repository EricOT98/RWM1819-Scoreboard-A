/* global ScoreboardManager, describe, it, expect, should */

describe('ScoreboardManager()', function () {
  'use strict';

  it('exists', function () {
    expect(ScoreboardManager).to.be.a('function');

  });

  it('return scoreboard', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    expect(scoreboard.getBoard()).to.be.a("array");
  });

  it('check for object', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0]).to.be.a("object");
  });

  it('check for object', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0]).to.be.a("object");
  });

  it('check for Name', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0].name).to.equal("Aaron");
  });

  it('check for Score', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0].score).to.equal(30);
  });

  it('check for palyerID', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0].playerID).to.equal(1);
  });

  // Add more assertions here
});
