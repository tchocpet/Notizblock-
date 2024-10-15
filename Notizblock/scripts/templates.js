function getNoteTeamplate(indexNote) {
  return `
    <div class="note">
      <h3>${allNotes.notesTitles[indexNote]}</h3>
      <p>${allNotes.notes[indexNote]}</p>
      <div>
        <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" class="btn">X</button> <!-- Verschiebt die Notiz in den Papierkorb -->
        <button onclick="moveNote(${indexNote}, 'notes', 'archivNotes')" class="btn">A</button> <!-- Verschiebt die Notiz ins Archiv -->
      </div>
    </div>
  `;
}

function getArchivNoteTemplate(indexArchivNote) {
  return `
    <div class="note">
      <h3>${allNotes.archivNotesTitles[indexArchivNote]}</h3>
      <p>${allNotes.archivNotes[indexArchivNote]}</p>
      <div>
        <button onclick="moveNote(${indexArchivNote}, 'ArchivNotes', 'trashNotes')" class="btn">X</button> <!-- Verschiebt die archivierte Notiz in den Papierkorb -->
        <button onclick="moveNote(${indexArchivNote}, 'ArchivNotes', 'notes')" class="btn">N</button> <!-- Verschiebt die archivierte Notiz zurück in die Hauptliste -->
      </div>
    </div>
  `;
}

function gettrashNoteTeamplate(indexTrashNote) {
  return `
    <div class="note">
      <h3>${allNotes.trashNotesTitles[indexTrashNote]}</h3>
      <p>${allNotes.trashNotes[indexTrashNote]}</p>
      <div>
        <button onclick="deleteTrashNote(${indexTrashNote})" class="btn">X</button> <!-- Löscht die Notiz endgültig aus dem Papierkorb -->
        <button onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')" class="btn">N</button> <!-- Verschiebt die Notiz aus dem Papierkorb zurück in die Hauptliste -->
      </div>
    </div>
  `;
}
