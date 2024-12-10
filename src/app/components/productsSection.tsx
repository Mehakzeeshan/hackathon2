import Image from "next/image";

export default function ProductSection () {
    return (
        <section>
            <h1 className="text-center font-bold text-4xl mt-16">Our Products</h1>
            <div className="md:flex md:justify-center md:gap-8 mt-10 mx-20">
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px]">
                <div 
                style={{
                     backgroundImage: "url('/Images.png')",
                     height: "50vh",
                     width: "100%",
                     backgroundRepeat:"no-repeat",
                     backgroundPosition: "cover",
                     position: "relative"
                }}>
                  <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">-30%</span>
                </div>
                <h3 className="text-[#3a3a3a] font-bold text-2xl mt-[8px] ml-4">Syltherine</h3> 
                <p className="text-[#898989] mt-2  ml-4 font-medium">Stylish cafe chair</p>
                <div className="flex gap-2 ml-4 mt-2">
                <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 2.500.000</h3>
                <p className="line-through text-[#b0b0b0] mt-1 font-normal ">Rp 3.500.000</p>
                </div>
                </div>

                <div className="mt-6 md:mt-0">
                    <Image 
                    src= "/Featured Products.png" alt="Featured Product" width={450} height={620}
                    className="md:w-[450px] md:h-[430px] w-[500px] h-[400px]"/>
                </div>


                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                <div 
                style={{
                     backgroundImage: "url('/Images (1).png')",
                     height: "50vh",
                     width: "100%",
                     backgroundRepeat:"no-repeat",
                     backgroundPosition: "cover",
                     position: "relative"
                }}>
                  <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">-50%</span>
                </div>
                <h3 className="text-[#3a3a3a] font-bold text-2xl mt-[8px] ml-4">Lolito</h3> 
                <p className="text-[#898989] mt-2  ml-4 font-medium">Luxury big sofa</p>
                <div className="flex gap-1 ml-4 mt-2">
                <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 7.000.000</h3>
                <p className="line-through text-[#b0b0b0] mt-1 font-normal ">Rp 14.000.000</p>
                </div>
                </div>


                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                <div 
                style={{
                     backgroundImage: "url('/Images (2).png')",
                     height: "50vh",
                     width: "100%",
                     backgroundRepeat:"no-repeat",
                     backgroundPosition: "cover",
                     position: "relative"
                }}>
                  <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">New</span>
                </div>
                <h3 className="text-[#3a3a3a] font-bold text-2xl mt-[8px] ml-4">Respira</h3> 
                <p className="text-[#898989] mt-2  ml-4 font-medium">Outdoor bar table and sofa</p>
                <div className="flex gap-2 ml-4 mt-2">
                <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 500.000</h3>
                </div>
                </div>

            </div>

            {/* row2 */}

            <div className="md:flex justify-center gap-8 mt-10 mx-20">
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px]">
                <div 
                style={{
                     backgroundImage: "url('/Images (3).png')",
                     height: "50vh",
                     width: "100%",
                     backgroundRepeat:"no-repeat",
                     backgroundPosition: "cover",
                     position: "relative"
                }}>
                  
                </div>
                <h3 className="text-[#3a3a3a] font-bold text-2xl mt-[8px] ml-4">Grifo</h3> 
                <p className="text-[#898989] mt-2  ml-4 font-medium">Night Lamp</p>
                <div className="flex gap-2 ml-4 mt-2">
                <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 1.500.000</h3>
                
                </div>
                </div>

                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                <div 
                style={{
                     backgroundImage: "url('/Images (4).png')",
                     height: "50vh",
                     width: "100%",
                     backgroundRepeat:"no-repeat",
                     backgroundPosition: "cover",
                     position: "relative"
                }}>
                  <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">New</span>
                </div>
                <h3 className="text-[#3a3a3a] font-bold text-2xl mt-[8px] ml-4">Muggo</h3> 
                <p className="text-[#898989] mt-2  ml-4 font-medium">Small mug</p>
               
                <h3 className="text-[#3a3a3a] font-bold text-lg ml-4">Rp 150.000</h3>
               
                </div>



                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                <div 
                style={{
                     backgroundImage: "url('/Images (5).png')",
                     height: "50vh",
                     width: "100%",
                     backgroundRepeat:"no-repeat",
                     backgroundPosition: "cover",
                     position: "relative"
                }}>
                  <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">-50%</span>
                </div>
                <h3 className="text-[#3a3a3a] font-bold text-2xl mt-[8px] ml-4">Pingky</h3> 
                <p className="text-[#898989] mt-2  ml-4 font-medium">Cute bed set</p>
                <div className="flex gap-2 ml-4 mt-2">
                <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 7.000.000</h3>
                <p className="line-through text-[#b0b0b0] mt-1 font-normal ">Rp 14.000.000</p>
                </div>
                </div>


                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                <div 
                style={{
                     backgroundImage: "url('/Images (6).png')",
                     height: "50vh",
                     width: "100%",
                     backgroundRepeat:"no-repeat",
                     backgroundPosition: "cover",
                     position: "relative"
                }}>
                  <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">New</span>
                </div>
                <h3 className="text-[#3a3a3a] font-bold text-2xl mt-[8px] ml-4">Potty</h3> 
                <p className="text-[#898989] mt-2  ml-4 font-medium">Minimalist flower pot</p>
                <div className="flex gap-2 ml-4 mt-2">
                <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 500.000</h3>
                </div>
                </div>

            </div>

            <button className="text-[#b88e2f] px-20 py-3 border-[#b88e2f] border  outline outline-[#b88e2f] outline-1 mt-12 md:ml-[500px] ml-14 font-bold" >Show More</button>
        </section>
    )
}