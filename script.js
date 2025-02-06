
const pickUserHand = (hand) => {
    console.log(hand);
    let hand_signs = document.querySelectorAll(".hand_signs");
    hand_signs.forEach(hand_sign => {
        hand_sign.style.display = "none";
    });

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
}