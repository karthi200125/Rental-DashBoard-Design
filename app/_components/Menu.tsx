import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import MobileMenuContent from "./MobileMenuContent"
import { MdOutlineDehaze } from "react-icons/md";

const Menu = () => {
    return (
        <div className="lg:hidden h-screen">
            <Sheet>
                <SheetTrigger asChild>
                    <MdOutlineDehaze size={30} />
                </SheetTrigger>
                <SheetContent className="flex w-full h-full md:w-[50%] lg:hidden bg-white p-[16px]">
                    <MobileMenuContent />
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Menu