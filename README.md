# QR-Intake-Form

Here’s a sample README.md file you can use for your GitHub repository. This README will provide an overview of the project, explain how to use it, and give installation instructions.

Sample README.md:

# Sample Submission Form with Printable Sticker

This project is a web-based sample submission form that generates a printable sticker with a QR code. It allows users to fill out a form with details such as user type, client name, cultivar, report type, and more. Once the form is submitted, the data is passed to a sticker page where a QR code is generated and the user can print a sticker to place on their sample.

## Features
- **Sample Submission Form**: Users fill out a detailed form with information related to samples, including client details, report type, and crop health.
- **Form Validation**: Ensures all required fields are filled before submission.
- **Printable Sticker**: After submission, the form data is displayed on a sticker page, complete with a QR code that can be printed.
- **QR Code Generation**: A unique QR code is generated for each submission, which can be scanned for sample tracking.

## Tech Stack
- **HTML**: Structure and layout of the forms.
- **CSS**: Styling for form elements and the printable sticker page.
- **JavaScript**: Form validation, redirection, and dynamic data handling between pages.
- **QR Code Library**: [qrcodejs](https://github.com/davidshimjs/qrcodejs) is used to generate the QR codes.

## How It Works
1. **Form Submission**: 
   - The user fills out the form on `index.html`.
   - The form data is validated to ensure all required fields are completed.
2. **Data Transfer**:
   - Once validated, the form data is transferred via URL parameters to the `sticker.html` page.
3. **Sticker Page**:
   - The `sticker.html` page displays the submitted form data, and a unique QR code is generated.
   - The user can print the sticker to label their sample.

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   cd repository-name

	2.	Open the project:
	•	You can simply open the index.html file in a browser to see the form and start using it locally.
	3.	Ensure QR Code Functionality:
	•	The project uses qrcodejs, so ensure your internet connection is enabled to load the QR code library.
	•	You can download the qrcodejs library and serve it locally if needed.

Folder Structure

.
├── images/                 # Folder containing images (e.g. logo)
│   └── Apical_Logo_Final_wTagline_Pantone.jpg
├── index.html              # Form page
├── sticker.html            # Sticker page with QR code and printable information
├── script.js               # JavaScript for form validation and redirection
├── style.css               # Styling for both form and sticker pages
└── README.md               # This file

Usage Instructions

	1.	Open index.html in your browser.
	2.	Fill out the form with the required information.
	3.	Submit the form to be redirected to the sticker.html page.
	4.	Print the sticker with the QR code for your sample.

Contributing

If you would like to contribute to this project, please feel free to fork the repository and submit a pull request with your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

---

### Instructions for Using the **README**:
1. Replace the placeholder URL in the **clone command** with your actual repository URL on GitHub.
2. Add any additional sections or instructions specific to your setup.

### Steps to Add the **README.md** to Your GitHub Repository:

1. **Create the README file**:
   - In your project folder, create a new file called `README.md`.
   - Copy the above content into the file.
   
2. **Commit the README** to your repository:
   ```bash
   git add README.md
   git commit -m "Add README file"
   git push origin main
