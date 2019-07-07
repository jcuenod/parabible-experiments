import React from 'react'
import chapter from "../data/chapter.json"


class TextLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: -1
        }
    }
    _activate(wid) {
        this.setState({ active: wid })
    }
    render() {
        return <div style={{ direction: "rtl", fontFamily: "SBL Hebrew", fontSize: "xx-large" }}>
            {chapter.map((w, i) => [
                <span style={i === this.state.active ? { color: "blue", cursor: "pointer" } : { cursor: "pointer" }} key={i} onClick={() => this._activate(i)}>{w.word}</span>,
                w.trailer
            ])}
        </div>
    }
}
export default TextLayout