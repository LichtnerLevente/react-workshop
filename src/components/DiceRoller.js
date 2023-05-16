function DiceRoller(props) {
    function RNDNum(){
        return Math.ceil(Math.random() * 20)
      }
    return (<button onClick={() => props.onRoll(RNDNum())}>Roll</button>)
}

export default DiceRoller