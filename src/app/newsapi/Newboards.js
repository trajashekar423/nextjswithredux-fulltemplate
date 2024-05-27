"use client"

import React, { useEffect, useState } from 'react'

const Newboards = () => {
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
        let url ='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ef3bcdc944fb4951913674296566da31            '
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[])

    
  return (
    <div>
   <h1>Latest News</h1>
   {articles.map((news,index)=>{
return <Newsitems key={index} title={news.title} description={news.description}/>
   })}


   </div>
   
  )
}

export default Newboards



