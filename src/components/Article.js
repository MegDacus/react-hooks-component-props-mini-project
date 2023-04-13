import React from "react";

function Article({title, date = "January 1, 1970", preview, minutes}) {

    function setEmoji(minutes){
        if (minutes < 30) {
            let num = Math.ceil(minutes/5);
            return Array(num).fill('☕️ ');
        }
        if (minutes >= 30) {
            let num = Math.ceil(minutes/10);
            return Array(num).fill("🍱 ");
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}"◦ {setEmoji(minutes)} {minutes} min read"</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;