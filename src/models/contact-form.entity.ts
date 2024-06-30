import { ServiceData } from '@/utiles/options/ServiceData';
import * as yup from 'yup';

export class ContactEntity {
    fullName?: string;
    company?: string;
    email?: string;
    phone?: string;
    [key: string]: any;
    budget?: string;
    technology?: string;
    message?: string;
    // Dynamically add properties for each service
    constructor() {
        ServiceData.forEach(service => {
            this[service?.Link] = false;
        });
    }

    static yupSchema() {
        const schemaShape: any = {
            fullName: yup.string().required("Full Name is required"),
            company: yup.string().required("Company/Organization is required"),
            email: yup.string().email("Invalid email format").required("Email is required"),
            phone: yup.string().required("Contact Number is required"),
        };

        ServiceData.forEach(service => {
            schemaShape[service.Link] = yup.boolean();
        });

        return yup.object().shape(schemaShape);
    }
}
