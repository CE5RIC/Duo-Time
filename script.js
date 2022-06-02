const oldBody = document.body.innerHTML;


const img = Array.from(document.getElementsByTagName('img'));
const rickImg = img[0].src;
const birdImg = img[1].src;
const tuskImg = img[2].src;
const timImg = img[3].src;

const correctSources= [
    timImg,
    'https://cdn.traveltalktours.com/wp-content/uploads/2022/02/shutterstock_1704263050-1024x684.jpg',
    'https://i1.sndcdn.com/artworks-000412076226-m06b6u-t500x500.jpg',
    rickImg
];

const originalSources = [];
img.forEach(image => {
    image.style.cursor = 'pointer';
    originalSources.push(image.src);
});

const p = Array.from(document.getElementsByTagName('p'));
const originalP = [];
p.forEach(para => {
    para.style.cursor = 'pointer';
    originalP.push(para.textContent);
})
console.log(originalSources)
for (let i = 0; i < img.length; i++) {
    img[i].style.width = '100%';
    img[i].addEventListener('mouseover', function (){
        console.log(originalSources[i]);
        img[i].src = originalSources[i];
    });
    img[i].addEventListener('mouseout', function (){
        img[i].src = correctSources[i];
    });
}
const timTxt = p[3].textContent.replace('Rick Sanchez', 'Tim');
const rickTxt = p[2].textContent.replace('Tim', 'Rick Sanchez');

p[0].innerText += '"';
p[1].innerText = 'Tyler1 is the best league of legends player in the world. His head is massive and polymorphed due to the shape of his headset, regardless he still found a girlfriend.';
p[2].innerText = timTxt;
p[3].innerText = rickTxt;
p[2].style.height = '67px';
p[3].style.height = '67px';

const correctP = [
    p[0].textContent,
    p[1].textContent,
    p[2].textContent,
    p[3].textContent
]

correctP.forEach((para, i) => {
    p[i].addEventListener('mouseover', function (){
        p[i].innerText = originalP[i];
    });
    p[i].addEventListener('mouseout', function (){
        p[i].innerText = para;
    });
})

img[0].src = timImg;
img[1].src = 'https://cdn.traveltalktours.com/wp-content/uploads/2022/02/shutterstock_1704263050-1024x684.jpg';
img[2].src = 'https://i1.sndcdn.com/artworks-000412076226-m06b6u-t500x500.jpg';
img[3].src = rickImg;

for (let i = 0; i < img.length; i++) {
    console.log(img[i].height)
    img[i].style.transition = '0.5s';
    img[i].style.height = img[i].height+'px';
}

document.body.style.background = 'rgb(20,20,20)';
document.body.style.color = 'rgb(220,220,220)';

const title = document.createElement('p')
title.innerText = 'Hover over the elements to view their original state';
title.style.textAlign = 'center';
document.body.prepend(title);


///////////////////////////////////////////////////////////////////
//                           Maze game                           //
///////////////////////////////////////////////////////////////////

class Cell {
    div = document.createElement('div');
    borderSize = 1;
    borderColor = '#1c4976';
    color = '#11273d';
    activeColor = '#c397fa';
    visitedColor = '#606bba';
    playerColor = 'green';
    goalColor = 'red';

    active = false;
    visited = false;
    playerHere = false;
    isGoal = false;

    leftWall = true;
    topWall = true;
    rightWall = true;
    bottomWall = true;

    constructor(x,y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
    }


    show(){
        grid.div.appendChild(this.div);
        this.div.style.height = this.w+'px';
        this.div.style.width = this.w+'px';
        this.div.style.position = 'absolute';
        this.div.style.left = this.x*this.w+'px';
        this.div.style.top = this.y*this.w+'px';
        this.div.style.boxSizing = 'border-box';
    }

    update(){
        if(this.leftWall){
            this.div.style.borderLeft = this.borderSize+'px solid '+this.borderColor;
        }else{
            this.div.style.borderLeft = 0+'px solid '+this.borderColor;
        }
        if(this.topWall){
            this.div.style.borderTop = this.borderSize+'px solid '+this.borderColor;
        }else{
            this.div.style.borderTop = 0+'px solid '+this.borderColor;
        }
        if(this.rightWall){
            this.div.style.borderRight = this.borderSize+'px solid '+this.borderColor;
        }else{
            this.div.style.borderRight = 0+'px solid '+this.borderColor;
        }
        if(this.bottomWall){
            this.div.style.borderBottom = this.borderSize+'px solid '+this.borderColor;
        }else{
            this.div.style.borderBottom = 0+'px solid '+this.borderColor;
        }
        if(this.active){
            this.div.style.background = this.activeColor;
        }else if(this.visited){
            this.div.style.background = this.visitedColor;
        }else{
            this.div.style.background = this.color;
        }
        if(this.isGoal){
            this.div.style.background = this.goalColor;
        }
        if(this.playerHere){
            this.div.style.background = this.playerColor;
        }
    }
}

