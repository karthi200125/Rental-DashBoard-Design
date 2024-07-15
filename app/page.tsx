import Select from "./_components/Select";
import { CiLocationOn } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import Cards from "./_components/Cards";
import Leftbar from "./_components/Leftbar";

export default function Home() {
  return (
    <section className="w-full bg-gray calc flex flex-col gap-3">
      <div className="w-full flex flex-col lg:flex-row items-start gap-5 md:items-center justify-between">

        <div className="flex flex-row items-end gap-3">
          <h4>My Rend dashboard</h4>
          <p>(23 Results)</p>
        </div>

        <div className="w-full md:max-w-max flex flex-col sm:flex-row items-center gap-5">
          <Select icon={<CiLocationOn size={20} />} title="Countries" />
          <Select icon={<IoCalendarClearOutline size={20} />} title="Dates" />
          <Select icon={<FaUsers size={20} />} title="Guests" />
        </div>
      </div>

      <Cards />

    </section>
  );
}
