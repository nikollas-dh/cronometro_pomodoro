import styles from './styles.module.css'
import { TimerIcon } from 'lucide-react'
import { ChessQueen } from 'lucide-react'
// type LogoProps = {
//     children: React.ReactNode;
// }
export function Logo (){
    return(
        <div className={styles.Logo}>
            <a href="" className={styles.logoLink}><ChessQueen/><span>Teste</span></a>
        </div>
    )
}

