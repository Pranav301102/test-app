
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-headers-and-templates
 */
export const Header = () => {
    return (
        <div >
            <header className={styles.app_nav}>
                <span className={styles.logo}></span>
                <span className={styles.nav}>
                    <nav>
                        <a href="/home" className={styles.nav_links}>
                            Home
                        </a>{' '}
                        <a href="/movie" className={styles.nav_links}>
                            movie
                        </a>{' '}
                        <a href="/about" className={styles.nav_links}>
                            About
                        </a>{' '}
                        <a href="/contact" className={styles.nav_links}>
                            Contact Us
                        </a>
                        <button className={styles.sign_up}>Sign Up</button>
                        <button className={styles.sign_up}>Sign Up</button>
                    </nav>
                </span>
            </header>
        </div>
    );
};
