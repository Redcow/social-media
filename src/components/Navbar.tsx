import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar () {

    return <div className="h-24 flex items-center justify-between">

        <div className="" >
            <Link href="" className="font-bold text-xl text-blue-600">FRANCOIS LAND</Link>
        </div>
        <div className="hidden" ></div>
        <div className="" >
            <MobileMenu />
        </div>

    </div>
}