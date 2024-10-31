import { useState, useEffect } from "react";
import { marked } from "marked";
import "./App.css";

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// This is a multi-line code block:
function anotherExample(firstLine, lastLine) {
  if (firstLine === '~~~' && lastLine === '~~~') {
    return multiLineCode; 
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultText);
  const [htmlContent, setHtmlContent] = useState(marked(defaultText));

  useEffect(() => {
    marked.setOptions({
      breaks: true,
      gfm: true,
    });

    setHtmlContent(marked(markdownText));
  }, [markdownText]);

  return (
    <div className="App">
      <div id="editor-container">
        <h2 className="header">EDITOR</h2>
        <textarea
          id="editor"
          value={markdownText}
          onChange={(e) => {
            setMarkdownText(e.target.value);
            setHtmlContent(marked(e.target.value));
          }}
        />
      </div>
      <div id="preview-container">
        <h2 className="header">PREVIEW</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </div>
    </div>
  );
}

export default App;
