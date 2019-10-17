/**
 * Creates a button with a label
 * @param {String} label
 */
export function createButton(label, listener) {
  const buttonElement = document.createElement("button")
  buttonElement.innerText = label

  buttonElement.addEventListener("click", listener)

  return buttonElement
}
