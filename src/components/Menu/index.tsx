import styles from './styles.module.css'
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'

// type MenuProps = {
//     children: React.ReactNode;
// }
export function Menu (){
    return(
        <div className={styles.menu}>
            <a href="" className={styles.menuLink}>
                <HistoryIcon/>
            </a>
            <a href="" className={styles.menuLink}>
                <HouseIcon/>
            </a>
            <a href="" className={styles.menuLink}>
                <SettingsIcon/>
            </a>
            <a href="" className={styles.menuLink}>
                <SunIcon/>
            </a>
        </div>
    )
}

