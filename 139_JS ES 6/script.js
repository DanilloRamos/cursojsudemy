//var, let, const

//com var, a variável "vaza" do escopo
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

//com let, não acontece o "vazamento"
let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 2

for (let i=0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName() {
    const name = 'Danillo'
    console.log(name)
}

const name = 'Pedro'
console.log(name)

logName()

//Arrow Functions
const sum = function sum (a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b



console.log(sum(5,5))
console.log(arrowSum(5,2))

const greeting = (name) => {
    if (name) {
        return `Olá ${name}!`
    } else {
        return 'Olá!'
    }
}

console.log(greeting('Danillo'))
console.log(greeting())

const testArrow = () => console.log('Testou!')
testArrow()

const user = {
    name: 'Danillo',
    sayUserName() {
        setTimeout(function () {
            console.log(this)
            console.log('Username: '+this.name)
        }, 500)
    },

    //Arrow Function
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()

//Método Filter (filtra os elementos do array conforme determinada condição. Não modifica o array original)
const arr = [1,2,3,4,5]
console.log(arr)

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [{name:'Danillo', available:true},
    {name:'Pedro', available:true},
    {name:'João', available:false},
    {name:'Marcos', available:false}
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

//Método map -> percorre todos os elementos do array aplicando determinada condição. Modifica o array original.
const produtos = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400, category: 'Eletro'},
    {name: 'Calça Jeans', price: 50.99, category: 'Roupas'},
]

produtos.map ((produto) => {
    if (produto.category === 'Roupas'){
        produto.onSale = true
    }
})

console.log(produtos)

//Destructuring -> pode ser utilizado em arrays e objetos
//Simplifica a declaração de n variáveis em uma única linha
const fruits = ['maçã', 'laranja', 'mamão']
const [f1, f2, f3] = fruits

console.log(f1)

const productDetails = {
    name:'Mouse',
    price:39.99,
    category:'Periféricos',
    color:'Cinza'
}

const {name:productName, price, category:productCategory, color} = productDetails
console.log(`O nome do produto é ${productName}, custa R$ ${price}, pertence à categoria ${productCategory} e é da cor ${color}`)

//spread operator -> pode ser utilizado em arrays e objetos
//utilizado para constituir novos valores em arrays e objetos, ou seja, unir vários arrays de maneira simples
//ou adicionar valores de um objeto a outro
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1,...a2]

console.log(a3)

const a4 = [0,...a1, 4]
console.log(a4)

const carName = {name:'Gol'}
const carBrand = {brand:'W'}
const otherInfos = {km:100000, price:49000}

const car =  {...carName, carBrand, otherInfos, wheels:4}

console.log(car)

//Classes - OO
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa Gola V', 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))

//Herança - estender uma classe à outra - Palavra reservada extends
class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são:')
        this.colors.forEach((color) => {
            console.log(color)            
        })
    }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, ['Preto', 'Azul', 'Verde'])

console.log(hat.name)
console.log(hat.productWithDiscount(30).toFixed(2))
hat.showColors()