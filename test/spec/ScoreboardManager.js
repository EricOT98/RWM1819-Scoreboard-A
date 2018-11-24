/* global ScoreboardManager, describe, it, expect, should */

describe('ScoreboardManager()', function () {
  'use strict';

  it('exists', function () {
    expect(ScoreboardManager).to.be.a('function');

  });

  it('return scoreboard', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.startTimer()
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    expect(scoreboard.getBoard()).to.be.a("array");
  });

  it('check for object', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.startTimer()
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0]).to.be.a("object");
  });

  it('check for object', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.startTimer()
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0]).to.be.a("object");
  });

  it('check for Name', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.startTimer()
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0].name).to.equal("Aaron");
  });

  it('check for Score', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.startTimer()
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0].score).to.equal(30);
  });

  it('check for playerID', function () {
    var scoreboard = new ScoreboardManager
    scoreboard.startTimer()
    scoreboard.playerName = "Aaron"
    scoreboard.addToBoard(30)
    var array = scoreboard.getBoard();
    expect(array[0].playerID).to.equal(1);
  });

  it('Filter by time ', function () {
    var scoreboard = new ScoreboardManager
    var object = {name: "Jack",
                  score: 150,
                  time: "00:30",
                  spm: 200,
                  seconds: 30,
                  playerID: 1}

    scoreboard.scoreboard.push(object);
    var object2 = {name: "Aaron",
                  score: 100,
                  time: "00:24",
                  spm: 122,
                  seconds: 24,
                  playerID: 2}
    scoreboard.scoreboard.push(object2);

    scoreboard.filterSPM(1);
    var array = scoreboard.getBoard();

    expect(array[0].playerID).to.equal(2);
  });

  it('Filter by score ', function () {
    var scoreboard = new ScoreboardManager
    var object = {name: "Jack",
                  score: 150,
                  time: "00:30",
                  spm: 200,
                  seconds: 30,
                  playerID: 1}

    scoreboard.scoreboard.push(object);
    var object2 = {name: "Aaron",
                  score: 100,
                  time: "00:24",
                  spm: 122,
                  seconds: 24,
                  playerID: 2}
    scoreboard.scoreboard.push(object2);

    scoreboard.filterScore(1);
    var array = scoreboard.getBoard();

    expect(array[0].playerID).to.equal(2);
  });

  it('Filter by spm ', function () {
    var scoreboard = new ScoreboardManager
    var object = {name: "Jack",
                  score: 150,
                  time: "00:30",
                  spm: 200,
                  seconds: 30,
                  playerID: 1}

    scoreboard.scoreboard.push(object);
    var object2 = {name: "Aaron",
                  score: 100,
                  time: "00:24",
                  spm: 122,
                  seconds: 24,
                  playerID: 2}
    scoreboard.scoreboard.push(object2);

    scoreboard.filterSPM(-1);
    var array = scoreboard.getBoard();

    expect(array[0].playerID).to.equal(1);
  });

  it('Filter by spm ', function () {
    var scoreboard = new ScoreboardManager
    var object = {name: "Jack",
                  score: 150,
                  time: "00:30",
                  spm: 200,
                  seconds: 30,
                  playerID: 1}

    scoreboard.scoreboard.push(object);
    var object2 = {name: "Aaron",
                  score: 100,
                  time: "00:24",
                  spm: 122,
                  seconds: 24,
                  playerID: 2}
    scoreboard.scoreboard.push(object2);

    scoreboard.filterSPM(-1);
    var array = scoreboard.getBoard();

    expect(array[0].playerID).to.equal(1);
  });

  it('Filter by name ', function () {
    var scoreboard = new ScoreboardManager
    var object = {name: "Jack",
                  score: 150,
                  time: "00:30",
                  spm: 200,
                  seconds: 30,
                  playerID: 1}

    scoreboard.scoreboard.push(object);
    var object2 = {name: "Aaron",
                  score: 100,
                  time: "00:24",
                  spm: 122,
                  seconds: 24,
                  playerID: 2}
    scoreboard.scoreboard.push(object2);

    scoreboard.filterName("Aaron");
    var array = scoreboard.getBoard();

    expect(array[0].name).to.equal("Aaron");
  });

  // Add more assertions here
});
