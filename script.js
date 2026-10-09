
const words = [
  { de: "Hallo", tr: ["merhaba", "selam"], ex: "Hallo! Wie geht es dir?" },
  { de: "Danke", tr: ["teşekkürler", "teşekkür ederim", "sağ ol"], ex: "Danke für deine Hilfe." },
  { de: "Wasser", tr: ["su"], ex: "Ich trinke Wasser." },
  { de: "Brot", tr: ["ekmek"], ex: "Ich esse Brot." },
  { de: "Haus", tr: ["ev"], ex: "Das Haus ist groß." },
  { de: "Buch", tr: ["kitap"], ex: "Das Buch ist interessant." },
  { de: "Schule", tr: ["okul"], ex: "Ich gehe zur Schule." },
  { de: "Familie", tr: ["aile"], ex: "Meine Familie ist nett." },
  { de: "Freund", tr: ["arkadaş", "erkek arkadaş"], ex: "Er ist mein Freund." },
  { de: "Lernen", tr: ["öğrenmek", "ders çalışmak"], ex: "Ich lerne Deutsch." },
  { de: "Essen", tr: ["yemek", "yemek yemek"], ex: "Wir essen zusammen." },
  { de: "Trinken", tr: ["içmek"], ex: "Ich trinke Tee." },
  { de: "Arbeiten", tr: ["çalışmak"], ex: "Ich arbeite heute." },
  { de: "Wohnen", tr: ["oturmak", "ikamet etmek", "yaşamak"], ex: "Ich wohne in Deutschland." },
  { de: "Sprechen", tr: ["konuşmak"], ex: "Ich spreche Deutsch." },
  { de: "Lesen", tr: ["okumak"], ex: "Ich lese ein Buch." },
  { de: "Schreiben", tr: ["yazmak"], ex: "Ich schreibe einen Brief." },
  { de: "Gehen", tr: ["gitmek", "yürümek"], ex: "Ich gehe nach Hause." },
  { de: "Kommen", tr: ["gelmek"], ex: "Ich komme aus der Türkei." },
  { de: "Heute", tr: ["bugün"], ex: "Heute lerne ich Deutsch." },
  { de: "Morgen", tr: ["yarın"], ex: "Morgen gehe ich zur Schule." },
  { de: "Gestern", tr: ["dün"], ex: "Gestern war ich zu Hause." },
  { de: "Müde", tr: ["yorgun"], ex: "Ich bin müde." },
  { de: "Glücklich", tr: ["mutlu"], ex: "Ich bin glücklich." },
  { de: "Schnell", tr: ["hızlı", "çabuk"], ex: "Er läuft schnell." }
];

const $ = id => document.getElementById(id);

function localDateKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadSave() {
  try {
    return JSON.parse(localStorage.getItem("dq-save")) || {};
  } catch {
    return {};
  }
}

let saved = loadSave();
const today = localDateKey();

if (saved.date !== today) {
  saved = {
    date: today,
    learned: 0,
    coins: Number(saved.coins) || 0,
    done: []
  };
}

saved.learned = Number(saved.learned) || 0;
saved.coins = Number(saved.coins) || 0;
saved.done = Array.isArray(saved.done) ? saved.done : [];

let index = 0;
let answered = false;
let gamePairs = [];
let selectedCard = null;
let matchedCards = new Set();
let gameLocked = false;

function save() {
  try {
    localStorage.setItem("dq-save", JSON.stringify(saved));
  } catch {
    // Uygulama depolama izni yoksa çalışmaya devam eder.
  }
}

function normalize(value) {
  return value
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ");
}

function updateProgress() {
  $("coins").textContent = saved.coins;
  $("progressText").textContent = `${saved.learned} / 25 kelime`;
  $("progressPercent").textContent =
    `${Math.min(100, Math.round(saved.learned / 25 * 100))}%`;

  $("progressBar").style.width =
    `${Math.min(100, saved.learned / 25 * 100)}%`;
}

function renderWord() {
  const word = words[index % words.length];

  $("word").textContent = word.de;
  $("example").textContent = word.ex;
  $("counter").textContent = `Kelime ${index + 1}`;
  $("answer").value = "";
  $("feedback").textContent = "";
  $("feedback").className = "";
  $("checkBtn").hidden = false;
  $("nextBtn").hidden = true;
  $("checkBtn").disabled = false;
  answered = false;

  updateProgress();
}

