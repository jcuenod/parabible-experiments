# parabible-experiments
Experiments with alternative tech for parabible clients

**1. Bulma + Vue.js**

<https://jcuenod.github.io/parabible-experiments/bulma>

Surprisingly easy to get a lot of stuff going pretty rapidly

**2. Cool Widget Manager**

<https://jcuenod.github.io/parabible-experiments/docking-ui/dist/index.html>

The idea of these widgets is not going to get old soon

**3. Inspect Click Event to Find Word under Cursor**

<https://jcuenod.github.io/parabible-experiments/caretFromPosition/index.html>

This is an idea to get rid of millions of dom nodes (spans around every bit of a word so that we can figure out which words are being clicked on to look up data for them [or create search terms from them])

**4. Precalculate Word Positions (developemnt of #3)**

<https://jcuenod.github.io/parabible-experiments/hover-test/>

This does a great job of getting rid of the dom nodes. It stores the positions of all the words in memory and then calculates the hovered word on the fly using the mousemove event. It then shifts around a highlighting span to indicate the relevant word. It does this complete with broken text nodes inside the main div (text nodes are broken by verse number spans).

**5. Draggable UI Test**

<https://jcuenod.github.io/parabible-experiments/draggable/>

Experiment with a concept where a tab can be dragged to a new location in a tabbar or, alternatively, into a new split panel.

**6. Doric Framework UI**

<https://jcuenod.github.io/parabible-experiments/doric-parabible/dist>

Doric Framework is a column-based widget layout for Vue. See [here](https://www.npmjs.com/package/doric-framework).
