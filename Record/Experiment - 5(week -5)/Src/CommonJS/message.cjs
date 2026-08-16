const msg = ()  => {console.log("Hello from CommonJS module!");};
const add = (a,b) => {return a + b;};

module.exports = {msg, add};