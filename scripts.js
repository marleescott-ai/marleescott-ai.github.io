let finalScoreOutput = document.getElementById('result');
if (finalScoreOutput) {
  //Where correct answers get added
  let finalScore = localStorage.getItem('finalScore') || 0;
  //Combines final point total and shown out of 15
  finalScoreOutput.innerHTML = finalScore + "/15";
}
function retakeQuiz() {
  //Resets the points when quiz is done again
  localStorage.setItem('finalScore', 0)
}

function checkQuestion1(answer) {
  //Checks the clicked button is correct
  if (answer == 'correct'){
    document.getElementById('answer1').innerHTML = "Correct!"
  //Add a point when the answer is correct
    let score = parseInt(localStorage.getItem('finalScore')) || 0 
    localStorage.setItem('finalScore', score + 1)
  //If not correct shows incorrect
} else {
    document.getElementById("answer1").innerHTML = "Incorrect!"
}
  //Selects all buttons and disables them after one is clicked
  const buttons = document.querySelectorAll('.questionButton')

  buttons.forEach(button => {
      button.disabled = true
    
      button.classList.add('disabledButton')
  });
}


function checkQuestion11() { 
    event.preventDefault()
    //Creates a input box that can be typed in
    let inputBox = document.getElementById('answer11')
    let answer = inputBox.value
    //Checks the clicked button is correct
    if (answer == 'old strand, new strand, replication') { 
        document.getElementById('message').innerHTML = "Correct!"
    //Add a point when the answer is correct
    let score = parseInt(localStorage.getItem('finalScore')) || 0 
    localStorage.setItem('finalScore', score + 1)
    //If not correct shows incorrect
    } else {
        document.getElementById('message').innerHTML = "Incorrect!"
    }
    //Gets the sumbit button and disables it after it has been pressed
    const button = document.querySelectorAll('.hardQuestionButton');
    
    button.forEach(button => {
      button.disabled = true;
    
      button.classList.add('disabledButton'); 
  });
}

function checkQuestion12() {
  event.preventDefault()

  let inputBox = document.getElementById('answer12')
  let anwser = inputBox.value

  if (anwser == 'random, homologous, separate randomly') {
    document.getElementById('message').innerHTML = "Correct!"
    let score = parseInt(localStorage.getItem('finalScore')) || 0 
    localStorage.setItem('finalScore', score + 1)

  } else {
     document.getElementById('message').innerHTML = "Incorrect!"
  }
  const button = document.querySelectorAll('.hardQuestionButton');

    button.forEach(button => {
      button.disabled = true;
    
      button.classList.add('disabledButton'); 
  });
} 

function checkQuestion13() {
  event.preventDefault()

  let inputBox = document.getElementById('answer13')
  let anwser = inputBox.value

  if (anwser == 'non-sister, chiasma, homologous pair') {
    document.getElementById('message').innerHTML = "Correct!"
    let score = parseInt(localStorage.getItem('finalScore')) || 0 
    localStorage.setItem('finalScore', score + 1)

  } else {
     document.getElementById('message').innerHTML = "Incorrect!"
  }
  const button = document.querySelectorAll('.hardQuestionButton');

    button.forEach(button => {
      button.disabled = true;
    
      button.classList.add('disabledButton'); 
  });
} 


function checkQuestion14() {
  event.preventDefault()

  let inputBox = document.getElementById('answer14')
  let anwser = inputBox.value

  if (anwser == 'individuals, population, small, gene pool, genetic') {
    document.getElementById('message').innerHTML = "Correct!"
    let score = parseInt(localStorage.getItem('finalScore')) || 0 
    localStorage.setItem('finalScore', score + 1)

  } else {
     document.getElementById('message').innerHTML = "Incorrect!"
  }
  const button = document.querySelectorAll('.hardQuestionButton');

    button.forEach(button => {
      button.disabled = true;
    
      button.classList.add('disabledButton'); 
  });
} 


function checkQuestion15() {
  event.preventDefault()

  let inputBox = document.getElementById('answer15')
  let anwser = inputBox.value

  if (anwser == 'random, alleles, genetic variation, population') {
    document.getElementById('message').innerHTML = "Correct!"
    let score = parseInt(localStorage.getItem('finalScore')) || 0 
    localStorage.setItem('finalScore', score + 1)

  } else {
     document.getElementById('message').innerHTML = "Incorrect!"
  }
  const button = document.querySelectorAll('.hardQuestionButton');

    button.forEach(button => {
      button.disabled = true;
    
      button.classList.add('disabledButton'); 
  });
} 


