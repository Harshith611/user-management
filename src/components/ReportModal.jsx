import React from 'react'

function ReportModal({ showModal, closeModal, user }) {
  return (
        showModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h2>User Details</h2>
                <hr />
                <p>Username: {user.Username}</p>
                <p>Email: {user.Email}</p>
                <p>Phone: {user.Phone}</p>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
      )
    )
}

export default ReportModal