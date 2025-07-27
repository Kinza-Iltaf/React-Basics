function Message({Name,Color}) {
    return(
        <div>
            <h1> Hello  <span style={{color:Color}}> {Name} </span></h1>
        </div>
    )
}

export default Message;