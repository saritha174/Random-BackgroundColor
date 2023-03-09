//Accessing element from html
const button = document.getElementById('btn');
const background_color = document.getElementById('s');

//take array for hexcode,Hexcode has 6 digits which has 0-9 and A-F
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
//after add eventlistener to click on the button function works
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
    //Math.random() is return the value b/w 0 to 1 after that value is multiplied by 16 i.e., the length of the area
}
button.addEventListener('click',(e)=>{
    console.log(e)
    let randomColor = "#"
    for(var position = 0;position < 6;position++){
        randomColor += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = randomColor
    background_color.textContent = randomColor
})