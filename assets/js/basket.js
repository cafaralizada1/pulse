const basketdiv = document.getElementById('basketdiv')

function getproducts(){
    basketdiv.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart')) || []

cart.map((item,index)=>{
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
    basketdiv.appendChild(apibox)
})
    }


function removeItem(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getproducts();
}

getproducts();