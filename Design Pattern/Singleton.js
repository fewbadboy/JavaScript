function Singleton() {
  this.instance = null
}

Singleton.prototype.getInstance = function() {
  if(!this.instance){
    this.instance = new Singleton()
  }
  return this.instance
}