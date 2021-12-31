import React from 'react'



export default function Modal({closeModal}) {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
            <div className="titleCloseBtn">
            <button
            onClick={() => {
                closeModal(false);
            }}
          >
            X
          </button>
        </div>
                <div className="title"> 
                <h1>Title is here</h1>
                </div>
                <div className="body">
                    <p>Paragraph goes here</p>
                </div>
                <div className="footer">
                    <button onClick={()=> closeModal(false)}>close</button>
                </div>

            </div>
        </div>
    );
}
