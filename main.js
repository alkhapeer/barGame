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

// معالجة طلب الإجابة
app.post("/questions", (req, res) => {
  // احصل على الإجابة من المستخدم
  const answer = req.body.answer;

  // تحقق من الإجابة
  if (answer === questions[req.body.questionIndex].correctAnswer) {
    // الإجابة صحيحة
    res.send({
      score: req.body.score + 1,
    });
  } else {
    // الإجابة خاطئة
    res.send({
      score: req.body.score,
    });
  }
});

// تشغيل التطبيق
app.listen(3000, () => {
  console.log("الخدمة تعمل على المنفذ 3000");
});
