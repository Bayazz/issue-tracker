import { EventEmitter } from "events";

class Data extends EventEmitter {
  data = JSON.parse(localStorage.getItem("savedData"));

  getAll() {
    console.log("Data read!");
    return this.data;
  }
  setData(newData) {
    this.data = newData;
    this.emit("change");
  }
}

const dataStored = new Data();

export default dataStored;
