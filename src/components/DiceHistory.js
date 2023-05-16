
function DiceHistory(props) {
    return <ul>
        {props.history.map((e) => <li key={e.id}>{e.isSelected ? <strong>{e.roll}</strong> : e.roll}
            <button onClick={() => props.onSelect(e.id)}>{e.isSelected ? 'Unselect' : 'Select'}</button>
            <button onClick={() => props.onRemove(e.id)}>Remove</button>
        </li>)}
    </ul>

}
export default DiceHistory