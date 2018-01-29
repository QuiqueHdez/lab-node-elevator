class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = '';
    this.move;
    this.waitingList = [];
    this.passengers = [];

  }

  start() {
    this.move = setInterval(() => { this.update() }, 1000);
  }
  stop() {
    
      clearInterval(this.move);

  }
  update() {
    if (this.direction == "up") {
      this.floorUp();
      this._passengersEnter();
      this._passengersLeave();
    } else {
      this.floorDown();
      this._passengersLeave();
      this._passengersEnter();
    }
    this.log();
    
   
  }
  _passengersEnter() {
    let i = 0;
    for (; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor == this.floor) {
        this.passengers.push(this.waitingList[i])
        this.requests.push(this.waitingList[i].originFloor);
        console.log(this.waitingList[i].name + " has enter the elevator")
        this.waitingList.splice(i, 1);
      }
    }
  }
  _passengersLeave() {
    let i = 0;
    for (; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor == this.floor) {
        
        console.log(this.passengers[i].name + " has left the elevator")
        this.passengers.splice(i, 1);

      }
    }

  }
  floorUp() {

    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    }
    else {
      this.direction = "down"
    }

  }
  floorDown() {

    if (this.floor > 0) {
      this.floor--;
    } else {
      this.direction = "up";
    }
  }
  call(persona) {
    this.requests.push(persona.originFloor);
    this.waitingList.push(persona);


  }
  log() {
    console.log("Direction : " + this.direction + " | Floor : " + this.floor);
  }
}






module.exports = Elevator;
