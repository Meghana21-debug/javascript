//Task 1
/*
let apiLink="https://fakestoreapi.com/products"
fetch(apiLink).then((data)=>{
   
    return data.json()

})
.then((products) => {

    console.log(products)
  products.forEach((product)=>{
        console.log("Title:",product.title)
        console.log("Price:",product.price)
         console.log("Category:",product.category)
    })


//map
    let newarray=products.map((product)=>{
        return {
           title: product.title,
            price:product.price}
        
    })
   console.log("Title and Price:");
    console.log(newarray)
    
   //filter
   let filterarray=products.filter((product)=>{
       
         if(product.price>100){
            return product
         }
        
    })
     console.log("Products above $100:");
    console.log(filterarray)

    
    let findarray=products.find((product)=>{
       
         if(product.category=='electronics'){
             return product
         }
        
    })
  
        console.log("First Electronics Product:");
        console.log(findarray)

            // reduce() - total price
        const totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log(`Total Price: $${totalPrice.toFixed(2)}`);

        // sort() - highest to lowest
        const sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log("Highest Price to Lowest Price:");

        sortedProducts.forEach(product => {
            console.log(`${product.title} - $${product.price}`);
        });

    })
   
.catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("Task 1 API operation completed.");
    });

//Task 2 — Product Category Dashboard


let apiLink1 = "https://fakestoreapi.com/products"

fetch(apiLink1)
.then((data) => {

    return data.json()

})
.then((products) => {

    console.log("===== PRODUCT DASHBOARD =====")

    // Total Products
    console.log("Total Products:", products.length)


    // Electronics
    let electronics = products.filter((product) => {

        return product.category === "electronics"

    })

    console.log("Electronics:", electronics.length)


    // Jewelery
    let jewelery = products.filter((product) => {

        return product.category === "jewelery"

    })

    console.log("Jewelery:", jewelery.length)


    // Men's Clothing
    let mensClothing = products.filter((product) => {

        return product.category === "men's clothing"

    })

    console.log("Men's Clothing:", mensClothing.length)


    // Women's Clothing
    let womensClothing = products.filter((product) => {

        return product.category === "women's clothing"

    })

    console.log("Women's Clothing:", womensClothing.length)


    // Highest Price
    let highestPrice = products.reduce((highest, product) => {

        return product.price > highest ? product.price : highest

    }, 0)

    console.log("Highest Price: $" + highestPrice)


    // Lowest Price
    let lowestPrice = products.reduce((lowest, product) => {

        return product.price < lowest ? product.price : lowest

    }, products[0].price)

    console.log("Lowest Price: $" + lowestPrice)


    // Total Price
    let totalPrice = products.reduce((total, product) => {

        return total + product.price

    }, 0)


    // Average Price
    let averagePrice = totalPrice / products.length

    console.log("Average Price: $" + averagePrice.toFixed(2))


    // Sort - Highest to Lowest
    let sortedProducts = products.sort((a, b) => {

        return b.price - a.price

    })

    console.log("===== HIGHEST TO LOWEST =====")

    sortedProducts.forEach((product) => {

        console.log(product.title, "$" + product.price)

    })

})
.catch((error) => {

    console.log("Error:", error)

})
.finally(() => {

    console.log("Dashboard completed")

})*/


//Task 3 — User & Post API
const usersAPI = "https://jsonplaceholder.typicode.com/users";
const postsAPI = "https://jsonplaceholder.typicode.com/posts";
 
fetch(usersAPI)
.then((data) => {

    return data.json()

})
  

.then((users)=>{
    console.log(users)
        users.forEach((user) => {
            console.log(user.name);
        });
    console.log("User Name + Email:");

        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });

        let findid=users.find((user)=>{
            if(user.id===5){
                return user
            }
        })

        console.log("User with ID 5:");
        console.log(findid)
        let filtercity=users.filter((user)=>{
            return user.address.city==="Gwenborough"
        })
        
        console.log(filtercity);


})
  
fetch(postsAPI)
.then((data) => {

    return data.json()

})
.then((post)=>{
    console.log(post)
    let id1=post.filter((userpost)=>{
        return userpost.id===1
    })
       console.log("Posts written by User ID 1:");
        console.log(id1)
         console.log(
            `User ID 1 created ${id1.length} posts.`
        );
         let findcharacters=post.find((userpost)=>{
            return userpost.title.length >50
         })
          console.log("First post with title longer than 50 characters:");
       
         console.log(findcharacters)

})
  
 //Task 4 — API + Search
 let apisearch="https://fakestoreapi.com/products"
 fetch(apisearch)
