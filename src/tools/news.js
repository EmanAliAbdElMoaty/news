const request = require('request')
const news = (date,callback) =>{
    const url = 'https://newsapi.org/v2/everything?q=tesla&from='+ date +'&sortBy=publishedAt&apiKey=94282122336f418cb5aa08028e546663' 
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect news service',undefined)
        }
        else if(response.body.message){
            callback('Unable to find Key',undefined)
        }
        else{
            callback(undefined,response.body.articles/*{
                Name:response.body.articles[1].source.name,
                Author:response.body.articles[1].source.author,
                Title:response.body.articles[1].title ,
                Description:response.body.articles[1].description,
                Url:response.body.articles[1].url,
                UrlToImage:response.body.articles[1].urlToImage,
                PublishedAt:response.body.articles[1].publishedAt,
                Content:response.body.articles[1].content
            }*/)
        }
    })
}

module.exports = news