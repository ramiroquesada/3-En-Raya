//Elementos del DOM

const X_CLASS ='x';
const CIRCLE_CLASS='circle';

const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn;


//Event listener para las celdas
cellElements.forEach(cell=>{
    cell.addEventListener('click', handleClick, { once:true })
})


function handleClick(e){

    console.log(e.target)
    const cell = e.target;
    const currentCLass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    placeMark(cell, currentCLass)
    // Poner marca

    //Chequear victoria

    //Chequear empate

    //Switch Turns
    swapTurns();
       
}




let placeMark =(cell, currentCLass)=>{
    let newImg = document.createElement('img');   
    newImg.classList.add('mark');
    
    console.log(newImg)
    

    if (currentCLass == CIRCLE_CLASS){
        newImg.setAttribute('src', '/imgs/circle.png')
        cell.append(newImg)
        

    }
    else {
        newImg.setAttribute('src', '/imgs/candy.png')
        cell.append(newImg)
    }


}


let swapTurns = ()=>{
    circleTurn  = !circleTurn
}