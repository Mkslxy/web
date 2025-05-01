// Дані (модель)
let products = []

// Pure function: додає товар
const createProduct = (product) => [...products, product]

// Pure function: видаляє товар за id
const deleteProductById = (list, id) => list.filter(p => p.id !== id)

// Pure function: оновлює товар
const updateProduct = (list, updatedProduct) =>
    list.map(p => p.id === updatedProduct.id ? updatedProduct : p)

// Pure function: підрахунок вартості
const calculateTotal = (list) =>
    list.reduce((sum, p) => sum + Number(p.price), 0)

// DOM Elements
const productList = document.getElementById('productList')
const totalPrice = document.getElementById('totalPrice')
const emptyMessage = document.getElementById('emptyMessage')
const addProductBtn = document.getElementById('addProductBtn')
const modal = document.getElementById('productModal')
const toast = document.getElementById('toast')

// Відображення
// Виведення товарів
const render = () => {
    productList.innerHTML = ''
    if (products.length === 0) {
        emptyMessage.style.display = 'block'
    } else {
        emptyMessage.style.display = 'none'
        products.forEach(p => {
            const card = document.createElement('div')
            card.className = 'product-card'
            card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div>
          <p><strong>ID:</strong> ${p.id}</p>
          <p><strong>Назва:</strong> ${p.name}</p>
          <p><strong>Ціна:</strong> ${p.price} грн</p>
          <p><strong>Категорія:</strong> ${p.category}</p>
        </div>
        <div>
          <!-- Додаєм data-id -->
          <button data-id="${p.id}" onclick="editProduct('${p.id}')">Редагувати</button>
          <button data-id="${p.id}" onclick="removeProduct('${p.id}')">Видалити</button>
        </div>
      `
            productList.appendChild(card)
        })
    }
    totalPrice.textContent = `Загальна вартість: ${calculateTotal(products)} грн`
}


// Вивід toast
const showToast = (message) => {
    toast.textContent = message
    toast.classList.remove('hidden')
    setTimeout(() => toast.classList.add('hidden'), 3000)
}

// Додавання нового товару
addProductBtn.addEventListener('click', () => {
    showModal()
})

// Показати модалку
const showModal = (product = null) => {
    modal.classList.remove('hidden')
    document.getElementById('modalTitle').textContent = product ? 'Редагування товару' : 'Новий товар'
    document.getElementById('productId').value = product?.id || ''
    document.getElementById('productName').value = product?.name || ''
    document.getElementById('productPrice').value = product?.price || ''
    document.getElementById('productCategory').value = product?.category || ''
    document.getElementById('productImage').value = product?.image || ''
}

// Сховати модалку
document.getElementById('cancelBtn').addEventListener('click', () => {
    modal.classList.add('hidden')
})

// Обробка форми
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const id = document.getElementById('productId').value || Date.now().toString()
    const name = document.getElementById('productName').value
    const price = document.getElementById('productPrice').value
    const category = document.getElementById('productCategory').value
    const image = document.getElementById('productImage').value

    const newProduct = { id, name, price, category, image }

    if (products.some(p => p.id === id)) {
        products = updateProduct(products, newProduct)
        showToast(`Оновлено товар: ${id} - ${name}`)
    } else {
        products = createProduct(newProduct)
        showToast('Товар додано!')
    }

    modal.classList.add('hidden')
    render()
})

// Видалення товару
window.removeProduct = (id) => {
    products = deleteProductById(products, id)
    render()
    showToast('Товар успішно видалено!')
}

// Редагування
window.editProduct = (id) => {
    const product = products.find(p => p.id === id)
    showModal(product)
}
