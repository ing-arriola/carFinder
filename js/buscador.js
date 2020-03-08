// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getCars(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ]
}

let dataForSearch={
    brand:'',
    model:'',
    year:'',
    minimum:'',
    maximum:'',
    doors:'',
    color:'',
    transmission:''
}

const cars=getCars()

document.addEventListener('DOMContentLoaded',()=>{
    showCars(cars)
})

//event listener for filters
document.querySelector('#marca').addEventListener('input',(e)=>{
    dataForSearch.brand=e.target.value
    carFilter()
})

document.querySelector('#year').addEventListener('input',(e)=>{
    dataForSearch.year=Number(e.target.value) 
    carFilter()
})

document.querySelector('#minimo').addEventListener('input',(e)=>{
    dataForSearch.minimum=Number(e.target.value) 
    carFilter()
})

document.querySelector('#maximo').addEventListener('input',(e)=>{
    dataForSearch.maximum=Number(e.target.value) 
    carFilter()
})

document.querySelector('#puertas').addEventListener('input',(e)=>{
    dataForSearch.doors=Number(e.target.value) 
    carFilter()
})

document.querySelector('#transmision').addEventListener('input',(e)=>{
    dataForSearch.transmission=e.target.value 
    carFilter()
})

document.querySelector('#color').addEventListener('input',(e)=>{
    dataForSearch.color=e.target.value 
    carFilter()
})


//Show cars that meets filters
function showCars(cars){
    const resultsContainer=document.getElementById('resultado')
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild)
    }
    cars.forEach(car => {
        let carToRender=document.createElement('p')
        carToRender.textContent=`
        ${car.marca} - ${car.modelo} - ${car.year} - ${car.transmision} - ${car.color} Precio: ${car.precio}`
        resultsContainer.appendChild(carToRender)
    });
}

function carFilter(){
    //all the filters are applied
    const result=getCars().filter(brand).filter(year).filter(minimum).filter(maximum).filter(doors).filter(transmission).filter(color)
    //if there are results show them, otherwise show not found message
    result.length?showCars(result):noResultsFounded()
}

function noResultsFounded(){
    const resultsContainer=document.getElementById('resultado')
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild)
    }
    let notFoundMessage=document.createElement('p')
    notFoundMessage.classList.add('alerta','error')
    notFoundMessage.textContent='There are no results with the given specifications'
    resultsContainer.appendChild(notFoundMessage)
}

//if the user has called the brand filter then this returns an array filter by brand
//otherwise this returns an array without any filter
const brand = car=>{return dataForSearch.brand?car.marca===dataForSearch.brand:car}
//if the user already specified a brand this function received an array with the filter of
//brand otherwise this function receives an array without any fiter and if the user has specified
//a year then this function retun an array filtered by year, otherwise this function returns the 
//original array
const year=car=>{return dataForSearch.year?car.year===dataForSearch.year:car}

const minimum=car=>{return dataForSearch.minimum?car.precio>=dataForSearch.minimum:car}

const maximum=car=>{return dataForSearch.maximum?car.precio<=dataForSearch.maximum:car}

const doors=car=>{return dataForSearch.doors?car.puertas===dataForSearch.doors:car}

const transmission=car=>{return dataForSearch.transmission?car.transmision==dataForSearch.transmission:car}

const color=car=>{return dataForSearch.color?car.color===dataForSearch.color:car}