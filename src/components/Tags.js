function Tags({ tags }) {
    return (
        <>
            <ul className="card-tags">
                {tags.map((tag, index) => (
                    <li className="tags" key={index}>
                        {tag}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Tags
