import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Coment.module.css'
import { Avatar } from './Avatar'

export function Coment() {
    return (
        <div className={styles.coment}>
            <Avatar hasBorder={false} src="https:/github.com/mariaemf.png" alt="" />

            <div className={styles.comentBox}>
                <div className={styles.comentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maria cabeçuda</strong>
                            <time title='7 de Agostto ás 16:42h' datetime="2024-08-07 16:42:00">Cercad de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Pedro, você é o milioor</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>777</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}