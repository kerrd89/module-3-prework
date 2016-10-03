// quux = 1

function foo() {
  var bar;
  function zip() {
    var quux;
    bar = true;
  }
  quux = 2;
  return zip;
}
