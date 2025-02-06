
const handOptions = {           // created a dictionary object to store the hand options
    "rock": "images/rock.png",
    "paper": "images/paper.png",
    "scissors": "images/scissors.png",
    "lizard": "images/lizard.png",
    "spock": "images/spock.png"
};

let SCORE = 0;

const pickUserHand = (hand) => {        // function to pick the hand of the user
    console.log(hand);
    let hand_signs = document.querySelectorAll(".hand_signs");
    hand_signs.forEach(hand_signs => {
        hand_signs.style.display = "none";
    });

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    document.getElementById("userPickImage").src = handOptions[hand];

    let computerHand =  pickComputerHand(hand);
    referee(hand, computerHand);
}

const pickComputerHand = () => {        // function to pick the hand of the computer

    let hand_signs = ["rock", "paper", "scissors", "lizard", "spock"];
    let computerHand = hand_signs[Math.floor(Math.random() * 5)];

    document.getElementById("computerPickImage").src = handOptions[computerHand];
    console.log(computerHand);

    return computerHand;
}

const referee = (userHand, computerHand) => {        // function to decide the winner

    if(userHand == "rock" && (computerHand == "scissors" || computerHand == "lizard")) {
        setDecision("YOU BEAT THE SYSTEM");
        setScore(SCORE + 1);
    } else if(userHand == "paper" && (computerHand == "rock" || computerHand == "spock")) {
        setDecision("YOU BEAT THE SYSTEM");
        setScore(SCORE + 1);
    } else if(userHand == "scissors" && (computerHand == "paper" || computerHand == "lizard")) {
        setDecision("YOU BEAT THE SYSTEM");
        setScore(SCORE += 1);
    } else if(userHand == "lizard" && (computerHand == "spock" || computerHand == "paper")) {  
        setDecision("YOU BEAT THE SYSTEM");
        setScore(SCORE + 1);
    } else if(userHand == "spock" && (computerHand == "rock" || computerHand == "scissors")) {
        setDecision("YOU BEAT THE SYSTEM");
        setScore(SCORE + 1);
    } else if(userHand == computerHand) {
        setDecision("A TIE IS NOT ACCEPTABLE");
    } else {
        setDecision("YOU HAVE LOST!");
    }
}

const setDecision = (decision) => {         // function to display the decision
    document.querySelector(".decision h1").innerText = decision;
    console.log(decision)
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".scoreboard_score h1").innerText = score;           // function to display the score
    console.log(score)
}

const playAgain = () => {           // function to play again
    let hand_signs = document.querySelectorAll(".hand_signs");
    hand_signs.forEach(hand_signs => {
        hand_signs.style.display = "flex";
    });

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}