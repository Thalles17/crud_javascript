const inputSeach       = document.querySelector("#input-search")
const selectedCategory = document.querySelector('#select-category')
const selectedValues   = document.querySelector('#select-values')
const btnFilter        = document.querySelector('#btn-filter')
const results          = document.querySelector('#results')


//CHAVE PRIMARIA PARA VALORES

const CATEGORY_VALUES = {
    UP_TO_VALUE: 'UP_TO_VALUE',
    VALUE_BETWEEN_VALUE: 'VALUE_BETWEEN_VALUE',
    ABOVE_VALUE: 'ABOVE_VALUE',
    ALL_VALUES: 'ALL_VALUES'
}

const CATEGORY_REVENUE = {
    UP_TO_REVENUE: 'UP_TO_REVENUE',
    RECURRING: 'RECURRING',
    ON_TIME: 'ON_TIME',
    ANNUAL: 'ANNUAL'
}

const BADGE_REVENUE = {
    RECURRING: 'text-bg-primary',
    ON_TIME: 'text-bg-warning',
    ANNUAL: 'text-bg-info'
}

const listData = [
    {
        id: 0,
        name: 'thalles',
        email: 'thallesfdp@gmail.com',
        category: CATEGORY_REVENUE.RECURRING,
        valuesMoney: 20000
    },
    {   id: 1,
        name: 'Kevao',
        email: 'kevenfdp@gmail.com',
        category: CATEGORY_REVENUE.ON_TIME,
        valuesMoney: 4000
    },
    {   id: 2,
        name: 'Doratello',
        email: 'doratellofdp@gmail.com',
        category: CATEGORY_REVENUE.ANNUAL,
        valuesMoney: 3000
    }
]

btnFilter.addEventListener('click', filter)

function filter(){
    const searchQuery = inputSeach.value.toLowerCase();
    const selectedCategoryValue = selectedCategory.value;
    const selectedValuesValue = selectedValues.value;

    // Filtrar por nome ou email
    let filteredData = listData.filter(item => 
        item.name.toLowerCase().includes(searchQuery) || 
        item.email.toLowerCase().includes(searchQuery)
    );

    // Filtrar por categoria
    if (selectedCategoryValue !== CATEGORY_REVENUE.UP_TO_REVENUE) {
        filteredData = filteredData.filter(item => item.category === selectedCategoryValue);
    }

    // Filtrar por valores de faturamento
    if (selectedValuesValue !== CATEGORY_VALUES.ALL_VALUES) {
        filteredData = filteredData.filter(item => {
            if (selectedValuesValue === CATEGORY_VALUES.UP_TO_VALUE) {
                return item.valuesMoney <= 2000;
            } else if (selectedValuesValue === CATEGORY_VALUES.VALUE_BETWEEN_VALUE) {
                return item.valuesMoney >= 3000 && item.valuesMoney <= 5000;
            } else if (selectedValuesValue === CATEGORY_VALUES.ABOVE_VALUE) {
                return item.valuesMoney > 10000;
            }
        });
    }

    loadTable(filteredData);
}


function loadTable(data){
    let rows = '';

    data.forEach(item => {
        rows += `
            <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>
                    <span class="badge ${BADGE_REVENUE[item.category]}">${item.category}</span>
                </td>
                <td>${
                    item.valuesMoney.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }</td>
                <td>
                    <button class="btn btn-primary" data-id="${item.id}">Editar</button>
                    <button class="btn btn-danger" data-id="${item.id}">Excluir</button>
                </td>
            </tr>
        `;
    });
    
    results.innerHTML = rows;
}

// Carregar a tabela com todos os dados inicialmente
loadTable(listData);




