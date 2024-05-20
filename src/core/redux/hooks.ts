import { useSelector } from "react-redux"

export interface RootState {
    root: {
      isLoading: boolean;
      isAuthenticate: boolean;
    };
  }

export const useRedux = () => {

    const isLoading = useSelector((state: RootState) => state.root.isLoading);
    const isAuthenticate = useSelector((state: RootState) => state.root.isAuthenticate);
    
    return { isLoading,isAuthenticate }
}