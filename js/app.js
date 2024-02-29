const url = "https://api.adviceslip.com/advice";

async function fetchAdvice() {
  const response = await fetch(url);
  const {
    slip: { id, advice },
  } = await response.json();

  document.getElementById("id").innerHTML = id;
  document.querySelector("#quote span").innerHTML = advice;
}

window.addEventListener("load", () => {
  fetchAdvice();
});

document.getElementById("dice-box").addEventListener("click", () => {
  fetchAdvice();
});
