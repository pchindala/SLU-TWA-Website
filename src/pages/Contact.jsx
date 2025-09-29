import React, { useState } from "react";
import { Mail } from "lucide-react";
import locations from "../data/locationsData";
import PropTypes from "prop-types";
import TWA from "../assets/TWA.png";

//  Contact Form Component
const ContactForm = ({ contact, setContact, contactStatus, handleContactSubmit }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Contact SLU TWA</h3>
    <p className="text-sm text-gray-600 mb-4">
      For sponsorships, volunteering, or hiring questions — send us a message.
    </p>
    <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
      Name
    </label>
    <input
      id="name"
      value={contact.name}
      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
      className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
      required
      aria-required="true"
    />
    <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
      Email
    </label>
    <input
      id="email"
      type="email"
      value={contact.email}
      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
      className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
      required
      aria-required="true"
    />
    <label htmlFor="message" className="block text-sm text-gray-700 mb-1">
      Message
    </label>
    <textarea
      id="message"
      value={contact.message}
      onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
      rows="5"
      className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
      required
      aria-required="true"
    />
    <div className="flex items-center gap-3 justify-center">
      <button
        onClick={handleContactSubmit}
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        aria-label="Send Message"
      >
        Send Message
      </button>
      <a
        className="px-4 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        href={`mailto:meredith.rj@slu.edu?subject=SLU%20TWA%20Contact&body=${encodeURIComponent(
          contact.message || ""
        )}`}
        aria-label="Open email client"
      >
        Or open mail
      </a>
    </div>
    {contactStatus && (
      <div
        className={`mt-4 text-sm text-center ${
          contactStatus.type === "error" ? "text-rose-600" : "text-green-700"
        }`}
      >
        {contactStatus.text}
      </div>
    )}
  </div>
);

ContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  setContact: PropTypes.func.isRequired,
  contactStatus: PropTypes.object,
  handleContactSubmit: PropTypes.func.isRequired,
};

const ContactPage = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState(null);
  const [staffModalOpen, setStaffModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  function handleContactSubmit(e) {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) {
      setContactStatus({ type: "error", text: "Please complete all fields." });
      return;
    }
    setContactStatus({ type: "sending", text: "Sending..." });
    setTimeout(() => {
      setContactStatus({
        type: "success",
        text: "Message sent! We’ll be in touch.",
      });
      setContact({ name: "", email: "", message: "" });
      setTimeout(() => setContactOpen(false), 1200);
    }, 900);
  }

  function truncateDescription(text) {
    if (text.length <= 100) return text;
    return text.slice(0, 90).trim() + "...";
  }

  function truncateBio(text) {
    if (text.length <= 100) return text;
    return text.slice(0, 100).trim() + "...";
  }

  const openStaffModal = (member) => {
    setSelectedStaff(member);
    setStaffModalOpen(true);
  };

  return (
    <div className="font-sans text-gray-900 antialiased">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow text-center">
            Contact
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-4 text-center">
            Connect With Us in Your Region
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl opacity-90 text-center  mx-auto">
            SLU TWA operates across four regions, and our team is ready to connect with you—whether you're a jobseeker or interested in volunteering, donating, sponsoring, partnering, or joining our team. No matter your location, we’re here to support your involvement and answer any questions. To get in touch with the regional contact nearest you, please email us at{" "}
            <a href="mailto:twa@slu.edu" className="underline text-sky-200 hover:text-white">
              twa@slu.edu
            </a>{" "}
            {/* or contact Meredith Rataj at{" "}
            <a href="mailto:meredith.rj@slu.edu" className="underline text-sky-200 hover:text-white">
              meredith.rj@slu.edu
            </a>. */}
          .</p>
          <p className="mt-4 max-w-3xl text-lg md:text-xl font-bold opacity-90 text-center mx-auto">
            Let’s work together to create pathways to opportunity and lasting impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Open contact form"
            >
              <Mail className="w-5 h-5" /> Get in Touch
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block opacity-20">
          <svg viewBox="0 0 600 800" className="w-full h-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <stop offset="1" stopColor="#000000" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <rect width="600" height="800" fill="url(#g1)" />
          </svg>
        </div>
      </header>

      {/* Locations Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-full mx-auto px-10 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 min-w-max">
            {locations.map((location, idx) => (
              <article
                key={idx}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-[300px] h-[200px] flex flex-col justify-between"
              >
                <img
                  src={location.image}
                  alt={`${location.city}`}
                  className="w-12 h-12 rounded-md object-cover lazy-load"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold">{location.city}</h3>
                <p className="text-xs text-gray-600 flex-1 line-clamp-3">
                  {truncateDescription(location.description)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Details */}
      {locations.map((location, idx) => (
        <section
          key={idx}
          id={location.city.toLowerCase().replace(" ", "-")}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-6">
              <img
                src={location.image}
                alt={`${location.city}`}
                className="w-20 h-20 mx-auto rounded-md object-cover lazy-load"
                loading="lazy"
              />
              <h2 className="text-3xl font-bold mt-3 mb-4">{location.city}</h2>
            </div>
            <p className="text-gray-700 mb-6 max-w-full mx-10">{location.description}</p>
            <h3 className="text-xl font-semibold mb-4">Contacts</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {location.staff.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow flex flex-col items-center gap-4 w-full p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={`${member.name}`}
                    className="h-90 rounded-sm object-cover lazy-load"
                    loading="lazy"
                    onError={(e) => (e.target.src = {TWA})}
                  />
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <h4 className="text-sm text-gray-500">{member.role}</h4>
                    <div className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Email:</span>{" "}
                      <a href={`mailto:${member.email}`} className="text-sky-600 hover:text-sky-800">
                        {member.email}
                      </a>
                       <p className="text-sm text-gray-600 mt-2 text-left">
                      {member.bio ? truncateBio(member.bio) : "Bio coming soon!"}
                    </p>
                    {member.bio && (
                      <button
                        onClick={() => openStaffModal(member)}
                        className="text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors mt-2 cursor-pointer"
                        aria-label={`Read more about ${member.name}`}
                      >
                        Read More
                      </button>
                    )}
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Staff Modal */}
      {staffModalOpen && selectedStaff && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setStaffModalOpen(false)}
            role="button"
            aria-label="Close modal"
          />
          <div className="relative bg-white max-w-3xl w-full rounded-xl p-6 shadow-lg z-10">
            <button
              onClick={() => setStaffModalOpen(false)}
              type="button"
              className="absolute text-xl cursor-pointer top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-6 p-2">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{selectedStaff.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{selectedStaff.title || selectedStaff.role}</p>
                <p className="text-sm text-gray-600">{selectedStaff.bio || "Bio coming soon!"}</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={selectedStaff.image}
                  alt={`${selectedStaff.name}`}
                  className="w-60 h-100 rounded-md object-cover lazy-load p-2 rounded-lg"
                  loading="lazy"
                  onError={(e) => (e.target.src = "/assets/placeholder.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactOpen && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setContactOpen(false)}
            role="button"
            aria-label="Close modal"
          />
          <div className="relative bg-white max-w-lg w-full rounded-xl p-6 shadow-lg z-10">
            <button
              onClick={() => setContactOpen(false)}
              type="button"
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Close"
            >
              ✕
            </button>
            <ContactForm
              contact={contact}
              setContact={setContact}
              contactStatus={contactStatus}
              handleContactSubmit={handleContactSubmit}
            />
          </div>
        </div>
      )}

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Have questions or want to learn more about our programs? Reach out to us using the form below.
          </p>
          <ContactForm
            contact={contact}
            setContact={setContact}
            contactStatus={contactStatus}
            handleContactSubmit={handleContactSubmit}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;