let questions = [
    {
        "question": "Wie lautet der Ruf der Night Lords?",
        "answer1": "Ave Dominatus Nox",
        "answer2": "Ave Dominus Nox",
        "answer3": "Ave Dominion Nox",
        "answer4": "Ave Dominatus Nocturn",
        "right_answer": 2

    },
    {
        "question": "Wie lautet der Ruf der Iron Warrios?",
        "answer1": "Eisern im Innern, eisern nach außen!",
        "answer2": "Eisen nach außen, eisern nach innen!",
        "answer3": "Eisern im Geiste. Eisern im Köper!",
        "answer4": "Im Geiste eisern, im Körper eisern!",
        "right_answer": 1

    },
    {
        "question": "Wie lautet der Ruf der Iron Hands?",
        "answer1": "Eisern im Innern, eisern nach außen!",
        "answer2": "Eisen nach außen, eisern nach innen!",
        "answer3": "Eisern im Geiste. Eisern im Köper!",
        "answer4": "Im Geiste eisern, im Körper eisern!",
        "right_answer": 3

    },
    {
        "question": "Wie lautet der Ruf der Salamanders?",
        "answer1": "Auf den Amboss des Krieges! Für den Imperator!",
        "answer2": "Auf den Amboss des Krieges!Ins Feuer der Schlacht!",
        "answer3": "Ins Feuer der Schlacht! Auf den Amboss der Apotheose!",
        "answer4": "Ins Feuer der Schlacht! Auf den Amboss des Krieges!",
        "right_answer": 4

    },
    {
        "question": "Wie lautet der Ruf der Chorcaradons?",
        "answer1": "Burn, Maim, Kill!",
        "answer2": "First in, last out",
        "answer3": "We have come for you!",
        "answer4": "Blood for the Bloodgod!",
        "right_answer": 2

    }
];
let rightQuestions = 0;
let currentQuestion = 0;
let successAudio = new Audio("/audio/success.mp3");
let failAudio = new Audio("/audio/fail.mp3");

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion()
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        
        document.getElementById('endscreen').style = '';
        document.getElementById('questionBody').style = 'display:none;';

        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
        document.getElementById('gold').classList.add("dNone");
        document.getElementById('headerIMG').src = "./img/trophy.png";
        


    } else {
        let question = questions[currentQuestion];
        
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];

    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQustionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer${question['right_answer']}`;

    if (selectedQustionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        successAudio.play();
        rightQuestions++;
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progressBarID').innerHTML = `${percent}%`;
        document.getElementById('progressBarID').style = `width:${percent}%;`;

    } else {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        failAudio.play();
        document.getElementById('progressBarID').innerHTML = `${percent}%`;
        document.getElementById('progressBarID').style = `width:${percent}%;`;
        console.log('Fortschriftt', percent)

        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');

    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    resetAnswerButtons()
    showQuestion();


}

function resetAnswerButtons() {
    document.getElementById('nextButton').disabled = true;
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');

}

function restartButton() {
    window.location.reload();
}