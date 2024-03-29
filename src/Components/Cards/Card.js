function Card(props) {
    return(
        <div className="column is-one-quarter fade">
            <div className="card">
            <div className="card-image">
                <figure className="image is-5by3">
                {props.image}
                </figure>
            </div>
                <div className="card-content">
                    <div className="title is-size-4">
                        {props.headliner}
                    </div>
                    <div className="content">
                        {props.descrip}
                    </div>
                </div>
            </div>
        </div>
    )
} export default Card;