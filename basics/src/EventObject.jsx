

function HandleFormSubmit(event){
    event.preventDefault();
    console.log("Form submitted Successfully!")
    console.log(event)
}
export default function EventObject(){
    return(
        <div><form onSubmit={HandleFormSubmit} >
        <input placeholder="Write your name..." type="text" />
        <button>Submit</button>
        </form></div>
    )
}