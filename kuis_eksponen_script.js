function submitQuiz() {
  const correctAnswers = [
    "B",
    "A",
    "A",
    "B",
    "A",
    "A",
    "B",
    "B",
    "B",
    "C",
    "B",
    "B",
    "B",
    "C",
    "C",
    "A",
    "C",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "C",
    "B",
    "A",
    "C",
    "B",
    "A",
    "C",
  ];
  let score = 0;
  correctAnswers.forEach((ans, i) => {
    const name = `q${i + 1}`;
    const selected = document.querySelector(`input[name='${name}']:checked`);
    const allOptions = document.querySelectorAll(`input[name='${name}']`);
    const questionBlock = allOptions[0].closest(".question");

    // Bersihkan class sebelumnya
    allOptions.forEach((opt) => {
      opt.classList.remove("wrong");
      const label = opt.closest("label");
      label.classList.remove("correct-answer");
    });

    // Hapus jawaban benar sebelumnya (jika ada)
    const existingExplanation = questionBlock.querySelector(
      ".correct-explanation"
    );
    if (existingExplanation) existingExplanation.remove();

    if (selected) {
      if (selected.value === ans) {
        score++;
      } else {
        selected.classList.add("wrong");
        const correctOption = document.querySelector(
          `input[name='${name}'][value='${ans}']`
        );
        const label = correctOption.closest("label");
        label.classList.add("correct-answer");

        const correctText = label.textContent.trim();
        const info = document.createElement("div");
        info.className = "correct-explanation";
        info.style.marginTop = "8px";
        info.style.color = "#28a745";
        info.style.fontWeight = "bold";
        info.textContent = `Jawaban yang benar: ${correctText}`;
        questionBlock.appendChild(info);
      }
    }
  });
  document.getElementById(
    "result"
  ).innerText = `Skor Anda: ${score} dari ${correctAnswers.length}`;
}

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quizForm");
  const questions = [
    ["Hasil dari 2^3 adalah …", "A. 6", "B. 8", "C. 9", "D. 12"],
    [
      "Bentuk sederhana dari 3^2 × 3^3 adalah …",
      "A. 3^5",
      "B. 3^6",
      "C. 6^5",
      "D. 3^9",
    ],
    [
      "Jika 5^4 = 625, maka 625 / 5^2 = …",
      "A. 25",
      "B. 125",
      "C. 100",
      "D. 500",
    ],
    ["Hasil dari (4^2)^3 adalah …", "A. 4^5", "B. 4^6", "C. 8^2", "D. 2^6"],
    [
      "Sifat eksponen dari a^m × a^n adalah …",
      "A. a^(m+n)",
      "B. a^(m-n)",
      "C. a^(mn)",
      "D. (a^m)^n",
    ],
    ["2^5 / 2^2 sama dengan …", "A. 2^3", "B. 2^7", "C. 2^2", "D. 2^1"],
    [
      "Nilai dari 10^0 adalah …",
      "A. 0",
      "B. 1",
      "C. 10",
      "D. Tidak terdefinisi",
    ],
    ["a^2 × a^3 × a = …", "A. a^5", "B. a^6", "C. a^7", "D. a^4"],
    ["Hasil dari (2^3)^2 adalah …", "A. 36", "B. 64", "C. 32", "D. 16"],
    [
      "Jika x^0 = 1, maka nilai x yang mungkin adalah …",
      "A. 0",
      "B. 1",
      "C. Semua x ≠ 0",
      "D. Semua bilangan",
    ],
    ["Nilai dari 2^(-3) adalah …", "A. 8", "B. 1/8", "C. -8", "D. -1/8"],
    ["Hasil dari (1/2)^(-2) adalah …", "A. 1/4", "B. 4", "C. -4", "D. -1/4"],
    ["(3/5)^0 = …", "A. 0", "B. 1", "C. 3/5", "D. Tidak terdefinisi"],
    ["10^(-2) = …", "A. 100", "B. 0.1", "C. 1/100", "D. -100"],
    ["Jika 5^(-1) = x, maka nilai x = …", "A. 5", "B. -5", "C. 1/5", "D. -1/5"],
    ["(2/3)^2 = …", "A. 4/9", "B. 2/9", "C. 6/9", "D. 9/4"],
    ["(1/4)^(-1) = …", "A. 1/4", "B. 0.25", "C. 4", "D. -4"],
    ["Jika x^(-2) = 1/25, maka x = …", "A. 5", "B. -5", "C. 1/5", "D. -25"],
    [
      "Bentuk eksponen dari 1/x^3 adalah …",
      "A. x^(-3)",
      "B. x^3",
      "C. -x^3",
      "D. -x^(-3)",
    ],
    ["(2^(-1))^3 = …", "A. 1/8", "B. -1/8", "C. 8", "D. 1/6"],
    [
      "√x dalam eksponen adalah …",
      "A. x^(1/2)",
      "B. x^2",
      "C. x^(2/1)",
      "D. x^(1/3)",
    ],
    ["∛x^2 = …", "A. x^(2/3)", "B. x^(3/2)", "C. x^5", "D. x^(1/6)"],
    ["(x^(1/2))^2 = …", "A. x^1", "B. x^(1/4)", "C. x^2", "D. x^(3/2)"],
    ["(a^2)^3 × a = …", "A. a^5", "B. a^6", "C. a^7", "D. a^8"],
    [
      "Jika a^x = a^5, maka x = …",
      "A. 1",
      "B. 5",
      "C. 0",
      "D. Tidak bisa ditentukan",
    ],
    ["√[4]{a^3} = …", "A. a^(3/4)", "B. a^(4/3)", "C. a^(1/3)", "D. a^(1/4)"],
    ["x^0 + x^1 jika x = 3 …", "A. 0", "B. 3", "C. 4", "D. 6"],
    ["a^3 × a^(-1) × a^0 = …", "A. a^3", "B. a^2", "C. a^4", "D. a^(-1)"],
    ["Jika a^3 = 8, maka a = …", "A. 2", "B. 4", "C. 3", "D. 5"],
    [
      "Sifat (a^m)^n = …",
      "A. a^(m+n)",
      "B. a^(m-n)",
      "C. a^(m*n)",
      "D. (a^n)^m",
    ],
  ];

  const quizHTML = questions
    .map((q, i) => {
      return `
      <div class="question">
        <p>${i + 1}. ${q[0]}</p>
        <div class="options">
          ${q
            .slice(1)
            .map((opt, j) => {
              const val = ["A", "B", "C", "D"][j];
              return `<label><input type="radio" name="q${
                i + 1
              }" value="${val}"> ${opt}</label>`;
            })
            .join("")}
        </div>
      </div>
    `;
    })
    .join("");

  container.insertAdjacentHTML("afterbegin", quizHTML);
});
