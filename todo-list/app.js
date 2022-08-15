// document.querySelector('button').onclick = function () {
// 	console.log('click')
// }
document.querySelector('button').addEventListener('click', addTodo)

// add an event listener on all li items
document.querySelectorAll('li').forEach(function (todo) {
	// console.log(todo)
	todo.addEventListener('click', toggleTodo)
})

function toggleTodo(event) {
	// console.log('toggle')
	// this is the clicked element
	console.log(event.target)
	// we toggle the classList on that element
	// event.target.classList.toggle('checked')

	// this would remove a clicked element from the list
	// event.target.remove()

	// using removeChild()
	// we need to get the list to call removeChild() on it
	// const list = document.querySelector('ul')
	// list.removeChild(event.target)
	const parent = event.target.parentNode
	// console.log(parent)
	parent.removeChild(event.target)

}

function addTodo() {
	console.log('add todo')
	// get the value from the input field
	const input = document.querySelector('input')
	const value = input.value
	// create a new list element
	const todo = document.createElement('li')
	console.log(todo)
	// with the value in between the tags
	todo.innerText = value
	// also add the event listener to toggle that element
	todo.addEventListener('click', toggleTodo)
	// add this list element to the ul
	// using appendChild()
	const list = document.querySelector('ul')
	list.appendChild(todo)
	// clear the input field
	input.value = ''
}
console.log('done')