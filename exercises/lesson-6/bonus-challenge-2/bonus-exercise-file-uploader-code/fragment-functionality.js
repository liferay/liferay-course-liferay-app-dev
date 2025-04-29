const fileInput = fragmentElement.querySelector(`#${fragmentNamespace}-file-upload-input`);
const hiddenFileInput = fragmentElement.querySelector(`#${fragmentNamespace}-file-upload-input-hidden`);
const selectButton = fragmentElement.querySelector(`#${fragmentNamespace}-file-upload-button`);
const fileChosen = fragmentElement.querySelector(`#${fragmentNamespace}-file-chosen`);
const dropArea = fragmentElement.querySelector(`#fileupload-${fragmentNamespace}-box`);

let previousFiles = null;

function updateFileInput(files) {
    // Create a new DataTransfer object to hold the files
    const dataTransfer = new DataTransfer();
    for (let i = 0; i < files.length; i++) {
        dataTransfer.items.add(files[i]);
    }
    fileInput.files = dataTransfer.files;
}

function onInputChange() {
    if (fileInput.files && fileInput.files.length > 0) {
        fileInput.setAttribute('name', input.name);
        hiddenFileInput.setAttribute('name', '');
        hiddenFileInput.value = '';
        fileChosen.textContent = fileInput.files[0].name;
        triggerLoadScreen();
    } else if (previousFiles) {
        // If no files in input but we have previous, restore them
        updateFileInput([previousFiles]);
        fileInput.setAttribute('name', input.name);
        hiddenFileInput.setAttribute('name', '');
        hiddenFileInput.value = '';
        fileChosen.textContent = previousFiles.name;
        triggerLoadScreen();
    }
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

// Drag and Drop Functionality
dropArea.addEventListener("dragover", function(e) {
    e.preventDefault();
    dropArea.classList.add('drag-over');
});

dropArea.addEventListener("drop", function(e) {
    e.preventDefault();
    e.stopPropagation();

    dropArea.classList.remove('drag-over');
    
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
        updateFileInput(droppedFiles); // Use the update function
        onInputChange();
    }
});

if (layoutMode === 'edit') {
    selectButton.classList.add('disabled');
} else {
    if (fileInput) {
        fileInput.addEventListener('change', onInputChange);
    }
    if (selectButton) {
        if (input.attributes.selectFromDocumentLibrary) {
            selectButton.addEventListener('click', onSelectFile);
        } else {
            selectButton.addEventListener('click', () => {
                previousFiles = fileInput.files[0] || null;
                fileInput.click();
            });
        }
    }
}