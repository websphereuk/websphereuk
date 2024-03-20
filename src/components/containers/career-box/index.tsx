import React, { useState } from 'react';
import { CareerData } from "@/utiles/options/career-data";
import BoxWithLogo from "../box-with-logo";
import styles from "./career-box.module.css";
import { Card } from '../card';
import FormFields from '../form-feilds';
import SelectFields from '../SelectFields';
import GeneralHeading from '../general-heading';
import { Button } from '../button';

const CareerBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [itemsToShow, setItemsToShow] = useState(6);

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + 3);
    };
    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const handleCountryChange = (e: any) => {
        setSelectedCountry(e.target.value);
    };

    const filteredCareers = CareerData.filter(v =>
        v.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCountry === "" || v.country === selectedCountry)
    );

    const countriesToFilter = ['America', 'London', 'Canada', 'Pakistan', 'India', 'Remote Based'];

    return (
        <div className="bg-white position-relative d-flex justify-content-center">
            <Card className={styles?.SearchCard}>
                <GeneralHeading content='Explore  Opportunities Now' className='text-white mb-5 d-none d-lg-block' />
                <div className="row">
                    <div className="col-lg-6">
                        <SelectFields
                            className='mt-2'
                            selectValue={selectedCountry}
                            optionValue="Choose Country"
                            handleChange={handleCountryChange}
                            dynamicOption={countriesToFilter}
                        />
                    </div>
                    <div className="col-lg-6">
                        <FormFields
                            labelText='Search'
                            type="text"
                            className="form-control mt-2"
                            placeholder="Search careers..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                </div>


            </Card>
            <div className={styles.parentrow}>
                <div className="container mt-5 ">
                    <div className="row justify-content-center ">
                        {filteredCareers.slice(0, itemsToShow).map((v) => (
                            <BoxWithLogo
                                numberboxClass={`${styles?.numberBox}`}
                                key={v.id}
                                className={`text-black my-4 ${styles.box}`}
                                Paragraph={`${v?.Description?.overview.substring(0, 150)} .....`}
                                Id={v?.country}
                                Heading={v.title}
                                structureClass="col-lg-4 col-md-6 "
                                ButtonLink={`/careers/career-detail/${v.id}`}
                                ButtonText="Apply Now"
                                bottomBar
                                bottomBarClass={styles.borderBottomBar}
                                duration={v.duration}
                                stack={`${v.position} Developer`}
                            />
                        ))}
                        {itemsToShow < filteredCareers.length && (
                            <div className="text-center mt-3">
                                <Button className="m-auto px-5 py-3 bg-black" onClick={handleLoadMore}>
                                    Load More
                                </Button>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerBox;
