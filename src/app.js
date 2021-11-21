// npm init -y
// npm i express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

////////////////////////////////////////////////////////////////////////////

const path = require('path')

 console.log(__dirname)


const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

//////////////////////////////////////////////////////////////////////////////

// hbs

app.set('view engine', 'hbs');

const viewspath = path.join(__dirname,'../templeats/views')
app.set('views',viewspath)
/////////////////////////////////////////////////////////////////////////////////
//partials (header,footer)
const hbs = require('hbs')
const partialsPath = path.join(__dirname,'../templeats/partials') 
hbs.registerPartials(partialsPath)

/*app.get('',(req,res)=>{
  res.render('index',{
    title:'Home page',
    name:'Omar'
  })
})


app.get('/aboutpage',(req,res)=>{
  res.render('about',{
    Title:'About page',
    name:'Osama'
  })
})

app.get('/help',(req,res)=>{
  res.render('helppage',{
    title:'Help page',
    msg:'Help !!!!',
    name:'Ali'
  })
})
app.get('/news',(req,res)=>{
  res.render('news',{
    title:'News',
    msg:'Help !!!!',
    name:'Ali'
  })
})


app.get('/contactus',(req,res)=>{
  res.render('contactus',{
    title:'contactus',
    msg:'Help !!!!',
    name:'Ali'
  })
})*/

const news = require('./tools/news')
app.get('/',(req,res)=>
{
  if(!req.query.Date)
  {
    return res.send(
      {
        error:'what Date?'
      }
    )
  }
news(Date,(error,data)=>
     {
       if(error)
       {
         return res.send({error})
       }
       res.send(response.body.articles
        /*Name:response.body.articles[1].source.name,
        Author:response.body.articles[1].source.author,
        Title:response.body.articles[1].title ,
        Description:response.body.articles[1].description,
        Url:response.body.articles[1].url,
        UrlToImage:response.body.articles[1].urlToImage,
        PublishedAt:response.body.articles[1].publishedAt,
        Content:response.body.articles[1].content,
         news:data*/
       )
     })
})
app.get('*',(req,res)=>{
  res.render('404 found',
  {
    title:'not found page',
    name:'Default page'
  })
})



app.listen(port, () => {
  console.log('Server is running',port)
})