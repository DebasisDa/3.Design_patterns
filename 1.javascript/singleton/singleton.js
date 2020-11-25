class Singleton {
  constructor() {
    console.log('constructor call...');
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
};

module.exports = Singleton;
