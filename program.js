document.writeln('Hello world');

// Definição de função.
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
}

var that = this;
that.alert('ae')