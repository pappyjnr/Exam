function hoursChecker(TimeStamp) {
  let timer = new Date().getTime();

  let checker = timer - TimeStamp;
  let cal = Math.floor(checker / (1000 * 60 * 60));
  return cal;
}

let Time = 1700310526833;
let result = hoursChecker(Time);

console.log(result);
