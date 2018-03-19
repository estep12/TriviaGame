


    var timeRemaining = 30;
    var correct = 0;
    var incorrect = 0;
    var userChoice;
    var incorrectAnswers = 0;
    var correctAnswers = 0;

    var questionArray = [{
        question: "Who was the first French president of the French Third Republic?",
        options: ["Adolphe Thiers", "Napoleon Bonaparte", "Emmanuel Macron", "Charles De Gaulle"],
        answer: 0
        },{ 
        question: "What is the largest animal to have ever existed?",
        options: ["T.Rex", "African Elephant", "Blue Whale", "None of the above"],
        answer: 2
        },{
        question: "What is the more common name the Thylacine?",
        options: ["Tazmanian Devil", "Tazmanian Tiger", "African Elephant", "Blue Whale"],
        answer: 1
        },{
        question: "Who won the men's singles at the 1987 French Open?",
        options: ["Ivan Lendl", "John McEnroe", "Roger Federer", "Andy Murray"],
        answer: 0
        },{ 
        question: "How long ago was the Cambrian Explosion?",
        options: ["256 million years ago", "451 million years ago", "541 million years ago", "1 billion years ago"],
        answer: 2
        },{
        question: "Who was the 21st President of the United States?",
        options: ["Chester A. Arthur", "Abraham Lincoln", "Grover Cleveland", "Calvin Coolidge"],
        answer: 0
        },{
        question: "What film won the Oscar for Best Picture in 2013?",
        options: ["Hurt Locker", "Space Jam", "The Shape of Water", "Argo"],
        answer: 3
        },{
        question: "The four chemical bases of DNA are Adenine, Cytosine, Guanine and what?",
        options: ["Thymine", "Aniline", "Uracil", "Hydrogen"],
        answer: 0
        }
    ];


   


$(document).ready(function() {

$("#start").on("click", function(){
    $(this).hide();
    timer();
    counter = setInterval(timer, 1000);
    $(".time").text("Time Remaining: " + timeRemaining + " secs");
    displayTrivia();
    }); 

    // console.log(timeRemaining)

function displayTrivia() {
    for (let i = 0; i < questionArray.length; i++){
        console.log(questionArray[i].question);
        questionQuestion = questionArray[i].question.toString();
        $("<p>").attr("id", questionQuestion).text(questionQuestion).appendTo($(".questions"));
        questionAnswer = questionArray[i].options;
        var buttonOne = $("<button>").addClass("answerA").attr("data-id", i).text(questionAnswer[0]).appendTo($(".questions"));
        var buttonTwo = $("<button>").addClass("answerA").attr("data-id", i).text(questionAnswer[1]).appendTo($(".questions"));
        var buttonThree = $("<button>").addClass("answerA").attr("data-id", i).text(questionAnswer[2]).appendTo($(".questions"));
        var buttonFour = $("<button>").addClass("answerA").attr("data-id", i).text(questionAnswer[3]).appendTo($(".questions"));

    
        $(".answerA").on("click",  function() {
            userChoice = $(this).data("id");
            answerAnswer = questionArray[0].answer;
            if(userChoice === answerAnswer) {
                correctAnswers++;
                console.log("Correct Answers: " + correctAnswers);
            } else  (userChoice != answerAnswer);{
                incorrectAnswers++;
                console.log("Incorrect Answers: " + incorrectAnswers);
            }
            return;
        });

        // $(buttonTwo).on("click",  function() {
        //     userChoice = $(this).data("id");
        //     answerAnswer = questionArray[i].answer;
        //     if(userChoice === answerAnswer) {
        //         correctAnswers++;
        //         console.log("Correct Answers: " + correctAnswers);
        //     } else  (userChoice != answerAnswer);{
        //         incorrectAnswers++;
        //         console.log("Incorrect Answers: " + incorrectAnswers);
        //     }
        //     return;
        // });

        // $(buttonThree).on("click",  function() {
        //     userChoice = $(this).data("id");
        //     answerAnswer = questionArray[i].answer[i];
        //     if(userChoice === answerAnswer) {
        //         correctAnswers++;
        //         console.log("Correct Answers: " + correctAnswers);
        //     } else  (userChoice != answerAnswer);{
        //         incorrectAnswers++;
        //         console.log("Incorrect Answers: " + incorrectAnswers);
        //     }
        //     return;
        // });

        // $(buttonFour).on("click",  function() {
        //     userChoice = $(this).data("id");
        //     answerAnswer = questionArray[i].answer;
        //     if(userChoice === answerAnswer) {
        //         correctAnswers++;
        //         console.log("Correct Answers: " + correctAnswers);
        //     } else  (userChoice != answerAnswer);{
        //         incorrectAnswers++;
        //         console.log("Incorrect Answers: " + incorrectAnswers);
        //     }
        //     return;
        // });
    }
    }




function timer(){
timeRemaining--;
if (timeRemaining <= 0) {
    clearInterval(timer);
    return;
} 
// console.log(timeRemaining)
$(".time").text("Time Remaining: " + timeRemaining + " secs");
};














});

// Make one big form with radio buttons
