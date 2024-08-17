const getInputValue = (node) => {
  return node.value !== "" ? node.value : null;
};

document.getElementById("check-value").addEventListener("click", () => {
  const inputElement = document.querySelector("#test-input");

  const value = getInputValue(inputElement);

  document.getElementById("output").textContent = `Wartość input: ${value}`;
});
