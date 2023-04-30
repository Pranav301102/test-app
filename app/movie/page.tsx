import styles from './movie.module.scss'
import { Card } from '../../components/card/card'


export default function Movie() {
    return(
    <div className={styles.Container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    )
}