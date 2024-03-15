// import Image from "next/image"
// import { Card } from "../card"
// import style from "./testimonial.module.css";
// import GeneralHeading from "../general-heading"
// import Man from "../../../../public/images/testimonial/man.jpeg";
// const VideoSource = '/video/Y2mate.Com - Space Background 1080P.mp4'

// const Testimonial = () => {
//   return (
//     // <div className="bg-black">

//     //   <div className=" py-5 ">

//     //     <div className="container">
//     //       <GeneralHeading className="text-center my-5" content="Testimonial" />
//     //       <div className="">
//     //         <div className="row justify-content-center mt-5">
//     //           <div className="col-lg-4 " style={{ zIndex: "2" }}>
//     //             <Card className=' bg-white '>
//     //               <div className="row mt-3">
//     //                 <div className="col-lg-3">
//     //                   <Image className={`${style.Avtar}`} src={Man} alt='' />
//     //                 </div>
//     //                 <div className="col-lg-9">
//     //                   <div className={`${style.heading} text-black`}>
//     //                     Bilawal Thomas
//     //                   </div>
//     //                   <p className={` ${style.tagline}`}>
//     //                     Creative Developer  Here
//     //                   </p>
//     //                   <p className={`text-black ${style.para}`}>
//     //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil eveniet placeat autem minus, vel molestias voluptatum numquam iusto ducimus?
//     //                   </p>
//     //                   <p className={`${style.date}`}>
//     //                     24-07-2023 06:08:2023
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </Card>
//     //           </div>
//     //           <div className="col-lg-4 " style={{ zIndex: "2" }}>
//     //             <Card className=' bg-white '>
//     //               <div className="row mt-3">
//     //                 <div className="col-lg-3">
//     //                   <Image className={`${style.Avtar}`} src={Man} alt='' />
//     //                 </div>
//     //                 <div className="col-lg-9">
//     //                   <div className={`${style.heading} text-black`}>
//     //                     Bilawal Thomas
//     //                   </div>
//     //                   <p className={` ${style.tagline}`}>
//     //                     Creative Developer  Here
//     //                   </p>
//     //                   <p className={`text-black ${style.para}`}>
//     //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil eveniet placeat autem minus, vel molestias voluptatum numquam iusto ducimus?
//     //                   </p>
//     //                   <p className={`${style.date}`}>
//     //                     24-07-2023 06:08:2023
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </Card>
//     //           </div>
//     //           <div className="col-lg-4 " style={{ zIndex: "2" }}>
//     //             <Card className=' bg-white '>
//     //               <div className="row mt-3">
//     //                 <div className="col-lg-3">
//     //                   <Image className={`${style.Avtar}`} src={Man} alt='' />
//     //                 </div>
//     //                 <div className="col-lg-9">
//     //                   <div className={`${style.heading} text-black`}>
//     //                     Bilawal Thomas
//     //                   </div>
//     //                   <p className={` ${style.tagline}`}>
//     //                     Creative Developer  Here
//     //                   </p>
//     //                   <p className={`text-black ${style.para}`}>
//     //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil eveniet placeat autem minus, vel molestias voluptatum numquam iusto ducimus?
//     //                   </p>
//     //                   <p className={`${style.date}`}>
//     //                     24-07-2023 06:08:2023
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </Card>
//     //           </div>
//     //         </div>






