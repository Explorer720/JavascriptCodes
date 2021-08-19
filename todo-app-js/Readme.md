Here, I am trying to explain about my learning process and other things while doing this todo app project.

App Idea
It is a simple todo application where we can add our todo for certain day , check them if completed and delete.

HTML

Inside HTMl, basic structure for our todo-list app is created using header,input form and submit button and unordered list with div is also created which will be later filled by the element from javascript.

CSS

CSS is not that much inportant in this project but it is done to make project look stylish.Different hover effect and effects while JS eventListener is clicked are also added.

Javascript
Main part of this project is javascript.
=>SELECTORS 
First few constants are created with 'const' where HTML element are linked with it via document.querySelector.

=>EVENT LISTENERS
EventListeners are added for each const which required click and a function is mentioned on their side which will be defined later.

=> FUNCTIONS
Functions are the one where we define what will happen if someting is done with different HTML element.
We have two functions here. First which create to-do items with check and delete button on side and second function will make those check and delete button work.

First function 'addTodo' is function for submit button so in the beginning we used preventDeafult() method so that our page doesnt reload when button is clicked. 
New constant are defined under it which create different elements for html <ul> . If the element is inside another is elemet we appendChild() the child element.

For second function:
item constant which equals e.target means item is the one which is clicked at the moment.
If animation not mentioned, we defined what will happen when clikced. 
In case of delete, if classList[0] === 'trash button', which is the class of delete button, todo.remove() method is written which delete that parent element.
In case of check, if ' ' ===' ', todo.classList.toggle('classname') and same thing will happen what is written for that class in CSS.




