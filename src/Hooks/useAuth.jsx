import { use } from "react"
import { AuthContext } from "../Context/AuthContext/AuthContext"

 export const useAuth = ()=>{
    return use(AuthContext)
}