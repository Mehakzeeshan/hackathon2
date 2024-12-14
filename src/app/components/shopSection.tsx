import Image from "next/image"
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { PiDotsNineBold } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";
export default function ShopSection () {
    return (
<>
<section 
          style={{
             backgroundImage: "url('/backgroundImage.png')",
             width: "100%",
             height: "50vh",
             backgroundRepeat: "no-repeat",
             backgroundPosition: "cover",
             position: "relative"
          }}>

          <div className="absolute md:top-20 top-16 md:left-[550px] left-28 text-center">

          <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="w-12 h-10 ml-9"
        />
        <h1 className="mt-4 text-5xl font-semibold">Shop</h1>
        <div className="flex mt-4 gap-2 ml-2">
            <h2 className="font-semibold">Home </h2>
            <SlArrowRight  className="mt-1 font-bold text-xl"/>
            <p>Shop</p>
        </div>
        </div>
          </section>
        
          <div className="flex justify-between bg-[#f9f1e7] py-6 flex-wrap">
  <div className="flex md:pl-16 gap-6 mt-1 flex-wrap items-center">
    <HiAdjustmentsHorizontal className="mt-1 font-extrabold text-lg" />
    <h3>Filter</h3>
    <PiDotsNineBold className="mt-1 font-extrabold text-lg" />
    <h3 className="font-semibold flex gap-8">
      <p>|</p>Showing 1-16 of 32 results
    </h3>
  </div>

  <div className="flex gap-4 mx-8 flex-wrap items-center">
    <h2 className="mt-1 font-semibold">Show</h2>
    <p className="bg-white px-5 py-2 text-[#9f9f9f]">16</p>
    <h2 className="mt-1 font-semibold">Sort by</h2>
    <p className="bg-white px-5 py-2 text-[#9f9f9f]">Default</p>
  </div>
</div>


        <section>
        <div className="md:flex md:justify-center md:gap-8 mt-10 mx-20">
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px]">
                  <div
                    style={{
                      backgroundImage: "url('/Images.png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      -30%
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Syltherine
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">
                    Stylish cafe chair
                  </p>
                  <div className="flex gap-2 ml-4 mt-2">
                    <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 2.500.000</h3>
                    <p className="line-through text-[#b0b0b0] mt-1 font-normal ">
                      Rp 3.500.000
                    </p>
                  </div>
                </div>
        
                <div className="mt-6 md:mt-0">
                  <Image
                    src="/Featured Products.png"
                    alt="Featured Product"
                    width={450}
                    height={620}
                    className="md:w-[450px] md:h-[430px] w-[500px] h-[400px]"
                  />
                </div>
        
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                  <div
                    style={{
                      backgroundImage: "url('/Images (1).png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      -50%
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Lolito
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">
                    Luxury big sofa
                  </p>
                  <div className="flex gap-1 ml-4 mt-2">
                    <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 7.000.000</h3>
                    <p className="line-through text-[#b0b0b0] mt-1 font-normal ">
                      Rp 14.000.000
                    </p>
                  </div>
                </div>
        
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                  <div
                    style={{
                      backgroundImage: "url('/Images (2).png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      New
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Respira
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">
                    Outdoor bar table and sofa
                  </p>
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
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  ></div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Grifo
                  </h3>
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
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      New
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Muggo
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">Small mug</p>
        
                  <h3 className="text-[#3a3a3a] font-bold text-lg ml-4">Rp 150.000</h3>
                </div>
        
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                  <div
                    style={{
                      backgroundImage: "url('/Images (5).png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      -50%
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Pingky
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">Cute bed set</p>
                  <div className="flex gap-2 ml-4 mt-2">
                    <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 7.000.000</h3>
                    <p className="line-through text-[#b0b0b0] mt-1 font-normal ">
                      Rp 14.000.000
                    </p>
                  </div>
                </div>
        
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                  <div
                    style={{
                      backgroundImage: "url('/Images (6).png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      New
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Potty
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">
                    Minimalist flower pot
                  </p>
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
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  ></div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Grifo
                  </h3>
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
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      New
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Muggo
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">Small mug</p>
        
                  <h3 className="text-[#3a3a3a] font-bold text-lg ml-4">Rp 150.000</h3>
                </div>
        
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                  <div
                    style={{
                      backgroundImage: "url('/Images (5).png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      -50%
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Pingky
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">Cute bed set</p>
                  <div className="flex gap-2 ml-4 mt-2">
                    <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 7.000.000</h3>
                    <p className="line-through text-[#b0b0b0] mt-1 font-normal ">
                      Rp 14.000.000
                    </p>
                  </div>
                </div>
        
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                  <div
                    style={{
                      backgroundImage: "url('/Images (6).png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      New
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Potty
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">
                    Minimalist flower pot
                  </p>
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
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  ></div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Grifo
                  </h3>
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
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      New
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Muggo
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">Small mug</p>
        
                  <h3 className="text-[#3a3a3a] font-bold text-lg ml-4">Rp 150.000</h3>
                </div>
        
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                  <div
                    style={{
                      backgroundImage: "url('/Images (5).png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      -50%
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Pingky
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">Cute bed set</p>
                  <div className="flex gap-2 ml-4 mt-2">
                    <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 7.000.000</h3>
                    <p className="line-through text-[#b0b0b0] mt-1 font-normal ">
                      Rp 14.000.000
                    </p>
                  </div>
                </div>
        
                <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0">
                  <div
                    style={{
                      backgroundImage: "url('/Images (6).png')",
                      height: "50vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                      position: "relative",
                    }}
                  >
                    <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
                      New
                    </span>
                  </div>
                  <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
                    Potty
                  </h3>
                  <p className="text-[#898989] mt-2  ml-4 font-medium">
                    Minimalist flower pot
                  </p>
                  <div className="flex gap-2 ml-4 mt-2">
                    <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 500.000</h3>
                  </div>
                </div>
                </div>


           <div className="flex justify-center gap-5 mt-10">
            <button  className="px-5 py-4 rounded-xl bg-[#b88e2f]">1</button>
            <button className="px-5 py-4 rounded-xl bg-[#f9f1e7]">2</button>
            <button className="px-5 py-4 rounded-xl bg-[#f9f1e7]">3</button>
            <button className="px-5 py-4 rounded-xl bg-[#f9f1e7]">Next</button>
           </div>

        </section>
        </>
    )
}