import styles from './sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src='https://images.unsplash.com/photo-1629297234856-b54624f3f298?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFzcXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=50'/>

            <div className={styles.profile}>
                <img className={styles.avatar} src='../../public/images/jordan.jpg' />

                <strong>Michael Jordan</strong>
                <span>Front-end Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}