import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Grid, Form, Input, Button, Header as SemanticHeader, Segment, TextArea, Dropdown, Progress } from 'semantic-ui-react';

toast.configure()

export const UserForm = () => {

    const [state, setState] = useState({
        fullName: '',
        email: '',
        professional: '',
        phoneNumber: '',
        address: ''
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const registerFormValid =
        !state.fullName?.length ||
        !state.email?.length ||
        !state.phoneNumber?.length ||
        !state.address?.length;

    const options = [
        { key: 1, text: "Member", value: 1 },
        { key: 2, text: "Guest", value: 2 },
        { key: 3, text: "Sub Admin", value: 3 },
        { key: 4, text: "Admin", value: 4 },
    ];

    const [selectedOptions, setOptions] = useState([]);
    const [savedList, saveList] = useState([]);

    const onDropChange = (e, { value }) => {
        setOptions(value);
    };

    const clearDropdown = () => {
        setOptions([]);
    };

    const saveDropdown = () => {
        saveList(selectedOptions);
    };


    const onSubmit = (data, message) => {
        console.log("Data : ", data);

        var localdata = JSON.parse(localStorage.getItem('userform'))
        localdata = localdata ? localdata : []
        localdata.push(data)
        localStorage.setItem('userform', JSON.stringify(localdata));
        reset();
        toast.success('User field Updated ... ✅ ', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            Progress: undefined,
        });
    };

    return (
        <div container>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 377, marginRight: 20, marginTop: 90 }}>
                    <SemanticHeader style={{ textAlign: 'center' }}>
                        <h2> Registered Employee Details : </h2>
                    </SemanticHeader>
                    <SemanticHeader floated='right' style={{ maxWidth: 500, marginTop: 0, marginRight: -3 }}>
                        <Link to="render-table">
                            <Button animated='fade'>
                                <Button.Content visible>Want to show user Details</Button.Content>
                                <Button.Content hidden>show table data</Button.Content>
                            </Button>
                        </Link>
                    </SemanticHeader>
                    <Segment>
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Field>
                                <Form.Input
                                    type="text"
                                    label="Full Name"
                                    placeholder="Enter Your Full Name ..."
                                    name="fullname"
                                    onChange={(e) => setState({ ...state, fullName: e.target.value })}
                                    {...register('fullName', { required: true, })}
                                />
                                {errors.fullName && <p style={{ color: 'red' }}>Enter Your Full Name.</p>}
                            </Form.Field>

                            <Form.Field>
                                <Form.Input
                                    type="email"
                                    label="Email"
                                    name="email"
                                    placeholder="Your Registered Email..."
                                    onChange={(e) => setState({ ...state, email: e.target.value })}
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    })}
                                    style={{ paddingTop: '10px' }}
                                />
                            </Form.Field>
                            {errors.email && <p style={{ color: 'red' }}>Email is required.</p>}

                            {/* <Form.Field>
                                <Form.Dropdown
                                    label="Professional"
                                    search
                                    multiple
                                    selection
                                    clearable
                                    closeOnSelectionChange={false}
                                    options={options}
                                    className="selectDropdown"
                                    onChange={onDropChange}
                                    value={selectedOptions}
                                    style={{ width: 300 }}
                                />
                                <Form.Button onClick={clearDropdown}> Clear </Form.Button>
                                <Form.Button onClick={saveDropdown}> Save </Form.Button>
                            </Form.Field> */}
                            <Form.Field>
                                <Dropdown
                                    placeholder='Skills'
                                    label="Professional"
                                    fluid
                                    multiple
                                    selection
                                    options={options}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Form.Input
                                    type="tel"
                                    label="Phone Number"
                                    placeholder="Contact number ..."
                                    name="phonenumber"
                                    onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
                                    {...register('phoneNumber', { required: true, minLength: 6, maxLength: 12 })}
                                    style={{ paddingTop: '10px' }}
                                />
                                {errors.phoneNumber && <p style={{ color: 'red' }}>Phone Number will be 10 - 12 digits</p>}
                            </Form.Field>

                            <Form.Field>
                                <Form.TextArea
                                    type="text"
                                    label="Address"
                                    placeholder="Write your address ..."
                                    name="address"
                                    onChange={(e) => setState({ ...state, address: e.target.value })}
                                    {...register('address', { required: true, })}
                                />
                                {errors.address && <p style={{ color: 'red' }}>Your Permanent Address.</p>}
                            </Form.Field>

                            <div>
                                <Button secondary>Discard</Button>

                                <Button
                                    // disabled={registerFormValid}
                                    positive
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </Form>

                        {/* <form class="ui form" onSubmit={handleSubmit(onSubmit)}>

                            <div class="field">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    label="Full Name"
                                    name="fullname"
                                    onChange={(e) => setState({ ...state, fullName: e.target.value })}
                                    {...register('fullName', { required: true, })}
                                />
                            </div>
                            {errors.fullName && <p style={{ color: 'red' }}>Enter Your Full Name.</p>}

                            <div class="field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    label="Email"
                                    name="email"
                                    onChange={(e) => setState({ ...state, email: e.target.value })}
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    })}
                                    style={{ paddingTop: '10px' }}
                                />
                            </div>
                            {errors.email && <p style={{ color: 'red' }}>Email is required.</p>}


                            <div class="field">
                                <label>Professional</label>
                                <div class="ui fluid multiple search selection dropdown">
                                    <input type="hidden" name="country" />
                                    <i class="dropdown icon"></i>
                                    <div class="default text">Your Professional</div>
                                    <div class="menu">
                                        <div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>
                                        <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>
                                        <div class="item" data-value="al"><i class="al flag"></i>Albania</div>
                                        <div class="item" data-value="dz"><i class="dz flag"></i>Algeria</div>
                                    </div>
                                </div>
                            </div>



                            <div class="field">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    label="Phone Number"
                                    name="phonenumber"
                                    onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
                                    {...register('phoneNumber', { required: true, minLength: 6, maxLength: 12 })}
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
                                    onChange={(e) => setState({ ...state, address: e.target.value })}
                                    {...register('address', { required: true, })}
                                />
                            </div>
                            {errors.fullName && <p style={{ color: 'red' }}>Enter Your Full Name.</p>}

                            <button class="ui button" type="submit">Submit</button>

                        </form> */}
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}