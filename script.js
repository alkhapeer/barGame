const questions = [
  {
    question: "عاصمة مصر هي",
    answers: ["القاهرة", "الإسكندرية", "الجيزة", "بورسعيد"],
    correctAnswer: "القاهرة",
    explanation: "القاهرة هي عاصمة مصر منذ عام 1837، وهي أكبر مدينة في مصر من حيث السكان والمساحة."
  },
  {
    question: "ما هو أعلى جبل في العالم؟",
    answers: ["إيفرست", "كي 2", "كانكارجونج", "ماكالو"],
    correctAnswer: "إيفرست"،
    explanation: "إيفرست هو أعلى جبل في العالم، ويقع في جبال الهيمالايا على الحدود بين الصين ونيبال. يبلغ ارتفاعه 8848 مترًا فوق مستوى سطح البحر."
  },
  ...
];

function getQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}
document.querySelector(".play-button").addEventListener("click", () => {
  // استدعاء دالة لاستيراد سؤال عشوائي
});
function getQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

function showQuestion() {
  const question = getQuestion();
  document.querySelector("#question").textContent = question.question;
  document.querySelector("#question-body").textContent = question.question;
