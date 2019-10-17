import { createInputElement as createInput } from "./createInput"
import { createButton } from "./createButton"
import { getUID } from "./uid"

const todos = []

function addNewTodo(task) {
  todos.push({
    id: getUID(),
    task,
    done: false,
  })
  renderList(listElement, todos)
}

const inputElement = createInput()
const listElement = document.createElement("ul")
const addTodo = createButton("Add", () => {
  // add the todo into the array
  addNewTodo(inputElement.value)
  // reset the input
  inputElement.value = ""
})

/**
 *
 * @param {HTMLUListElement} parentElement
 * @param {*} todos
 */
function renderList(parentElement, todos) {
  // delete everything inside the parent element
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild)
  }

  for (const todo of todos) {
    const listItem = document.createElement("li")
    listItem.innerText = todo.task
    listItem.id = todo.id
    if (todo.done) {
      listItem.style.textDecoration = "line-through"
    }
    listItem.addEventListener("click", handleTodoDone)
    parentElement.appendChild(listItem)
  }
}

/**
 *
 * @param {MouseEvent} event
 */
function handleTodoDone(event) {
  const id = event.target.id
  const todo = todos.find(todo => todo.id === Number(id))
  if (todo) {
    todo.done = !todo.done
    renderList(listElement, todos)
  }
}

document.body.appendChild(inputElement)
document.body.appendChild(addTodo)
document.body.appendChild(listElement)
