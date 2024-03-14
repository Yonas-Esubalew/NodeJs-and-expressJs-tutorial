const animal = {
    canJump: true
  };
  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;
  
  function birdCan() {
    for (const key of Object.keys(bird)) {
      console.log(key+ ":"+ bird[key]);
    }
  }
  birdCan();