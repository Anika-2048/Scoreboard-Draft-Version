const players = document.querySelector(".allnames");

// Delete Players 
players.addEventListener('click',function(e){
    if(e.target.className == 'material-symbols-outlined'){
        const namebox = e.target.parentElement.parentElement;
        players.removeChild(namebox);
    }
})

// Add Players
const addplayer = document.forms[0];
addplayer.addEventListener('submit',function(e){
    e.preventDefault();
    const newname = addplayer.querySelector('#name').value;
    const newpoints = addplayer.querySelector('#score').value;
    
    //creating element
    const namebox = document.createElement('div');
    namebox.classList.add('namebox');
    const number = document.createElement('div');
    number.classList.add('number');
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const name = document.createElement('div');
    name.classList.add('name');
    const points = document.createElement('div');
    points.classList.add('points');
    const cross = document.createElement('div');
    cross.classList.add('material-symbols-outlined');
    const hoverbox = document.createElement('div');
    hoverbox.classList.add('hoverbox');
    const hoveringeffect = document.createElement('div');
    hoveringeffect.classList.add('hoveringeffect');

    hoveringeffect.appendChild(cross);
    hoveringeffect.appendChild(hoverbox);
    namebox.appendChild(number);
    namebox.appendChild(circle);
    namebox.appendChild(name);
    namebox.appendChild(points);
    namebox.appendChild(hoveringeffect);
    players.appendChild(namebox);
    if(namebox.previousElementSibling == null){
        var serial = 4;
    }else{
        var serial = Number(namebox.previousElementSibling.querySelector('div.number').textContent) + 1;
    }

    number.textContent = serial;
    name.textContent = newname;
    points.textContent = newpoints;
    cross.textContent = 'close';
    hoverbox.innerHTML = "Remove this player because there are<br>too many on the leaderboard?";
    
})

const hide = document.querySelector("#hidebox");
hide.addEventListener('change',function(e){
    if(hide.checked){
        players.style.display = "none";
    }else{
        players.style.display = "initial";
    }
})







