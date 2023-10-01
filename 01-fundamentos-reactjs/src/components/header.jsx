import styles from './header.module.css'
import igniteLogo from '../../public/images/igniteLogo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo}/>
        </header>
    )
}