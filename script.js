// console.log('hello dom 🙂')
// dom - document object model
// console.log(document)

// read from dom - retrieveing elements
// accessing nodes in the document

// getElementById() getElementBy...

// getElementsByTagName() -> returns an HTML Collection 
// can be treated like an array but it is not an array

const divs = document.getElementsByTagName('div')
// console.log(divs[1])
console.log(divs)

// getElementById()
const sectionWithId = document.getElementById('container')
console.log(sectionWithId)

// getElementsByClassName()
const boxes = document.getElementsByClassName('box')
console.log(boxes)


// querySelector() querySelectorAll()
// get one div
// this returns the first node that matches the  
// css query
const div = document.querySelector('div')
console.log(div)

// this returns a 'node list' -> here you can also
// use forEach
const allDivs = document.querySelectorAll('div')
console.log(allDivs)

const allBoxes = document.querySelectorAll('.box')
console.log(allBoxes)
console.clear()
// read the value from the section
// use innerText or innerHTML to also get the HTML

const val = document.querySelector('section').innerText
// console.log(val)

// change the text in the h1
document.querySelector('h1').innerText = 'this is the changed heading'

// replace everything in section with an h4
const el = '<h4>Hello Dom</h4>'
// document.querySelector('section').innerHTML = el

// uppercase all the chars in ul

const list = document.querySelectorAll('li')
// console.log(list)
list.forEach(function (li) {
	// console.log(li.innerText)
	li.innerText = li.innerText.toUpperCase()
})

// create a new list and replace the old li tags in ul
const newList = '<li>1</li><li>2</li>'
// add this as a content to 'ul'
document.querySelector('ul').innerHTML = newList

console.clear()

// changing the styling
// give the heading a color of red
const h1 = document.querySelector('h1')
console.log(h1)
h1.style.backgroundColor = 'red'

console.clear()
// add or remove classes

// const boxes = document.getElementsByClassName('box')
console.log(boxes)
boxes[0].classList.add('myClass')
boxes[0].classList.remove('myClass')

console.log(boxes[0].classList)

// you can also add attributes to elements
document.querySelector('h1').setAttribute(
	'id',
	'heading'
)


// the above methods can be called on all DOM nodes 
// not only on the document itself
const section1 = document.querySelector('section')
console.log(section1)
const heading = section1.querySelector('h1')
console.log(heading)

// get the source attribute of the image
console.log(document.querySelector('img').getAttribute('src'))
