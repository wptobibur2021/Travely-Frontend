import { useForm } from "react-hook-form";
import {Form, FormControl, InputGroup, Button} from "react-bootstrap";
import {FaUser} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import React from "react";
import axios from "axios";
import {useHistory} from "react-router"
import useNotify from "../../Hooks/useNotify";
const TourBooking = ({tour}) => {
    const {user} = useAuth()
    const history = useHistory()
    const {successNotify} = useNotify()
    console.log('Tour ID: ', tour)
    console.log('User Info: ', user)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        data.tourid = tour
        data.userEmail = user.email
        data.userId = user.uid
        const url = "https://lit-waters-50005.herokuapp.com/tour-booking"
        axios.post(url, data).then(res =>{
            const result = res.data
            if(result.insertedId){
                history.push('/')
                successNotify()
                reset()
            }
        })
    };
    return (
        <div className="tourBooking">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name <span className="requiredColor">*</span></Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FaUser/></InputGroup.Text>
                        <input type="text" required placeholder="Where to" {...register("where", {required: true, minLengthr: 5 })} className="form-control" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name <span className="requiredColor">*</span></Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FaUser/></InputGroup.Text>
                        <input type="text" required placeholder="When" {...register("when", {required: true, minLengthr: 5 })} className="form-control" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name <span className="requiredColor">*</span></Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FaUser/></InputGroup.Text>
                        <Form.Select {...register("type")} aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Wildlife">Wildlife</option>
                            <option value="Sightseeing">Sightseeing</option>
                        </Form.Select>
                    </InputGroup>
                </Form.Group>
                <Button type="submit">Booking Now</Button>
            </form>
        </div>
    );
};

export default TourBooking;