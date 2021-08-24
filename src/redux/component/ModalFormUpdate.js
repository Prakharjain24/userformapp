import React, { useState, useEffect, Fragment } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Grid, Form, Header as SemanticHeader, Segment, Button } from 'semantic-ui-react';

export const ModalFormUpdate = (props) => {

    const [modalState, setModalState] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        indexId: ''
    })

    const data = useSelector(state => state.updatedData.userDetails)
    const handleID = useSelector(state => state.updatedData.handleId)

    useEffect(() => {
        if (data !== undefined) {
            setModalState({
                fullName: data.fullName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                address: data.address,
            })
        }
    }, [data])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onhandleUpdateUser = (data, message) => {
        const updatedata = JSON.parse(localStorage.getItem("userform"))
        updatedata[handleID] = data;
        localStorage.setItem('userform', JSON.stringify(updatedata))
        props.setModalIsOpen(false)
        reset();
        toast.success('Row Updated ... 👍', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            Progress: undefined,
        });
    };

    return (
        <>
            <Modal
                id="id01"
                isOpen={props.modalIsOpen}
                onRequestClose={() => props.setModalIsOpen(false)}
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
                        width: '312px',
                        height: '419px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'scroll',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
            >
                {/* <Grid centered>
                    <Grid.Column style={{ maxWidth: 500, marginRight: 20 }}>
                        <SemanticHeader>
                            Registered Employee Details :
                        </SemanticHeader>
                        <Segment>
                            <Form onSubmit={handleSubmit(onhandleUpdateUser)}>
                                <Form.Field>
                                    <Form.Input
                                        type="text"
                                        label="Full Name"
                                        name="fullname"
                                        onChange={(e) => setModalState({ ...modalState, fullName: e.target.value })}
                                        {...register('fullName', { required: true, value: modalState.fullName })}
                                    />
                                    {errors.fullName && <p style={{ color: 'red' }}>Enter Your Full Name.</p>}
                                </Form.Field>

                                <Form.Field>
                                    <Form.Input
                                        type="email"
                                        label="Email"
                                        name="email"
                                        onChange={(e) => setModalState({ ...modalState, email: e.target.value })}
                                        {...register('email', {
                                            required: true, value: modalState.email,
                                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                        })}
                                        style={{ paddingTop: '10px' }}
                                    />
                                    {errors.email && <p style={{ color: 'red' }}>Email is required.</p>}
                                </Form.Field>

                                <Form.Field>
                                    <Form.Input
                                        type="tel"
                                        label="Phone Number"
                                        name="phonenumber"
                                        onChange={(e) => setModalState({ ...modalState, phoneNumber: e.target.value })}
                                        {...register('phoneNumber', { required: true, value: modalState.phoneNumber, minLength: 6, maxLength: 12 })}
                                        style={{ paddingTop: '10px' }}
                                    />
                                    {errors.phoneNumber && <p style={{ color: 'red' }}>Phone Number will be 10 - 12 digits</p>}
                                </Form.Field>

                                <Form.Field>
                                    <Form.TextArea
                                        type="text"
                                        label="Address"
                                        name="address"
                                        onChange={(e) => setModalState({ ...modalState, address: e.target.value })}
                                        {...register('address', { required: true, value: modalState.address })}
                                    />
                                </Form.Field>

                                <div>
                                    <Button.Group>
                                        <Button onClick={() => props.setModalIsOpen(false)}>Cancel</Button>
                                        <Button.Or />
                                        <Button positive>Save</Button>
                                    </Button.Group>
                                </div>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid> */}

                <form class="ui form" onSubmit={handleSubmit(onhandleUpdateUser)}>
                    <div class="field">
                        <label>Full Name</label>
                        <input
                            type="text"
                            label="Full Name"
                            name="fullname"
                            // onChange={(e) => setModalState({ ...modalState, fullName: e.target.value })}
                            {...register('fullName', { required: true, value: modalState.fullName })}
                        />
                    </div>
                    {errors.fullName && <p style={{ color: 'red' }}>Enter Your Full Name.</p>}

                    <div class="field">
                        <label>Email</label>
                        <input
                            type="email"
                            label="Email"
                            name="email"
                            // onChange={(e) => setModalState({ ...modalState, email: e.target.value })}
                            {...register('email', {
                                required: true, value: modalState.email,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                            style={{ paddingTop: '10px' }}
                        />
                    </div>
                    {errors.email && <p style={{ color: 'red' }}>Email is required.</p>}

                    <div class="field">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            label="Phone Number"
                            name="phonenumber"
                            // onChange={(e) => setModalState({ ...modalState, phoneNumber: e.target.value })}
                            {...register('phoneNumber', { required: true, value: modalState.phoneNumber, minLength: 6, maxLength: 12 })}
                            style={{ paddingTop: '10px' }}
                        />
                    </div>
                    {errors.phoneNumber && <p style={{ color: 'red' }}>Phone Number will be 10 - 12 digits</p>}


                    <div class="field">
                        <label>Address</label>
                        <input
                            type="text"
                            label="Address"
                            name="address"
                            // onChange={(e) => setModalState({ ...modalState, address: e.target.value })}
                            {...register('address', { required: true, value: modalState.address })}
                        />
                    </div>
                    {errors.fullName && <p style={{ color: 'red' }}>Enter Your Full Name.</p>}

                    {/* <button class="ui button" type="submit">Submit</button> */}

                    <div class="ui buttons">
                        <button
                            class="ui button"
                            onClick={() => props.setModalIsOpen(false)}
                        >
                            Cancel
                        </button>
                        <div class="or"></div>
                        <button
                            class="ui positive button"
                            type="submit"
                        >
                            Save
                        </button>
                    </div>

                </form>
            </Modal>

        </>
    )
}