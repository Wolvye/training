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

let currentQuestion=0;

function init(){
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion()
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function answer(selection){
    
}