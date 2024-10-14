function getNoteTeamplate(indexNote) {
  return `
    <div class="note">
      <h3>${notesTitles[indexNote]}</h3>
      <p>${notes[indexNote]}</p>
      <div>
        <button onclick="notetoTrash(${indexNote})" class="btn">X</button> <!-- Verschiebt die Notiz in den Papierkorb -->
        <button onclick="archivToNote(${indexNote})" class="btn">A</button> <!-- Verschiebt die Notiz ins Archiv -->
      </div>
    </div>
  `;
}

function getArchivNoteTemplate(indexArchivNote) {
  return `
    <div class="note">
      <h3>${archivNotesTitles[indexArchivNote]}</h3>
      <p>${archivNotes[indexArchivNote]}</p>
      <div>
        <button onclick="archivToTrash(${indexArchivNote})" class="btn">X</button> <!-- Verschiebt die archivierte Notiz in den Papierkorb -->
        <button onclick="archivToNote(${indexArchivNote})" class="btn">N</button> <!-- Verschiebt die archivierte Notiz zurück in die Hauptliste -->
      </div>
    </div>
  `;
}

function gettrashNoteTeamplate(indexTrashNote) {
  return `
    <div class="note">
      <h3>${trashNotesTitles[indexTrashNote]}</h3>
      <p>${trashNotes[indexTrashNote]}</p>
      <div>
        <button onclick="deleteTrashNote(${indexTrashNote})" class="btn">X</button> <!-- Löscht die Notiz endgültig aus dem Papierkorb -->
        <button onclick="trashToNote(${indexTrashNote})" class="btn">N</button> <!-- Verschiebt die Notiz aus dem Papierkorb zurück in die Hauptliste -->
      </div>
    </div>
  `;
}
