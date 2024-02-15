function LogementInfos({ cover }) {
    return (
        <>
            <div
                className="card-img"
                style={{
                    backgroundImage: `url(${cover})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
        </>
    )
}

export default LogementInfos
