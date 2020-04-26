
//welcome section
//step 1. needs to be it's own div i can reference later
//step2. needs at least a header that says something about the quiz and needs a button to take the quiz
//step3. also the function that replaces the welcome div with the quiz div inside the content div


var welcomeSection = document.createElement("div");

var startButton = document.createElement("button");
startButton.innerHTML = "Start the Quiz!";
welcomeSection.appendChild(startButton);
    startButton.addEventListener ("click", startClick);
welcomeSection = {
    
    
}


document.getElementById("content").innerHTML = welcomeSection;

//calling the main div
var content = document.getElementById("content")
content.innerHTML = welcomeSection;
////PAGE 1 WELCOME/////

//const welcomeSection = "<div>Coding Challenge Quiz<button onClick={startQuiz}</div>";

//content.innerHTML(welcomeSection);
//h1

//pag

//start button





////PAGE 2 QUIZ///////

// var quizSection = 
//step1. needs a bunch
//step2. needs a variable to keep track of score

var quizSection = document.createElement("div");



 var choice0 = document.createElement("button");
choice0.innerHTML = 
 var choice1 = document.createElement("button");

 var choice2 = document.createElement("button");

 var choice3 = document.createElement("button");



//////////////////////////////////////////

///////PAGE 3 HIGH SCORES///////
// 1.
//2. save the initials and add it to an array of initials and their scores
//3. somehow connect the input with a buttonto click that does the above
//4. another button to return to home page?
//5.
//const highScore = 
var highScore = document.createElement("div");
var initials = document.createElement("input");
initials.setAttribute("type", "text");



// if (content === “welcomeSection”) {
//     // set Html to welcomeSection
//    } else if (content === “quiz”) {
   
//    } else if (content === "highScore") {

//    }

////TIMER/////
setTimeout(
    () => {
        console.log("Hello after 4 seconds");
    },
    4 * 1000
);