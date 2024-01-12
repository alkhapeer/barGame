// أسئلة اللعبة
const questions = [
  {
    question: "عاصمة مصر هي",
    answers: ["القاهرة", "الإسكندرية", "الجيزة", "بورسعيد"],
    correctAnswer: "القاهرة",
  },
  {
    question: "ما هو أعلى جبل في العالم؟",
    answers: ["إيفرست", "كي 2", "كانكارجونج", "ماكالو"],
    correctAnswer: "إيفرست",
  },
  ...
];

// احصل على سؤال عشوائي
const currentQuestion = questions[Math.floor(Math.random() * questions.length)];

// تحديث صفحة الأسئلة
document.getElementById("question-text").textContent = currentQuestion.question;

const answerElements = document.querySelectorAll(".answer");
for (let i = 0; i < answerElements.length; i++) {
  answerElements[i].textContent = currentQuestion.answers[i];
}
