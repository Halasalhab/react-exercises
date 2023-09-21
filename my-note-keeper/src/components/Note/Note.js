import React, { useState } from 'react'
import './note.css'

export default function Note() {
    const [showTrashIcon, setShowTrashIcon] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

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
        setShowConfirmationDialog(false);
    };

    const handleCancelDelete = () => {
        setShowConfirmationDialog(false);
    };

    return (
        <div
            className="note-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className='note-tilte'>Title</p>
            <p className='note-content'>note</p>
            <time className='note-date-creation'>21/8/2023</time>
            {showTrashIcon && (
                <i
                    className="fa-solid fa-trash fa-lg"
                    onClick={handleTrashIconClick}
                ></i>
            )}
            {showConfirmationDialog && (
                <div className="confirmation-dialog">
                    <p>Are you sure you want to delete this note?</p>
                    <button onClick={handleConfirmDelete}>Delete</button>
                    <button onClick={handleCancelDelete}>Close</button>
                </div>
            )}
        </div>
    )
}
