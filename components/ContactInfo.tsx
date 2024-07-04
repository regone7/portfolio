import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Navbar from './Navbar'

const ContactInfo: React.FC = () => {
  return (
      <div id='contact' className="max-w-full mx-auto bg-white p-8 border-2 border-dotted mt-8 mb-3 flex flex-col md:flex-row gap-3 justify-center items-center">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="mb-4">Email: regone12345@gmail.com</p>
          <p className="mb-4"> <a href="https://www.linkedin.com/in/md-regone-hossain" target="_blank"><FaLinkedin /></a></p>
          <p className="mb-4"><a href="https://github.com/regone7" target="_blank"><FaGithub /></a></p>
          <p className="mb-4"><a href="https://www.facebook.com/abuj.mon.359" target="_blank"><FaFacebook /></a></p>
      </div>
  );
};

export default ContactInfo;
