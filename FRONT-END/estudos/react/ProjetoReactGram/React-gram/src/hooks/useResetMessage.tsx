import { resetMessage } from "../slices/userSlide";


export const useResetMessage = (dispatch) => {
    return () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }
}