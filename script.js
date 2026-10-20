// ------- data ---------






//---------- elements ---------

const statusLine = document.getElementById("status");
const openButton = document.getElementById("open-button");

const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const prepList = document.getElementById("prep-list")

const mapLInk = document.getElementById("map-link")


// ------- functions ---------






//---------- listeners ---------


openButton.addEventListener("click", function () {
    statusLine.textContent = "Open";
    statusLine.classList.add("open");

    mapLInk.href = "https://www.google.com/maps";
});


addButton.addEventListener("click", function () {

    // if (newItem.value === "") {
    //     return;
    // }

     

    const item = document.createElement("li");
    item.textContent = newItem.value;

    item.addEventListener("click", function (event) {
        console.log(event.target.tagName);
        item.classList.toggle("done");

    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(removeButton);
    prepList.appendChild(item)


    console.log(`preplist:${prepList.children.length}  items`)
    newItem.value = "";
    addButton.disabled = true;





});


newItem.addEventListener("input", function (){
    console.log(`input: ${newItem.value}`);
    addButton.disabled = newItem.value === "";
});



newItem.addEventListener("change", function () {
    console.log(`change: ${newItem.value}`);
});



newItem.addEventListener("keydown", function (event){
    console.log(`keydown: ${event.key}, box says: ${newItem.value}`);
});





// --------- run on load -------

addButton.disabled = true;