//Declaração de variáveis
const question = document.querySelector('#question')
const answersBox = document.querySelector('#answers-box')
const quizzContainer = document.querySelector('#quizz-container')
const scoreContainer = document.querySelector('#score-container')
const letters = ['a', 'b', 'c', 'd']
let points = 0
let actualQuestion = 0

//Perguntas

const questions = [
  {
    "question": " - PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": " - Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": " - Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]

//Substituição do quizz para a primeira pergunta
function init (){
    //criar a primeira pergunta    
   createQuestion(0)
}

//Cria uma pergunta
function createQuestion(i) {
    //Limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll('button')

    oldButtons.forEach(function(btn) {
        btn.remove()
    })

    const questionText = document.querySelector('#question-text')
    const questionNumber = document.querySelector('#question-number')

    questionText.textContent = questions[i].question
    questionNumber.textContent = i+1

    //Inserindo as alternativas
    questions[i].answers.forEach(function (answer, i) {
        //cria o template do botão do quizz
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true)

        const letterBtn = answerTemplate.querySelector('.btn-letter')
        const answertext = answerTemplate.querySelector('.question-answer')

        letterBtn.textContent = letters[i]
        answertext.textContent = answer['answer']

        answerTemplate.setAttribute('correct-answer', answer['correct'])

        //remover hide e template class
        answerTemplate.classList.remove('hide')
        answerTemplate.classList.remove('answer-template')

        //inserir a alternativa na tela
        answersBox.appendChild(answerTemplate)

        //inserir um evento de click no botão
        answerTemplate.addEventListener('click', function() {
            checkAnswer(this)
        })
    })

    //incrementar o número da questão
    actualQuestion++
}

//verificando resposta do usuário
function checkAnswer(btn) {
    //selecionar todos o botões
    const buttons = answersBox.querySelectorAll('button')
    
    //verifica se a resposta está correta e adiciona classes aos botões
    buttons.forEach(function(button) {
        if (button.getAttribute('correct-answer') === "true") {
            button.classList.add('correct-answer')

            //checa se o usuário acertou a pergunta
            if (btn === button) {
                //incrementa os pontos
                points++
            }
        } else {
            button.classList.add('wrong-answer')
        }
    })

    //exibir a próxima pergunta
    nextQuestion()
}

//exibe a próxima pergunta do quizz
function nextQuestion() {
    //timer para usuário ver as respostas
    setTimeout(function() {
        //verifica se ainda há perguntas
        if (actualQuestion >= questions.length) {
            //apresenta a msg de sucesso
            showSuccessMessage()
            return
        } 

        createQuestion(actualQuestion)
    }, 700)
}

//função que exibe a tela final
function showSuccessMessage() {

    hideOrShowQuizz()

    //trocar dados da tela de sucesso

    //calcular o score
    const score = ((points/questions.length) * 100).toFixed(2)
    const displayScore = document.querySelector('#display-score span')

    displayScore.textContent = score.toString()

    //alterar o número de perguntas corretas
    const correctAnswers = document.querySelector('#correct-answers')
    correctAnswers.textContent = points

    //alterar total de perguntas
    const totalQuestions = document.querySelector('#questions-qty')
    totalQuestions.textContent = questions.length
}

function hideOrShowQuizz() {
    quizzContainer.classList.toggle('hide')
    scoreContainer.classList.toggle('hide')
}

//reiniciar quizz
const restartBtn = document.querySelector('#restart')

restartBtn.addEventListener('click', function() {
  //zerar o jogo
  actualQuestion = 0
  points = 0
  hideOrShowQuizz()
  init()
})

//Inicialização do quizz
init()