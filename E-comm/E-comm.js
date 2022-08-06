function addToCart(name,price) {
    // const name = document.querySelector("#n1") .innerHTML;
    // const price = document.querySelector("#p1").innerHTML;
    const cart = document.querySelector(".cart")

    const html = `
    <div> ${name} </div>
    <div> ${price} </div>
    `;
    cart.innerHTML+=html
}

console.log("test")
