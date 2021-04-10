
// Create a function called addTitle(), which will find the h1 element and add the following text inside of it: "Harry Potter Character Selection".

//Psuedo-code
//declare a function called addTitle()
//make it select the h1 element and store it in a variable 
//use textContent or innerText to add a spcified string inside

const addTitle = () => {

    let h1Element = document.querySelector('h1');

h1Element.innerText = 'Harry Potter Character Selector'
}

// alternative: document.querySelector('h1').innerText = 'Harry Potter Character Selector'

addTitle(); 

// - Create a function called flexIt(), which should find the first element with the class called 'needFlex' and add the class flexIt to that element and then toggle the flexIt class on and off each time that function is called by the user clicking the button that says "Flex houses".

// declare a function called flexIt()
// use queryselector to find the FIRST element with the class needflex
// add a class to that element called flexIt -- with the classList.toggle method
//use toggle to turn the class on and on upon "onclick"

const flexIt = () => {

     document.querySelector('.needFlex').classList.toggle('flexIt');
}

// - Create a function called addHouses(), which will find all the paragraphs that have a class called "description" and will set another class name. The new class name should be the name of the Hogwarts house the text is describing. Example: If the paragraph is about Ravenclaw, find that paragraph and set the class attribute to include ravenclaw as the 2nd class.

/// declare a function called addHouses()
//use query selector or getbyclass name to select ALL paraphraphs that have a secription class
//store it in an array variable
//use a loop to go through the array or do it manually?
//use condition element.innertext.includes "ravenclaw", add ravenclaw class name, etc. 


const addHouses = () => {
    let descriptionClassArr = document.getElementsByClassName('description');

    for(element of descriptionClassArr) {
        if (element.innerText.includes('Ravenclaw')){
            element.classList.add('ravenclaw');
        } else if (element.innerText.includes('Hufflepuff')) {
            element.classList.add('hufflepuff');
        } else if (element.innerText.includes('Gryffindor')) {
            element.classList.add('gryffindor');
        } else {
            element.classList.add('slytherin');
        }
    }
}
addHouses(); 


// - Create a function called emphasize() with one parameter called house. When the user clicks the button labeled with one of the four Hogwarts houses, your function applies the CSS styling associated with the .emphasis class to both the paragraph that describes that house and the people listed below that belong to that house. Example: When you have the HTML file open in the browser, if the user clicks the Gryffindor button at the top, the description of the Gryffindor house and the people in Gryffindor from the list at the bottom will all have blue backgrounds and yellow borders around them. When the user clicks that Gryffindor button again, the styling should disappear. 

//declare function emphasize with one (house) parameter
// when button is clicked this is what function does:
//select classes that share name as parameter
//use toggle to add or remove the .emphasis class

const emphasize = (house) => {
    let arr1 = document.getElementsByClassName(house) 
    for(each of arr1) {
    each.classList.toggle('emphasis');
    }
};


// Bonus: Create a new function called hideTheSnitch() that makes the words "The Snitch" appear and disappear.  To do this, you can adjust the element's display attribute to be either "none" or not.

const hideTheSnitch = () => {
     let snitch = document.querySelector('#golden').classList.toggle('snitch');
}

// ## Mockup
// ![mockup](./potterImg.png)

// ## Submission
// Push your code to your Github account and then paste the link to the repo when submitting. If you do not finish in class, submit what you were able to get done.

// ### Assignment Hints
// - `document.getElementsByClassName` puts elements with the specific class into an array. 
// - `document.querySelectorAll()` returns an array of all matches
// - `toggle()` gives you the ability to turn things off and on