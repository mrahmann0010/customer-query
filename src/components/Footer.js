function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">TravelRel - Support</h6>
        <p className="text-gray-200 text-md font-normal">{description}</p>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover" href="/#abc">
          About us
        </a>
        <a className="link link-hover" href="/#abc">
          Contact
        </a>
        <a className="link link-hover" href="/#abc">
          Jobs
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover" href="/#abc">
          Products & Services
        </a>
        <a className="link link-hover" href="/#abc">
          Customer Stores
        </a>
        <a className="link link-hover" href="#abc">
          Download App
        </a>
      </nav>

      <nav>
        <h6 className="footer-title">Information</h6>
        <a className="link link-hover" href="#abc">
          Terms of use
        </a>
        <a className="link link-hover" href="#abc">
          Privacy policy
        </a>
        <a className="link link-hover" href="#abc">
          Cookie policy
        </a>
      </nav>

      <nav>
        <h6 className="footer-title">Social Links</h6>
        <a className="link link-hover" href="#abc">
          Twitter
        </a>
        <a className="link link-hover" href="#abc">
          Instagram
        </a>
        <a className="link link-hover" href="#abc">
          Telegram
        </a>
      </nav>
    </footer>
  );
}

const description =
  "TravelRel is your trusted support partner for resolving travel-related technical concerns. From login pages failing to load, to payment gateway disruptions, or issues with uploading profile pictures, our system is designed to address customer problems quickly and effectively. Since launch, TravelRel has helped countless users enjoy seamless service without unnecessary delays or frustrations.";

export default Footer;
