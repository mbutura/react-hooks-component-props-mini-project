import React from "react"

function Article({title, date="January 1, 1970", preview, minutes}){
    return( 
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>{"☕️".repeat(Math.ceil(minutes/5)) + `${minutes} min Read`}</small>
            <p>{preview}</p>
        </article>
    );
}
// const {id, title, data, preview, minutes} = post;
export default Article;