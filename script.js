document.getElementById('sampleForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent default form submission

    clearErrors();

    // Collect form values
    const userType = document.getElementById('userType').value;
    const clientName = document.getElementById('clientName').value;
    const cultivar = document.getElementById('cultivar').value;
    const reportType = document.getElementById('reportType').value;
    const sampleDate = document.getElementById('sampleDate').value;
    const clientAddress = document.getElementById('clientAddress').value;
    const cropHealth = document.getElementById('cropHealth').value;
    const acreage = document.getElementById('acreage').value;

    // Validate required fields
    let invalidFields = [];
    if (clientName.trim() === "") invalidFields.push(document.getElementById('clientName'));
    if (sampleDate === "") invalidFields.push(document.getElementById('sampleDate'));
    if (acreage.trim() === "" || isNaN(acreage)) invalidFields.push(document.getElementById('acreage'));

    if (invalidFields.length > 0) {
        highlightErrors(invalidFields);
        document.getElementById('errorMessage').innerText = "Please fill out all required fields.";
        return;
    }

    // Generate a unique alphanumeric code for the sample (for the QR code)
    const uniqueCode = `SAMPLE-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

    // Redirect to sticker.html, passing all form data as URL parameters
    const url = `sticker.html?userType=${encodeURIComponent(userType)}&clientName=${encodeURIComponent(clientName)}&cultivar=${encodeURIComponent(cultivar)}&reportType=${encodeURIComponent(reportType)}&sampleDate=${encodeURIComponent(sampleDate)}&clientAddress=${encodeURIComponent(clientAddress)}&cropHealth=${encodeURIComponent(cropHealth)}&acreage=${encodeURIComponent(acreage)}&uniqueCode=${encodeURIComponent(uniqueCode)}`;
    window.location.href = url;
});

// Function to highlight invalid fields
function highlightErrors(fields) {
    fields.forEach(field => {
        field.style.border = "2px solid red";
    });
}

// Function to clear previous errors
function clearErrors() {
    const fields = document.querySelectorAll('input, select');
    fields.forEach(field => {
        field.style.border = "";
    });
    document.getElementById('errorMessage').innerText = "";
}