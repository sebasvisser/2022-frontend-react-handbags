function Tiles({image, title, children}){
    return(
        <section>
            {image ?
                <img src={image}
                     alt={title}/> :
                <><h2>{title}</h2><p>{children}</p></>
            }
        </section>
    )
}

export default Tiles;