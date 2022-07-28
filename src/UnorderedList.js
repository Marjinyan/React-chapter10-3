const UnorderedList = (props) => {
    return <ul>
        {
            props.data.map((elm, i) => {
                return <li key={i}>{elm}</li>
            })
        }
    </ul>
}

export default UnorderedList