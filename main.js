const express = require("express");
const app = express();

// إعداد صفحة البدء
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// إعداد صفحة الأسئلة
app.get("/questions", (req, res) => {
  // احصل على سؤال عشوائي
  const currentQuestion = questions[Math.floor(Math.random() * questions.length)];

  // تحديث صفحة الأسئلة
  res.send({
    question: currentQuestion.question,
    answers: currentQuestion.answers,
    correctAnswer: currentQuestion.correctAnswer,
  });
});

app.listen(3000, () => {
  console.log("الخدمة تعمل على المنفذ 3000");
});
