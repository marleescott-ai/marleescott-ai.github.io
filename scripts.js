function checkQuestion1(answer) {
  if (answer == 'correct'){
    document.getElementById('answer1').innerHTML = "Correct!"
} else {
document.getElementById("answer1").innerHTML = "Incorrect!"
}

  const buttons = document.querySelectorAll('.questionButton');

  buttons.forEach(button => {
      button.disabled = true;
    
      button.classList.add('disabledButton'); 
  });
}


function checkQuestion11() { 
    event.preventDefault()
    
    let inputBox = document.getElementById('answer11')
    let anwser = inputBox.value
    
    if (anwser == 'old strand, new strand, replication') { 
        document.getElementById('message').innerHTML = "Correct!"
    } else {
        document.getElementById('message').innerHTML = "Incorrect!"
    }
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
  } else
     document.getElementById('message').innerHTML = "Incorrect!"
  
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
  } else
     document.getElementById('message').innerHTML = "Incorrect!"

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
  } else
     document.getElementById('message').innerHTML = "Incorrect!"

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
  } else
     document.getElementById('message').innerHTML = "Incorrect!"
  
  const button = document.querySelectorAll('.hardQuestionButton');

    button.forEach(button => {
      button.disabled = true;
    
      button.classList.add('disabledButton'); 
  });
} 


