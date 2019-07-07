import React from 'react'
import { DockLayout } from 'rc-dock'
import TextLayout from './TextLayout'
import MorphologyWidget from './MorphologyWidget'

let mainTab = {
    closable: false,
    title: "Main",
    content: <TextLayout />,
    id: 'tMain'
}
let mainTab2 = {
    closable: false,
    title: "Main",
    content: <TextLayout />,
    id: 'tMain2'
}
let tab = {
    title: 'Tab',
    content: <div>The MT has simply “and Cain said to Abel his brother,” omitting Cain’s words to Abel. It is possible that the elliptical text is original. Perhaps the author uses the technique of aposiopesis, “a sudden silence” to create tension. In the midst of the story the narrator suddenly rushes ahead to what happened in the field. It is more likely that the ancient versions (Smr, LXX, Vulgate, and Syriac), which include Cain’s words, “Let’s go out to the field,” preserve the original reading here. After writing אָחִיו (ʾakhiyv, “his brother”), a scribe’s eye may have jumped to the end of the form בַּשָׂדֶה (bassadeh, “to the field”) and accidentally omitted the quotation. This would be an error of virtual homoioteleuton. In older phases of the Hebrew script the sequence יו (yod-vav) on אָחִיו is graphically similar to the final ה (he) on בַּשָׂדֶה.</div>,
    closable: true,
};
let box = {
    dockbox: {
        mode: 'horizontal',
        children: [
            {
                mode: 'vertical',
                children: [
                    {
                        tabs: [{ title: "Morphology", content: <MorphologyWidget />, id: 'm1' }],
                    },
                    {
                        tabs: [{ ...tab, id: 't4' }, { ...tab, id: 't5' }]
                    }
                ]
            },
            {
                tabs: [mainTab, mainTab2],
            },
        ]
    }
};

class DockingUI extends React.Component {
    render() {
        return (
            <DockLayout defaultLayout={box} dropMode='edge'
                style={{ position: 'absolute', left: 10, top: 10, right: 10, bottom: 10 }} />
        );
    }
}
export default DockingUI