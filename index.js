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

    newShoe.addEventListener('mouseover', () => {
        newShoe.style.filter = 'drop-shadow(0 0 1em #ff4a6d)';
        newShoe.style.border = '2px solid #ffecb8'
    })

    newShoe.addEventListener('mouseleave', () => {
        newShoe.style.filter = '';
        newShoe.style.border = '2px solid #ff4a6d'
    })

}

function addToDisplay(shoe) {
    const displayImage = document.getElementById('detail-image');
    const displayName = document.getElementById('name');
    const displayBrand = document.getElementById('brand-input');
    const displayYear = document.getElementById('year-released-input');
    const displayColorway = document.getElementById('og-colorway-input');
    const displayDirector = document.getElementById('creative-director-input');
    const displayRetail = document.getElementById('retail-input');
    const displayResale = document.getElementById('resale-input');
    const displayDescrip = document.getElementById('description');

    // const displayBrandContent = document.createElement('h3');
    // displayBrandContent.className = 'name-content';
    // displayBrandContent.textContent = shoe.brand;
    // displayBrand.appendChild(displayBrandContent);


    displayImage.src = shoe.display_image;
    displayName.textContent = shoe.name;
    displayBrand.textContent = shoe.brand;
    displayYear.textContent = shoe.release_year;
    displayColorway.textContent = shoe.og_colorway;
    displayDirector.textContent = shoe.creative_director;
    displayRetail.textContent = `$${shoe.retail_price}`;
    displayResale.textContent = `$${shoe.resell_price}`;
    displayDescrip.textContent = shoe.description;
}