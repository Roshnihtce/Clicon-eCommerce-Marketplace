export const saveOrder = (order) => {
  const existing = JSON.parse(localStorage.getItem('orders')) || []

  const updated = [order, ...existing]

  localStorage.setItem('orders', JSON.stringify(updated))
}

export const getOrders = () => {
  return JSON.parse(localStorage.getItem('orders')) || []
}