.then((data) => {

    return data.json()

})
  

.then((data)=>{
    console.log(data)
    let category1=prompt("Enter product category:")
    let maxprice=+prompt("Enter product max price:")
    
    let result=data.filter((product)=>{
        return product.category===category1 && product.price<=maxprice
    })
console.log(`
===== PRODUCT SEARCH =====
Category: ${category1}
Maximum Price: $${maxprice}
`);

    if (result.length === 0) {
        console.log("No products found.");
    } else {
        result.forEach(product => {
            console.log(
                product
            );
        })
    }

})

//Task 5 — API Shopping Cart
let apicart="https://fakestoreapi.com/products"
fetch(apicart)
.then((data) => {

    return data.json()

})
  

.then((products) => {

    
    // Display available products

    console.log("===== AVAILABLE PRODUCTS =====")

    products.forEach((product) => {

        console.log(
            "ID:", product.id,
            "Title:", product.title,
            "Price:", product.price
        )

    })
    let howmanyproducts=+prompt("how many products want:")
  
    let cart=[]
    for(let i=0;i<howmanyproducts;i++)
    {
        let idno=+prompt("enter product id ")
        
        cart.push(idno)
      
    }
    let productarray=[]
   
        let cartarray=products.map((product)=>{
            cart.filter((data)=>{
             if (data===product.id){
                productarray.push(product)
              }
            })
                

            })
        
    console.log("===== CART =====")

    productarray.forEach((product, index) => {

        console.log("Product", index + 1, ":", product.title)
        console.log("Price: $" + product.price)

    })


    // Calculate total using reduce()

    let total = productarray.reduce((sum, product) => {

        return sum + product.price

    }, 0)
    
    let discount = 0

    if (total > 200) {

        discount = 20

    }
    else if (total > 100) {

        discount = 10

    }
   


    // Calculate final amount

    let discountAmount = total * discount / 100

    let finalAmount = total - discountAmount


    console.log("Total",total)
     console.log("Discount:", discount + "%")
     console.log("Final Amount:",finalAmount)
})


//Task 6 — FakeStore Product Report


let apiLink11 = "https://fakestoreapi.com/products"

fetch(apiLink11)
.then((data) => {

    return data.json()

})
.then((products) => {

    // 1. Display all products

    console.log("========== PRODUCT REPORT ==========")

    console.log("Total Products:", products.length)

    console.log("===== ALL PRODUCTS =====")

    products.forEach((product) => {

        console.log(
            "ID:", product.id,
            "Title:", product.title,
            "Price: $" + product.price,
            "Category:", product.category
        )

    })


    // 2. Create product names array using map()

    let productNames = products.map((product) => {

        return product.title

    })

    console.log("===== PRODUCT NAMES =====")

    productNames.forEach((name) => {

        console.log("-", name)

    })


    // 3. Filter products above $100

    let expensiveProducts = products.filter((product) => {

        return product.price > 100

    })

    console.log("===== PRODUCTS ABOVE $100 =====")

    expensiveProducts.forEach((product) => {

        console.log(product.title, "- $" + product.price)

    })


    // 4. Find an electronics product

    let electronicsProduct = products.find((product) => {

        return product.category === "electronics"

    })

    console.log("===== ELECTRONICS PRODUCT =====")

    console.log(electronicsProduct)


    // 5. Calculate total price using reduce()

    let totalPrice = products.reduce((total, product) => {

        return total + product.price

    }, 0)

    console.log("===== TOTAL PRODUCT VALUE =====")

    console.log("$" + totalPrice.toFixed(2))


    // 6. Check if any product is above $500

    let anyAbove500 = products.some((product) => {

        return product.price > 500

    })

    console.log("===== ANY PRODUCT ABOVE $500 =====")

    console.log(anyAbove500)


    // 7. Check if every product is above $1

    let allAbove1 = products.every((product) => {

        return product.price > 1

    })

    console.log("===== ALL PRODUCTS ABOVE $1 =====")

    console.log(allAbove1)


    // 8. Sort highest price to lowest price

    let sortedProducts = products.sort((a, b) => {

        return b.price - a.price

    })


    console.log("===== HIGHEST → LOWEST =====")

    sortedProducts.forEach((product) => {

        console.log(product.title, "- $" + product.price)

    })

})
.catch((error) => {

    console.log("Error:", error)

})
.finally(() => {

    console.log("Task 6 completed")

})