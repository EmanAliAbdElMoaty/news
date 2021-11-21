console.log('Helloooo')
let div = document.getElementByclass('card')
/*form.addEventListener('submit',(e)=>
{
    e.preventDefault()
    addressFunction()
    console.log(document.getElementById('address').value)
    form.reset()
})

let dateFunction = async()=>
{
    try
    {
        // address = document.getElementById('address').value
        const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from='+ date +'&sortBy=publishedAt&apiKey=94282122336f418cb5aa08028e546663' )
        const data = await res.json()
        console.log(data)
        if(data.error)
        {
            document.getElementById('error').innerText = data.error
            document.getElementByclass('url').innerText = data.Url
            document.getElementByclass('card-img-top').innerText = ' '
            document.getElementByclass('card-body').innerText= ' '
            document.getElementByclass('card-title').innerText= ' '
            document.getElementByclass('card-text').innerText= ' '
        }
        else
        {
            document.getElementById('error').innerText = ' '
            document.getElementByclass('url').innerText = data.Url
            document.getElementByclass('card-img-top').innerText = data.UrlToImage
            document.getElementByclass('card-body').innerText= data.Author + data.Description
            document.getElementByclass('card-title').innerText= data.Title
            document.getElementByclass('card-text').innerText= data.PublishedAt + data.Content
            document.getElementById('forecast').innerText = data.forecast
            document.getElementById('location').innerText = data.location
        }

    }
    catch(e)
    {
        console.log(e)
    }
}*/
let card = document.getElementById('card')

let cards = async() =>{
    try{
        // const apiKey = document.getElementById('apiKey').value
        // const res = await fetch('http://localhost:3000/?apiKey=' + apiKey)
        const res = await fetch('http://localhost:3000/')
        const data = await res.json()
        console.log(data)
        if(data.error){
            document.getElementById('error').innerText = data.error
            document.getElementById('img').innerText = ''
            document.getElementById('title').innerText = ''
            document.getElementById('text').innerText = ''
        }
        else{
            document.getElementById('img').innerText = data
            document.getElementById('title').innerText = data
            document.getElementById('text').innerText = data
            document.getElementById('error').innerText = ' '
        }
    }
    catch(e){
        console.log(e)
    }
}