function e(e,t){return new Promise(function(n){var c=function(o){n("It was ".concat(t," on the element: ").concat(e.nodeName,", id: ").concat(e.id,".")),e.removeEventListener(t,c)};e.addEventListener(t,c)})}var t=function(e){var t=document.createElement("div");t.classList="message",t.textContent=e,document.body.append(t)},n=document.getElementById("login"),c=document.getElementById("password"),o=document.getElementById("submit");e(n,"click").then(t),e(c,"click").then(t),e(o,"click").then(t),e(n,"input").then(t),e(c,"input").then(t),e(n,"blur").then(t),e(c,"blur").then(t),e(o,"blur").then(t);
//# sourceMappingURL=index.c7bb2913.js.map