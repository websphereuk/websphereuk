import * as yup from "yup";


export class ApplyEntity {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    perviousExperience?: string;
    year?: string;
    education?: string;
    coverLetter?: string;


    static yupSchema() {
        return yup.object().shape({
            firstName: yup.string().required("First name is required"),
            lastName: yup.string().required("Last name is required"),
            email: yup.string().email("Invalid email format").required("Email is required"),
            phone: yup.string().required("Phone number is required"),
            perviousExperience: yup.string().required(" Pervious Experience is required"),
            year: yup.string().required("Pervious Year is required"),
            education: yup.string().required(" Education is required"),
            coverLetter: yup.string().required(" Cover Letter is required"),

        });
    }
}







