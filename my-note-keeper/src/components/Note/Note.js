import React, { useState } from 'react'
import './note.css'
import axios from "axios";

export default function Note({ id, title, content, date, setNotes, setError, notes }) {
    const [showTrashIcon, setShowTrashIcon] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [note, setNote] = useState({
        id: id,
        title: title,
        content: content,
    });
    const originalDate = new Date(date);
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, '0');
    const day = String(originalDate.getDate()).padStart(2, '0');
    const formattedDateString = `${year}-${month}-${day}`;

    const handleMouseEnter = () => {
        setShowTrashIcon(true);
    };

    const handleMouseLeave = () => {
        setShowTrashIcon(false);
    };

    const handleTrashIconClick = () => {
        setShowConfirmationDialog(true);
    };

    const handleConfirmDelete = () => {
        deleteNote(id);
        setShowConfirmationDialog(false);
    };

    const handleCancelDelete = () => {
        setShowConfirmationDialog(false);
    };
    const handleCancelEdit = (e) => {
        setShowEditDialog(false);
    };

    const handleConfirmEdit = () => {
        updateNote(note)
        setShowEditDialog(false);
    }

    const deleteNote = async (noteId) => {
        try {
            await axios.delete(`http://localhost:3001/notes/${noteId}`);
            setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
        } catch (error) {
            setError(error)
        }
    };

    const updateNote = async (note) => {
        try {
            await axios.put(`http://localhost:3001/notes/${note.id}`, { title: note.title, content: note.content }).then((response) => {
                const updatedNote = response.data;
                const noteIndex = notes.findIndex((note) => note.noteID === note.id);
                if (noteIndex !== -1) {
                    const updatedNotes = [...notes];
                    updatedNotes[noteIndex] = updatedNote;
                    setNotes(updatedNotes);
                }
            })
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div
            className="note-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className='note-tilte' onClick={() => {
                setShowEditDialog(true);
            }}>{title}</p>
            <p className='note-content' onClick={() => {
                setShowEditDialog(true);
            }}>{content}</p>
            <time className='note-date-creation'>{formattedDateString}</time>
            {showTrashIcon && (
                <i
                    className="fa-solid fa-trash fa-lg"
                    onClick={handleTrashIconClick}
                ></i>
            )}
            {showConfirmationDialog && (
                <div className='dialog-wrapper'>
                    <div className="dialog confirmation-dialog">
                        <p>Are you sure you want to delete this note?</p>
                        <div>
                            <button onClick={handleConfirmDelete}>Delete</button>
                            <button className='cancel-btn' onClick={handleCancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            {showEditDialog && (
                <div className='dialog-wrapper'>
                    <div className="dialog">
                        <input
                            type="text"
                            value={note.title}
                            className="title"
                            onChange={(e) => setNote({ ...note, title: e.target.value })}
                        />
                        <textarea
                            className="textarea"
                            value={note.content}
                            onChange={(e) => setNote({ ...note, content: e.target.value })}
                        />
                        <div>
                            <button onClick={handleConfirmEdit}>Done</button>
                            <button className='cancel-btn' onClick={handleCancelEdit}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
