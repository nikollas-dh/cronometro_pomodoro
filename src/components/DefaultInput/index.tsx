import styles from './style.module.css'

type DefaultProps = {
    id:string;
    labelText:string;
    type:string;
}&React.Component<'input'>;

export function DefaultInput({
    id,
    type,
    labelText,
    ...rest
}:DefaultProps){ 
    return(
        <>
            <label htmlFor={id} >{labelText}</label>
            <input className= {styles.input} id= {id} type={type} {...rest}/>
        </>
    )
}