function checkAnswer() {
  if (answered) return;

  const answer = normalize($("answer").value);

  if (!answer) {
    showFeedback("Önce Türkçe anlamını yaz.", false);
    return;
  }

  const wordIndex = index % words.length;
  const word = words[wordIndex];

  const correct = word.tr.some(
    meaning => normalize(meaning) === answer
  );

  if (!correct) {
    showFeedback(`Yanlış cevap. İpucu: ${word.tr[0]}`, false);
    return;
  }

  answered = true;

  if (!saved.done.includes(wordIndex)) {
    saved.done.push(wordIndex);
    saved.learned += 1;
    saved.coins += 5;
    save();
    showFeedback("Doğru cevap. 5 coin kazandın.", true);
  } else {
    showFeedback("Doğru cevap. Bu kelime için coin kazandın.", true);
  }

  $("checkBtn").hidden = true;
  $("nextBtn").hidden = false;
  updateProgress();
}

function showFeedback(message, success) {
  $("feedback").textContent = message;
  $("feedback").className = success
    ? "feedback-success"
    : "feedback-error";
}

$("checkBtn").addEventListener("click", checkAnswer);

$("answer").addEventListener("keydown", event => {
  if (event.key === "Enter") checkAnswer();
});

$("nextBtn").addEventListener("click", () => {
  index = (index + 1) % words.length;
  renderWord();
});

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".page").forEach(page => {
      page.hidden = page.id !== button.dataset.page;
    });

    document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.toggle("active", tab === button);
    });
  });
});

document.querySelectorAll(".quiz-option").forEach(button => {
  button.addEventListener("click", () => {
    const correct = button.dataset.answer === "bin";

    $("grammarFeedback").textContent = correct
      ? "Doğru cevap. Ich bin müde."
      : "Tekrar dene. Ich kelimesiyle bin kullanılır.";

    $("grammarFeedback").className = correct
      ? "feedback-success"
      : "feedback-error";
  });
});

function startGame() {
  const selectedWords = [...words]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  gamePairs = [];
  matchedCards = new Set();
  selectedCard = null;
  gameLocked = false;

  selectedWords.forEach((word, i) => {
    gamePairs.push({
      id: i,
      pairId: i,
      text: word.de,
      type: "de"
    });

    gamePairs.push({
      id: i + 4,
      pairId: i,
      text: word.tr[0],
      type: "tr"
    });
  });

  gamePairs.sort(() => Math.random() - 0.5);
  $("gameFeedback").textContent = "";
  $("gameArea").replaceChildren();

  const description = document.createElement("p");
  description.textContent =
    "Bir Almanca kelimeye, sonra doğru Türkçe anlamına bas.";
  $("gameArea").appendChild(description);

  const grid = document.createElement("div");
  grid.className = "game-grid";

  gamePairs.forEach(card => {
    const button = document.createElement("button");
    button.className = "game-choice";
    button.textContent = card.text;
    button.dataset.id = card.id;
    button.addEventListener("click", () => selectCard(card, button));
    grid.appendChild(button);
  });

  $("gameArea").appendChild(grid);
}

function selectCard(card, button) {
  if (gameLocked || matchedCards.has(card.id)) return;
  if (selectedCard && selectedCard.card.id === card.id) return;

  button.classList.add("selected");

  if (!selectedCard) {
    selectedCard = { card, button };
    return;
  }

  const first = selectedCard;

  if (
    first.card.pairId === card.pairId &&
    first.card.type !== card.type
  ) {
    matchedCards.add(first.card.id);
    matchedCards.add(card.id);

    first.button.classList.remove("selected");
    first.button.classList.add("matched");
    button.classList.remove("selected");
    button.classList.add("matched");

    selectedCard = null;

    if (matchedCards.size === gamePairs.length) {
      $("gameFeedback").textContent =
        "Tebrikler, bütün kelimeleri eşleştirdin.";
      $("gameFeedback").className = "feedback-success";
    } else {
      $("gameFeedback").textContent = "Doğru eşleştirme.";
      $("gameFeedback").className = "feedback-success";
    }
  } else {
    gameLocked = true;
    $("gameFeedback").textContent = "Bu eşleştirme doğru değil.";
    $("gameFeedback").className = "feedback-error";

    setTimeout(() => {
      first.button.classList.remove("selected");
      button.classList.remove("selected");
      selectedCard = null;
      gameLocked = false;
    }, 650);
  }
}

$("startGameBtn").addEventListener("click", startGame);

save();
renderWord();
