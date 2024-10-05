// Select DOM elements
const addNoteBtn = document.getElementById('add-note');
const noteText = document.getElementById('note-text');
const notesList = document.getElementById('notes-list');

// Add event listener to the "Add Note" button
addNoteBtn.addEventListener('click', () => {
  const noteContent = noteText.value.trim();

  if (noteContent) {
    addNoteToList(noteContent);
    noteText.value = ''; // Clear the textarea
  } else {
    alert('Please enter a note!');
  }
});

// Function to add a note to the list
function addNoteToList(content) {
  const noteItem = document.createElement('div');
  noteItem.classList.add('note-item');
  
  noteItem.innerHTML = `
    <p>${content}</p>
    <button class="delete-btn">&times;</button>
  `;
  
  notesList.appendChild(noteItem);

  // Add delete functionality to the note
  const deleteBtn = noteItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    notesList.removeChild(noteItem);
  });
}