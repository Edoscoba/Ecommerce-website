const productAlert = document.getElementById("product-alert");
   const closeAlertBtn = document.getElementById("close-btn");
   const productText = document.getElementById("product-text");
   const productImage = document.getElementById("product-image");
   const homeSecion = document.getElementById("home-section");
    const productSection = document.getElementById("product-section")
    
    
let menuItems = document.getElementById("menuItems");


   const names = ["John", "Alice", "Bob", "Emma", "Betty"];
   const products = [
  {
    name: "Nike Red Shoes",
    image: "https://i.postimg.cc/Hs0gy6LS/product-image-1.jpg",
  },
  {
    name: "Chanel Noir Perfume",
    image: "https://i.postimg.cc/QdXrkc9j/product-image-2.jpg",
  },
  {
    name: "Awesome Black Shirt",
    image: "https://i.postimg.cc/qvjHmgyy/product-image-3.jpg",
  },
  {
    name: "Ray-Ban Sunglasses",
    image: "https://i.postimg.cc/N0FqZYkV/product-image-4.jpg",
  },
  {
    name: "Black Apple Watch",
    image: "https://i.postimg.cc/25tRDJH5/product-image-5.jpg",
  },
   ];
   //random element from array
   function getRandomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
   }
   //random time
   function getRandomTime() {
  return Math.floor(Math.random() * 59) + 1; // Random number between 1 and 59
   }

   //random time
   const getRandomDisplayTime = () => Math.random() * (8 - 3) + 3;
   //show alert box
   const showAlert = () => {
  const randomName = getRandomItemFromArray(names);
  const randomProduct = getRandomItemFromArray(products);
  const { name, image } = randomProduct;
  productImage.src = image;
  productText.innerHTML = `
  <p class="message">${randomName} purchased ${name}</p>
  <p class="time">${getRandomTime()} mins ago</p>
  `;
  productAlert.style.display = "flex";
   };
   //close alert box
   closeAlertBtn.addEventListener("click", () => {
  productAlert.style.display = "none";
  setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);
   });

   setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);



// setting the navbar for mobile
menuItems.style.maxHeight = "0px";


function menutoggle() {

    if (menuItems.style.maxHeight == "0px" ) 
    {
        menuItems.style.maxHeight = "200px";
        
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
}


// product navigation

// product_nav.addEventListener("click", () => {
//      display the navigational product
//     product.style.display = 'block';

//     home.style.display = 'none';

// });

function home() {
    homeSecion.style.display = "block";
    productSection.style.display = "none"
}

function product() {
    homeSecion.style.display = "none";
    productSection.style.display = "block"
    
}