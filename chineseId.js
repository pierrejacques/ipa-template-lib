const IPA = require('ipa.js');

module.exports = (compile) => {
    return {
        check: v => true,
        guarantee: v => v,
        mock: () => '',
    }
};