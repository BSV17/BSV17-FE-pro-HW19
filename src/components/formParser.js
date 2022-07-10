export class FormParser {
    constructor(formJson, parsers) {
        this.parsers = parsers;
        this.formJson = formJson;
        this.form = document.createElement("form");
    }

    parse() {
        for (const input of this.formJson) {
            const parser = this.parsers[input.type];
            this.form.appendChild(parser.render(input));
        }
    }

    render() {
        return this.form;
    }
}
