console.log('in js');

// event listeners
const deleteButton = document.getElementById('deleteBtn');
const deleteDialog = document.getElementById('deleteDialog');
//const cancelButton = document.getElementById('cancelBtnModal');

// deleteButton.addEventListener('click', () => {
//     if (typeof deleteDialog.showModal === "function") {
//         deleteDialog.showModal();
//       } else {
//         outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
//       }
// });
// used code from MDN <dialog> documentation
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#advanced_example


// set button to close the dialog
deleteDialog.addEventListener('close', () => {
    outputBox.value = `button clicked `;
});