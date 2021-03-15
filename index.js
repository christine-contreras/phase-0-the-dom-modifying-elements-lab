// Write your code here!

// no longer has DOM node 'main#main':
document.getElementById('main').remove();

//create element
const newHeader = document.createElement('h1');

//add ID to element 
newHeader.setAttribute('id', 'victory');

//add element to body
document.body.appendChild(newHeader);

//add inner text to element 
newHeader.innerHTML = "YOUR-NAME is the champion";