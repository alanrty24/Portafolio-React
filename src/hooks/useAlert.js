import { useContext } from "react"
import { AlertContext } from '../context/AlertProvider.jsx'

export const useAlert = () => {
    return useContext(AlertContext);  
}