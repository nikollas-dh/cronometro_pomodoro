import styles from './styles.module.css'
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import{useEffect, useState} from 'react'
import type React from 'react'
type AvaliableTheme = 'dark' | 'light'

export function Menu (){

    const [theme, setTheme]= useState<AvaliableTheme>('dark');
    function handleThemChange(
        event:React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ){
        event.preventDefault();
        setTheme(prevTheme=>{
            const nextTheme = prevTheme === 'dark'?'light':'dark';
            return nextTheme
        });
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme)
        return()=>{
            console.log("O componente está atualizado", Date.now())
            
        };
    },[theme])

    return(
        <div className={styles.menu}>
            <a href="" className={styles.menuLink} aria-label='Ir para o histórico'
            title='Ir para o histórico '>
                <HistoryIcon/>
            </a>
            <a href="" className={styles.menuLink}aria-label='Ir para o menu'
            title='Ir para o menu '>
                <HouseIcon/>
            </a>
            <a href="" className={styles.menuLink}aria-label='Ir para as configurações'
            title='Ir para as configurações '>
                <SettingsIcon/>
            </a>
            <a href="" className={styles.menuLink} onClick={handleThemChange}aria-label='Alterar tema'
            title='Alterar tema '>
                <SunIcon/>
            </a>
        </div>
    )
}