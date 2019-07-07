import React from 'react'

const MorphologyWidget = () => {
    return <div style={{ overflow: "auto", fontSize: "small", fontFamily: "Open Sans" }}>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Root</div>
            <div className="mvalue" style={{ marginLeft: "15px", fontFamily: "SBL BibLit", fontSize: "large" }}>חמד</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Part of Speech</div>
            <div className="mvalue" style={{ marginLeft: "15px" }}>Verb</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Stem</div>
            <div className="mvalue" style={{ marginLeft: "15px" }}>Nif‘al (H)</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Tense</div>
            <div className="mvalue" style={{ marginLeft: "15px" }}>Participle</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Number</div>
            <div className="mvalue" style={{ marginLeft: "15px" }}>Singular</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Gender</div>
            <div className="mvalue" style={{ marginLeft: "15px" }}>Masculine</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Semantic Domain</div>
            <div className="mvalue" style={{ marginLeft: "15px" }}>Wish</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Parallel Lexeme</div>
            <div className="mvalue" style={{ marginLeft: "15px", fontFamily: "SBL BibLit", fontSize: "120%" }}>εἰμί</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                Gloss</div>
            <div className="mvalue" style={{ marginLeft: "15px" }}>desire</div>
        </div>
        <div className="mrow"
            style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", padding: "3px 10px", cursor: "pointer" }}>
            <div className="mheading" style={{ flexBasis: "40%", fontSize: "80%", fontWeight: "bold", textTransform: "uppercase" }}>
                State</div>
            <div className="mvalue" style={{ marginLeft: "15px" }}>Absolute</div>
        </div>
    </div>
}
export default MorphologyWidget