import { useNavigate } from 'react-router-dom'
import { AlertContainer, Title, Figure, Divider } from './styles'
import { Button } from '../Button'
import emptyCartImage from '../../assets/empty-cart.png'
import successImage from '../../assets/success.png'

type AlertType = 'success' | 'empty'
interface AlertAttributes {
  title: string
  src: string
}

const uiMapper: Record<AlertType, AlertAttributes> = {
  empty: {
    title: 'Parece que não há nada por aqui :(',
    src: emptyCartImage,
  },
  success: {
    title: 'Compra realizada com sucesso!',
    src: successImage,
  },
}

export interface AlertProps {
  alertType: AlertType
}

export function Alert({ alertType }: AlertProps) {
  const navigate = useNavigate()

  return (
    <AlertContainer>
      <Title> {uiMapper[alertType].title} </Title>
      <div>
        <Figure alertType={alertType}>
          <img src={uiMapper[alertType].src} alt="Carrinho vazio" />
        </Figure>
        {alertType === 'empty' && <Divider />}
      </div>
      <Button width="18rem" fontSize="1.4rem" onClick={() => navigate('/')}>
        Voltar
      </Button>
    </AlertContainer>
  )
}
