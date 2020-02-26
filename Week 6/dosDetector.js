const EvntEmitter = require("events");

class DOS_Detector {
    constructor(timeValue){
      super();
      this.urls = new Map();
      this.TIME_BETWEEN_CALLS = timeValue;
    }
    addUrl = (url) =>{
      const time = new Date().getTime();
      if(this.urls.has(url)){
        const deltaTime = time - this.urls.get(url) 
        if(deltaTime < this.TIME_BETWEEN_CALLS){
          console.log("TODO: Fire the 'DosDetected' event")
          //Add this info to the event {url:url,timeBetweenCalls:deltaTime}
          this.emit("dosDetector", {url:url,timeBetweenCalls:deltaTime});
        }
      }
      this.urls.set(url,time);
    }
 }

 module.exports.DOS_Detector = DOS_Detector;
