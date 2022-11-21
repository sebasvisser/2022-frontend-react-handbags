function Tiles(props){
    return(
        <section>
            {props.image ?
                <img src={props.image}
                     alt={props.title}/> :
                <><h2>{props.title}</h2><p>{props.children}</p></>
            }
        </section>
    )
}

export default Tiles;