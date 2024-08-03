import styles from './Posto.module.css'
import {Coment} from './Coment';
import { Avatar } from './Avatar';

import { format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

//auhtor: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
//content: String

export function Post({author, publishedAt}) {
    const publishedDateFormatted = format(publishedAt," d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        
    })

    return(
        <article className={styles.post}>
            <header>
            <div className={styles.author}>
                <Avatar  src={author.avatarUrl} alt="" />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} datetime="2024-08-07 16:42:00">
                {}
            </time>
            </header>

            <div className={styles.content}>
                <p>Opa Gurizada, suave</p>
                <p>Meu nome é Pedro e eu sou op milioor, daq alguns meses estarei gahando mais de 5k por mês, ANOTEMM</p>
                <p><a href="">pedro.freitas/dockwhor/</a></p>
                <p><a href=""></a>#OMILLIOR #siiiu #pedrokas</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea 
                placeholder='Deixei um comentário'
                />

                  <footer>
                     <button type='submite'>Publicar</button>
                </footer>  
            </form>

            <div className={styles.comentList}>
            <Coment />
            <Coment />
            <Coment />
            </div>
        </article>
    )
}