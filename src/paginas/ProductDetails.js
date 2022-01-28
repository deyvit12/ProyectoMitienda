import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from '../components'

export function ProductDetailsPage() {
  const { itemId } = useParams()

  return <ItemDetailContainer itemId={itemId} />
}
