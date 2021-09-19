function BlogCredit(props) {
    return(
        <a href={props.url}>
            <li>
                {props.url}
            </li>
        </a>
    )
} export default BlogCredit;