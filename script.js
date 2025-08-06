// to‘siqlarni tezroq harakatlantirish
obstacles.forEach(ob => {
  ob.x -= obstacleSpeed;
});

// collision (urilish) tekshiruvi
for (let ob of obstacles) {
  if (
    player.x < ob.x + ob.width &&
    player.x + player.width > ob.x &&
    player.y < ob.y + ob.height &&
    player.y + player.height > ob.y
  ) {
    gameOver = true;
    restartMsg.style.display = 'block';
  }
}

// score va fon rang yangilanishi
score++;
scoreEl.textContent = 'Ball: ' + score;
colorProgress = Math.min(1, score / 1000);

draw();
requestAnimationFrame(update);


// draw() funksiyasi o‘zgarishsiz qoladi (ranglar bilan chiroyli bo‘lib turgan edi)

// boshqaruvlar
window.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    if (gameOver) {
      resetGame();
      update();
    } else if (player.grounded) {
      player.dy = JUMP_STRENGTH;
      player.grounded = false;
    }
  }
});

// o‘yin boshlanishi
resetGame();
update();
