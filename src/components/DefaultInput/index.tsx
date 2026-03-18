import styles from './style.module.css'

type DefaultProps = {
    id:string;
    labelText:string;
}&React.Component<'input'>;

export function DefaultInput({
    id,
    type,
    labelText = "task",
    ...rest
}:DefaultProps){ 
    return(
        <>
            <label htmlFor={id} >{labelText}</label>
            <input className= {styles.input} id= {id} type={type} {...rest}/>
        </>
    )
}