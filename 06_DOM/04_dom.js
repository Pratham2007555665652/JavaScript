const addLanguage = (langName)=>{
    const li = document.createElement('li')
    li.innerHTML = `${langName}`;

    document.querySelector('.language').appendChild(li)
}

addLanguage("python")
addLanguage("TypeScript")


function addOptiLanguage(langName){
    const li = document.createElement('li');

    document.querySelector('.language').appendChild(li)
    
const addText = document.createTextNode(langName)
    li.appendChild(addText)

}

addOptiLanguage('golang');

//Edit

const secondLang = document.querySelector("li:nth-child(2)");
const newLi =  document.createElement('li');
newLi.textContent = "Mojo"

secondLang.replaceWith(newLi);
console.log(secondLang);

//Edit
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>TyperScript</li>'

//Remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove();