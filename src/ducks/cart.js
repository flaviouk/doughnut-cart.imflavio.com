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
      const oldCart = getLocalStorage('CART')

      if (oldCart) return oldCart.filter(item => item !== action.id)
      return []
    }
    default:
      return state
  }
}
