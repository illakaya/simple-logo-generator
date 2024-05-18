const convertText = require('../text/textCheck');

describe('convertText', () => {
    it('escapes "<" character', () => {
      const text = '1<a';
      expect(convertText(text)).toEqual('1&lt;a');
    });
  
    it('escapes ">" character', () => {
      const text = '1>a';
      expect(convertText(text)).toEqual('1&gt;a');
    });
  
    it('escapes "&" character', () => {
      const text = '1&a';
      expect(convertText(text)).toEqual('1&amp;a');
    });
  
    it('escapes "\'" character', () => {
      const text = "Don't";
      expect(convertText(text)).toEqual('Don&apos;t');
    });
  
    it('escapes \'"\' character', () => {
      const text = '1"a';
      expect(convertText(text)).toEqual('1&quot;a');
    });
  
    it('does not modify valid XML characters', () => {
      const text = '1a';
      expect(convertText(text)).toEqual('1a');
    });
  
    it('handles empty string', () => {
      const text = '';
      expect(convertText(text)).toEqual('');
    });
  
    it('handles special characters only', () => {
      const text = `<>&'"`;
      expect(convertText(text)).toEqual(`&lt;&gt;&amp;&apos;&quot;`);
    });
  });