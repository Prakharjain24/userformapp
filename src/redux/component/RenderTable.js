import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalFormUpdate } from './ModalFormUpdate';
import { ModalDeleteDialogueBox } from './ModalDeleteDialogueBox';
import { useDispatch } from 'react-redux';
import { modalUpdateRequest, modalDeleteRequest } from '../Action';
import { Button, Checkbox, Grid, Header as SemanticHeader, Icon, Table } from 'semantic-ui-react'

export const RenderTable = () => {

    const dispatch = useDispatch();

    const [joinus, setJoinus] = useState(false);
    const [modalIsDeleteOpen, setModalIsDeleteOpen] = useState(false);

    const joinusContent = (e, index) => {
        e.preventDefault();
        dispatch(modalUpdateRequest(index));
        setJoinus(true);
    }

    const modelIsDeleteContent = (e, index) => {
        e.preventDefault();
        dispatch(modalDeleteRequest(index));
        setModalIsDeleteOpen(true)
    }

    var localdata = JSON.parse(localStorage.getItem('userform'));

    return (
        <>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 1177, marginRight: 20, marginTop: 80 }}>
                    <SemanticHeader style={{ textAlign: 'center' }}>
                        <h1> User Table Records : </h1>
                    </SemanticHeader>
                    <Table compact celled definition>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell>Full_Name</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Phone_Number</Table.HeaderCell>
                                <Table.HeaderCell>Address</Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                                {/* <Table.HeaderCell></Table.HeaderCell> */}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {localdata && localdata.map((value, index) =>
                                <Table.Row>
                                    <Table.Cell collapsing>
                                        <Checkbox slider />
                                    </Table.Cell>
                                    <Table.Cell>{value.fullName}</Table.Cell>
                                    <Table.Cell>{value.email}</Table.Cell>
                                    <Table.Cell>{value.phoneNumber}</Table.Cell>
                                    <Table.Cell>{value.address}</Table.Cell>
                                    <Table.Cell>
                                        <Button
                                            positive
                                            attached='left'
                                            onClick={(e) => joinusContent(e, index)}
                                        >
                                            Update
                                        </Button>
                                        {joinus && <ModalFormUpdate
                                            modalIsOpen={joinus}
                                            setModalIsOpen={setJoinus}
                                        />}

                                        <Button
                                            negative
                                            attached='right'
                                            onClick={(e) => modelIsDeleteContent(e, index)}
                                        >
                                            Delete
                                        </Button>
                                        {modalIsDeleteOpen && <ModalDeleteDialogueBox
                                            modalIsDelete={modalIsDeleteOpen}
                                            setModalIsDelete={setModalIsDeleteOpen}
                                        />}



                                        {/* <div class="ui inverted segment">
                                    <Button
                                        class="ui inverted green button"
                                        onClick={(e) => joinusContent(e, index)}
                                    >
                                        update
                                    </Button>
                                    {joinus && <ModalFormUpdate
                                        modalIsOpen={joinus}
                                        setModalIsOpen={setJoinus}
                                    />}
                                </div> */}
                                    </Table.Cell>
                                    {/* <Table.Cell>
                                <div class="ui inverted segment">
                                    <Button
                                        class="ui inverted red button"
                                        onClick={(e) => modelIsDeleteContent(e, index)}
                                    >
                                        delete
                                    </Button>
                                    {modalIsDeleteOpen && <ModalDeleteDialogueBox
                                        modalIsDelete={modalIsDeleteOpen}
                                        setModalIsDelete={setModalIsDeleteOpen}
                                    />}
                                </div>
                            </Table.Cell> */}
                                </Table.Row>
                            )}

                        </Table.Body>

                        <Table.Footer fullWidth>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan='4'>
                                    <Link to="/user-form">
                                        <Button
                                            floated='right'
                                            icon
                                            labelPosition='left'
                                            primary
                                            size='small'
                                        >
                                            <Icon name='user' /> Add User
                                        </Button>
                                    </Link>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Grid.Column>
            </Grid>




            {/* <div container>
                <Link to="/user-form">
                    <button class="ui primary button">
                        <i class="icon user"></i>
                        Add Employee
                    </button>
                </Link>
                <table class="ui celled table">
                    <thead>
                        <tr><th>Full_Name</th>
                            <th>Email</th>
                            <th>Phone_Number</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr></thead>
                    <tbody>
                        {localdata && localdata.map((value, index) =>

                            <tr>
                                <td data-label="Full_Name">{value.fullName}</td>
                                <td data-label="Email">{value.email}</td>
                                <td data-label="Phone_Number">{value.phoneNumber}</td>
                                <td data-label="Address">{value.address}</td>
                                <td data-label="Action">
                                    <div class="ui inverted segment">
                                        <button
                                            class="ui inverted green button"
                                            onClick={(e) => joinusContent(e, index)}
                                        // onChange={(e) => handleUpdate(e, index)}
                                        >
                                            update
                                        </button>
                                        {joinus && <ModalFormUpdate
                                            modalIsOpen={joinus}
                                            setModalIsOpen={setJoinus}
                                        />}
                                    </div>
                                </td>
                                <td data-label="Action">
                                    <div class="ui inverted segment">
                                        <button
                                            class="ui inverted red button"
                                            onClick={(e) => modelIsDeleteContent(e, index)}
                                        // onChange={(e) => onhandleDeleteUser(e, index)}
                                        >
                                            delete
                                        </button>
                                        {modalIsDeleteOpen && <ModalDeleteDialogueBox
                                            modalIsDelete={modalIsDeleteOpen}
                                            setModalIsDelete={setModalIsDeleteOpen}
                                        />}
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> */}

        </>
    );
}