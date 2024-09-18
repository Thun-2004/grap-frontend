

const IdleTag = ({width, height, name}) => {
    return (
        <div className= {`w-${width} h-${height} text-white bg-gradient-to-bl from-pink-500 to-orange-400 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mt-1`}>
            {name}
        </div>
    )
}

export default IdleTag;