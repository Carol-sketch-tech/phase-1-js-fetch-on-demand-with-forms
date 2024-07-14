// to overide the default behaviour of the webpage.
const init=()=>{
    // get the Dom element and attach an event listener to it, the event will be submit.
    const inputForm=document.querySelector('form')
    inputForm.addEventListener('submit',(event)=> {
        event.preventDefault();
        // we can access the value input directly.
        const input=document.querySelector('input#searchByID');
        console.log(input.value);
        // fetch data based on User Input.
        // modifying  the URL we pass to our fetch function based on hte input typed inot the HTML
        // form.
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response=> response.json())
        .then((data)=>{
            const title = document.querySelector("section#movieDetails h4");
            const summary= document.querySelector("section#movieDetails p");
            title.innerText=data.title;
            summary.innerText = data.summary;
        })
    })
};
document.addEventListener("DOMContentLoaded", init)



// access teh dat in the iput firld using document.quesrSelector('element.')
// fetch data based on user input.-