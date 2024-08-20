let Userscore = 0;
let Compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const UserScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const playgame = (userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice = gencompchoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drowgame();
    }else{
        let userwin=true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userwin = compChoice === "scisser"?false:true;
        }else{
            userwin = compChoice === "rock"?false:true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("clicked",userChoice);
        playgame(userChoice);
    });
});

const gencompchoice=()=>{
    const options =["rock","paper","scisser"];
   let ranidx=  Math.floor(Math.random()*3);
   return options[ranidx];
}
const drowgame= ()=>{
    console.log("Game was drow.Play again.");
    msg.innerHTML = "Game was drow.Play again.";
    msg.style.backgroundColor = "black";
}
const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        Userscore ++;
        UserScorePara.innerHTML = `${Userscore}`;
        console.log("you won!");
        msg.innerHTML = `you won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        Compscore ++;
        CompScorePara.innerHTML = `${Compscore}`;
        console.log("you lose.");
        msg.innerHTML = `you lose!!! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}