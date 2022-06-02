function Article({ date = "January 1, 1970", title, preview, minutes}){
  function timeToRead(minutes){
    let image = ""
    if (minutes <= 30){
      image = "☕️"
    } else {
      image = "🍱"
    }
    let time = image
    let count = Math.floor(minutes / 5)
    
    for (let i = 0; i < count; i++){
      time = time.concat(image)
    }
    return `${time} ${minutes} min read`
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{timeToRead(minutes)}</p>
    </article>
  )
}

export default Article