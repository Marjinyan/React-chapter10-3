const OrderedList = (props) => {
    console.log("works...")
    return <ol>
        {
            props.data.map((elm, i) => {
                return <li key={i}>{elm}</li>
            })
        }
    </ol>
}

export default OrderedList