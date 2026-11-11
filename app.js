import { QUESTIONS, AREAS } from "./questions.js";

const TOTAL_QUESTIONS = 30;
const PASS_SCORE = 20;
const EXAM_SECONDS = 60 * 60;
const AREA_ORDER = ["sinalizacao", "infracoes", "direcao", "socorros"];
const LETTERS = ["A", "B", "C", "D"];

const $ = (id) => document.getElementById(id);
const screens = ["home-screen", "exam-screen", "result-screen"];
let exam = [];
let answers = {};
let currentIndex = 0;
let remainingSeconds = EXAM_SECONDS;
let timerHandle = null;
let startedAt = null;
let finishedAt = null;

function showScreen(id) {
  screens.forEach((screenId) => $(screenId).classList.toggle("hidden", screenId !== id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffle(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// A distribuição 8/8/7/7 é uma escolha pedagógica deste protótipo,
// não uma afirmação sobre a ponderação oficial da prova.
function createExam() {
  const areaCounts = Object.fromEntries(AREA_ORDER.map((area) => [area, 7]));
  shuffle(AREA_ORDER).slice(0, 2).forEach((area) => areaCounts[area]++);

  const selected = [];
  for (const area of AREA_ORDER) {
    const pool = QUESTIONS.filter((question) => question.area === area);
    if (pool.length < areaCounts[area]) {
      throw new Error(`Banco insuficiente de questões para: ${AREAS[area]}`);
    }
    selected.push(...shuffle(pool).slice(0, areaCounts[area]));
  }

  return shuffle(selected).map((question) => {
    const markedOptions = question.options.map((text, index) => ({
      text,
      correct: index === question.answer
    }));
    const randomizedOptions = shuffle(markedOptions);
    return {
      ...question,
      options: randomizedOptions.map((option) => option.text),
      answer: randomizedOptions.findIndex((option) => option.correct)
    };
  });
}

function startExam() {
  stopTimer();
  exam = createExam();
  answers = {};
  currentIndex = 0;
  remainingSeconds = EXAM_SECONDS;
  startedAt = Date.now();
  finishedAt = null;
  $("timer").classList.remove("warning");
  renderQuestion();
  renderQuestionMap();
  updateProgress();
  updateTimer();
  showScreen("exam-screen");
  timerHandle = window.setInterval(() => {
    remainingSeconds = Math.max(0, remainingSeconds - 1);
    updateTimer();
    if (remainingSeconds === 0) finishExam(true);
  }, 1000);
}

function stopTimer() {
  if (timerHandle !== null) {
    window.clearInterval(timerHandle);
    timerHandle = null;
  }
}

function updateTimer() {
  const mins = Math.floor(remainingSeconds / 60).toString().padStart(2, "0");
  const secs = (remainingSeconds % 60).toString().padStart(2, "0");
  $("timer").textContent = `${mins}:${secs}`;
  $("timer").classList.toggle("warning", remainingSeconds <= 5 * 60);
}

function renderQuestion() {
  const question = exam[currentIndex];
  $("area-tag").textContent = AREAS[question.area];
  $("question-id").textContent = `QUESTÃO ${String(currentIndex + 1).padStart(2, "0")}`;
  $("question-counter").textContent = `QUESTÃO ${String(currentIndex + 1).padStart(2, "0")} / ${TOTAL_QUESTIONS}`;
  $("question-text").textContent = question.prompt;
  $("options").innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = `option ${answers[currentIndex] === index ? "selected" : ""}`;
    button.type = "button";
    button.innerHTML = `<span class="option-key">${LETTERS[index]}</span><span></span>`;
    button.querySelector("span:last-child").textContent = option;
    button.addEventListener("click", () => {
      answers[currentIndex] = index;
      renderQuestion();
      renderQuestionMap();
      updateProgress();
    });
    $("options").appendChild(button);
  });

  $("answer-state").textContent = answers[currentIndex] === undefined
    ? "Selecione uma alternativa"
    : `Alternativa ${LETTERS[answers[currentIndex]]} selecionada`;
  $("prev-btn").disabled = currentIndex === 0;
  $("next-btn").textContent = currentIndex === TOTAL_QUESTIONS - 1 ? "Ir ao início →" : "Próxima →";
}

function renderQuestionMap() {
  $("question-grid").innerHTML = "";
  exam.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `q-number ${answers[index] !== undefined ? "answered" : ""} ${index === currentIndex ? "current" : ""}`;
    button.textContent = String(index + 1).padStart(2, "0");
    button.setAttribute("aria-label", `Ir para questão ${index + 1}`);
    button.addEventListener("click", () => {
      currentIndex = index;
      renderQuestion();
      renderQuestionMap();
    });
    $("question-grid").appendChild(button);
  });
}

