import React from 'react';
import { useEffect } from 'react';


function NoPage() 
{
    function getGifCat()
    {
        let catButton = document.getElementById('give-cat')

            catButton.addEventListener("click", evt => 
            {

                let catDiv = document.getElementById('cat-pic')

                fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif')
                .then(res => res.json())
                .then(cats => 
                {
                    cats.forEach(cat => 
                    {
                        catDiv.innerHTML = `<h3> cat go neooowm</h3> 
                        <img src="${cat.url}" alt="kitty"/>`
                    });
                })
            })
    }
    function getCat()
    {
        let catButton = document.getElementById('give-cat2')

            catButton.addEventListener("click", evt => 
            {

                let catDiv = document.getElementById('cat-pic2')

                fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png')
                .then(res => res.json())
                .then(cats => 
                {
                    cats.forEach(cat => 
                    {
                        catDiv.innerHTML = `<h3> cat go neooowm</h3> 
                        <img src="${cat.url}" alt="kitty"/>`
                    });
                })
            })
    }

    function getKanye()
    {
        let quotesDiv = document.getElementById('quotes')

        fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(quote => {quotesDiv.innerHTML += `<p> ${quote.quote}</p>`})

    }

    useEffect(() => {
        getKanye();
        getGifCat();
        getCat();
    })

    return (     
    <div>
        <h1>this is the page you end up at when something goes wrong!</h1>
        <div id ="quotes">
    </div>
        <button id="give-cat">pls gif cat </button>
        <button id="give-cat2">pls give cat </button>
        <div id ="cat-pic">
        <div id ="cat-pic2">
        </div>
        </div>
    </div>
       
    );
}

export default NoPage;