(() => {
  "use strict";

  const words = [
    {de:"Hallo", tr:["merhaba"], ex:"Hallo! Wie geht es dir?", level:"A1"},
    {de:"Guten Morgen", tr:["günaydın","iyi sabahlar"], ex:"Guten Morgen, Frau Müller!", level:"A1"},
    {de:"Guten Abend", tr:["iyi akşamlar"], ex:"Guten Abend zusammen.", level:"A1"},
    {de:"Tschüss", tr:["hoşça kal","güle güle"], ex:"Tschüss! Bis morgen.", level:"A1"},
    {de:"Danke", tr:["teşekkürler","teşekkür ederim"], ex:"Danke für deine Hilfe.", level:"A1"},
    {de:"Bitte", tr:["lütfen","rica ederim","buyurun"], ex:"Ein Wasser, bitte.", level:"A1"},
    {de:"Ja", tr:["evet"], ex:"Ja, ich verstehe.", level:"A1"},
    {de:"Nein", tr:["hayır"], ex:"Nein, danke.", level:"A1"},
    {de:"Entschuldigung", tr:["özür dilerim","affedersiniz"], ex:"Entschuldigung, wo ist der Bahnhof?", level:"A1"},
    {de:"Wie geht's?", tr:["nasılsın","nasıl gidiyor"], ex:"Hallo! Wie geht's?", level:"A1"},
    {de:"der Name", tr:["isim","ad"], ex:"Mein Name ist Ali.", level:"A1"},
    {de:"die Familie", tr:["aile"], ex:"Meine Familie ist groß.", level:"A1"},
    {de:"die Mutter", tr:["anne"], ex:"Meine Mutter ist zu Hause.", level:"A1"},
    {de:"der Vater", tr:["baba"], ex:"Mein Vater arbeitet heute.", level:"A1"},
    {de:"das Kind", tr:["çocuk"], ex:"Das Kind spielt im Garten.", level:"A1"},
    {de:"das Haus", tr:["ev"], ex:"Das Haus ist groß.", level:"A1"},
    {de:"die Wohnung", tr:["daire","ev"], ex:"Unsere Wohnung hat drei Zimmer.", level:"A1"},
    {de:"das Zimmer", tr:["oda"], ex:"Mein Zimmer ist klein.", level:"A1"},
    {de:"die Schule", tr:["okul"], ex:"Die Schule beginnt um acht Uhr.", level:"A1"},
    {de:"der Lehrer", tr:["öğretmen"], ex:"Der Lehrer erklärt die Aufgabe.", level:"A1"},
    {de:"das Buch", tr:["kitap"], ex:"Das Buch liegt auf dem Tisch.", level:"A1"},
    {de:"der Tisch", tr:["masa"], ex:"Der Tisch ist neu.", level:"A1"},
    {de:"der Stuhl", tr:["sandalye"], ex:"Der Stuhl ist bequem.", level:"A1"},
    {de:"das Wasser", tr:["su"], ex:"Ich trinke Wasser.", level:"A1"},
    {de:"das Brot", tr:["ekmek"], ex:"Ich kaufe frisches Brot.", level:"A1"},
    {de:"der Apfel", tr:["elma"], ex:"Der Apfel ist rot.", level:"A1"},
    {de:"die Milch", tr:["süt"], ex:"Das Kind trinkt Milch.", level:"A1"},
    {de:"der Kaffee", tr:["kahve"], ex:"Ich trinke gern Kaffee.", level:"A1"},
    {de:"das Essen", tr:["yemek"], ex:"Das Essen schmeckt gut.", level:"A1"},
    {de:"der Tag", tr:["gün"], ex:"Heute ist ein schöner Tag.", level:"A1"},
    {de:"heute", tr:["bugün"], ex:"Heute lerne ich Deutsch.", level:"A1"},
    {de:"morgen", tr:["yarın","sabah"], ex:"Morgen gehe ich zur Schule.", level:"A1"},
    {de:"gestern", tr:["dün"], ex:"Gestern war ich zu Hause.", level:"A1"},
    {de:"gut", tr:["iyi","güzel"], ex:"Mir geht es gut.", level:"A1"},
    {de:"schlecht", tr:["kötü"], ex:"Das Wetter ist schlecht.", level:"A1"},
    {de:"groß", tr:["büyük"], ex:"Das Gebäude ist groß.", level:"A1"},
    {de:"klein", tr:["küçük"], ex:"Der Hund ist klein.", level:"A1"},
    {de:"schön", tr:["güzel"], ex:"Das ist eine schöne Stadt.", level:"A1"},
    {de:"müde", tr:["yorgun"], ex:"Ich bin heute müde.", level:"A1"},
    {de:"krank", tr:["hasta"], ex:"Mein Sohn ist krank.", level:"A1"},
    {de:"lernen", tr:["öğrenmek","ders çalışmak"], ex:"Ich lerne Deutsch.", level:"A1"},
    {de:"sprechen", tr:["konuşmak"], ex:"Wir sprechen Türkisch.", level:"A1"},
    {de:"machen", tr:["yapmak"], ex:"Was machst du heute?", level:"A1"},
    {de:"gehen", tr:["gitmek"], ex:"Ich gehe nach Hause.", level:"A1"},
    {de:"kommen", tr:["gelmek"], ex:"Woher kommst du?", level:"A1"},
    {de:"wohnen", tr:["oturmak","ikamet etmek"], ex:"Ich wohne in Deutschland.", level:"A1"},
    {de:"arbeiten", tr:["çalışmak"], ex:"Mein Vater arbeitet viel.", level:"A1"},
    {de:"essen", tr:["yemek yemek"], ex:"Wir essen zusammen.", level:"A1"},
    {de:"trinken", tr:["içmek"], ex:"Ich trinke Tee.", level:"A1"},
    {de:"lesen", tr:["okumak"], ex:"Ich lese ein Buch.", level:"A1"},
    {de:"schreiben", tr:["yazmak"], ex:"Sie schreibt eine E-Mail.", level:"A1"},
    {de:"kaufen", tr:["satın almak"], ex:"Ich kaufe Gemüse.", level:"A1"},
    {de:"brauchen", tr:["ihtiyaç duymak","gerekmek"], ex:"Ich brauche Hilfe.", level:"A1"},
    {de:"haben", tr:["sahip olmak"], ex:"Ich habe einen Bruder.", level:"A1"},
    {de:"sein", tr:["olmak"], ex:"Ich möchte zu Hause sein.", level:"A1"},
    {de:"die Frage", tr:["soru"], ex:"Ich habe eine Frage.", level:"A1"},
    {de:"die Antwort", tr:["cevap","yanıt"], ex:"Die Antwort ist richtig.", level:"A1"},
    {de:"die Zeit", tr:["zaman","vakit"], ex:"Ich habe heute keine Zeit.", level:"A1"},
    {de:"der Bahnhof", tr:["tren istasyonu"], ex:"Wo ist der Bahnhof?", level:"A1"},
    {de:"der Bus", tr:["otobüs"], ex:"Ich fahre mit dem Bus.", level:"A1"},
    {de:"das Ticket", tr:["bilet"], ex:"Ich kaufe ein Ticket.", level:"A1"},
    {de:"die Arbeit", tr:["iş"], ex:"Ich gehe zur Arbeit.", level:"A1"},
    {de:"die Hilfe", tr:["yardım"], ex:"Danke für deine Hilfe.", level:"A1"},
    {de:"wichtig", tr:["önemli"], ex:"Deutsch ist wichtig für mich.", level:"A2"},
    {de:"vielleicht", tr:["belki"], ex:"Vielleicht komme ich morgen.", level:"A2"},
    {de:"deshalb", tr:["bu yüzden","bundan dolayı"], ex:"Ich bin krank, deshalb bleibe ich zu Hause.", level:"A2"},
    {de:"trotzdem", tr:["buna rağmen","yine de"], ex:"Es regnet, trotzdem gehen wir spazieren.", level:"A2"},
    {de:"die Möglichkeit", tr:["imkân","olanak"], ex:"Gibt es eine andere Möglichkeit?", level:"A2"},
    {de:"die Erfahrung", tr:["deneyim","tecrübe"], ex:"Das war eine gute Erfahrung.", level:"A2"},
    {de:"vereinbaren", tr:["kararlaştırmak","randevulaşmak"], ex:"Wir vereinbaren einen Termin.", level:"A2"},
    {de:"absagen", tr:["iptal etmek"], ex:"Ich muss den Termin absagen.", level:"A2"},
    {de:"verschieben", tr:["ertelemek"], ex:"Können wir den Termin verschieben?", level:"A2"},
    {de:"vergessen", tr:["unutmak"], ex:"Ich habe meinen Schlüssel vergessen.", level:"A2"},
    {de:"entscheiden", tr:["karar vermek"], ex:"Wir müssen heute entscheiden.", level:"A2"},
    {de:"die Gesundheit", tr:["sağlık"], ex:"Gesundheit ist sehr wichtig.", level:"A2"},
    {de:"die Nachricht", tr:["mesaj","haber"], ex:"Ich schreibe dir eine Nachricht.", level:"A2"},
    {de:"pünktlich", tr:["dakik","tam zamanında"], ex:"Der Zug ist pünktlich.", level:"A2"},
    {de:"bequem", tr:["rahat","konforlu"], ex:"Diese Schuhe sind bequem.", level:"A2"},
    {de:"möglich", tr:["mümkün"], ex:"Ist das heute möglich?", level:"A2"},
    {de:"die Umgebung", tr:["çevre","civar"], ex:"Die Umgebung ist sehr ruhig.", level:"A2"},
    {de:"der Unterschied", tr:["fark"], ex:"Was ist der Unterschied?", level:"A2"},
    {de:"beschreiben", tr:["tarif etmek","betimlemek"], ex:"Kannst du den Weg beschreiben?", level:"A2"},
    {de:"empfehlen", tr:["tavsiye etmek","önermek"], ex:"Was kannst du mir empfehlen?", level:"A2"},
    {de:"die Meinung", tr:["fikir","görüş"], ex:"Meiner Meinung nach ist das gut.", level:"A2"}
  ];

  const questions = [
    {topic:"Sein fiili", q:"Ich ___ müde.", a:["bin","bist","sind"], c:"bin", why:"Ich bin = Ben ...im.",level:"A1"},
    {topic:"Sein fiili", q:"Du ___ sehr nett.", a:["ist","bist","bin"], c:"bist", why:"Du bist = Sen ...sin.",level:"A1"},
    {topic:"Sein fiili", q:"Gestern ___ ich krank.", a:["war","waren","bist"], c:"war", why:"Geçmişte ich ile war kullanılır.",level:"A2"},
    {topic:"Haben fiili", q:"Du ___ heute Zeit.", a:["habe","hat","hast"], c:"hast", why:"Du hast = Senin var.",level:"A1"},
    {topic:"Fiil çekimi", q:"Er ___ in Uhingen.", a:["wohne","wohnen","wohnt"], c:"wohnt", why:"Er/sie/es ile fiil genellikle -t alır.",level:"A1"},
    {topic:"Fiil çekimi", q:"Wir ___ Deutsch.", a:["lernt","lernen","lerne"], c:"lernen", why:"Wir lernen = Biz öğreniyoruz.",level:"A1"},
    {topic:"Modal fiil", q:"Ich ___ einen Kaffee trinken.", a:["möchte","möchtest","möchten"], c:"möchte", why:"Ich möchte = Ben istiyorum.",level:"A1"},
    {topic:"Geçmiş zaman", q:"Ich habe gestern Fußball ___.", a:["spielen","gespielt","spielst"], c:"gespielt", why:"Perfekt: haben + Partizip II (gespielt).",level:"A2"},
    {topic:"Geçmiş zaman", q:"Wir ___ gestern im Park.", a:["war","waren","seid"], c:"waren", why:"Wir waren = Biz ... idik.",level:"A2"},
    {topic:"Edatlar", q:"Ich fahre ___ dem Bus.", a:["mit","aus","von"], c:"mit", why:"Mit dem Bus = otobüsle.",level:"A1"},
    {topic:"Edatlar", q:"Ich komme ___ der Türkei.", a:["mit","aus","bei"], c:"aus", why:"Aus der Türkei = Türkiye'den.",level:"A1"},
    {topic:"Edatlar", q:"Das Geschenk ist ___ meiner Mutter.", a:["von","mit","nach"], c:"von", why:"Von meiner Mutter = annemden.",level:"A1"},
    {topic:"Artikel", q:"___ Tisch ist neu.", a:["Der","Die","Das"], c:"Der", why:"Tisch kelimesi der artikeliyle kullanılır.",level:"A1"},
    {topic:"Artikel", q:"Ich kaufe ___ Apfel.", a:["eine","einen","einem"], c:"einen", why:"Akkusativ hâlinde der Apfel → einen Apfel.",level:"A2"},
    {topic:"Kelime sırası", q:"Heute ___ ich Deutsch.", a:["lerne","ich lerne","lernen"], c:"lerne", why:"Heute başta ise çekimli fiil ikinci sırada gelir.",level:"A1"},
    {topic:"Bağlaçlar", q:"Ich bleibe zu Hause, ___ ich krank bin.", a:["weil","aber","oder"], c:"weil", why:"Weil yan cümlesinde çekimli fiil sona gider.",level:"A2"},
    {topic:"Karşılaştırma", q:"Mein Bruder ist ___ als ich.", a:["groß","größer","am größten"], c:"größer", why:"Als ile karşılaştırmada größer kullanılır.",level:"A2"},
    {topic:"Soru cümlesi", q:"___ wohnst du?", a:["Wo","Wer","Was"], c:"Wo", why:"Wo wohnst du? = Nerede oturuyorsun?",level:"A1"}
  ];

  const $ = id => document.getElementById(id);
  const SAVE_KEY = "deutschQuestSaveV4";
  const dateKey = () => {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
  };
  function readSave() {
    try {
      const data = JSON.parse(localStorage.getItem(SAVE_KEY) || "{}");
      return {
        coins: Number.isFinite(data.coins) ? data.coins : 0,
        done: Array.isArray(data.done) ? data.done : [],
        date: data.date === dateKey() ? data.date : dateKey(),
        doneToday: data.date === dateKey() && Array.isArray(data.doneToday) ? data.doneToday : [],
        level: data.level === "A2" ? "A2" : "A1",
        name: typeof data.name === "string" ? data.name.slice(0, 24) : "",
        avatar: ["🦊","🐼","🐯","🐸","🐱","🐨"].includes(data.avatar) ? data.avatar : "🦊",
        streak: Number.isFinite(data.streak) ? Math.max(0, data.streak) : 0,
        bestStreak: Number.isFinite(data.bestStreak) ? Math.max(0, data.bestStreak) : 0,
        lastStudyDate: typeof data.lastStudyDate === "string" ? data.lastStudyDate : "",
        grammarCorrect: Number.isFinite(data.grammarCorrect) ? Math.max(0, data.grammarCorrect) : 0,
        welcomeDone: data.welcomeDone === true,
        authMode: typeof data.authMode === "string" ? data.authMode : ""
      };
    } catch (e) {
      return {coins:0, done:[], date:dateKey(), doneToday:[], level:"A1", name:"", avatar:"🦊", streak:0, bestStreak:0, lastStudyDate:"", grammarCorrect:0, welcomeDone:false, authMode:""};
    }
  }
  const saved = readSave();
  let selectedLevel = saved.level === "A2" ? "A2" : "A1";
  saved.level = selectedLevel;
  let studyQueue = [];
  let answered = false;
  let nextTimer = null;
  let questionIndex = -1;
  let questionLocked = false;
  let grammarCorrect = Number.isFinite(saved.grammarCorrect) ? saved.grammarCorrect : 0;
  let roundId = 0;
  let selectedGermanId = null;
  let gameMatchCount = 0;
  let currentGameWords = [];
  let firebaseAuth = null;
  let activeAuthUser = null;
  let emailAuthMode = "signin";
  const AUTH_PENDING_KEY = "deutschQuestAuthPending";

  function persist() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(saved)); } catch (e) {}
  }
  function updateLevelControls() {
    document.querySelectorAll("[data-entry-level]").forEach(button => {
      const active = button.dataset.entryLevel === selectedLevel;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    document.querySelectorAll("[data-profile-level]").forEach(button => {
      const active = button.dataset.profileLevel === selectedLevel;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }
  function changeLevel(nextLevel) {
    selectedLevel = nextLevel === "A2" ? "A2" : "A1";
    saved.level = selectedLevel;
    persist();
    updateLevelControls();
    resetStudyQueue();
    questionIndex = -1;
    renderWord();
    renderGrammar();
    startGame();
    renderProfile();
  }
  function setAuthMessage(message, kind) {
    const messageEl = $("authMessage");
    if (!messageEl) return;
    messageEl.textContent = message || "";
    messageEl.classList.remove("success", "error");
    if (kind) messageEl.classList.add(kind);
  }
  function setEmailAuthMode(mode) {
    emailAuthMode = mode === "signup" ? "signup" : "signin";
    $("emailSubmitBtn").textContent = emailAuthMode === "signup" ? "Hesap oluştur" : "Giriş yap";
    $("passwordInput").autocomplete = emailAuthMode === "signup" ? "new-password" : "current-password";
    $("emailModeToggle").textContent = emailAuthMode === "signup"
      ? "Zaten hesabın var mı? Giriş yap"
      : "Yeni misin? Hesap oluştur";
    setAuthMessage("", "");
  }
  function firebaseConfigurationReady() {
    const config = window.DEUTSCH_QUEST_FIREBASE_CONFIG;
    return !!(window.firebase && config && config.apiKey && config.projectId && config.appId &&
      config.apiKey !== "PASTE_API_KEY_HERE" && config.projectId !== "YOUR_PROJECT_ID" &&
      config.appId !== "PASTE_APP_ID_HERE");
  }
  function authErrorText(error) {
    const code = error && error.code ? error.code : "";
    const messages = {
      "auth/invalid-email":"E-posta adresini kontrol et.",
      "auth/invalid-credential":"E-posta veya şifre yanlış.",
      "auth/wrong-password":"Şifre yanlış.",
      "auth/user-not-found":"Bu e-posta ile hesap bulunamadı.",
      "auth/email-already-in-use":"Bu e-posta zaten kayıtlı. Giriş yapmayı dene.",
      "auth/weak-password":"Şifre en az 6 karakter olmalı.",
      "auth/operation-not-allowed":"Bu giriş yöntemi Firebase ayarlarında henüz açılmamış.",
      "auth/unauthorized-domain":"Uygulamanın GitHub Pages adresi Firebase yetkili alanlarına eklenmeli.",
      "auth/account-exists-with-different-credential":"Bu e-posta başka bir giriş yöntemiyle kayıtlı.",
      "auth/network-request-failed":"Bağlantı başarısız. İnternetini kontrol et."
    };
    return messages[code] || "Giriş tamamlanamadı. Firebase ayarlarını ve bilgilerini kontrol et.";
  }
  function enterApp(user) {
    activeAuthUser = user || null;
    saved.welcomeDone = true;
    if (user) {
      saved.authMode = "firebase";
      if (!saved.name && user.displayName) saved.name = user.displayName.slice(0, 24);
    } else {
      saved.authMode = "guest";
    }
    persist();
    $("welcomeScreen").hidden = true;
    $("appShell").hidden = false;
    updateLevelControls();
    updateProgress();
    renderProfile();
  }
  async function enterAsGuest() {
    try {
      if (firebaseAuth && firebaseAuth.currentUser) await firebaseAuth.signOut();
    } catch (error) {}
    localStorage.removeItem(AUTH_PENDING_KEY);
    enterApp(null);
  }
  async function signInWithProvider(providerName) {
    if (!firebaseConfigurationReady() || !firebaseAuth) {
      setAuthMessage("Bu giriş yöntemini açmak için Firebase bağlantısı kurulmalı. Şimdilik misafir olarak devam edebilirsin.", "error");
      return;
    }
    localStorage.setItem(AUTH_PENDING_KEY, "1");
    try {
      const provider = providerName === "google"
        ? new firebase.auth.GoogleAuthProvider()
        : new firebase.auth.FacebookAuthProvider();
      firebaseAuth.useDeviceLanguage();
      await firebaseAuth.signInWithRedirect(provider);
    } catch (error) {
      localStorage.removeItem(AUTH_PENDING_KEY);
      setAuthMessage(authErrorText(error), "error");
    }
  }
  function initWelcomeAndAuth() {
    updateLevelControls();
    $("appShell").hidden = true;
    $("welcomeScreen").hidden = false;
    document.querySelectorAll("[data-entry-level]").forEach(button => {
      button.addEventListener("click", () => changeLevel(button.dataset.entryLevel));
    });
    document.querySelectorAll("[data-profile-level]").forEach(button => {
      button.addEventListener("click", () => changeLevel(button.dataset.profileLevel));
    });
    $("emailChoiceBtn").addEventListener("click", () => {
      $("emailAuthForm").hidden = !$("emailAuthForm").hidden;
      if (!$("emailAuthForm").hidden) $("emailInput").focus();
      setAuthMessage("", "");
    });
    $("emailModeToggle").addEventListener("click", () => {
      setEmailAuthMode(emailAuthMode === "signin" ? "signup" : "signin");
    });
    $("emailAuthForm").addEventListener("submit", async event => {
      event.preventDefault();
      if (!firebaseConfigurationReady() || !firebaseAuth) {
        setAuthMessage("E-posta girişi için önce Firebase ayarları tamamlanmalı. Şimdilik misafir girişi çalışıyor.", "error");
        return;
      }
      const email = $("emailInput").value.trim();
      const password = $("passwordInput").value;
      localStorage.setItem(AUTH_PENDING_KEY, "1");
      $("emailSubmitBtn").disabled = true;
      try {
        const result = emailAuthMode === "signup"
          ? await firebaseAuth.createUserWithEmailAndPassword(email, password)
          : await firebaseAuth.signInWithEmailAndPassword(email, password);
        localStorage.removeItem(AUTH_PENDING_KEY);
        enterApp(result.user);
      } catch (error) {
        localStorage.removeItem(AUTH_PENDING_KEY);
        setAuthMessage(authErrorText(error), "error");
      } finally {
        $("emailSubmitBtn").disabled = false;
      }
    });
    $("googleLoginBtn").addEventListener("click", () => signInWithProvider("google"));
    $("facebookLoginBtn").addEventListener("click", () => signInWithProvider("facebook"));
    $("guestBtn").addEventListener("click", () => enterAsGuest());
    $("accountContinueBtn").addEventListener("click", () => {
      if (firebaseAuth && firebaseAuth.currentUser) enterApp(firebaseAuth.currentUser);
      else enterAsGuest();
    });
    $("logoutBtn").addEventListener("click", async () => {
      try {
        if (firebaseAuth && firebaseAuth.currentUser) await firebaseAuth.signOut();
      } catch (error) {}
      saved.welcomeDone = false;
      saved.authMode = "";
      persist();
      window.location.reload();
    });

    if (saved.welcomeDone && saved.authMode === "guest") enterApp(null);
    if (!firebaseConfigurationReady()) {
      $("authSetupNote").hidden = false;
      setAuthMessage("Şimdilik misafir olarak devam edebilirsin; e-posta, Google ve Facebook için Firebase bağlantısı gerekiyor.", "");
    } else {
      $("authSetupNote").hidden = true;
      try {
        if (!firebase.apps.length) firebase.initializeApp(window.DEUTSCH_QUEST_FIREBASE_CONFIG);
        firebaseAuth = firebase.auth();
        firebaseAuth.useDeviceLanguage();
        firebaseAuth.getRedirectResult().catch(error => {
          localStorage.removeItem(AUTH_PENDING_KEY);
          setAuthMessage(authErrorText(error), "error");
        });
        firebaseAuth.onAuthStateChanged(user => {
          activeAuthUser = user || null;
          if (user && (saved.welcomeDone || localStorage.getItem(AUTH_PENDING_KEY) === "1")) {
            localStorage.removeItem(AUTH_PENDING_KEY);
            enterApp(user);
          } else if (user) {
            $("accountContinueBtn").hidden = false;
            setAuthMessage("Hesabın açık. Seviyeni seçip devam edebilirsin.", "success");
          }
          renderProfile();
        });
      } catch (error) {
        setAuthMessage("Giriş bağlantısı başlatılamadı. Firebase yapılandırmasını kontrol et.", "error");
      }
    }
  }
  function recordStudyActivity() {
    const today = dateKey();
    if (saved.date !== today) {
      saved.date = today;
      saved.doneToday = [];
    }
    if (saved.lastStudyDate === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.getFullYear() + "-" +
      String(yesterday.getMonth() + 1).padStart(2, "0") + "-" +
      String(yesterday.getDate()).padStart(2, "0");
    saved.streak = saved.lastStudyDate === yesterdayKey ? saved.streak + 1 : 1;
    saved.bestStreak = Math.max(saved.bestStreak, saved.streak);
    saved.lastStudyDate = today;
  }
  function normalize(value) {
    return String(value || "").trim().toLocaleLowerCase("tr-TR")
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[.!?'"’]/g, "").replace(/\s+/g, " ");
  }
  function setFeedback(element, message, kind) {
    if (!element) return;
    element.textContent = message;
    element.classList.remove("success", "error");
    if (kind) element.classList.add(kind);
  }
  function updateProgress() {
    $("coins").textContent = String(saved.coins);
    $("progressText").textContent = saved.doneToday.length + " / 10 kelime";
    const pct = Math.min(100, Math.round(saved.doneToday.length / 10 * 100));
    $("progressPercent").textContent = pct + "%";
    $("progressBar").style.width = pct + "%";
    $("knownCount").textContent = saved.done.length + " öğrenildi";
    renderProfile();
  }
  function renderProfile() {
    if (!$("profileNameDisplay")) return;
    $("profileNameDisplay").textContent = saved.name.trim() || "Deutsch Quest öğrencisi";
    $("profileAvatar").textContent = saved.avatar || "🦊";
    $("profileLevelSummary").textContent = "Aktif seviye: " + selectedLevel;
    if ($("accountStatus")) {
      $("accountStatus").textContent = activeAuthUser
        ? "Giriş yapıldı: " + (activeAuthUser.email || activeAuthUser.displayName || "hesap") + ". İlerleme bu cihazda saklanıyor."
        : "Misafir hesap. İlerleme bu cihazda saklanıyor.";
    }
    if ($("logoutBtn")) $("logoutBtn").textContent = activeAuthUser ? "Oturumu kapat" : "Giriş ekranına dön";
    $("currentStreak").textContent = saved.streak + " gün";
    $("bestStreak").textContent = saved.bestStreak + " gün";
    $("profileWords").textContent = String(saved.done.length);
    $("profileCoins").textContent = String(saved.coins);
    $("profileToday").textContent = saved.doneToday.length + " / 10";
    $("profileGrammar").textContent = String(saved.grammarCorrect || 0);
    const idsFor = level => words.map((word, id) => word.level === level ? id : -1).filter(id => id >= 0);
    const allA1 = idsFor("A1").every(id => saved.done.includes(id));
    const allA2 = idsFor("A2").every(id => saved.done.includes(id));
    const badges = [
      {icon:"🐣",title:"İlk kelime",detail:"İlk kelimeni öğrendin",earned:saved.done.length >= 1},
      {icon:"📚",title:"10 kelime",detail:"10 kelimeyi tamamla",earned:saved.done.length >= 10},
      {icon:"🎓",title:"25 kelime",detail:"25 kelimeyi tamamla",earned:saved.done.length >= 25},
      {icon:"🔥",title:"3 günlük seri",detail:"Üç gün üst üste çalış",earned:saved.streak >= 3},
      {icon:"🏆",title:"7 günlük seri",detail:"Bir hafta seri yap",earned:saved.streak >= 7},
      {icon:"🌞",title:"Günlük hedef",detail:"Bir günde 10 kelime öğren",earned:saved.doneToday.length >= 10},
      {icon:"🇩🇪",title:"A1 tamamlandı",detail:"A1 kelimelerinin hepsini öğren",earned:allA1},
      {icon:"🚀",title:"A2 tamamlandı",detail:"A2 kelimelerinin hepsini öğren",earned:allA2}
    ];
    const grid = $("badgeGrid");
    grid.replaceChildren();
    badges.forEach(badge => {
      const card = document.createElement("div");
      card.className = "badge-card" + (badge.earned ? " earned" : "");
      const icon = document.createElement("span");
      icon.className = "badge-icon";
      icon.textContent = badge.icon;
      const title = document.createElement("strong");
      title.textContent = badge.title;
      const detail = document.createElement("small");
      detail.textContent = badge.detail;
      card.append(icon, title, detail);
      grid.appendChild(card);
    });
  }
  function speakGerman(text, button) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      setFeedback($("feedback"), "Bu tarayıcı sesli okumayı desteklemiyor. Chrome ile tekrar dene.", "error");
      return;
    }
    const phrase = String(text || "").trim();
    if (!phrase) return;
    window.speechSynthesis.cancel();
    document.querySelectorAll(".speak-button").forEach(b => b.classList.remove("speaking"));
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = "de-DE";
    utterance.rate = 0.82;
    const voices = window.speechSynthesis.getVoices();
    const germanVoice = voices.find(voice => /^de(-|_)/i.test(voice.lang) && /de-DE/i.test(voice.lang))
      || voices.find(voice => /^de(-|_)/i.test(voice.lang));
    if (germanVoice) utterance.voice = germanVoice;
    if (button) button.classList.add("speaking");
    utterance.onend = () => { if (button) button.classList.remove("speaking"); };
    utterance.onerror = () => {
      if (button) button.classList.remove("speaking");
      setFeedback($("feedback"), "Ses açılamadı. Telefon ayarlarından Almanca metin okuma sesini yüklemeyi dene.", "error");
    };
    window.speechSynthesis.speak(utterance);
  }

  function availableWordIds() {
    return words.map((word, id) => ({word, id}))
      .filter(item => item.word.level === selectedLevel && !saved.done.includes(item.id))
      .map(item => item.id);
  }
  function availableWords() {
    return availableWordIds().map(id => words[id]);
  }
  function resetStudyQueue() {
    studyQueue = availableWordIds();
  }
  function renderWord() {
    if (nextTimer !== null) window.clearTimeout(nextTimer);
    nextTimer = null;
    answered = false;
    const wordId = studyQueue[0];
    const word = wordId === undefined ? null : words[wordId];
    $("answer").value = "";
    $("nextBtn").hidden = true;
    $("speakWord").disabled = !word;
    $("speakExample").disabled = !word;
    if (!word) {
      $("word").textContent = "Tebrikler! 🎉";
      $("example").textContent = "Bu seviyedeki tüm kelimeleri öğrendin.";
      $("counter").textContent = "Tamamlandı";
      $("levelTag").textContent = selectedLevel;
      $("answer").disabled = true;
      $("checkBtn").disabled = true;
      setFeedback($("feedback"), "Bu seviyedeki bütün kelimeleri doğru bildin. Diğer seviyeyi seçebilirsin.", "success");
      updateProgress();
      return;
    }
    $("word").textContent = word.de;
    $("example").textContent = word.ex;
    $("counter").textContent = "Kalan kelime: " + studyQueue.length;
    $("levelTag").textContent = word.level;
    $("answer").disabled = false;
    $("checkBtn").disabled = false;
    setFeedback($("feedback"), "", "");
    updateProgress();
  }
  function nextWord() {
    if (nextTimer !== null) window.clearTimeout(nextTimer);
    nextTimer = null;
    renderWord();
    if (!$("answer").disabled) $("answer").focus();
  }
  function checkAnswer() {
    if (answered) return;
    const wordId = studyQueue[0];
    if (wordId === undefined) return;
    const word = words[wordId];
    const given = normalize($("answer").value);
    if (!given) {
      setFeedback($("feedback"), "Önce Türkçe anlamını yaz.", "error");
      $("answer").focus();
      return;
    }
    const correct = word.tr.some(t => normalize(t) === given);
    answered = true;
    $("checkBtn").disabled = true;
    $("answer").disabled = true;
    $("nextBtn").hidden = false;
    if (!correct) {
      const wrongId = studyQueue.shift();
      studyQueue.push(wrongId);
      $("nextBtn").textContent = "Sonraki kelime →";
      setFeedback($("feedback"), "Yanlış. Doğrusu: " + word.tr.join(" / ") + ". Bu kelime daha sonra tekrar gelecek.", "error");
      nextTimer = window.setTimeout(() => {
        if (answered) nextWord();
      }, 1400);
      return;
    }
    if (!saved.done.includes(wordId)) {
      saved.done.push(wordId);
      saved.coins += 5;
    }
    recordStudyActivity();
    if (!saved.doneToday.includes(wordId)) saved.doneToday.push(wordId);
    studyQueue.shift();
    $("nextBtn").textContent = "Sonraki kelime →";
    setFeedback($("feedback"), studyQueue.length
      ? "Doğru! +5 coin. Bu kelime artık tekrar çıkmayacak. ✅"
      : "Doğru! +5 coin. Bu seviyedeki tüm kelimeleri bitirdin! 🎉", "success");
    persist();
    updateProgress();
    nextTimer = window.setTimeout(() => {
      if (answered) nextWord();
    }, 1200);
  }
  function setupTabs() {
    const tabs = Array.from(document.querySelectorAll("[data-page]"));
    const pages = Array.from(document.querySelectorAll(".page"));
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.page;
        tabs.forEach(item => {
          const active = item === tab;
          item.classList.toggle("active", active);
          item.setAttribute("aria-selected", active ? "true" : "false");
        });
        pages.forEach(page => { page.hidden = page.id !== target; });
      });
    });
  }
  function availableQuestions() {
    return questions.filter(question => question.level === selectedLevel);
  }
  function renderGrammar() {
    const levelQuestions = availableQuestions();
    questionIndex = (questionIndex + 1) % levelQuestions.length;
    const q = levelQuestions[questionIndex];
    questionLocked = false;
    $("grammarTopic").textContent = q.topic;
    $("grammarPrompt").textContent = q.q;
    $("grammarFeedback").textContent = "";
    $("grammarFeedback").classList.remove("success", "error");
    $("grammarOptions").replaceChildren();
    $("grammarScore").textContent = "Doğru cevap: " + grammarCorrect;
    const shuffled = q.a.slice().sort(() => Math.random() - 0.5);
    shuffled.forEach(answer => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.textContent = answer;
      button.addEventListener("click", () => {
        if (questionLocked) return;
        questionLocked = true;
        const right = answer === q.c;
        if (right) {
          grammarCorrect += 1;
          saved.grammarCorrect = (saved.grammarCorrect || 0) + 1;
          recordStudyActivity();
          persist();
          button.classList.add("correct");
          setFeedback($("grammarFeedback"), "Doğru! " + q.why, "success");
          updateProgress();
        } else {
          button.classList.add("incorrect");
          setFeedback($("grammarFeedback"), "Doğru cevap: " + q.c + ". " + q.why, "error");
          Array.from($("grammarOptions").children).forEach(option => {
            if (option.textContent === q.c) option.classList.add("correct");
          });
        }
        $("grammarScore").textContent = "Doğru cevap: " + grammarCorrect;
      });
      $("grammarOptions").appendChild(button);
    });
  }
  function shuffle(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function startGame() {
    roundId += 1;
    selectedGermanId = null;
    gameMatchCount = 0;
    const used = new Set();
    currentGameWords = [];
    const candidates = shuffle(availableWords());
    for (const word of candidates) {
      const id = words.indexOf(word);
      if (!used.has(id) && !currentGameWords.some(item => normalize(item.tr[0]) === normalize(word.tr[0]))) {
        used.add(id);
        currentGameWords.push({id:id, de:word.de, tr:word.tr[0]});
      }
      if (currentGameWords.length === 4) break;
    }
    const gameGoal = currentGameWords.length;
    $("gameProgress").textContent = "0 / " + gameGoal + " eşleşme";
    setFeedback($("gameFeedback"), gameGoal
      ? "Almanca ve Türkçe kartları eşleştir."
      : "Bu seviyede öğrenecek yeni kelime kalmadı. Diğer seviyeyi seçebilirsin.", gameGoal ? "" : "success");
    const area = $("gameArea");
    area.replaceChildren();
    const left = document.createElement("div");
    const right = document.createElement("div");
    left.className = "match-column";
    right.className = "match-column";
    left.setAttribute("aria-label", "Almanca kelimeler");
    right.setAttribute("aria-label", "Türkçe anlamlar");
    currentGameWords.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "match-option";
      button.textContent = item.de;
      button.dataset.id = String(item.id);
      button.addEventListener("click", () => {
        if (button.disabled) return;
        selectedGermanId = item.id;
        left.querySelectorAll(".match-option").forEach(b => b.classList.toggle("selected", b === button));
        setFeedback($("gameFeedback"), "Şimdi Türkçe anlamını seç.", "");
      });
      left.appendChild(button);
    });
    shuffle(currentGameWords).forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "match-option";
      button.textContent = item.tr;
      button.dataset.id = String(item.id);
      button.addEventListener("click", () => {
        if (button.disabled) return;
        if (selectedGermanId === null) {
          setFeedback($("gameFeedback"), "Önce soldan bir Almanca kelime seç.", "error");
          return;
        }
        if (Number(button.dataset.id) === selectedGermanId) {
          button.disabled = true;
          button.classList.add("matched");
          left.querySelectorAll(".match-option").forEach(b => {
            if (Number(b.dataset.id) === selectedGermanId) {
              b.disabled = true;
              b.classList.remove("selected");
              b.classList.add("matched");
            }
          });
          gameMatchCount += 1;
          $("gameProgress").textContent = gameMatchCount + " / " + gameGoal + " eşleşme";
          selectedGermanId = null;
          setFeedback($("gameFeedback"), gameMatchCount === gameGoal ? "Harika! Bütün kelimeleri eşleştirdin. +10 coin 🎉" : "Doğru eşleşme! Devam et.", "success");
          if (gameMatchCount === gameGoal && gameGoal > 0) {
            saved.coins += 10;
            recordStudyActivity();
            persist();
            updateProgress();
            $("startGameBtn").textContent = "Tekrar oyna";
          }
        } else {
          button.classList.add("wrong");
          setFeedback($("gameFeedback"), "Bu eşleşme olmadı, tekrar dene.", "error");
          window.setTimeout(() => button.classList.remove("wrong"), 500);
        }
      });
      right.appendChild(button);
    });
    area.append(left, right);
    $("startGameBtn").textContent = "Oyunu yeniden başlat";
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-level]").forEach(button => {
      const active = button.dataset.level === selectedLevel;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    setupTabs();
    $("checkBtn").addEventListener("click", checkAnswer);
    $("nextBtn").addEventListener("click", nextWord);
    $("speakWord").addEventListener("click", () => {
      const word = studyQueue.length ? words[studyQueue[0]] : null;
      if (word) speakGerman(word.de, $("speakWord"));
    });
    $("speakExample").addEventListener("click", () => {
      const word = studyQueue.length ? words[studyQueue[0]] : null;
      if (word) speakGerman(word.ex, $("speakExample"));
    });
    updateLevelControls();
    $("answer").addEventListener("keydown", event => {
      if (event.key === "Enter") checkAnswer();
    });
    $("grammarNext").addEventListener("click", renderGrammar);
    $("startGameBtn").addEventListener("click", startGame);
    $("profileNameInput").value = saved.name || "";
    $("profileAvatarInput").value = saved.avatar || "🦊";
    $("profileForm").addEventListener("submit", event => {
      event.preventDefault();
      saved.name = $("profileNameInput").value.trim().slice(0, 24);
      saved.avatar = $("profileAvatarInput").value;
      persist();
      renderProfile();
      setFeedback($("profileFeedback"), "Profilin kaydedildi! ✨", "success");
    });
    resetStudyQueue();
    renderWord();
    renderGrammar();
    startGame();
    initWelcomeAndAuth();
  });
})();