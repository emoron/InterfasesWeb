(function() {
  var a, miVariable, name, square, sum, times, _i, _len, _ref,
    __slice = [].slice;

  miVariable = "hola";

  square = function(x) {
    return x * x;
  };

  sum = function() {
    var nums, result;
    nums = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    result = 0;
    nums.forEach(function(n) {
      return result += n;
    });
    return result;
  };

  a = "Hello";

  times = function(a, b) {
    return a * b;
  };

  console.log(sum(2, 4, 5));

  _ref = ["Roger", "Aldo", "Manuel"];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    console.log(name);
  }

}).call(this);
