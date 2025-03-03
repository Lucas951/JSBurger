const listProduct = document.querySelector('ul') //estou buscando no html minha ul
const buttonShowAll = document.querySelector('.button-show-all')
const buttonDiscount = document.querySelector('.button-discount')
const buttonSum = document.querySelector('.button-sum')
const buttonFilter = document.querySelector('.button-filter')


// ForEach
function showAll(productArray) { //ProductArray --> para poder reutilizar a função
    let myLi = '' //sem valor inicial na li
    
    menuOptions.forEach((product) => { //menuOption é o array original que está no product.js
       
        myLi +=   // myLi que é valor inicial vazio = myLi + li escrita abaixc, faço isso para mostrar na ul todo o array colocado, posso adicionar mais e que não vou ter o trabalho de fazer de um em um
            `<li>
        <img src= ${product.src}>
        <p> ${product.name}</p>
        <p class="preço">R$ ${product.price} </p>
     </li>`
        listProduct.innerHTML = myLi
    })

}

// Map
function calculateDiscount() {

    const newPrice = menuOptions.map((product) => ({ 
        ...product, //esparramar os itens do array aqui dentro
        price: product.price * 0.9 //aqui é o unico que vai ser alterado
    }))
    console.log(newPrice)

    let myLi = '' //sem valor inicial na li
    newPrice.forEach((product) => { //menuOption é o array original que está no product.js
       
        myLi +=   // myLi que é valor inicial vazio = myLi + li escrita abaixc, faço isso para mostrar na ul todo o array colocado, posso adicionar mais e que não vou ter o trabalho de fazer de um em um
            `<li>
        <img src= ${product.src}>
        <p> ${product.name}</p>
        <p class="preço">R$ ${product.price} </p>
     </li>`
        listProduct.innerHTML = myLi
    })

}

function sum(){


    const finalPrice = menuOptions.reduce((acumulador, product) => {
        return acumulador + product.price
    },0)

    listProduct.innerHTML = `<li> <p class="preço">A soma de todos os itens do menu é: R$ ${finalPrice} </p> </li>`
}

function filterAllItens() {
    const filterProduct = menuOptions.filter((product) => product.vegan === true);
    
    let myLi = '' //sem valor inicial na li

    filterProduct.forEach((product) => { //menuOption é o array original que está no product.js
       
        myLi +=   // myLi que é valor inicial vazio = myLi + li escrita abaixc, faço isso para mostrar na ul todo o array colocado, posso adicionar mais e que não vou ter o trabalho de fazer de um em um
            `<li>
        <img src= ${product.src}>
        <p> ${product.name}</p>
        <p class="preço">R$ ${product.price} </p>
     </li>`
        listProduct.innerHTML = myLi
    })

    console.log(filterProduct)
  }


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscount.addEventListener('click', calculateDiscount)
buttonSum.addEventListener('click', sum)
buttonFilter.addEventListener('click', filterAllItens)



