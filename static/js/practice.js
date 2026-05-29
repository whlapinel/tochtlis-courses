var correctCount = 0;
var totalProblems = 0;

document.querySelectorAll('.problem').forEach(function (problem) {
  totalProblems++;
  var expected = parseFloat(problem.dataset.answer);
  var tolerance = parseFloat(problem.dataset.tolerance) || 0.02;
  var input = problem.querySelector('input');
  var checkBtn = problem.querySelector('.check-btn');
  var feedback = problem.querySelector('.feedback');
  var hint = problem.querySelector('.hint');
  var solution = problem.querySelector('.solution');
  var showSolutionBtn = problem.querySelector('.show-solution-btn');
  var attempts = 0;
  var solved = false;

  function check() {
    var val = parseFloat(input.value);
    if (isNaN(val)) {
      feedback.textContent = 'Enter a number first.';
      feedback.className = 'feedback';
      feedback.hidden = false;
      return;
    }
    var relErr = Math.abs(val - expected) / Math.abs(expected);
    attempts++;
    if (relErr <= tolerance) {
      feedback.textContent = '✓ Correct!';
      feedback.className = 'feedback correct';
      feedback.hidden = false;
      if (showSolutionBtn) showSolutionBtn.hidden = false;
      if (!solved) {
        solved = true;
        correctCount++;
        if (correctCount === totalProblems) {
          postCompletion();
        }
      }
    } else {
      feedback.textContent = '✗ Not quite — try again.';
      feedback.className = 'feedback incorrect';
      feedback.hidden = false;
      if (attempts >= 2) {
        if (hint) hint.hidden = false;
        if (showSolutionBtn) showSolutionBtn.hidden = false;
      }
    }
  }

  checkBtn.addEventListener('click', check);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') check();
  });

  if (showSolutionBtn) {
    showSolutionBtn.addEventListener('click', function () {
      if (solution) solution.hidden = false;
      showSolutionBtn.hidden = true;
    });
  }
});

function postCompletion() {
  var courseId = (document.querySelector('meta[name="course-id"]') || {}).content;
  var parts = window.location.pathname.replace(/\/$/, '').split('/');
  var weekPart = parts.find(function (p) { return /^week\d+/.test(p); });
  var dayPart = parts.find(function (p) { return /^day\d+/.test(p); });
  if (!courseId || !weekPart || !dayPart) return;
  var week = parseInt(weekPart.replace('week', ''), 10);
  var day = parseInt(dayPart.replace('day', '').replace('-practice', '').replace(/^0+/, '') || '0', 10);
  if (!week || !day) return;

  fetch('/api/progress/' + courseId + '/weeks/' + week + '/days/' + day, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      if (data && data.weekComplete && data.keyFragment) {
        showKeyFragment(data.keyFragment);
      }
    })
    .catch(function () {});
}

function showKeyFragment(key) {
  var banner = document.createElement('div');
  banner.className = 'week-complete-banner';
  banner.innerHTML =
    '<h2>Week Complete!</h2>' +
    '<p>Your secret key for this week:</p>' +
    '<code class="key-fragment">' + key + '</code>' +
    '<p><strong>Write it down!</strong> You’ll need it later.</p>';
  document.body.prepend(banner);
  window.scrollTo(0, 0);
}
