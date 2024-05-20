import * as actions from '../slices/rootSlice'
import store from '../store'

export const setIsLoading = (payload: boolean) => store.dispatch(actions.setIsLoading(payload));
export const setAuthenticate = (payload: boolean) => store.dispatch(actions.setAuthenticate(payload));

  

