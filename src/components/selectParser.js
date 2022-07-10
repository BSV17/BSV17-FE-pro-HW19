export class SelectParser {
    render(formJson) {
        const inputElement = document.createElement("select");

        for (const option of formJson.options) {
            const selectOption = document.createElement("option");
            selectOption.value = option.value;
            selectOption.textContent = option.displayName || option.value;
            inputElement.appendChild(selectOption);
        }

        return inputElement;
    }
}