class Goal{
    x = 2;
    y = 2;
    cell = grid.getCell(this.x,this.y);
    moved = false;

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    update(){
        //this.cell.isGoal = false;
        this.cell = grid.getCell(this.x,this.y);
        this.cell.isGoal = true;
    }

    move(){
        if(!this.moved){
            //TODO maybe add some moving functionality?
        }
        this.moved = false;
    }
}

class Player{
    x = 0;
    y = 0;
    cell = grid.getCell(this.x,this.y);
    moved = false;

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    update(){
        this.cell.playerHere = false;
        this.cell = grid.getCell(this.x,this.y);
        this.cell.playerHere = true;
    }

    move(){
        if(map[37] && !this.moved){
            //left
            if(!this.cell.leftWall){
                this.x = this.x-1;
                this.moved = true;
            }
        }
        if(map[38] && !this.moved){
            //up
            if(!this.cell.topWall){
                this.y = this.y-1;
                this.moved = true;
            }
        }
        if(map[39] && !this.moved){
            //right
            if(!this.cell.rightWall){
                this.x = this.x+1;
                this.moved = true;
            }
        }
        if(map[40] && !this.moved){
            //down
            if(!this.cell.bottomWall){
                this.y = this.y+1;
                this.moved = true;
            }
        }
        this.moved = false;
    }
}

class Grid {
    cells = [];
    div = document.createElement('div');
    rows = cols;
    cols = rows;
    cellWidth = cellWidth;
    gameWrap;

    constructor(wrap) {
        console.log(wrap)
        this.gameWrap = wrap;
    }

    show(){
        console.log('show')
        this.gameWrap.appendChild(this.div);
        this.div.style.position = 'absolute';
        this.div.style.width = this.rows*this.cellWidth+'px';
        this.div.style.height = this.cols*this.cellWidth+'px';
        this.div.style.left = (window.innerWidth/2)-(this.rows*this.cellWidth/2)+'px';
        this.div.style.top = (window.innerHeight/2)-(this.cols*this.cellWidth/2)+'px';
        this.cells.forEach(cell => {
            cell.show();
        });
    }

    getCell(x,y){
        let foundCell = this.cells[1];
        this.cells.forEach(cell => {
            if(cell.x === x && cell.y === y){
                foundCell = cell;
            }
        });
        return foundCell
    }

    init(){
        this.cells = [];
        const randomX = Math.floor(Math.random()*this.rows);
        const randomY = Math.floor(Math.random()*this.cols);
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.cols; y++) {
                const cell = new Cell(x,y,this.cellWidth);
                if(x === randomX && y === randomY){
                    cell.active = true;
                    cell.visited = true;
                    cell.isGoal = false;
                    cell.playerHere = false;
                    mazeMaker.activeCell = cell;
                    mazeMaker.stack.push(cell);
                }
                this.cells.push(cell);
            }
        }
        this.show();
    }
}

class MazeMaker{
    stack = [];
    activeCell;
    finished = false;

    next(){
        if(this.stack.length){
            this.activeCell.active = false;
            const neighbours = this.neighbours(this.activeCell);
            if(neighbours.length){
                let index = Math.floor(Math.random()*neighbours.length);
                this.removeWalls(this.activeCell, neighbours[index]);
                this.activeCell = neighbours[index];
                this.activeCell.active = true;
                this.activeCell.visited = true;
                this.stack.push(this.activeCell);
            }else{
                this.activeCell = this.stack.pop();
                this.activeCell.active = true;
            }
        }else{
            this.finished = true;
            this.done();
        }
    }

