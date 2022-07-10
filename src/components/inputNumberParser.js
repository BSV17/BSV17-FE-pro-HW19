export class InputNumberParser {
    render(formJson) {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", formJson.type);
        inputElement.setAttribute("minValue", formJson.minValue);
        inputElement.setAttribute("maxValue", formJson.maxValue);

        return inputElement;
    }
}
