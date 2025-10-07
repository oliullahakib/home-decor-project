import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
export const getFromLS=()=>{
   const wishIdArr= localStorage.getItem("wishId");
   if(wishIdArr){
    return JSON.parse(wishIdArr)
   }
   return []
}

export const addToLS =(id)=>{
    const wishIdArr = getFromLS()
    if(wishIdArr.includes(id)) return MySwal.fire({title:"Item Is Already Added",icon:"error",draggable:false})
      wishIdArr.push(id)
    localStorage.setItem("wishId",JSON.stringify(wishIdArr))
    MySwal.fire({
  title: "Item Is Added To Wish List",
  icon: "success",
  draggable: false
});
}