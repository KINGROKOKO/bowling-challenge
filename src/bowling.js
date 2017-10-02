var Game = function(){
  this.frames = [];
  this.currentRound = 0
  this.frame = 0
  this.strike = false
  this.spare = false
  this.currentScore = null
};

Game.prototype.addFrame = function(){
  this.frame += 1
  this.currentRound = 1
  this.frames.push({frame: this.frame, round: this.currentRound, score: this.currentScore})
}

Game.prototype.addScore = function(){
  this.frames.push(this.currentFrame());
  this.currentRound += 1
}

Game.prototype.currentFrame = function(){
  return this.frames.slice(-1)[0];
};

Game.prototype.roundScore = function(thisScore){
  // console.log(this.frames)

  this.isNewFrame();
  // console.log(this.frames)
  // this.currentFrame().round = (this.currentRound += 1)
  this.currentScore += thisScore
  this.currentFrame().score = thisScore;
  this.checkRound();
  // console.log(this.currentFrame())
  // console.log(this.frames)

  this.isStrike();
  this.isSpare();
  this.addScore();

};

Game.prototype.checkRound = function(){
    if (this.currentFrame().score != null){
      this.currentRound += 1}
      else{
        return false
    }
};

Game.prototype.isNewFrame = function(){
    if (this.currentFrame().round === 2){
      this.addFrame();
    }else{
      return false
  }
}

Game.prototype.isStrike = function(){
  if (this.currentFrame().score === 10){
      this.addFrame()}
      this.strike = true

  // else{
  //   return false
  // };
};

Game.prototype.isSpare = function(){
  if ((this.currentFrame().score === 10) && (this.currentFrame().round === 2)){
    this.spare = true}
  else{
    this.spare = false
  };
  return this.spare
};
