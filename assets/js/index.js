const apidiv = document.getElementById('apidiv')
function getproducts(){
    page=1
    limit=4
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}`)
    .then(res=>{
products = res.data
products.map(item=>{
    let apibox = document.createElement('div')
    apibox.className = 'products col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'
    apibox.innerHTML = `
    <div class="apiproducts">
    <img style="width:100%" src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>${item.price}</p>
    <button onclick="addtobasket(${item.id})">Add to<i class="fa-solid fa-basket-shopping"></i></button>
    <button onclick="addtowishlist(${item.id})">Add to<i class="fa-solid fa-heart"></i></button>
    </div>
    `
    apidiv.appendChild(apibox)
})
page++
    })
}
getproducts();

function addtobasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(products.find(item=>item.id==id))
    localStorage.setItem('cart',JSON.stringify(cart))
}
function addtowishlist(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.push(products.find(item=>item.id==id))
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
}

const filterdata = document.getElementById('filterdata')

function sortdataDefault(){
    apidiv.innerHTML = '';
    let selectvalue = filterdata.value;
    if(selectvalue === '1'){
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
        .then(res=>{
    products = res.data
    products.map(item=>{
        let apibox = document.createElement('div')
        apibox.className = 'products col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'
        apibox.innerHTML = `
        <div class="apiproducts">
        <img style="width:100%" src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button onclick="addtobasket(${item.id})">Add to<i class="fa-solid fa-basket-shopping"></i></button>
        <button onclick="addtowishlist(${item.id})">Add to<i class="fa-solid fa-heart"></i></button>
        </div>
        `
        apidiv.appendChild(apibox)
    })
        })
    }
    }
    filterdata.addEventListener('change',sortdataDefault)

    function sortdataaz(){
        apidiv.innerHTML = '';
        let selectvalue = filterdata.value;
        if(selectvalue === '2'){
            axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
            .then(res=>{
        products = res.data
        let azproducts = products.sort((a,b)=>a.name.localeCompare(b.name))
        azproducts.map(item=>{
            let apibox = document.createElement('div')
            apibox.className = 'products col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'
            apibox.innerHTML = `
            <div class="apiproducts">
            <img style="width:100%" src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="addtobasket(${item.id})">Add to<i class="fa-solid fa-basket-shopping"></i></button>
            <button onclick="addtowishlist(${item.id})">Add to<i class="fa-solid fa-heart"></i></button>
            </div>
            `
            apidiv.appendChild(apibox)
        })
     
            })
        }
        }
        filterdata.addEventListener('change',sortdataaz)

        function sortdataza(){
            apidiv.innerHTML = '';
            let selectvalue = filterdata.value;
            if(selectvalue === '3'){
                axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
                .then(res=>{
            products = res.data
            let zaproducts = products.sort((a,b)=>b.name.localeCompare(a.name))
            zaproducts.map(item=>{
                let apibox = document.createElement('div')
                apibox.className = 'products col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'
                apibox.innerHTML = `
                <div class="apiproducts">
                <img style="width:100%" src="${item.image}" alt="">
                <p>${item.name}</p>
                <p>${item.price}</p>
                <button onclick="addtobasket(${item.id})">Add to<i class="fa-solid fa-basket-shopping"></i></button>
                <button onclick="addtowishlist(${item.id})">Add to<i class="fa-solid fa-heart"></i></button>
                </div>
                `
                apidiv.appendChild(apibox)
            })
                })
            }
            }
            filterdata.addEventListener('change',sortdataza)
       
   
