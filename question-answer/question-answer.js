const symbolActive = 'expand-symbol-active';
const symbolNotActive = 'expand-symbol-not-active';

const questionContainer = document.querySelector('.question-container');
const questionContainerChildren = questionContainer.querySelectorAll('.question-container > div');
const questions = questionContainer.querySelectorAll('.question');
const symbols = questionContainer.querySelectorAll('div > div.question-answer-expand-symbol');
const answers = questionContainer.querySelectorAll('div.answer');

function intialState() {
  symbols.forEach(symbol => {
    symbol.classList.add(symbolNotActive);
  })
  answers.forEach(answer => {
    answer.style.display = 'none';
  });
}

questions.forEach(questionElement => {
  questionElement.addEventListener('click', function(event) {
    const symbol = questionElement.querySelector('div.question-answer-expand-symbol');
    const answer = questionElement.parentElement.querySelector('div.answer');

    // Same question is click then close it
    // else open answer for question clicked
    if (symbol.classList.contains(symbolActive)) {
      symbol.classList.remove(symbolActive);
      symbol.classList.add(symbolNotActive);
      answer.style.display = 'none';
    } else {
      symbols.forEach(symbol => {
        if (symbol.classList.contains(symbolActive)) {
          symbol.classList.remove(symbolActive);
          symbol.classList.add(symbolNotActive);
        }
      });

      answers.forEach(answer => {
        answer.style.display = 'none';
      });

      symbol.classList.remove(symbolNotActive);
      symbol.classList.add(symbolActive);
      answer.style.display = 'block';
    }
  });
});

intialState();