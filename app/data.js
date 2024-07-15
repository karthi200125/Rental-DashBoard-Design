import { HiOutlineHome } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineHelpCenter } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiGrid31 } from "react-icons/ci";
import house1 from './assets/house (1).webp'
import house2 from './assets/house (2).webp'
import house3 from './assets/house (3).webp'
import house4 from './assets/house (4).webp'
import house5 from './assets/house (5).webp'
import house6 from './assets/house (6).webp'

export const Leftbarroutes = [
    {
        id: 1,
        icon: <HiOutlineHome size={20} />,
        title: "Home",
        href: "/",
        count: 0,
        ttPos: "right"
    },
    {
        id: 2,
        icon: <IoCalendarClearOutline size={20} />,
        title: "Dates",
        href: "/dates",
        count: 0,
        ttPos: "right"
    },
    {
        id: 3,
        icon: <TbBrandBooking size={20} />,
        title: "Bookings",
        href: "/bookings",
        count: 0,
        ttPos: "right"
    },
    {
        id: 4,
        icon: <CiHeart size={20} />,
        title: "Wishlist",
        href: "/wishlist",
        count: 1,
        ttPos: "right"
    },
    {
        id: 5,
        icon: <AiOutlineMail size={20} />,
        title: "Notifications",
        href: "/notifications",
        count: 6,
        ttPos: "right"
    },
    {
        id: 6,
        icon: <MdOutlineHelpCenter size={20} />,
        title: "Help",
        href: "/help",
        count: 0,
        ttPos: "right"
    },
    {
        id: 7,
        icon: <VscSignOut size={20} />,
        title: "Logout",
        href: "/logout",
        count: 0,
        ttPos: "right"
    },
];

export const NavTopLinks = [
    {
        id: 1,
        title: "Category",
        href: "/category"
    },
    {
        id: 2,
        title: "Become a Host",
        href: "/become-host"
    },
    {
        id: 3,
        title: "Terms",
        href: "/terms"
    },
    {
        id: 4,
        title: "FAQs",
        href: "/faqs"
    },
];

export const NavIcons = [
    {
        id: 1,
        icon: <CiGrid31 size={20} />,
        title: "DashBoard",
        href: "/dashboard",
        count: 0,
        ttPos: "bottom"
    },
    {
        id: 2,
        icon: <CiSettings size={20} />,
        title: "Setting",
        href: "/setting",
        count: 0,
        ttPos: "bottom"
    },
    {
        id: 3,
        icon: <CiBellOn size={20} />,
        title: "Notifications",
        href: "/notifications",
        count: 0,
        ttPos: "bottom"
    },
]

export const Houses = [
    {
        id: 1,
        title: "Modern Villa",
        address: "1234 Oak Street, Springfield, 01",
        price: "1500",
        img: house1.src
    },
    {
        id: 2,
        title: "Countryside Cottage",
        address: "5678 Maple Avenue, Rivertown, 02",
        price: "1200",
        img: house2.src
    },
    {
        id: 3,
        title: "Urban Apartment",
        address: "9101 Elm Street, Metropolis, 03",
        price: "900",
        img: house3.src
    },
    {
        id: 4,
        title: "Beachside Bungalow",
        address: "1123 Palm Drive, Oceanview, 04",
        price: "2000",
        img: house4.src
    },
    {
        id: 5,
        title: "Mountain Cabin",
        address: "1415 Pine Road, Hilltop, 05",
        price: "1800",
        img: house5.src
    },
    {
        id: 6,
        title: "Suburban House",
        address: "1617 Cedar Lane, Lakeside, 06",
        price: "1400",
        img: house6.src
    }
];


export const categoryItems = [
    {
        id: 1,
        title: "Flat"
    },
    {
        id: 2,
        title: "Luxury"
    },
    {
        id: 3,
        title: "Camping"
    },
    {
        id: 4,
        title: "A-Frame"
    },
    {
        id: 5,
        title: "Lake Villa"
    },
]