function updateProgress() {
  const count = Object.keys(answers).length;
  $("progress-text").textContent = `${count} de ${TOTAL_QUESTIONS} respondidas`;
  $("answered-count").textContent = `${count}/${TOTAL_QUESTIONS}`;
  $("progress-bar").style.width = `${(count / TOTAL_QUESTIONS) * 100}%`;
}

function finishExam(timeExpired = false) {
  const unanswered = TOTAL_QUESTIONS - Object.keys(answers).length;
  if (!timeExpired && unanswered > 0) {
    const proceed = window.confirm(`Você deixou ${unanswered} questão(ões) sem resposta. Deseja finalizar mesmo assim?`);
    if (!proceed) return;
  } else if (!timeExpired) {
    const proceed = window.confirm("Deseja finalizar e conferir seu resultado?");
    if (!proceed) return;
  }

  stopTimer();
  finishedAt = Date.now();
  showResults(timeExpired);
}

function calculateResults() {
  const byArea = Object.fromEntries(AREA_ORDER.map((area) => [area, {
    total: 0, correct: 0, incorrect: 0
  }]));
  let score = 0;

  exam.forEach((question, index) => {
    const areaResult = byArea[question.area];
    areaResult.total++;
    if (answers[index] === question.answer) {
      score++;
      areaResult.correct++;
    } else {
      areaResult.incorrect++;
    }
  });

  for (const area of AREA_ORDER) {
    const item = byArea[area];
    item.percent = item.total ? Math.round((item.correct / item.total) * 100) : 0;
  }
  return { score, byArea, accuracy: Math.round((score / TOTAL_QUESTIONS) * 100) };
}

function bestAndWeakest(byArea) {
  const ranked = AREA_ORDER.map((area) => ({ area, ...byArea[area] }))
    .sort((a, b) => b.percent - a.percent || b.correct - a.correct);
  const bestPercent = ranked[0].percent;
  const weakPercent = ranked[ranked.length - 1].percent;
  return {
    best: ranked.filter((item) => item.percent === bestPercent),
    weak: ranked.filter((item) => item.percent === weakPercent)
  };
}

function areaDescription(items, kind) {
  const titles = items.map((item) => AREAS[item.area]).join(" · ");
  if (items.length > 1) {
    return {
      title: "Empate entre áreas",
      detail: `${titles}. Resultado igual neste simulado (${items[0].correct}/${items[0].total} acertos em cada área).`
    };
  }
  const item = items[0];
  if (kind === "best") {
    const note = item.percent >= 80 ? "Seu melhor resultado. Mantenha a revisão para consolidar." :
      "Foi sua melhor área nesta prova, mas ainda há espaço para consolidar o conteúdo.";
    return { title: AREAS[item.area], detail: `${item.correct} de ${item.total} acertos (${item.percent}%). ${note}` };
  }
  const note = item.percent < 50 ? "Priorize esta matéria nos próximos estudos." :
    "É o ponto que mais merece revisão antes de outro simulado.";
  return { title: AREAS[item.area], detail: `${item.correct} de ${item.total} acertos (${item.percent}%). ${note}` };
}

