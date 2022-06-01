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

openButton.addEventListener('click', function (){
    gameWrap.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', function (){
    gameWrap.style.display = 'none';
    document.body.style.overflow = 'visible';
});


