import Link from 'next/link'
import {clsx} from "clsx";
import classes from "./NotFound.module.scss";

export default function NotFound() {
    return (
        <div className={clsx(classes.container)}>
            <h2>Not Found</h2>
            <p>Такой страницы не существует</p>
            <Link href="/" className={clsx(classes.link)}>Вернуться домой</Link>
        </div>
    )
}