import "./styles/card.css"

export const Card = ({id, userId, title, completed}) => {
    return(
        <div className="card">
            <div className="container" style={completed ? {background: "green"} : {background: "yellow"}}>
                <p>{title}</p>
                <p>Userid: {userId} </p>
                <p>Id: {id}</p>
            </div>
        </div>
    )
}