function showResults(timeExpired) {
  const result = calculateResults();
  const { best, weak } = bestAndWeakest(result.byArea);
  const bestText = areaDescription(best, "best");
  const weakText = areaDescription(weak, "weak");
  $("score").textContent = result.score;
  $("accuracy").textContent = `${result.accuracy}% de aproveitamento`;
  $("score-bar").style.width = `${result.accuracy}%`;
  $("elapsed").textContent = timeExpired ? "Tempo esgotado" : formatDuration(Math.floor((finishedAt - startedAt) / 1000));
  $("result-title").textContent = result.score >= PASS_SCORE ? "Você atingiu a pontuação mínima." : "Ainda não foi dessa vez.";
  $("result-subtitle").textContent = timeExpired
    ? "O tempo terminou. Veja seus acertos e use o diagnóstico para direcionar a revisão."
    : "Confira seu desempenho por assunto. O diagnóstico mostra onde você foi melhor e onde vale concentrar os estudos.";
  $("result-status").textContent = result.score >= PASS_SCORE ? "APROVADO NO SIMULADO" : "ABAIXO DA NOTA DE CORTE";
  $("result-status").classList.toggle("fail", result.score < PASS_SCORE);
  $("best-area").textContent = bestText.title;
  $("best-detail").textContent = bestText.detail;
  $("weak-area").textContent = weakText.title;
  $("weak-detail").textContent = weakText.detail;

  $("area-results").innerHTML = "";
  AREA_ORDER.forEach((area) => {
    const item = result.byArea[area];
    const card = document.createElement("div");
    card.className = "area-result";
    card.innerHTML = `
      <div class="area-result-top"><h4></h4><span class="area-percent">${item.percent}%</span></div>
      <p class="area-count">${item.correct} acertos de ${item.total} questões · ${item.incorrect} erros</p>
      <div class="area-track"><span style="width:${item.percent}%"></span></div>`;
    card.querySelector("h4").textContent = AREAS[area];
    $("area-results").appendChild(card);
  });

  renderReview();
  showScreen("result-screen");
}

function renderReview() {
  $("review-list").innerHTML = "";
  exam.forEach((question, index) => {
    const chosen = answers[index];
    const correct = chosen === question.answer;
    const card = document.createElement("article");
    card.className = "review-item";
    const top = document.createElement("div");
    top.className = "review-top";
    const label = document.createElement("span");
    label.textContent = `QUESTÃO ${String(index + 1).padStart(2, "0")} · ${AREAS[question.area]}`;
    const mark = document.createElement("span");
    mark.className = `review-mark ${correct ? "correct" : "incorrect"}`;
    mark.textContent = correct ? "✓ ACERTOU" : "✕ NÃO ACERTOU";
    top.append(label, mark);

    const title = document.createElement("h4");
    title.textContent = question.prompt;
    const userAnswer = document.createElement("p");
    userAnswer.className = "review-answer";
    userAnswer.innerHTML = chosen === undefined
      ? "<strong>Sua resposta:</strong> Não respondida"
      : `<strong>Sua resposta:</strong> ${LETTERS[chosen]}.`;
    if (chosen !== undefined) userAnswer.append(document.createTextNode(` ${question.options[chosen]}`));
    const correctAnswer = document.createElement("p");
    correctAnswer.className = "review-answer";
    correctAnswer.innerHTML = `<strong>Resposta correta:</strong> ${LETTERS[question.answer]}.`;
    correctAnswer.append(document.createTextNode(` ${question.options[question.answer]}`));
    const explanation = document.createElement("p");
    explanation.className = "review-explanation";
    explanation.textContent = `Comentário: ${question.explanation}`;
    card.append(top, title, userAnswer, correctAnswer, explanation);
    $("review-list").appendChild(card);
  });
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

$("start-btn").addEventListener("click", startExam);
$("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
    renderQuestionMap();
  }
});
$("next-btn").addEventListener("click", () => {
  if (currentIndex < TOTAL_QUESTIONS - 1) currentIndex++;
  else currentIndex = 0;
  renderQuestion();
  renderQuestionMap();
});
$("finish-btn").addEventListener("click", () => finishExam(false));
$("new-exam-btn").addEventListener("click", startExam);
$("home-btn").addEventListener("click", () => {
  stopTimer();
  showScreen("home-screen");
});

if (QUESTIONS.length < TOTAL_QUESTIONS) {
  $("start-btn").disabled = true;
  $("start-btn").textContent = "Banco de questões insuficiente";
}
