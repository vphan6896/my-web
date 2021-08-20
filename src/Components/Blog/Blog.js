function Blog(props) {
    return(
        <section class="section fade">
            <h1 class="title has-text-grey-darker is-1">{props.title}</h1>
            <h2 class="subtitle">
                {props.subtitle}
            </h2>
            <p>
                {props.body}
            </p>
            <div className="has-text-weight-normal is-size-7">
                
               {props.credits}
            </div>

        </section>
    )
} export default Blog;
