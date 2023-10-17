//console.log("hello world!");
fetch("http://localhost:3000/sneakers")
.then(res => res.json())
.then(shoes => {
    shoes.forEach(shoe => {
        addToList(shoe);
    })
    addToDisplay(shoes[0]);
})

function addToList(shoe) {
    const newShoe = document.createElement('img');
    newShoe.src = shoe.menu_image;
    const shoeMenu = document.getElementById('sneaker-list');
    shoeMenu.appendChild(newShoe);

    newShoe.addEventListener('click', () => {
        addToDisplay(shoe);
    })
}

function addToDisplay(shoe) {
    const displayImage = document.getElementById('detail-image');
    const displayName = document.getElementById('name');
    const displayBrand = document.getElementById('brand');
    const displayYear = document.getElementById('year-released');
    const displayColorway = document.getElementById('og-colorway');
    const displayDirector = document.getElementById('creative-director');
    const displayRetail = document.getElementById('retail');
    const displayResale = document.getElementById('resale');
    const displayDescrip = document.getElementById('description');

    displayImage.src = shoe.display_image;
    displayName.textContent = shoe.name;
    displayBrand.textContent = `Brand: ${shoe.brand}`;
    displayYear.textContent = `Released: ${shoe.release_year}`;
    displayColorway.textContent = `Original Colorway: ${shoe.og_colorway}`;
    displayDirector.textContent = `Creative Director: ${shoe.creative_director}`;
    displayRetail.textContent = `Original Price: $${shoe.retail_price}`;
    displayResale.textContent = `Current Value: $${shoe.resell_price}`;
    displayDescrip.textContent = shoe.description;
}