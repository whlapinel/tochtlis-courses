(function () {
  var cards = Array.from(document.querySelectorAll('.lesson-card'));
  if (!cards.length) return;

  var current = 0;

  // Wrap cards in a container for fullscreen support
  var container = document.createElement('div');
  container.className = 'lesson-container';
  cards[0].parentNode.insertBefore(container, cards[0]);
  cards.forEach(function (c) { container.appendChild(c); });

  // Hide all cards except the first
  cards.forEach(function (c, i) { if (i !== 0) c.hidden = true; });

  // Build nav and append to container
  var nav = document.createElement('div');
  nav.className = 'lesson-nav';
  nav.innerHTML =
    '<button class="nav-btn" id="btn-back">← Back</button>' +
    '<span class="nav-counter" id="card-counter"></span>' +
    '<button class="nav-btn" id="btn-next">Next →</button>' +
    '<button class="nav-btn" id="btn-fs" title="Fullscreen">⛶ Full</button>';
  container.appendChild(nav);

  var fsBtn = document.getElementById('btn-fs');
  fsBtn.addEventListener('click', function () {
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(function () {});
    } else {
      document.exitFullscreen();
    }
  });
  document.addEventListener('fullscreenchange', function () {
    fsBtn.textContent = document.fullscreenElement ? '✕ Exit' : '⛶ Full';
  });

  function updateNav() {
    document.getElementById('btn-back').disabled = current === 0;
    document.getElementById('btn-next').disabled = current === cards.length - 1;
    document.getElementById('card-counter').textContent = (current + 1) + ' of ' + cards.length;
  }

  function stopTTS() {
    speechSynthesis.cancel();
    cards.forEach(function (c) {
      var btn = c.querySelector('.tts-btn');
      if (btn) btn.textContent = '🔊 Read';
    });
  }

  function goTo(idx) {
    stopTTS();
    cards[current].hidden = true;
    current = idx;
    cards[current].hidden = false;
    updateNav();
    container.scrollTop = 0;
  }

  document.getElementById('btn-next').addEventListener('click', function () {
    if (current < cards.length - 1) goTo(current + 1);
  });

  document.getElementById('btn-back').addEventListener('click', function () {
    if (current > 0) goTo(current - 1);
  });

  // Arrow key navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' && current < cards.length - 1) goTo(current + 1);
    if (e.key === 'ArrowLeft' && current > 0) goTo(current - 1);
  });

  // TTS per card
  cards.forEach(function (card) {
    var btn = card.querySelector('.tts-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (speechSynthesis.speaking) {
        stopTTS();
        return;
      }
      var text = card.querySelector('.card-body').textContent.replace(/\s+/g, ' ').trim();
      var utter = new SpeechSynthesisUtterance(text);
      utter.rate = 0.8;
      utter.pitch = 1.1;
      utter.onend = function () { btn.textContent = '🔊 Read'; };
      utter.onerror = function () { btn.textContent = '🔊 Read'; };
      speechSynthesis.speak(utter);
      btn.textContent = '⏹ Stop';
    });
  });

  updateNav();
})();