    removeWalls(c1,c2){
        if(c1.x === c2.x){
            if(c1.y > c2.y){
                //c1 top c2 bottom
                c1.topWall = false;
                c2.bottomWall = false;
            }else{
                //c2 bottom c1 top
                c2.topWall = false;
                c1.bottomWall = false;
            }
        }else{
            if(c1.x > c2.x){
                //c1 left c2 right
                c1.leftWall = false;
                c2.rightWall = false;
            }else{
                //c1 right c2 left
                c2.leftWall = false;
                c1.rightWall = false;
            }
        }
    }

    done(){
        this.activeCell.active = false;
    }

    neighbours(cell){
        const neighbours = [];
        grid.cells.forEach(c => {
            if(
                c.x+1 === cell.x && c.y === cell.y ||
                c.x-1 === cell.x && c.y === cell.y ||
                c.x === cell.x && c.y+1 === cell.y ||
                c.x === cell.x && c.y-1 === cell.y
            ){
                if(!c.visited){
                    neighbours.push(c);
                }
            }
        });
        return neighbours;
    }
}

function main(){
    mazeMaker.next();
    grid.cells.forEach(cell => {
        cell.update();
    });
    if(mazeMaker.finished){
        player = new Player(0,0);
        goal = new Goal(cols-1, rows-1);
        play();
        return;
    }
    if(keepGoing){
        setTimeout(main, tic);
    }
}


function play(){
    grid.cells.forEach(cell => {
        cell.update();
    });
    player.update();
    goal.update();
    if(player.cell === goal.cell){
        win();
    }
    moveCounter++;
    if(moveCounter === 8){
        moveCounter = 0;
        player.move();
    }
    setTimeout(play, tic);
}

function win(){
    alert('you win');
}

const newBody = document.body.innerHTML;
addResetButton();

let old = false;
function switchBody(){
    console.log(old);
    if(old){
        document.body.innerHTML = newBody;
        document.body.style.background = 'rgb(20,20,20)';
        document.body.style.color = 'rgb(220,220,220)';
        initGame();
    }else{
        document.body.innerHTML = oldBody;
        document.body.removeAttribute('style');
    }
    old = !old;
    addResetButton();
}

function addResetButton(){
    const switchButton = document.createElement('button');
    document.body.appendChild(switchButton);
    switchButton.innerText = '♻';
    switchButton.style.position = 'fixed';
    switchButton.style.width = '30px';
    switchButton.style.height = '30px';
    switchButton.style.right = '30px';
    switchButton.style.bottom = '30px';
    switchButton.addEventListener('click', switchBody);
}

const map = {};
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
}

let tic;
let cellWidth;
let rows;
let cols;
let grid;
let mazeMaker;
let player;
let goal;
let keepGoing = true;
let moveCounter = 0;
initGame();
function initGame(){
    const openButton = document.createElement('button');
    openButton.innerText = "Let's go then!";
    openButton.style.width = '100%';
    openButton.style.height = '150px';
    openButton.style.fontSize = '3rem';
    openButton.style.cursor = 'pointer';
    document.getElementsByClassName('container')[0].appendChild(openButton);

    const gameWrap = document.createElement('div');
    document.body.append(gameWrap);
    gameWrap.style.width = '100%';
    gameWrap.style.height = '100vh';
    gameWrap.style.position = 'fixed';
    gameWrap.style.top = '0';
    gameWrap.style.left = '0';
    gameWrap.style.display = 'none';
    gameWrap.style.background = 'rgb(20,20,20)';

    const closeButton = document.createElement('button');
    closeButton.innerText = "x";
    closeButton.style.color = 'white';
    closeButton.style.height = '30px';
    closeButton.style.width = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.background = 'red';
    closeButton.style.position = 'absolute';
    closeButton.style.right = '0';
    gameWrap.appendChild(closeButton);

    tic = 10;
    cellWidth = 30;
    rows = 20;
    cols = 40;
    grid = new Grid(gameWrap);
    mazeMaker = new MazeMaker();
    keepGoing = true;
    moveCounter = 0;

    openButton.addEventListener('click', function (){
        gameWrap.style.display = 'block';
        document.body.style.overflow = 'hidden';
        keepGoing = false;
        grid.div.remove();
        grid = new Grid(gameWrap);
        mazeMaker = new MazeMaker();
        grid.init();
        console.log(grid)
        setTimeout(function (){
            keepGoing = true;
            main();
        }, 1000)
    });

    closeButton.addEventListener('click', function (){
        gameWrap.style.display = 'none';
        document.body.style.overflow = 'visible';
    });

}


