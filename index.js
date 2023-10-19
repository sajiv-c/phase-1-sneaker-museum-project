const nikeBackground = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnBzYmRpYXlpcDAxMTFzOXN3cmtzMnM3dWt4MWQ5czRubHM5ODZkOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9LZSXRm9wmkgWEiA5K/giphy.gif';
const jordanBackground = 'https://media0.giphy.com/media/PQR24BJHzd5UiU1tjJ/giphy.gif?cid=ecf05e47cdniixyyp1zpx95mm1nr4u8qf9pa7lo6c5bohp8s&ep=v1_gifs_related&rid=giphy.gif&ct=s';
const adidasBackground = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWVyd2FoMjE3ODFnbmtsY29qamxxNjZyYXN3dW93OHJ4MGY3N2VvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dUfFgEhDnVx6PFpsje/giphy.gif';

let sneakers = null;

const detailsDiv = document.getElementById('details');

fetch("http://localhost:3000/sneakers")
.then(res => res.json())
.then(shoes => {
    sneakers = shoes;
    shoes.forEach(shoe => {
        addToList(shoe);
    })
    document.querySelector('.comment-1 p').textContent = shoes[0].comments[0];
    document.querySelector('.comment-2 p').textContent = shoes[0].comments[1];
    // detailsDiv.style.backgroundImage = `url(${jordanBackground})`;
    // detailsDiv.style.backgroundSize = '20%';
    // detailsDiv.style.backgroundBlendMode = 'overlay';
    addToDisplay(shoes[0]);
    setBackgroundStyling(shoes[0])
})

function setBackgroundStyling(shoe) {
    if (shoe.brand == 'Nike') {
        detailsDiv.style.backgroundImage = `url(${nikeBackground})`;
        detailsDiv.style.backgroundSize = '20%'
        detailsDiv.style.backgroundColor = 'rgb(43,43,43)'
        detailsDiv.style.backgroundBlendMode = 'overlay'

    }
    if (shoe.brand == 'Air Jordan') {
        detailsDiv.style.backgroundImage = `url(${jordanBackground})`;
        detailsDiv.style.backgroundSize = '34%'
        detailsDiv.style.backgroundColor = 'rgb(43,43,43)'
        detailsDiv.style.backgroundBlendMode = 'overlay'
    }
    if (shoe.brand == 'Adidas') {
        detailsDiv.style.backgroundImage = `url(${adidasBackground})`;
        detailsDiv.style.backgroundSize = '20%'
        detailsDiv.style.backgroundColor = 'rgb(43,43,43)'
        detailsDiv.style.backgroundBlendMode = 'multiply'
    }
}

function addToList(shoe) {
    const newShoe = document.createElement('img');
    newShoe.src = shoe.menu_image;
    const shoeMenu = document.getElementById('sneaker-list');
    shoeMenu.appendChild(newShoe);
    
    // const displayCategories = document.getElementById('details');


    newShoe.addEventListener('click', () => {
        addToDisplay(shoe);

        document.querySelector('.comment-1 p').textContent = shoe.comments[0];
        document.querySelector('.comment-2 p').textContent = shoe.comments[1];

        // Set background styling on click
        setBackgroundStyling(shoe)
    })

    newShoe.addEventListener('mouseover', () => {
        newShoe.style.filter = 'drop-shadow(0 0 1em #ff4a6d)';
        newShoe.style.border = '2px solid #ffecb8'
        newShoe.src = shoe.menu_gif;
    })

    newShoe.addEventListener('mouseleave', () => {
        newShoe.style.filter = '';
        newShoe.style.border = '2px solid #ff4a6d'
        newShoe.src = shoe.menu_image;
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

const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('user-comment');
const commentElements = document.getElementById('comment-elements')
commentForm.addEventListener('submit', (e) => {
    
    e.preventDefault()

    const newCommentDiv = document.createElement('div');
    newCommentDiv.className = 'comment';

    const newCommentP = document.createElement('p');
    newCommentP.textContent = commentInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-comment';
    deleteBtn.textContent = 'Delete';

    newCommentDiv.appendChild(newCommentP);
    newCommentDiv.appendChild(deleteBtn);

    commentElements.appendChild(newCommentDiv);

    commentInput.value = "";

    const deleteBtns = document.querySelectorAll('.delete-comment');
    console.log(deleteBtns);
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
    
            const parentDiv = btn.parentNode;
    
            console.log(parentDiv);
    
            parentDiv.remove();
        })
    })
})

const deleteBtns = document.querySelectorAll('.delete-comment');
    console.log(deleteBtns);
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
    
            const parentDiv = btn.parentNode;
    
            console.log(parentDiv);
    
            parentDiv.remove();
    })
})

// const dropdown = document.getElementById('dropdown');
// const sneakerMenu = document.getElementById('sneaker-list');
// dropdown.addEventListener('change', (e) => {
//     if (e.target.value == 'nike') {
//         sneakerMenu.appendChild(sneakers[0].menu_image);
//         sneakerMenu.appendChild(sneakers[1])
//     }
// })

