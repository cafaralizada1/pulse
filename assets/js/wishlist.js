const wishlistdiv = document.getElementById('wishlistdiv')

function getproducts(){
    wishlistdiv.innerHTML = '';
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

wishlist.map((item,index)=>{
    let apibox = document.createElement('div')
    apibox.className = 'products col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'
    apibox.innerHTML = `
    <div class="apiproducts">
    <img style="width:100%" src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>${item.price}</p>
    <button onclick="removeItem(${index})">Remove</button>
    </div>
    `
    wishlistdiv.appendChild(apibox)
})
    }


function removeItem(index){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    getproducts();
}

getproducts();