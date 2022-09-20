// the document object has a type Document
// const btn = document.getElementById("btn")!; // "!" - non null assertion operator the only downside is that you can only use this if you know for sure that this will not be null
// console.log(btn);

// don't know what btn is at runtime so it can run as null which typescript can't handle can use javascript syntax to say if it isn't null, run the code
// btn?.addEventListener

// Type assertions
// Assert to typescript to treat a value as a certain type
const btn = document.getElementById("btn") as HTMLElement;
const input = document.getElementById("todoinput") as HTMLInputElement;

btn.addEventListener("click", function (event) {
    event.preventDefault();
    // can't access input.value if input is declared as a regular HTMLElement because value only exists on HTMLElement input type
    let text: string = input.value;
    console.log(text);
    input.value = "";
});
