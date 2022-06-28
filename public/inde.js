const btnSubmit = document.getElementById("subimtCurse");
const curse = document.getElementById("inputCurso");
const price = document.getElementById("inputPrice");

console.log(btnSubmit);

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const curseValue = curse.value;
  const priceValue = price.value;
  console.log(curseValue, priceValue);
  fetch("/api/v1/curses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      curseValue,
      priceValue,
    }),
  });
});
