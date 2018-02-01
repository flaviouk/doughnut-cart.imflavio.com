import { getLocalStorage, setLocalStorage } from 'utils'

const types = {
  CART_ADD: 'CART_ADD',
  CART_REMOVE: 'CART_REMOVE'
}

export const actions = {
  add: id => ({ type: types.CART_ADD, id }),
  remove: id => ({ type: types.CART_REMOVE, id })
}

const initialState = getLocalStorage('CART') || []

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD: {
      const oldCart = getLocalStorage('CART')
      const newCart = [action.id]

      if (oldCart) oldCart.map(item => newCart.unshift(item))

      setLocalStorage('CART', newCart)
      return newCart
    }
    case types.CART_REMOVE: {
      const oldCart = getLocalStorage('CART') || []

      const index = oldCart.indexOf(action.id)
      oldCart[index] = null

      const newCart = oldCart.filter(item => item)

      setLocalStorage('CART', newCart)
      return newCart
    }
    default:
      return state
  }
}

export const savedItemsSelector = cart => {
  const cartFiltered = cart.filter(doughnut => typeof doughnut === 'string')

  const counter = {}

  cartFiltered.map(id => {
    if (counter[id]) counter[id] = counter[id] + 1
    else counter[id] = 1
  })

  const doughnuts = getLocalStorage('DOUGHNUTS') || []
  return doughnuts
    .filter(({ id }) => counter[id])
    .map(doughnut => Object.assign(doughnut, { counter: counter[doughnut.id] }))
}
