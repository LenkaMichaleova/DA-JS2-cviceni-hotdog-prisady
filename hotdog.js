const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];

export const renderToppings = () => {
    toppings.forEach((topping, i) => {
        document.body.innerHTML += `
        <div class="topping" id="i${i}">
            <h3>${topping.name}</h3>
            <p>${topping.price} Kč</p>
        </div>
        `
        if (topping.selected) {
            document.querySelector(`#i${i}`).classList.add("topping--selected")
        } else {
            document.querySelector(`#i${i}`).classList.remove("topping--selected")
        }
    })
    document.querySelectorAll(".topping").forEach((topping, i) => {
        topping.addEventListener("click", () => {
            toggleTopping(i)
            renderToppings()
        })
    })
}

const toggleTopping = (indexOfTopping) => {
    if (toppings[indexOfTopping].selected) {
        toppings[indexOfTopping].selected = false
    } else {
        toppings[indexOfTopping].selected = true
    }
}   