// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];

  var elements = document.body;

  var findClass = function(elements) {
    _.each(elements.classList, function(item) {
      if (item === className) {
        results.push(elements);
      }
    });

    _.each(elements.childNodes, function(item) {
      findClass(item);
    });
  };

  findClass(elements);

  return results;
};



