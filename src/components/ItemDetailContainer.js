import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { getProductById } from '../firebase'
import { Spinner } from './Spinner'


export function ItemDetailContainer({ productId }) {
  const [isLoading, setIsLoading] = useState(true)

  const [product, setProduct] = useState()

  useEffect(() => {
    async function fn() {
      setIsLoading(true)

      try {
        const product = await getProductById(productId)
        setProduct(product)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fn()
  }, [productId])

  return isLoading ? <Spinner /> : <ItemDetail product={product} />
}


