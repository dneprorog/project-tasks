const insertBefore = (referenceElement, content) => {
    const p = document.createElement("p");
    const textNode = document.createTextNode(content);
    p.appendChild(textNode);

    const number = parseInt(content, 10);
    const isEven = !isNaN(number) && !(number % 2);

    p.className = isEven ? "green" : "red";

    referenceElement.parentNode.insertBefore(p, referenceElement);
};

const form = document.forms.theForm;
insertBefore(form, localStorage.getItem("num23"));
form.addEventListener(
    "submit",
    evt => {
        const val = numInput.value;
        if (!val.length) {
            return evt.preventDefault();
        }

        localStorage.setItem("num23", val);
    },
    false
);

const numInput = document.querySelector("#num23");
numInput.addEventListener(
    "input",
    evt => {
        const val = evt.target.value;
        if (val.length === 0) {
            setBtn.disabled = true;
        } else {
            setBtn.disabled = false;
        }
    },
    false
);

const setBtn = document.querySelector("#set-btn");
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener(
    "click",
    () => {
        numInput.value = "";
        localStorage.removeItem("num23");
    },
    false
);

if (numInput.value.length === 0) {
    setBtn.disabled = true;
}
