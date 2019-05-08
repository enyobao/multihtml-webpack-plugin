

const PrettyError = require('pretty-error');

const prettyError = new PrettyError();
prettyError.withoutColors();
prettyError.skipPackage(['html-plugin-evaluation']);
prettyError.skipNodeFiles();
prettyError.skip((traceLine) => {
    return traceLine.path === 'html-plugin-evaluation';
});

module.exports = function (err, context) {
    return {
        toHtml() {
            return 'Html Webpack Plugin:\n<pre>\n' + this.toString() + '</pre>';
        },
        toJsonHtml() {
            return JSON.stringify(this.toHtml());
        },
        toString() {
            return prettyError.render(err).replace(/webpack:\/\/\/\./g, context);
        },
    };
};
