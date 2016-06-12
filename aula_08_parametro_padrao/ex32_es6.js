function click(callback = function() {}) {
   callback();
}

click();
click(undefined);
click(null); // TypeError: callback is not a function
