const addproductform = document.getElementById('addproductform');
const nameinput = document.getElementById('nameinput');
const priceinput = document.getElementById('priceinput');
const formdata = document.getElementById('formdata')

function postform (e) {
e.preventDeafult()
axios.post('https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products',{
    Name:nameinput.value,
    Price:priceinput.value
})
addproductform.reset();
setTimeout(() => {
    getformdata();
  }, 1000);

}
addproductform.addEventListener('submit',postform)

function getformdata() {
    formdata.innerHTML = "";
    axios.get('https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products')
    .then((res) => {
        res.data.map((item) => {
            const box = document.createElement("div");
            box.innerHTML = `
            <div">
            <p style="color:white;">${item.name}</p>
            <p style="color:white;">${item.price}</p>
            <button onclick="deletefromform(${item.id})">Delete</button>
            </div>
            `;
            formdata.appendChild(box);
        });
    });
}

getformdata();

function deletefromform (id) {
    axios.delete(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products/${id}`)
    setTimeout(() => {
        getformdata();
      }, 1000);
}