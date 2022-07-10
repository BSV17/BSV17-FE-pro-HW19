export class InputTextParser {
    render(formJson) {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", formJson.type);
        inputElement.setAttribute("placeholder", formJson.placeholder);

        return inputElement;
    }
}
