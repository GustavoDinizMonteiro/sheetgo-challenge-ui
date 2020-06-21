import states from './states'
import provider from '../../providers/categories'

export default {
  getCategories: () => {
    return async(dispatch) => {
      const start = () => ({ type: states.getAll.start })
      const success = data => ({ type: states.getAll.success, data })
      const failure = err => ({ type: states.getAll.failure, err })
      
      try {
        dispatch(start())
        const { data } = await provider.list()
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  }
}