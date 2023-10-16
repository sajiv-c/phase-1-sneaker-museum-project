//console.log("hello world!");
fetch("http://localhost:3000/project_items")
.then(res => res.json())
.then(items => {
    items.forEach(item => {
        addToList(item);
    })
})

function addToList(item) {
    const liElement = document.createElement('li');
    liElement.textContent = `${item.name} costs $${item.price}`;
    const itemsList = document.getElementById('item-list');
    itemsList.appendChild(liElement);
}