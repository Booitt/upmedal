import React from 'react'
import styles from '../styles/ListProducts.module.css'
import ProducItem from './ProductItem'
import { products } from '../utils/constants'

const ListProducts: React.FC = () => {
    return (
        <div className={styles.container}>
            {products?.map((product) => (
                <ProducItem product={product} key={product.id} />
            ))}
        </div>
    )
}

export default ListProducts
