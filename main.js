const input = document.querySelector("input");
const box = document.querySelector("div");
input.addEventListener("input", () => {
  box.style.background = input.value;
  box.style.borderColor = input.value;
  box.style.borderRadius = input.value;
});
