const col = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector('#change');
const colour=document.querySelector('.colour');
var prevColour= [];
btn.addEventListener('click', function(){
    let hexcolour="#";
    for( var i=0;i<6;i++)
    {
        hexcolour += col[Math.floor(Math.random()*col.length)]; 
    }
    prevColour.push(hexcolour);
    colour.innerText = hexcolour;
    document.body.style.backgroundColor = hexcolour;
    if(prevColour.length > 4)
    {
        prevColour.shift();
    }
})
var i = prevColour.length - 1;
const btn1=document.getElementById('prev');
btn1.addEventListener('click',function(){
    console.log(prevColour);
    
    i++;
    i=i%4;
    colour.innerText= prevColour[i];
    console.log(prevColour[i]);
    console.log(i);

    document.body.style.backgroundColor = prevColour[i];

})