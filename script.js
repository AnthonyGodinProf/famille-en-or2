
const questions = [
    {
        question: "Quels sont les usages les plus fréquents des écrans par les enfants ?",
        answers: ["Jouer à des jeux vidéo", "Regarder des dessins animés ou séries", "Faire des devoirs ou recherches", "Regarder des vidéos sur YouTube", "Parler avec des amis en ligne"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quels sont les dangers liés à une surexposition aux écrans ?",
        answers: ["Fatigue visuelle", "Manque de sommeil", "Isolement social", "Difficultés scolaires", "Accès à des contenus inappropriés"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quelles sont les bonnes pratiques pour limiter l'usage des écrans ?",
        answers: ["Instaurer des règles de temps d'écran", "Privilégier les activités en famille", "Pas d’écran avant de dormir", "Utiliser des applications éducatives", "Éteindre les écrans pendant les repas"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quels sont les effets négatifs d'une exposition excessive aux écrans chez les enfants ?",
        answers: ["Troubles du sommeil", "Sédentarité et obésité", "Problèmes de concentration", "Retard de langage", "Irritabilité et anxiété"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quels sont les contenus inappropriés auxquels les enfants peuvent être exposés en ligne ?",
        answers: ["Pornographie", "Violence extrême", "Discours haineux", "Fake news", "Publicités ciblées"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quelles mesures peuvent être prises pour protéger les enfants des contenus inappropriés en ligne ?",
        answers: ["Installer des filtres de contenu", "Activer le contrôle parental", "Discuter régulièrement des dangers en ligne", "Surveiller l'historique de navigation", "Utiliser des moteurs de recherche adaptés aux enfants"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quels sont les moments de la journée où l'utilisation des écrans est particulièrement déconseillée pour les enfants ?",
        answers: ["Juste avant de dormir", "Pendant les repas", "Au réveil", "Pendant les devoirs", "Lors d'activités en famille"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quels sont les signes d'une possible addiction aux écrans chez un enfant ?",
        answers: ["Irritabilité lorsqu'on retire l'écran", "Diminution des performances scolaires", "Isolement social", "Perte d'intérêt pour d'autres activités", "Troubles du sommeil"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quelles sont les recommandations pour l'utilisation des téléphones portables chez les enfants ?",
        answers: ["Pas de téléphone avant 11 ans", "Téléphone sans accès Internet jusqu'à 13 ans", "Accès aux réseaux sociaux à partir de 15 ans", "Limiter l'utilisation à des périodes définies", "Utiliser des contrôles parentaux"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quels sont les avantages des activités alternatives aux écrans ?",
        answers: ["Favorise la créativité", "Améliore les interactions sociales", "Développe les compétences motrices", "Réduit le stress", "Encourage l'exercice physique"],
        points: [10, 7, 5, 3, 1]
    }
];

let currentQuestion = 0;
let scores = {};

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("next-button").addEventListener("click", showNextQuestion);

function startGame() {
    scores = {}; // Reset scores
    document.getElementById("start-button").style.display = "none";
    document.getElementById("next-button").style.display = "inline";
    showNextQuestion();
}

function showNextQuestion() {
    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }
    const questionData = questions[currentQuestion];
    const questionContainer = document.getElementById("question");
    const answersList = document.getElementById("answers-list");

    questionContainer.textContent = questionData.question;
    answersList.innerHTML = ""; // Clear previous answers

    questionData.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.textContent = `${answer} (${questionData.points[index]} points)`;
        li.addEventListener("click", () => addPoints(answer, questionData.points[index]));
        answersList.appendChild(li);
    });

    currentQuestion++;
}

function addPoints(team, points) {
    if (!scores[team]) {
        scores[team] = 0;
    }
    scores[team] += points;

    updateScoreboard();
}

function updateScoreboard() {
    const scoresList = document.getElementById("scores-list");
    scoresList.innerHTML = ""; // Clear previous scores

    for (const [team, score] of Object.entries(scores)) {
        const li = document.createElement("li");
        li.textContent = `${team}: ${score} points`;
        scoresList.appendChild(li);
    }
}

function endGame() {
    document.getElementById("question").textContent = "Le jeu est terminé ! Merci d'avoir participé.";
    document.getElementById("answers-list").innerHTML = "";
    document.getElementById("next-button").style.display = "none";
}
