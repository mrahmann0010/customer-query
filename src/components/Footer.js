function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="bg-neutral text-neutral-content p-10">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
          {/* Column 1 */}
          <nav>
            <h6 className="text-xl font-semibold mb-2">TravelRel - Support</h6>
            <p className="text-sm leading-relaxed">{description}</p>
          </nav>

          {/* Column 2 */}
          <nav>
            <h6 className="font-semibold mb-2">Services</h6>
            <ul className="space-y-1">
              <li>
                <a href="/#" className="hover:underline">
                  Branding
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Design
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Marketing
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Advertisement
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3 */}
          <nav>
            <h6 className="font-semibold mb-2">Services</h6>
            <ul className="space-y-1">
              <li>
                <a href="/#" className="hover:underline">
                  Branding
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Design
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Marketing
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Advertisement
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4 */}
          <nav>
            <h6 className="font-semibold mb-2">Company</h6>
            <ul className="space-y-1">
              <li>
                <a href="/#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Press kit
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 5 */}
          <nav>
            <h6 className="font-semibold mb-2">Legal</h6>
            <ul className="space-y-1">
              <li>
                <a href="/#" className="hover:underline">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Cookie policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-neutral text-neutral-content flex justify-center pb-10">
        <h5 className="w-[80%] border-t text-center pt-4">
          © 2025 Travel-Rel. All rights reserved.
        </h5>
      </div>
    </footer>
  );
}

const description = `TravelRel is your trusted support partner for resolving travel-related
   technical concerns. For any
    disruptions, system is designed to address
    
    customer problems quickly and effectively.`;

export default Footer;
