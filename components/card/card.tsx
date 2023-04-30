
import styles from './card.module.scss';



/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = () => {
    return (
        <div className={styles.card}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className={styles.image}
            />
            <h3 className={styles.title}>TITLE</h3>
            <h5 className={styles.title}>Release Date:</h5>
            <h5 className={styles.title}>Discripton:</h5>
            <p className={styles.desc}>This is a paragraph.</p>
            <button className={styles.more}>More</button>
        </div>
    );
};
