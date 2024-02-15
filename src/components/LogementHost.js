function LogementHost({ name, picture }) {
    return (
        <>
            <div className="infos-host">
                <span className="name">{name}</span>
                <div className="img">
                    <img src={picture} alt={name} />
                </div>
            </div>
        </>
    )
}

export default LogementHost
