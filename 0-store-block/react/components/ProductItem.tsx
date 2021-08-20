import React from 'react'
import styles from '../styles/ProductItem.module.css'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import placeholder from "../assets/camiseta_gremio.jpg"

export interface Product {
    id: string
    name: string
    imgUrl?: string
    stars?: number
    price?: string
    link?: string
}

interface Props {
    product: Product
}

const ProducItem: React.FC<Props> = ({ product }) => {
    const { id, name, imgUrl, stars = 0, price = 'R$ 0,00', link = '#' } = product
    return (
        <div className={styles.container}>
            <div className={styles.stars}>{renderStars(stars)}</div>
            <div className={styles.title}>
                <h3>{name}</h3>
            </div>
            <div className={styles.imgContainer}>
                <img src={imgUrl || placeholder} alt="Camiseta do grêmio" />
            </div>
            <div className={styles.info}>
                <p>Pré-lançamento</p>
                <p>{price}</p>
            </div>
            <div className={styles.actions}>
                <button className={styles.btnDetalhes} onClick={() => console.log(id, link)}>
                    Ver detalhes
                </button>
            </div>
        </div>
    )
}

const renderStars = (n: number) =>
    Array.from({ length: 5 }, (_, i) =>
        n > i ? (
            <StarIcon key={i} className={styles.starIcon} />
        ) : (
            <StarBorderIcon className={styles.starIcon} key={i} />
        ),
    )

export default ProducItem
