import React, { useState } from 'react'
import './note.css'

export default function Note({ title, content, date }) {
    const [showTrashIcon, setShowTrashIcon] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const originalDate = new Date(date);

    // Extract the date components (year, month, day)
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    const day = String(originalDate.getDate()).padStart(2, '0');

    // Create the formatted date string
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
            <p className='note-tilte'>{title}</p>
            <p className='note-content'>{content}</p>
            <time className='note-date-creation'>{formattedDateString}</time>
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
