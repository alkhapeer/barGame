// ملف وظيفي hello.js

// استيراد مكتبة Express
const express = require("express");

// إنشاء تطبيق Express
const app = express();

// تعريف مسار /hello
app.get("/hello", (req, res) => {
  // إرسال رد
  res.send("Hello, world!");
});

// تشغيل التطبيق
app.listen(3000, () => {
  console.log("الخدمة تعمل على المنفذ 3000");
});
