

    var questionPos = 0;
    var timeRemaining = 45;
    var correct = 0;
    var incorrect = 0;
    var userChoice;
    var incorrectAnswers = 0;
    var correctAnswers = 0;
    var choiceA;
    var choiceB;
    var choiceC;
    var choiceD;

    var questionArray = [{
        question: "Who was the first French president of the French Third Republic?",
        options: ["Adolphe Thiers", "Napoleon Bonaparte", "Emmanuel Macron", "Charles De Gaulle"],
        answer: "A"
        },{ 
        question: "What is the largest animal to have ever existed?",
        options: ["T.Rex", "African Elephant", "Blue Whale", "None of the above"],
        answer: "C"
        },{
        question: "What is the more common name the Thylacine?",
        options: ["Tazmanian Devil", "Tazmanian Tiger", "African Elephant", "Blue Whale"],
        answer: "B"
        },{
        question: "Who won the men's singles at the 1987 French Open?",
        options: ["Ivan Lendl", "John McEnroe", "Roger Federer", "Andy Murray"],
        answer: "A"
        },{ 
        question: "How long ago was the Cambrian Explosion?",
        options: ["256 million years ago", "451 million years ago", "541 million years ago", "1 billion years ago"],
        answer: "C"
        },{
        question: "Who was the 21st President of the United States?",
        options: ["Chester A. Arthur", "Abraham Lincoln", "Grover Cleveland", "Calvin Coolidge"],
        answer: "A"
        },{
        question: "What film won the Oscar for Best Picture in 2013?",
        options: ["Hurt Locker", "Space Jam", "The Shape of Water", "Argo"],
        answer: "D"
        },{
        question: "The four chemical bases of DNA are Adenine, Cytosine, Guanine and what?",
        options: ["Thymine", "Aniline", "Uracil", "Hydrogen"],
        answer: "A"
        }
    ];


   


$(document).ready(function() {

$("#start").on("click", function(){
    $(this).hide();
    timer();
    counter = setInterval(timer, 1000);
    displayTrivia();
    checkAnswer();
    reset();
    }); 

    

function displayTrivia() {
    if(questionPos === questionArray.length){
    $(".time").hide();
    $("#q1").hide();
    $("#q2").hide();
    $("#q3").hide();
    $("#q4").hide();
    $("#submit").hide();
    $(".questions").hide();
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#startOver").html("<input type='submit'>")
    }
    for (let i = 0; i < questionArray.length; i++){
        console.log(questionArray[questionPos].question);
        questionQuestion = questionArray[questionPos].question.toString();
        questionAnswer = questionArray[questionPos].options;
        answerAnswer = questionArray[questionPos].answer;

        choiceA = questionAnswer[0];
        choiceB = questionAnswer[1];
        choiceC = questionAnswer[2];
        choiceD = questionAnswer[3];


        $(".questions").html("<h3>" + questionQuestion + "</h3>")
        $("#q1").html("<input type='radio' name = 'choices' value='A'> " + choiceA + "<br>");
        $("#q2").html("<input type='radio' name = 'choices' value='B'> " + choiceB + "<br>");
        $("#q3").html("<input type='radio' name = 'choices' value='C'> " + choiceC + "<br>");
        $("#q4").html("<input type='radio' name = 'choices' value='D'> " + choiceD + "<br>");
        $("#submit").html("<input type='submit'>")

       
        
    }
    };

function checkAnswer(){
    $("#submit").on("click", function() {
    choices = document.getElementsByName("choices");
    for (j = 0; j < choices.length; j++)
        if(choices[j].checked) {
            choice = choices[j].value;
        }
        console.log(choice);
        if(choice === answerAnswer) {
                // return;
                correctAnswers++;
                questionPos++;
                displayTrivia();
                console.log("Correct Answers: " + correctAnswers);
                
            } else {
                // return;
                incorrectAnswers++;
                questionPos++;
                displayTrivia(); 
                console.log("Incorrect Answers: " + incorrectAnswers);
                
            }
           
          
});
}   
  

function timer(){
timeRemaining--;
if (timeRemaining <= 0) {
    clearInterval(timer);
    $(".time").hide();
    $("#q1").hide();
    $("#q2").hide();
    $("#q3").hide();
    $("#q4").hide();
    $("#submit").hide();
    $(".questions").hide();
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#startOver").html("Start Over")

    return;
} 
$(".time").text("Time Remaining: " + timeRemaining + " secs");
};



function reset(){
    $("#startOver").on("click", function() {
    timeRemaining = 45;
    questionPos = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    displayTrivia();
    checkAnswer();
    timer();

    
    });

}










});


