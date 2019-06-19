// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor(){
    this.eventList = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if(this.eventList[eventName]){
      this.eventList[eventName].push(callback);
    } else {
      this.eventList[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const callbacks = this.eventList[eventName];
    callbacks && callbacks.forEach((callback) => {
      if(typeof callback === 'function'){
        callback();
      }
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.eventList[eventName] = null;
  }
}

module.exports = Events;
