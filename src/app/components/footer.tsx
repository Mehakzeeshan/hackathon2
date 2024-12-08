import Link from "next/link";

export default function Footer () {
    return (
        <section className="mt-12 border-t-2 border-[#d9d9d9] pt-6">
            
            <div className="md:flex  justify-evenly mt-8">
            <div>
            <h2 className="text-2xl font-bold">Funiro.</h2>
            <p className="text-[#9f9f9f] mt-14">400 University Drive Suite 200 Coral Gables,</p>
            <p className="text-[#9f9f9f]">FL 33134 USA</p>
            </div>

            <div>
            <ul>
            <li className="text-[#9f9f9f] font-semibold">Links</li>
            <li className="mt-12 font-semibold">
            <Link href="/">Home</Link>
            </li>
            <li className="mt-12 font-semibold">
            <Link href="/shop">Shop</Link>
            </li>
            <li className="mt-12 font-semibold">
            <Link href="/blog">About</Link>
            </li>
            <li className="mt-12 font-semibold">
            <Link href="/contact">Contact</Link>
            </li>
            </ul>
            </div>

            <div>
                <ul>
                    <li className="text-[#9f9f9f] font-semibold">Help</li>
                    <li className="mt-12 font-semibold">Payment Options</li>
                    <li className="mt-12 font-semibold">Returns</li>
                    <li className="mt-12 font-semibold">Privacy Policies</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li className="text-[#9f9f9f] font-semibold">Newsletter</li>
                    <div className="flex items-center justify-center mt-10">
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="underline"
          required
        />
        <button
          type="submit"
          className="underline font-semibold font-mono"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
                </ul>
            </div>
            </div>
            
            <p className="mt-12 border-t border-[#d9d9d9] pt-12 mx-24 font-semibold text-[#000000] text-lg py-10">2023 furino.All rights reserved</p>
        </section>
    )
}