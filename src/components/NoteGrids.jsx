import { useState } from "react";
import notes from "../data/notes";

export default function NotesGrid() {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div key={note.id} className="note-card" onClick={() => setSelectedNote(note)}>
          <div className="note-meta">
            {note.year} • {note.language} • {note.code} • {note.ects} ECTS
          </div>
          <h2 className="note-title">{note.title}</h2>
          <h3 className="note-heading">Lecture notes</h3>
          <p className="note-description">{note.description}</p>
        </div>
      ))}

      {selectedNote && (
        <div className="modal-overlay" onClick={() => setSelectedNote(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedNote.title}</h2>
            <p>Choose a file to download:</p>
            <div className="modal-buttons">
              <a href={selectedNote.noteHref} download className="modal-btn">📄 Note</a>
              <a href={selectedNote.exerciseHref} download className="modal-btn">📝 Exercise</a>
              <a href={selectedNote.testHref} download className="modal-btn">📚 Test</a>
            </div>
            <button className="close-btn" onClick={() => setSelectedNote(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
