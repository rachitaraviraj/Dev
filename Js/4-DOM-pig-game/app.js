/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying;
init();




//document.querySelector('#current-'+activePlayer).textContent=dice;
//Document.querySelector('current-' + activePlayer).inner.HTML='<em>'+ dice +  '</em>';

//var x=document.querySelector('#score-0').textContent;


document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){

          // 1 Random Number 
     var dice = Math.floor(Math.random()*6)+1
     console.log(dice);

     //2 Disply Result
     var diceDom=document.querySelector('.dice');
     diceDom.style.display='block';
     diceDom.src='dice-' + dice + '.png';
     // Update only if the score is not one 

     if(dice!==1){
        roundscore += dice
        document.querySelector('#current-'+activePlayer).textContent=roundscore;
     }else{

        //next player 
        
        nextplayer();

     }

    }

  


});

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){


        //Add current score to Globel Score

    score[activePlayer]+=roundscore;


    //update the Ui

    document.querySelector('#score-' + activePlayer).textContent=score[activePlayer];
 
   nextplayer();

    //check if plyer won the game 

    if(
        score[activePlayer]>=20){
            document.querySelector('#name-' + activePlayer).textContent='Winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            gamePlaying=false;

            

        }else{
            nextplayer();


        }



    }




    



});


function nextplayer(){

    activePlayer ===0 ? activePlayer=1 : activePlayer=0;
    roundscore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    //document.querySelector('.player-0-panel').classList.remove('active')
    //document.querySelector('.player-0-panel').classList.add('active')

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
    
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    score=[0,0];
    roundscore=0;
    activePlayer=0;
    gamePlaying=true;

    
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}