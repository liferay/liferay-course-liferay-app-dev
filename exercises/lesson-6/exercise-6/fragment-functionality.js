const fileInput = fragmentElement.querySelector(`#${fragmentNamespace}-file-upload-input`);
const hiddenFileInput = fragmentElement.querySelector(`#${fragmentNamespace}-file-upload-input-hidden`);
const selectButton = fragmentElement.querySelector(`#${fragmentNamespace}-file-upload-button`);
const fileChosen = fragmentElement.querySelector(`#${fragmentNamespace}-file-chosen`)
let previousFiles = null;
function onInputChange() {
    if (!fileInput.files.length && previousFiles) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(previousFiles);
        fileInput.files = dataTransfer.files;
    }
    fileInput.setAttribute('name', input.name);
    hiddenFileInput.setAttribute('name', '');
    hiddenFileInput.value = '';
    fileChosen.textContent = fileInput.files[0].name;
    triggerLoadScreen();
}
function onSelectFile(event) {
    event.preventDefault();
    Liferay.Util.openSelectionModal({
        onSelect(selectedItem) {
            const { fileEntryId, title } = JSON.parse(selectedItem.value);
            fileInput.value = fileEntryId;
            fileChosen.textContent = title;
            triggerLoadScreen();
        },
        selectEventName: `${fragmentNamespace}selectFileEntry`,
        url: input.attributes.selectFromDocumentLibraryURL,
    });
}
function triggerLoadScreen() {
    const component = fragmentElement.querySelector(`#fileupload-${fragmentNamespace}-element`);
    const formBox = fragmentElement.querySelector(`#fileupload-${fragmentNamespace}-box`);
    const template = fragmentElement.querySelector(`#template-${fragmentNamespace}-loading`);
    formBox.classList.add('hide');
    component.appendChild(template.content.cloneNode(true));
    setTimeout(() => {
        component.removeChild(fragmentElement.querySelector(`#${fragmentNamespace}-loading`));
        formBox.classList.remove('hide');
    }, 1000);
}
if (layoutMode === 'edit') {
    selectButton.classList.add('disabled');
}
else {
    if (fileInput) {
        fileInput.addEventListener('change', onInputChange);
    }
    if (selectButton) {
        if (input.attributes.selectFromDocumentLibrary) {
            selectButton.addEventListener('click', onSelectFile);
        }
        else {
            selectButton.addEventListener('click', () => {
                previousFiles = fileInput.files[0] || null;
                fileInput.click();
            });
        }
    }
}