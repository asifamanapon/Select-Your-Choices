function setPlayer(player, playerBtn) {
    const playerNameField = document.getElementById(player);
    const playerName = playerNameField.innerText;
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    const list = playerList.querySelectorAll('li');
    let j = 0;
    for (let i = 0; i < list.length; i++) {
        j = i;
    }
    if (j < 4) {
        document.getElementById('player-list').appendChild(li);
        document.getElementById(playerBtn).setAttribute('disabled', '');
    }
    else {
        alert('Maximum number reached');
    }
    
}

document.getElementById('btn-rupa').addEventListener('click', function () {
    setPlayer('player-rupa', 'btn-rupa');
})
document.getElementById('btn-halima').addEventListener('click', function () {
    setPlayer('player-halima', 'btn-halima');
})
document.getElementById('btn-mariya').addEventListener('click', function () {
    setPlayer('player-mariya', 'btn-mariya');
})
document.getElementById('btn-manika').addEventListener('click', function () {
    setPlayer('player-manika', 'btn-manika');
})
document.getElementById('btn-mowshumi').addEventListener('click', function () {
    setPlayer('player-mowshumi', 'btn-mowshumi');
})
document.getElementById('btn-brishti').addEventListener('click', function () {
    setPlayer('player-brishti', 'btn-brishti');
})
document.getElementById('btn-rehana').addEventListener('click', function () {
    setPlayer('player-rehana', 'btn-rehana');
})
document.getElementById('btn-retuporna').addEventListener('click', function () {
    setPlayer('player-retuporna', 'btn-retuporna');
})
document.getElementById('btn-sanjida').addEventListener('click', function () {
    setPlayer('player-sanjida', 'btn-sanjida');
})