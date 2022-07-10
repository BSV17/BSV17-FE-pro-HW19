import formJson from "./formData.json";
import {
    FormParser,
    SelectParser,
    InputTextParser,
    InputNumberParser
} from "./components";

const elementTypeParser = {
    text: new InputTextParser(),
    select: new SelectParser(),
    number: new InputNumberParser()
};

const formParser = new FormParser(formJson, elementTypeParser);
formParser.parse();

const form = formParser.render();
document.body.appendChild(form);
