function checkQuestion1(answer) {
  if (answer == 'correct'){
    document.getElementById('answer1').innerHTML = "Correct!"
} else {
document.getElementById("answer1").innerHTML = "Incorrect!"
}

function checkQuestion11() {
  let inputBox = document.getElementById('answer11');
  let anwser = inputBox.value;
  if (anwser == 'old strand, new strand, replication') {
    document.getElementById('message').innerHTML = "Correct!";
  }
} }
