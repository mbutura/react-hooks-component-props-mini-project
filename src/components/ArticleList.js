import React from "react"
import Article from "./Article"

function ArticleList({posts}){
    return( 
        <main>
            {posts.map(post => <Article key={post.id} {...post}/>)}
        </main>
    );
}
// const {id, title, data, preview, minutes} = post;
export default ArticleList;