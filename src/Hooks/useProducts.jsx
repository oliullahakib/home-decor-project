import { useEffect, useState } from "react"

const useProducts = () => {
    const [productsData, setProductsData] = useState([])
    const [error, setError] = useState('')
    const [loding, setLoding] = useState(true)
    useEffect(() => {
        setLoding(false)
        fetch("../furnitureData.json").then(res => res.json()).then(data => setProductsData(data)).catch((e) => setError(e)).finally(() => setLoding(false))
    }, [])

    return { productsData, error, loding }
}
export default useProducts