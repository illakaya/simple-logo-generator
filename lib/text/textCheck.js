// Create a function that will escape invalid xml characters 
const convertText = (text) => {
    let newText = [];
    for (const char of text){
        switch (char) {
            case '<':
                newText.push('&lt;');
                break;
            case '>':
                newText.push('&gt;');
                break;
            case '&':
                newText.push('&amp;');
                break;
            case `'`:
                newText.push('&apos;');
                break;
            case '"':
                newText.push('&quot;');
                break;
            default:
                newText.push(char);
        }
    }
    return newText.join('');
}

// export the module
module.exports = convertText;