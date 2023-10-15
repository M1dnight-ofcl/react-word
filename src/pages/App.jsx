import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
    const Page = () => {
        return (
            <div id="page">
                <div id="textarea" contentEditable>
                </div>
            </div>
        )
    }
    return (
        <>
            <div id="documentContainer">
                <Page/>
            </div>
        </>
    )
}

export default App;