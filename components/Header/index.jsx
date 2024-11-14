import Link from "next/link"
import classes from "./Header.module.css";
const pages =[
    {href: '/', title:'list'},
    {href: '/swr-list', title:'swr-list'},

]
            
export function Header() {

    return <header className={classes.header}>
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                {pages.map(({href,title})=>
               <li key={href}>
                       <Link href={href}>{title}</Link> 
                </li>
                )}
                
            </ul>
        </nav>
    </header>
}