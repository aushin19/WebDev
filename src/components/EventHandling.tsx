const EventHandling = () => {
    const handleDiv = (e: React.MouseEvent<HTMLDivElement>)=>{
        console.log(e.currentTarget)
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log(e.currentTarget)
    }

  return (
    <div onMouseEnter={handleDiv}>
        <h1>Hello All</h1>
        <button onMouseEnter={handleButton}>Click me</button>
    </div>
  )
}

export default EventHandling