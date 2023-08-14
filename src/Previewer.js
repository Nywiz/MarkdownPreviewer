import React from 'react';
import { marked as markedFunction } from 'marked';

function Preview({ markdownText }) {

    const renderMarkdown = (markdown) => {
        return { __html: markedFunction(markdown) }
    }

    return (
        <div className='row mt-4'>
            <div className='col-12'>
                <h2>Preview</h2>
                <div id="preview" className='border bg-secondary' dangerouslySetInnerHTML={renderMarkdown(markdownText)} />
            </div>
        </div>
    );
}

export default Preview;
