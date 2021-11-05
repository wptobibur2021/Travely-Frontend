import './Courses.css'
import axios from "axios";
import { useForm } from "react-hook-form";
import {Row, Col, Form,InputGroup, FormControl, Button  } from 'react-bootstrap'
import PageLayout from '../../Dashboard/PageLayput/PageLayout';
import { RiEditBoxLine, RiExchangeDollarLine, RiUser3Line} from "react-icons/ri";
import useNotify from "../../../Hooks/useNotify";
export default function Add() {
    const {successNotify} = useNotify()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = "http://localhost:8000/add-tour"
        axios.post(url, data).then(res=>{
            const result = res.data
            if(result.insertedId){
                reset()
                successNotify()
            }
        })
    };


    return (
        <PageLayout>
            <Col md={6} sm={6}>
            <div className="addDonationSections">
                <h1 className="sectionTitle">Add Donation List</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Label>Tour Name <span className="formRequired">*</span></Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text><RiEditBoxLine/></InputGroup.Text>
                                <FormControl required {...register("name")} type="text" placeholder="Course Name" />
                            </InputGroup>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Label>Rating <span className="formRequired">*</span></Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text><RiEditBoxLine/></InputGroup.Text>
                                <select {...register("rating")} className='form-control'>
                                    <option value="1">Rating 1</option>
                                    <option value="2">Rating 2</option>
                                    <option value="3">Rating 3</option>
                                    <option value="4">Rating 4</option>
                                    <option value="5">Rating 5</option>
                                </select>
                            </InputGroup>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Label>Photo URL <span className="formRequired">*</span></Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text><RiUser3Line/></InputGroup.Text>
                                <FormControl required {...register("photo")} type="text" placeholder="Photo URL" />
                            </InputGroup>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Label>Price <span className="formRequired">*</span></Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text><RiExchangeDollarLine/></InputGroup.Text>
                                <FormControl required {...register("firstName")} type="number" placeholder="Price"/>
                            </InputGroup>
                        </Col>
                        <Col md={12} className="mb-2">
                            <Form.Label>Description <span className="formRequired">*</span></Form.Label>
                            <InputGroup className="mb-2">
                                <textarea {...register("desc")} className="form-control" defaultValue='Type something Here' />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">Add Course</Button>
                </Form>
            </div>
            </Col>
            <Col md={3} sm={3}>
                <h1>Update User</h1>
            </Col>          
        </PageLayout>
    )
}
