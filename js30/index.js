import isMobile from './modules/touch.mjs';
import birds from './modules/birdsInform.mjs';
import imgbackground from './modules/imgbasckground.mjs';


// возращаем текущий браузер


if (isMobile.any()) {    
    document.body.classList.add('_touch');

} else {
    document.body.classList.add('_pc');
}

// name_bird

const nameBirds = document.querySelectorAll('.menu__a[data-namebird]');
 nameBirds.forEach(nameBird =>{
    const languageBird = birds.ru;
    const nameBirdKey = nameBird.dataset.namebird;
    nameBird.textContent = languageBird[nameBirdKey];
 });
 
// -----
 
const audio = new Audio();
const imgPlayPause = document.querySelector('.img_play');


const buttonPlayClicks = document.querySelectorAll('.img_play[data-playpause], .menu__a[data-namebird], .logo__bird[data-namebird]');

// console.log(buttonPlayClicks);


if(buttonPlayClicks.length > 0){
    buttonPlayClicks.forEach(buttonPlayClick =>{
      buttonPlayClick.addEventListener("click", onButtonPlayClick);
   
    });
  };
 
function onButtonPlayClick(e) {
     
    const buttonPlaysClick = e.target;
        // console.log(buttonPlaysClick);
    if(buttonPlaysClick.dataset.playpause === 'play'){
       onPlayPause(document.querySelector('.img_play'))
    }else  if(buttonPlaysClick.classList.contains('_action')){
        audioPlayButton();       
        audioPlayPause();
    }else if (!buttonPlaysClick.classList.contains('_action')){
        const classAction = document.querySelector('._action');
        classAction.classList.remove('_action');
        buttonPlaysClick.classList.add('_action');
       
        audioPlayButton();
        audioPlayPause();  
    }
       
};



function audioPlayButton (){
    const clickPlayPause = document.querySelector('.img_play');
    if (clickPlayPause.classList.contains('_pause')){
        clickPlayPause.classList.remove('_pause');
        imgPlayPause.classList.add('_plays');
     imgPlayPause.src = `./assets/svg/pause.svg` ;
    } 
}

function audioPlayPause(){
    const imgActions = document.querySelector('.container_main');
    
    const audioActions = document.querySelector('._action');
    const audioAction = audioActions.dataset.namebird;
    
    imgActions.style.backgroundImage = imgbackground[audioAction].imgKey;
    audio.src= imgbackground[audioAction].audioKey;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function onPlayPause (buttonPlaysClick){
    if(buttonPlaysClick.classList.contains('_pause')){
        imgPlayPause.classList.remove('_pause');
        imgPlayPause.classList.add('_plays');
        imgPlayPause.src = `./assets/svg/pause.svg` ;
      
       audioPlayPause(); 
       
    }   else if(buttonPlaysClick.classList.contains('_plays')){
        imgPlayPause.classList.remove('_plays');
        imgPlayPause.classList.add('_pause');
        imgPlayPause.src = `./assets/svg/play.svg`;
        audio.pause();
        
        
        };
}   
    
   
    

        


         

    

