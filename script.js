const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent by land area?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "What is the meaning of 'serendipity'?",
        answers: [
            { text: "A fortunate discovery by chance", correct: true },
            { text: "A deliberate mistake", correct: false },
            { text: "A planned event", correct: false },
            { text: "A synonym for sadness", correct: false }
        ]
    },
    {
        question: "Which word refers to a fear of heights?",
        answers: [
            { text: "Hydrophobia", correct: false },
            { text: "Acrophobia", correct: true },
            { text: "Claustrophobia", correct: false },
            { text: "Arachnophobia", correct: false }
        ]
    },
    {
        question: "What does 'ephemeral' mean?",
        answers: [
            { text: "Lasting for a very short time", correct: true },
            { text: "Permanently engraved", correct: false },
            { text: "Existing in abundance", correct: false },
            { text: "Difficult to understand", correct: false }
        ]
    },
    {
        question: "What is the definition of 'ineffable'?",
        answers: [
            { text: "Too great to be expressed in words", correct: true },
            { text: "Easily understood", correct: false },
            { text: "Common and ordinary", correct: false },
            { text: "Unbelievably false", correct: false }
        ]
    },
    {
        question: "Which word describes a strong desire to travel?",
        answers: [
            { text: "Wanderlust", correct: true },
            { text: "Ennui", correct: false },
            { text: "Hiraeth", correct: false },
            { text: "Schadenfreude", correct: false }
        ]
    },
    {
        question: "What does 'sonder' mean?",
        answers: [
            { text: "The realization that each passerby has a life as vivid and complex as your own", correct: true },
            { text: "A sudden desire to leave everything behind", correct: false },
            { text: "A longing for the past", correct: false },
            { text: "The feeling of being disconnected from reality", correct: false }
        ]
    },
    {
        question: "Which word refers to a state of being pleasantly lost in one's thoughts?",
        answers: [
            { text: "Reverie", correct: true },
            { text: "Melancholy", correct: false },
            { text: "Lethargy", correct: false },
            { text: "Nostalgia", correct: false }
        ]
    },
    {
        question: "What does 'liminal' describe?",
        answers: [
            { text: "A transitional or initial stage of a process", correct: true },
            { text: "A state of eternal bliss", correct: false },
            { text: "A deep sense of regret", correct: false },
            { text: "An irreversible decision", correct: false }
        ]
    }
];

        const questionElement = document.getElementById('question');
        const answerButtons = document.getElementById('answer-buttons');
        const nextButton = document.getElementById('next-btn');
        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = "Next";
            showQuestion();
        }

        function showQuestion() {
            resetState();
            const currentQuestion = questions[currentQuestionIndex];
            const questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
            currentQuestion.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add("btn");
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener('click', selectAnswer);
                answerButtons.appendChild(button);
            });
        }

        function resetState() {
            nextButton.style.display = "none";
            while (answerButtons.firstChild) {
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }

        function selectAnswer(e) {
            const selectedButton = e.target;
            const correct = selectedButton.dataset.correct === 'true';
            if (correct) {
                score++;
            }
            Array.from(answerButtons.children).forEach(button => {
                button.disabled = true;
                setStatusClass(button, button.dataset.correct === 'true');
            });
            nextButton.style.display = "block";
        }

        function showScore() {
            resetState();
            questionElement.innerHTML = `Quiz over! You scored ${score}`;
            nextButton.innerHTML = "Play again";
            nextButton.style.display = "block";
        

            // nextButton.removeEventListener('click', handleNextButtonClick);

        }
        

        function handleNextButtonClick() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showScore();
            }
        }
        
        nextButton.addEventListener('click', () =>{
            if(currentQuestionIndex < questions.length){
                handleNextButtonClick();
            }else{
                startQuiz();
            }
        });
        

        function setStatusClass(element, correct) {
            if (correct) {
                element.style.backgroundColor = '#4caf50';
            } else {
                element.style.backgroundColor = '#f44336';
            }
        }


        startQuiz();