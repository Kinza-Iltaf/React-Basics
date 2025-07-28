
function SayHello(){
console.log("Hello!")
}

function SayBye(){
    console.log("Take Care! BYE")
}

function HandleDBClick(){
    console.log("Click me twice")
}

function TackingMouseOver(){
    console.log("You are over Para right now")
}
function Events() {
    return(
        <div>
        <button style={{margin : "34px"}} onClick={SayHello}>Click me to Say Hello!</button> <br />
        <button  style={{margin : "34px"}}  onClick={SayBye}>Leaving? Say Bye!</button> <br />
        <button  style={{margin : "34px"}} onDoubleClick={HandleDBClick}>Double Click</button> <br />
        <p onMouseOver={TackingMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic temporibus possimus sint exercitationem quo impedit iste porro distinctio, expedita dolorem doloribus amet omnis iusto soluta, debitis cupiditate consequuntur sequi.</p>
        </div>
    )
}

export default Events;