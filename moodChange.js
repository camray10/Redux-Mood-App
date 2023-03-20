const h1 = document.querySelector("h1");

const happyBtn = document.querySelector("#happy");
const sadBtn = document.querySelector("#sad");
const angryBtn = document.querySelector("#angry");
const confusedBtn = document.querySelector("#confused");

happyBtn.addEventListener("click", () => {
  store.dispatch({ type: "CHANGE_MOOD", payload: "ʘ‿ʘ" });
  const state = store.getState();
  h1.innerText = state.mood;
});
sadBtn.addEventListener("click", () => {
  store.dispatch({ type: "CHANGE_MOOD", payload: "⊙︿⊙" });
  const state = store.getState();
  h1.innerText = state.mood;
});
angryBtn.addEventListener("click", () => {
  store.dispatch({ type: "CHANGE_MOOD", payload: "ಠ▃ಠ" });
  const state = store.getState();
  h1.innerText = state.mood;
});
confusedBtn.addEventListener("click", () => {
  store.dispatch({ type: "CHANGE_MOOD", payload: "(@_@)" });
  const state = store.getState();
  h1.innerText = state.mood;
});



