describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.addFrame();
  });

  describe('Start new game', function(){

    it('starts a new frame', function(){
      // game.addFrame(1);
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: null})
    });
  });

  describe('Score a STRIKE', function(){

    it('in round 1', function(){
      // game.addFrame(1);
      game.roundScore(10);
      expect(game.frames[0]).toEqual({frame: 1, round: 1, score: 10});
      // expect(game.isStrike()).toEqual(true);
    });
  });

  describe('Score a STRIKE', function(){

    it('new frame starts', function(){
      // game.addFrame(1);
      game.roundScore(10);
      // console.log(game.currentFrame());
      // console.log(game.frames);
      // console.log(game.isStrike())
      //   console.log(game.currentFrame())
      expect(game.currentFrame()).toEqual({frame: 2, round: 1, score: null});
    });
  });

  describe('Score a hit', function(){

    it('knock down 1 pin round 1', function(){
      // game.addFrame(1);
      game.roundScore(1);
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: 1})
    });
  });

  describe('Check round changes', function(){

    it('to 2 after first round', function(){
      // game.addFrame(1);
      game.roundScore(1);
      game.roundScore(1);
      expect(game.currentFrame().round).toEqual(2);
    });
  });

  describe('Check if score', function(){

    it('is a SPARE', function(){
      // game.addFrame(1);
      // console.log(game.frames);
      game.roundScore(5);
      // console.log(game.frames);
      // console.log(game.currentFrame());
      // console.log(game.currentFrame().score)
      game.roundScore(5);
      // console.log(game.frames);
      //
      // console.log(game.spare)
      expect(game.frames[0]).toEqual({frame: 1, round: 2, score: 10});
      expect(game.spare).toEqual(true);
    });
  });

  describe('Check start of new frame', function(){

    it('when two rounds of a frame are finished', function(){
      // game.addFrame(1);
      // var i = 0
      //
      // while (i < 3) {
      //   game.roundScore(5);
      //   i++
      // };
      game.roundScore(5);
      console.log(game.frames)
      game.roundScore(5);
      console.log(game.frames)
      game.roundScore(5);
      console.log(game.frames)



      expect(game.currentFrame()).toEqual({frame: 2, round: 1, score: 5});
      expect(game.isSpare()).toEqual(false);
    });
  });

});
