const renderDialog = (data, isEdit) => {
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    const popupToggle = document.createElement("label");
    popupToggle.classList = "popup-backdrop";
    popupToggle.setAttribute("for", "popup-toggle");

    const popupContent = document.createElement("div");
    popupContent.setAttribute("class", "panel popup-content");

    const panelHeader = document.createElement("div");
    panelHeader.setAttribute("class", "panel-header");
    panelHeader.setAttribute(
        "style",
        "border-bottom: none; padding-bottom: 0;",
    );

    const panelTitle = document.createElement("h2");
    panelTitle.innerText = "Customer details";
    panelHeader.append(panelTitle);

    const popupBody = document.createElement("div");
    popupBody.setAttribute("class", "popup-body");

    const formGrid = document.createElement("div");
    formGrid.setAttribute("class", "form-grid");

    data.forEach((dataInput) => {
        const formGroup = document.createElement("div");
        formGroup.className = "form-group full-width";
        const formLabel = document.createElement("label");
        formLabel.className = "form-label";
        formLabel.textContent = dataInput.title;
        const formInput = document.createElement("input");
        formInput.className = "form-input";
        formInput.setAttribute("placeholder", dataInput.placeholder);

        formGroup.append(formLabel, formInput);

        formGrid.appendChild(formGroup);
    });

    const popupFooter = document.createElement("div");
    popupFooter.className = "popup-footer";
    const popupFooterTonggle = document.createElement("label");
    popupFooterTonggle.className = "btn btn-cancel";
    popupFooterTonggle.textContent = "Cancel";
    popupFooterTonggle.setAttribute("for", "popup-toggle");
    const btnSave = document.createElement("button");
    btnSave.className = "btn btn-save";
    btnSave.textContent = "Save";
    btnSave.setAttribute("type", "button");

    popupFooter.append(popupFooterTonggle, btnSave);
    popupBody.append(formGrid);
    popupContent.append(panelHeader, popupBody, popupFooter);

    overlay.append(popupToggle, popupContent);

    return overlay;
};

export { renderDialog };
