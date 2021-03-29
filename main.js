/**
 * Gets the Element from HTML by ID, addToDo
 * And Stores it in a Variable addToDoButton
 */
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

/**
 * Adds an event listener to our button with the 'click' function
 * 
 * So When the button is clicked,
 * The Document creates a Paragraph (p) HTML element
 * The element is stored in the variable paragraph
 * 
 * The Typed in value on the inputField is then stored in the variable paragraph as innerText
 * We append this paragraph to our to-do container on HTML and is stored as a paragraph element
 * 
 * To have the inputField value empty every time someone adds a to-do
 * We used inputField.value = "";
 *  * 
 * We add styling on the paragraph container using a class on CSS
 * paragraph-styling
 * 
 */
addToDoButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph); 
  inputField.value = "";

  /**
   * We add another event listener under this one to show we've completed
   * or to delete to-dos
   */

  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
  })

  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
  })
  
})