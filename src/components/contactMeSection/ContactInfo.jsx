import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="armadinurhidayat04@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+62 838-2312-6664" Image={FaWhatsapp} />
      <SingleInfo text="Semarang, Indonesian" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
