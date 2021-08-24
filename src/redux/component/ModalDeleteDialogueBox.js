import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const ModalDeleteDialogueBox = (props) => {

    const [tempId, setTempId] = useState();

    const handleID = useSelector(state => state.deleteData.handleId)

    const handleDeleteUser = (e) => {
        e.preventDefault();
        const deleteSelectedUser = JSON.parse(localStorage.getItem('userform'))
        if (deleteSelectedUser.length === 1) {
            localStorage.removeItem('userform');
            setTempId('');
            props.setModalIsDelete(false);
        } else {
            deleteSelectedUser.splice(handleID, 1)
            localStorage.setItem('userform', JSON.stringify(deleteSelectedUser))
            setTempId('');
            props.setModalIsDelete(false);
        }
        props.setModalIsDelete(false)
        toast.error('User Deleted ... 😲', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            Progress: undefined,
        });
    }

    return (
        <>
            <Modal
                id="id02"
                isOpen={props.modalIsDelete}
                onRequestClose={() => props.setModalIsDelete(false)}
                // disableBackdropClick
                style={{
                    overlay: {
                        position: 'fixed',
                        backgroundColor: 'rgba(0,0,0, 0.7)'
                    },
                    content: {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '393px',
                        height: '169px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        // overflow: 'scroll',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
            >
                <div container>
                    <div>
                        <h1>Are you sure you wants to delete</h1>
                    </div>
                    <div>
                        <div class="ui buttons">
                            <button
                                class="ui button"
                                onClick={() => props.setModalIsDelete(false)}
                            >
                                Cancel
                            </button>
                            <div class="or"></div>
                            <button
                                class="ui positive button"
                                onClick={(e, index) => handleDeleteUser(e, index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}