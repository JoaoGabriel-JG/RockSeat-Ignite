import styles from './post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='../../public/images/kobe.jpg' />
                    <div className={styles.authorInfo}>
                        <strong>Kobe</strong>
                        <span>Full-stack developer</span>
                    </div>
                </div>

                <time title="8 de Outubro as 17:42" dateTime="2023-10-08 17:42">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">kobe.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto</a>{' '}
                   <a href="#">#nlw</a>{' '}
                   <a href="#">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário aqui"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}