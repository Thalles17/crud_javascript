
const selectedCategory = document.querySelector('#select-category')
const selectedValues   = document.querySelector('#select-values')
const btnFilter        = document.querySelector('#btn-filter')


listData = [
    {
        name: 'thalles',
        email: 'thallesfdp@gmail.com',
        category: 'Recorente',
        valuesMoney: 20.000
    },
    {
        name: 'Kevao',
        email: 'kevenfdp@gmail.com',
        category: 'Avulso',
        valuesMoney: 20.000
    },
    {
        name: 'Doratello',
        email: 'doratellofdp@gmail.com',
        category: 'Avulso',
        valuesMoney: 20.000
    },
]


btnFilter.addEventListener('click', function(){
    const listFiltered = listData.filter((dataFiltered)=> [listData.name, listData.email,listData.category, listData.valuesMoney])
    console.log(listFiltered)
})


//functions what never I know the what I am doing




