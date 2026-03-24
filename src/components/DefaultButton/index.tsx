import styles from './style.module.css'

type DefaultButtonProps={
    icon:React.ReactNode;
    color?: 'green' | 'red';
}& React.ComponentProps<'button'>

export function DefaultButton({
    icon, color = 'green'
}:DefaultButtonProps){
    return(
        <>
            <div>
                <button className={`${styles.button} ${styles[color]}`} >
                    {icon}
                        Enviar
                </button>
            </div>
        </>
    );

} 