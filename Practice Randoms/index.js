//lets create one varible
let x = 5;
console.log(x);
a();
b();
console.log(x);

// this function will have its own scope so we can so anything we want without interfering the outer values. because the values and variables that we create here will be deleted/ destrooyed when the function execution ends and the Executio contesxt deletes. (Unless we dont return any values.)
function a() {
  x = 15;
  console.log(x);
}

function b() {
  let x = 78;
  console.log(x);
  // console.log(x+123);
}
// since we are making changes here thats why the output is visible to us other wise it would not have been.
