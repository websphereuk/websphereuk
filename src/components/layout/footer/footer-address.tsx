import Link from "next/link"
const OfficeAddressData = [
  {
    countryName: "United States (US)",
    address: "154 Sun Valley Road Goldendale, WA 98620",
    phoneNo: "(+1) 2025550118",
    Email: "info.websphereuk@gmail.com",
    MapLink: "https://www.google.com/maps/search/154+Sun+Valley+Road/@42.8627367,-71.3603099,11z/data=!3m1!4b1?entry=ttu"
  },
  {
    countryName: "United Kingdom (UK)",
    address: "241-245, Kings Road, Chelsea, London, SW3 5EL",
    phoneNo: "(+44) 7448770284",
    Email: "info.websphereuk@gmail.com",
    MapLink: "https://www.google.com/maps/search/154+Sun+Valley+Road/@42.8627367,-71.3603099,11z/data=!3m1!4b1?entry=ttu"
  },
  {
    countryName: "Pakistan (PK)",
    address: "Block G 1 , Johar Town, Lahore, Punjab, Pakistan",
    phoneNo: "(+92) 3494747712",
    Email: "info.websphereuk@gmail.com",
    MapLink: "https://www.google.com/maps/place/1,+Block+G+1+Phase+1+Johar+Town,+Lahore,+Punjab,+Pakistan/@31.4757138,74.2776792,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x391903db1814c29b:0x98bf1fcc15731c8b!2sG1+Market!8m2!3d31.4757696!4d74.2805419!16s%2Fg%2F1trpp58d!3m5!1s0x391903db1814c29b:0xd4b98ed03482f13b!8m2!3d31.4756887!4d74.2803776!16s%2Fg%2F11c3q2rxc2?entry=ttu"
  }
]
const FooterAddress = () => {
  return (
    <div className="section footer-three pb-0 bg-black">
      <div className="container">
        <div className="row gaper align-items-start">

          <div className="">
            <div className="group-wrapper row">
              {
                OfficeAddressData.map((v) => {
                  return (
                    <>
                      <div className="footer-three__group col-12 my-3 col-lg-4">
                        <div className="intro">
                          <h5>{v?.countryName}</h5>
                        </div>
                        <ul>
                          <li>
                            <Link
                              href={v?.MapLink}
                              target="_blank"
                            >
                              <i className="fa-sharp fa-solid fa-location-dot"></i>
                              {v?.address}
                            </Link>
                          </li>
                          <li>
                            <Link href="tel:406-555-0120">
                              <i className="fa-sharp fa-solid fa-phone-volume"></i>
                              {v?.phoneNo}
                            </Link>
                          </li>
                          <li>
                            <Link href={`mailto:${v?.Email}`}>
                              <i className="fa-sharp fa-solid fa-envelope"></i>
                              {v?.Email}
                            </Link>
                          </li>
                        </ul>
                        <div className="cta">
                          <Link
                            href={v?.MapLink}
                            target="_blank"
                          >
                            View Map
                            <i className="fa-sharp fa-solid fa-paper-plane"></i>
                          </Link>
                        </div>
                      </div>
                    </>
                  )
                })
              }

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default FooterAddress
