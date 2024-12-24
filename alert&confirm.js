function random() {
  console.log("alert will happen first ");
  alert("this is your alert click ok to continue");
  let confirmAns = confirm(
    "are you sure that you want to continue? ... you can se your selected answer in console"
  );
  console.log(confirmAns);
}
random();
