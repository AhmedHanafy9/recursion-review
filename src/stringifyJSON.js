var stringifyJSON = function(obj) {
  var stringifiedResults = [];

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
    _.each(Object.keys(obj), function(item) {
      if (typeof obj[item] !== 'function' && obj[item] !== undefined) {
        var stringified = stringifyJSON(obj[item]);
        stringifiedResults.push('\"' + item + '\"' + ':' + stringified);
      }
    });
    return '{' + stringifiedResults + '}';
  }

  if (Array.isArray(obj)) {
    _.each(obj, function(item) {
      if (typeof item !== 'function' && item !== undefined) {
        var stringified = stringifyJSON(item);
        stringifiedResults.push(stringified);
      } else {
        stringifiedResults.push('null');
      }
    });
    return '[' + stringifiedResults + ']';
  }
};