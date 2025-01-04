

const filterReducer = (state = '', action) => {
  switch(action.type){
  case 'ACTIVE':
    return action.payload
  default:
    return state
  }

}

export const setFilter = (filter) => {
  return {
    type: 'ACTIVE',
    payload: filter
  }
}

export default filterReducer