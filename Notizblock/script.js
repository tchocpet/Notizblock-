let allNotes = {
  notesTitles: [`Ba`, `Aufgabe`, `lernen`],
  notes: [`Banana`, `Chimie`, `Mathe`],
  archivNotesTitles: [],
  archivNotes: [],
  trashNotesTitles: [],
  trashNotes: [],
};

function moveNote(indexNote, startKey, destinationKey) {
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);
  let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
  allNotes[destinationKey + "Titles"].push(notesTitle[0]);

  renderAllNotes();
}

function renderAllNotes() {
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function renderNotes() {
  let contentRef = document.getElementById(`content`);
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTeamplate(indexNote);
  }
}

function renderArchivNotes() {
  let archivContentRef = document.getElementById(`archiv_content`);
  archivContentRef.innerHTML = "";
  for (
    let indexArchivNote = 0;
    indexArchivNote < allNotes.archivNotes.length;
    indexArchivNote++
  ) {
    archivContentRef.innerHTML += getArchivNoteTeamplate(indexArchivNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById(`trash_content`);
  trashContentRef.innerHTML = "";
  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += gettrashNoteTeamplate(indexTrashNote);
  }
}

function addNote() {
  let noteInputRef = document.getElementById(`note_input`);
  let noteInputTitleRef = document.getElementById(`note_input_title`);

  let noteInput = noteInputRef.value;
  let noteTitle = noteInputTitleRef.value; // Richtig setzen, nicht doppelt definieren

  if (noteInput == "" || noteTitle == "") {
    return;
  }

  notes.push(noteInput);
  notesTitles.push(noteTitle); // Nutze den Titel aus dem Eingabefeld, nicht "Neuer Titel"

  renderAllNotes();

  noteInputRef.value = ""; // Eingabefeld leeren
  noteInputTitleRef.value = ""; // Titelfeld leeren
}

function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1); // Titel endgültig aus dem Papierkorb löschen

  renderAllNotes();
}

// Dialog section Später Hinzufügen
