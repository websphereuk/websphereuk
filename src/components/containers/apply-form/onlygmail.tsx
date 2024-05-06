// import { useFormik } from "formik";
// import { FileIcon } from "../../../../public/icons/svg";
// import { Button } from "../button";
// import FormFields from "../form-feilds"
// import TextArea from "../textArea/TextArea";
// import styles from "./apply-form.module.css"
// import { ApplyEntity } from "@/models/apply.entity";
// import axios from "axios";
// import { toast } from "react-toastify";
// const ApplyForm = ({ data }: any) => {
//     const form = useFormik({
//         initialValues: new ApplyEntity(),
//         validationSchema: ApplyEntity.yupSchema(),
//         enableReinitialize: true,

//         onSubmit: async (values, { resetForm }) => {
//             try {
//                 const submitValues = {
//                     ...values,
//                     country: data?.country,
//                     positionTitle: data?.position
//                 };

//                 const res = await axios.post('/api/apply', submitValues);
//                 toast.success('Thank You For Submitting');
//                 resetForm({
//                     values: {
//                         firstName: '',
//                         lastName: '',
//                         email: '',
//                         phone: '',
//                         perviousExperience: '',
//                         year: '',
//                         education: '',
//                         coverLetter: ''
//                     }
//                 });
//                 console.log(form?.values, 'values/////////////////////////')
//                 console.log(res);
//             } catch (error) {
//                 console.log(error);
//                 toast.error('Error ');

//             }
//         }

//     })


//     return (
//         <>
//             <form className="container" onSubmit={form?.handleSubmit} >
//                 <div className={`px-md-5 text-black text-center section__content ${styles?.box}`}>
//                     <h6 className="text-black mb-5  sub-title"> Apply For This Position</h6>
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <FormFields name={"firstName"}
//                                 type={"text"}
//                                 onChange={form?.handleChange}
//                                 placeholder={"First Name*"}
//                                 value={form?.values?.firstName}
//                                 className="w-100 mb-5" />

//                         </div>
//                         <div className="col-lg-6">
//                             <FormFields name={"lastName"}
//                                 type={"text"}
//                                 onChange={form?.handleChange}
//                                 placeholder={"Last Name*"}
//                                 value={form?.values?.lastName}

//                                 className="w-100 mb-5" />

//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <FormFields name={"email"}
//                                 type={"email"}
//                                 onChange={form?.handleChange}
//                                 placeholder={"Email*"}
//                                 value={form?.values?.email}

//                                 className="w-100 mb-5" />

//                         </div>
//                         <div className="col-lg-6">
//                             <FormFields name={"phone"}
//                                 type={"number"}
//                                 onChange={form?.handleChange}
//                                 value={form?.values?.phone}

//                                 placeholder={"Phone*"}
//                                 className="w-100 mb-5" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <FormFields name={"perviousExperience"}
//                                 type={"text"}
//                                 value={form?.values?.perviousExperience}
//                                 onChange={form?.handleChange}
//                                 placeholder={"Previous Experience"}
//                                 className="w-100 mb-5" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <FormFields name={"year"}
//                                 type={"text"}
//                                 onChange={form?.handleChange}
//                                 placeholder={"Experience Year"}
//                                 value={form?.values?.year}
//                                 className="w-100 mb-5" />
//                         </div>
//                         <div className="col-lg-6">
//                             <FormFields name={"education"}
//                                 type={"Education"}
//                                 onChange={form?.handleChange}
//                                 value={form?.values?.education}
//                                 placeholder={" Education"}
//                                 className="w-100 mb-5" />
//                         </div>
//                     </div>


//                     <TextArea className="w-100 text-black" placeholder=" Cover Letter" onChange={form?.handleChange}
//                         value={form?.values?.coverLetter} name="coverLetter" />

//                     <Button type={"submit"} disabled={form?.isSubmitting} className="w-100 mt-5"  >
//                         Apply Now
//                     </Button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default ApplyForm