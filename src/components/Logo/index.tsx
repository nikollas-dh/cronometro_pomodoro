import styles from './styles.module.css'
import { TimerIcon } from 'lucide-react'
// type LogoProps = {
//     children: React.ReactNode;
// }
export function Logo (){
    return(
        <div className={styles.Logo}>
            <a href="" className={styles.logoLink}><TimerIcon/><span>Cronometro</span></a>
        </div>
    )
}

