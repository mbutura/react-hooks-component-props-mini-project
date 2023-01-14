import React from "react"

function Article({title, date="January 1, 1970", preview, minutes}){
    const icon = (minutes < 30)?"☕️":"🍱";
    const divisor = (minutes < 30)?5:10;
    return( 
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>{(icon.repeat(Math.ceil(minutes/divisor)))+` ${minutes} min Read`}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;