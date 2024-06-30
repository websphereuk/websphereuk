import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button } from '../button';
import style from './multiStepForm.module.css';
import FormFields from '../form-feilds';
import { ContactEntity } from '@/models/contact-form.entity';
import GeneralHeading from '../general-heading';
import Checkbox from '../checkbox/Checkbox';
import { ServiceData } from '@/utiles/options/ServiceData';
import TextArea from '../textArea/TextArea';
import { toast } from 'react-toastify';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const form = useFormik({
        initialValues: new ContactEntity(),
        validationSchema: ContactEntity.yupSchema(),
        onSubmit: async (values, { resetForm }) => {
            const selectedServices = ServiceData.filter(service => form.values[service.Link]);
            const formData = {
                ...form.values,
                services: selectedServices.map(service => service.Link) // Collect the service names
            };

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    toast.success("Thank You For Submitting");
                    resetForm({
                        values: {
                            fullName: '',
                            company: '',
                            email: '',
                            phone: '',
                            budget: '',
                            technology: '',
                            message: '',
                        }
                    });

                })
                .catch((error) => {
                    console.error('Error:', error);
                    toast.error("Something Went Wrong");

                });
        },
    });


    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };


    return (
        <div className="section last-sec agency">
            <div className="container text-center contact-multiStepForm w-100">
                <GeneralHeading className='mb-4' content='Let’s <span class="HeadingElement"> Collaborate </span> . We’re All Ears!' />
                <p>Open the door to collaboration by sharing your personal details, project goals, and desired timelines. Let our connection be the bridge that turns your vision into reality as we journey together toward a common goal.</p>

                <div className="pt-5">
                    <form onSubmit={form?.handleSubmit} className="w-100 p-5" style={{ background: "#181414", borderRadius: "10px" }}>
                        {step === 1 && (
                            <>
                                <div className="row">
                                    <div className="col-md-6">
                                        <FormFields
                                            required
                                            name="fullName"
                                            type="text"
                                            onChange={form.handleChange}
                                            placeholder="Full Name"
                                            value={form.values.fullName}
                                            labelText="Full Name"
                                            labelClassName="mb-2 d-block"
                                            className="w-100 mb-5"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormFields
                                            required
                                            name="company"
                                            type="text"
                                            onChange={form.handleChange}
                                            placeholder="Company/Organization"
                                            labelClassName="mb-2 d-block"
                                            value={form.values.company}
                                            labelText="Company/Organization"
                                            className="w-100 mb-5"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <FormFields
                                            required
                                            name="email"
                                            type="email"
                                            onChange={form.handleChange}
                                            placeholder="Your Email"
                                            value={form.values.email}
                                            labelText="Your Email"
                                            labelClassName="mb-2 d-block"
                                            className="w-100 mb-5"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormFields
                                            required
                                            name="phone"
                                            type="text"
                                            onChange={form.handleChange}
                                            placeholder="Contact Number"
                                            labelClassName="mb-2 d-block"
                                            value={form.values.phone}
                                            labelText="Contact Number"
                                            className="w-100 mb-5"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-end">
                                        <Button onClick={handleNext} disabled={!form?.values?.fullName || !form?.values?.email || !form?.values?.phone || !form?.values?.company} className="bg-white text-black px-5 mt-5">
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <div className='text-white text-start'>
                                    <h5 className='mb-3 mx-2'>
                                        Are there any services you want to specify?
                                    </h5>
                                </div>
                                <div className="row">

                                    <div className="d-flex" style={{ flexWrap: "wrap" }}>
                                        {ServiceData.map((service) => (
                                            <Checkbox
                                                key={service.ServiceNumber}
                                                className="mb-2"
                                                name={service.Link}
                                                checked={form.values[service.Link] || false}
                                                labelText={service.banner.ServiceTitle}
                                                onChange={form.handleChange}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 d-flex justify-content-md-start  justify-content-center">
                                        <Button onClick={handleBack} className="bg-white text-black px-5 mt-5">
                                            Back
                                        </Button>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-md-end  justify-content-center">
                                        <Button onClick={handleNext} className="bg-white text-black px-5 mt-5">
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <div className="row">
                                    <div className="col-md-6">
                                        <FormFields
                                            required
                                            name="budget"
                                            type="text"
                                            onChange={form.handleChange}
                                            placeholder="Your Budget"
                                            value={form.values.budget}
                                            labelText="Your Budget"
                                            labelClassName="mb-2 d-block"
                                            className="w-100 mb-5"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormFields
                                            required
                                            name="technology"
                                            type="text"
                                            onChange={form.handleChange}
                                            placeholder="Project Technology"
                                            value={form.values.technology}
                                            labelText="Project Technology"
                                            labelClassName="mb-2 d-block"
                                            className="w-100 mb-5"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <TextArea
                                            className='w-100 text-black'
                                            name='message'
                                            value={form?.values?.message}
                                            onChange={form?.handleChange}
                                            placeholder='Anything else you want to tell us'
                                            labelText='Anything else you want to tell us'
                                        />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 d-flex justify-content-md-start justify-content-center">
                                        <Button onClick={handleBack} className="bg-white text-black px-5 mt-5">
                                            Back
                                        </Button>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-md-end  justify-content-center">
                                        <Button type='submit' className="bg-white text-black px-5 mt-5">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div >
    );
};

export default MultiStepForm;
