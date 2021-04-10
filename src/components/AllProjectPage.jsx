import React from 'react'

export const AllProjectPage = () => {





const Data=[
    {
        Name:"Mark One",
        About:"A CLI app which can quiz your friends on how well they know you. Use nodeJS. Use repl.it to host your app.",
        Link:"https://replit.com/@vipansh/TestYour-Knowledge"
    },
    {
        Name:"Mark Two",
        About:"A CLI app which can quiz your friends on how well they know you. Use nodeJS. Use repl.it to host your app.",
        Link:"https://replit.com/join/ahkupvwk-vipansh"
    },
    {
        Name:"Mark Three",
        About:"This website is an example of MarkThree assignment.",
        Link:"https://vipansh.vercel.app/"
    },
    {
        Name:"Mark Four",
        About:"My portfolio",
        Link:"https://vipansh.vercel.app/"
    },
    {
        Name:"Mark Five",
        About:"My blog",
        Link:"https://jsblog.vercel.app/"
    },
    {
        Name:"Mark Six",
        About:"Minion Speak.",
        Link:"/markSix"
    },
    {
        Name:"Mark Seven",
        About:"Fun translation app Yoda",
        Link:"/markSeven"
    },
    {
        Name:"Mark Eight",
        About:"Know your emotions.",
        Link:"/markEight"
    },
    {
        Name:"Mark Nine",
        About:"GoodBooks. ReactJS app",
        Link:"/markNine"
    },
]





    return (
        <div>
            
<main class="page-content">

      {Data.map((data,index)=>{
return ( <div class="card">
<div class="content">
  <h2 class="title">{data.Name}</h2>
  <p class="copy">{data.About}</p>
<a  href={data.Link} target="_blank" class="btn">View Live</a >
</div>
</div>
)
      })}

</main>
        </div>
    )
}
