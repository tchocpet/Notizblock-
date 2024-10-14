let notesTitles = [`Ba`, `Aufgabe`, `lernen`];
let notes = [`Banana`, `Chimie`, `Mathe`];

let trashNotesTitles = [];
let trashNotes = [];

let archivNotesTitles = [];
let archivNotes = [];

function renderNotes() {
  let contentRef = document.getElementById(`content`);
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTeamplate(indexNote);
  }
}

function renderArchivNotes() {
  let archivContentRef = document.getElementById(`archiv_content`);
  archivContentRef.innerHTML = "";
  for (
    let indexArchivNote = 0;
    indexArchivNote < archivNotes.length;
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
    indexTrashNote < trashNotes.length;
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

  renderNotes();

  noteInputRef.value = ""; // Eingabefeld leeren
  noteInputTitleRef.value = ""; // Titelfeld leeren
}

function notetoTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);

  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  renderNotes();
  renderTrashNotes();
}

function trashToNote(indexTrashNote) {
  // Entferne die Notiz aus dem Papierkorb und füge sie wieder in die Hauptliste ein
  let note = trashNotes.splice(indexTrashNote, 1); // Hole die Notiz aus dem Papierkorb
  notes.push(note[0]); // Füge die Notiz wieder zu den Hauptnotizen hinzu

  let noteTitle = trashNotesTitles.splice(indexTrashNote, 1); // Hole den Titel aus dem Papierkorb
  notesTitles.push(noteTitle[0]); // Füge den Titel wieder zu den Haupttiteln hinzu

  renderNotes();
  renderTrashNotes();
}

function deleteTrashNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1); // Notiz endgültig aus dem Papierkorb löschen
  trashNotesTitles.splice(indexTrashNote, 1); // Titel endgültig aus dem Papierkorb löschen
  renderTrashNotes();
}

// Dialo section Später Hinzufügen