//     //         <div className="row justify-content-center mt-5">
//     //         <div className="col-lg-4 " style={{ zIndex: "2" }}>
//     //             <Card className=' bg-white '>
//     //               <div className="row mt-3">
//     //                 <div className="col-lg-3">
//     //                   <Image className={`${style.Avtar}`} src={Man} alt='' />
//     //                 </div>
//     //                 <div className="col-lg-9">
//     //                   <div className={`${style.heading} text-black`}>
//     //                     Bilawal Thomas
//     //                   </div>
//     //                   <p className={` ${style.tagline}`}>
//     //                     Creative Developer  Here
//     //                   </p>
//     //                   <p className={`text-black ${style.para}`}>
//     //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil eveniet placeat autem minus, vel molestias voluptatum numquam iusto ducimus?
//     //                   </p>
//     //                   <p className={`${style.date}`}>
//     //                     24-07-2023 06:08:2023
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </Card>
//     //           </div>
//     //           <div className={`col-lg-4 `}>
//     //             <Card className=' bg-white '>
//     //               <div className="row mt-3">
//     //                 <div className="col-lg-3">
//     //                   <Image className={`${style.Avtar}`} src={Man} alt='' />
//     //                 </div>
//     //                 <div className="col-lg-9">
//     //                   <div className={`${style.heading} text-black`}>
//     //                     Bilawal Thomas
//     //                   </div>
//     //                   <p className={` ${style.tagline}`}>
//     //                     Creative Developer  Here
//     //                   </p>
//     //                   <p className={`text-black ${style.para}`}>
//     //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil eveniet placeat autem minus, vel molestias voluptatum numquam iusto ducimus?
//     //                   </p>
//     //                   <p className={`${style.date}`}>
//     //                     24-07-2023 06:08:2023
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </Card>
//     //           </div>

//     //           <div className="col-lg-4 ">
//     //             <Card className=' bg-white '>
//     //               <div className="row mt-3">
//     //                 <div className="col-lg-3">
//     //                   <Image className={`${style.Avtar}`} src={Man} alt='' />
//     //                 </div>
//     //                 <div className="col-lg-9">
//     //                   <div className={`${style.heading} text-black`}>
//     //                     Bilawal Thomas
//     //                   </div>
//     //                   <p className={` ${style.tagline}`}>
//     //                     Creative Developer  Here
//     //                   </p>
//     //                   <p className={`text-black ${style.para}`}>
//     //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil eveniet placeat autem minus, vel molestias voluptatum numquam iusto ducimus?
//     //                   </p>
//     //                   <p className={`${style.date}`}>
//     //                     24-07-2023 06:08:2023
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </Card>
//     //           </div>
//     //         </div>




//     //         {/* <div className="row justify-content-center mt-5">
//     //           <div className="col-lg-4 " style={{ zIndex: "2" }}>
//     //             <Card className=' bg-white '>
//     //               <div className="row mt-3">
//     //                 <div className="col-lg-3">
//     //                   <Image className={`${style.Avtar}`} src={Man} alt='' />
//     //                 </div>
//     //                 <div className="col-lg-9">
//     //                   <div className={`${style.heading} text-black`}>
//     //                     Bilawal Thomas
//     //                   </div>
//     //                   <p className={` ${style.tagline}`}>
//     //                     Creative Developer  Here
//     //                   </p>
//     //                   <p className={`text-black ${style.para}`}>
//     //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil eveniet placeat autem minus, vel molestias voluptatum numquam iusto ducimus?
//     //                   </p>
//     //                   <p className={`${style.date}`}>
//     //                     24-07-2023 06:08:2023
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </Card>
//     //           </div>
//     //           <div className="col-lg-4 " style={{ zIndex: "2" }}>
//     //             <Card className=' bg-white '>
//     //               <div className="row mt-3">
//     //                 <div className="col-lg-3">
//     //                   <Image className={`${style.Avtar}`} src={Man} alt='' />
//     //                 </div>
//     //                 <div className="col-lg-9">
//     //                   <div className={`${style.heading} text-black`}>
//     //                     Bilawal Thomas
//     //                   </div>
//     //                   <p className={` ${style.tagline}`}>
//     //                     Creative Developer  Here
//     //                   </p>
//     //                   <p className={`text-black ${style.para}`}>
//     //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil eveniet placeat autem minus, vel molestias voluptatum numquam iusto ducimus?
//     //                   </p>
//     //                   <p className={`${style.date}`}>
//     //                     24-07-2023 06:08:2023
//     //                   </p>
//     //                 </div>
//     //               </div>
//     //             </Card>
//     //           </div>
//     //         </div> */}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <>
    
//     </>
//   )
// }

// export default Testimonial