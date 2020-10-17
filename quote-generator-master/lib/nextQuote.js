const nextQuote =async ()=>{
  const res = await fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/random`)
  const data = await res.json()



  return data.quote
}

export default nextQuote