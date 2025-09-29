import React, { useRef, useState, useEffect } from "react";
import { isAdmin } from "../api/controller/userType";
import { useNavigate, Link } from "react-router-dom";
import {
  FaSearch,
  FaIndustry,
  FaUsers,
  FaMapMarkerAlt,
  FaHeart,
  FaFilter,
  FaFileAlt,
  FaTimes,
  FaDownload,
  FaPencilAlt,
  FaTrash,
} from "react-icons/fa";
import { RegionCardData, industryList, videoObj } from "../data/videoPlatformData";
import Logo from "../assets/contact-images/JTNL_Logo_2021.png";
import Community from "./Community";
import resumeImage from "../assets/resumes/resume.webp";

// City Card Component
const CityCard = ({ city }) => {
  const navigate = useNavigate();
  return (
    <Link
      to={city.contact}
      className="bg-white rounded-md shadow w-[270px] h-[300px] overflow-hidden mx-4 hover:shadow-lg hover:scale-105 transition-transform flex-shrink-0"
    >
      <img
        src={city.imageURL}
        className="h-[150px] w-full object-cover cursor-pointer"
        alt={city.city}
        onClick={() => navigate(`/industrycard`)}
      />
      <div className="p-4">
        <h3 className="text-[16px] text-[#003DA5] font-semibold mb-3 flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#003DA5]" />
          {city.city}
        </h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2 text-[12px]">
          <FaIndustry className="text-[#003DA5]" /> Industries:{" "}
          <span className="text-gray-500">{city.industries}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-[12px]">
          <FaUsers className="text-[#003DA5]" /> Individuals:{" "}
          <span className="text-gray-500">{city.individuals}</span>
        </div>
      </div>
    </Link>
  );
};

// Industry Card Component
const IndustryCard = ({ industry }) => {
  const navigate = useNavigate();
  return (
    <div className="border-[0.5px] border-[#003DA5] bg-white rounded-md shadow w-[270px] h-[300px] overflow-hidden hover:shadow-lg hover:scale-105 transition-transform mx-5 flex-shrink-0">
      <img
        src={industry.imageURL}
        className="h-[150px] w-full object-cover cursor-pointer"
        alt={industry.name}
        onClick={() => navigate(`/video`)}
      />
      <div className="p-4">
        <h3 className="text-[16px] text-[#003DA5] font-semibold mb-3 flex items-center gap-2">
          <FaIndustry /> {industry.name}
        </h3>
        <div className="flex items-center gap-2 font-semibold text-[12px]">
          <FaUsers /> Individuals:{" "}
          <span className="text-gray-500">{industry.individuals}</span>
        </div>
        <div className="flex items-center gap-2 font-semibold text-[12px]">
          <FaMapMarkerAlt /> Location:{" "}
          <span className="text-gray-500">{industry.location}</span>
        </div>
      </div>
    </div>
  );
};

// Resume Modal Component
const ResumeModal = ({ showModal, setShowResumeModal, selectedVideo }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 font-['Crimson_Pro']">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg p-6 w-full h-3/4 max-w-lg shadow-lg z-10">
        <button
          onClick={() => setShowResumeModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-bold text-center mb-6 text-[#003DA5]">
          {selectedVideo.name}'s Resume
        </h2>
        <img
          src={resumeImage}
          alt={`${selectedVideo.name}'s Resume`}
          className="w-full h-3/4 object-contain rounded-lg mb-4"
        />
        <div className="flex justify-center">
          <a
            href={resumeImage}
            download={`${selectedVideo.name}_resume.webp`}
            className="bg-[#003DA5] text-white py-2 px-4 rounded-lg font-semibold flex items-center gap-2"
          >
            <FaDownload /> Download
          </a>
        </div>
      </div>
    </div>
  );
};

// Video Card Component
const VideoCard = ({ video, toggleFavorite, openResumeModal, deleteVideo }) => {
  return (
    <div className="m-6 w-[300px] h-[450px] border-[0.5px] border-[#003DA5] rounded-lg shadow-md relative bg-white flex-shrink-0">
      <video controls className="w-full h-[250px]">
        <source src={video.videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-4">
        <h2 className="text-[24px] font-bold text-[#003DA5]">{video.name}</h2>
        <p className="text-[14px] my-2">{video.description}</p>
        <p className="text-[12px]">
          Skills: <span className="text-gray-500">{video.skills}</span>
        </p>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => toggleFavorite(video.id)}
          className={`absolute bottom-4 left-4 ${
            video.isFavorite ? "text-red-600" : "text-gray-500"
          } hover:text-red-600 transition cursor-pointer`}
          title="Favorite"
        >
          <FaHeart size={15} />
        </button>
        {isAdmin() && (
          <button
            onClick={() => deleteVideo(video.id)}
            className="absolute bottom-4 left-16 text-gray-500 hover:text-blue-600 transition cursor-pointer"
            title="Edit"
          >
            <FaPencilAlt size={15} />
          </button>
        )}
        {isAdmin() && (
        <button
          onClick={() => deleteVideo(video.id)}
          className="absolute bottom-4 right-16 text-gray-500 hover:text-red-600 transition cursor-pointer"
          title="Delete"
        >
          <FaTrash size={15} />
        </button>
        )}
        <button
          onClick={() => openResumeModal(video)}
          className="absolute bottom-4 right-4 text-gray-500 hover:text-blue-600 transition cursor-pointer"
          title="View Resume"
        >
          <FaFileAlt size={15} />
        </button>
      </div>
    </div>
  );
};

// Main VideoPlatform Component
const VideoPlatform = () => {
  const [regions, setRegions] = useState(RegionCardData);
  const [industries, setIndustries] = useState(industryList);
  const [videos, setVideos] = useState(videoObj);
  const [regionSearch, setRegionSearch] = useState("");
  const [industrySearch, setIndustrySearch] = useState("");
  const [videoSearch, setVideoSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [transportFilter, setTransportFilter] = useState("");
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const regionSearchRef = useRef(null);
  const industrySearchRef = useRef(null);
  const videoSearchRef = useRef(null);
  const regionScrollRef = useRef(null);
  const industryScrollRef = useRef(null);
  const videoScrollRef = useRef(null);

  // Search Handlers
  const handleRegionSearch = (e) => setRegionSearch(e.target.value.trim());
  const handleIndustrySearch = (e) => setIndustrySearch(e.target.value.trim());
  const handleVideoSearch = (e) => setVideoSearch(e.target.value.trim().toLowerCase());

  // Filter Handlers
  const handleLocationFilter = (e) => setLocationFilter(e.target.value);
  const handleIndustryFilter = (e) => setIndustryFilter(e.target.value);
  const handleCategoryFilter = (e) => setCategoryFilter(e.target.value);
  const handleTransportFilter = (e) => setTransportFilter(e.target.value);

  // Favorite Toggle
  const toggleFavorite = (id) => {
    setVideos((prev) =>
      prev.map((video) =>
        video.id === id ? { ...video, isFavorite: !video.isFavorite } : video
      )
    );
  };

  // Delete Video
  const deleteVideo = (id) => {
    setVideos((prev) => prev.filter((video) => video.id !== id));
  };

  // Open Resume Modal
  const openResumeModal = (video) => {
    setSelectedVideo(video);
    setShowResumeModal(true);
  };

  // Filtered Data
  const filteredRegions = React.useMemo(
    () =>
      regions.filter(
        (city) =>
          (city.city.toLowerCase().includes(regionSearch.toLowerCase()) ||
            city.state.toLowerCase().includes(regionSearch.toLowerCase())) &&
          (locationFilter ? city.city === locationFilter : true)
      ),
    [regionSearch, locationFilter, regions]
  );

  const groupedByState = React.useMemo(
    () =>
      filteredRegions.reduce((acc, city) => {
        if (!acc[city.state]) acc[city.state] = [];
        acc[city.state].push(city);
        return acc;
      }, {}),
    [filteredRegions]
  );

  const filteredIndustries = React.useMemo(
    () =>
      industries.filter(
        (ind) =>
          ind.name.toLowerCase().includes(industrySearch.toLowerCase()) &&
          (locationFilter ? ind.location === locationFilter : true) &&
          (industryFilter ? ind.name === industryFilter : true)
      ),
    [industrySearch, locationFilter, industryFilter, industries]
  );

  const uniqueLocations = [...new Set(regions.map((city) => city.city))];
  const uniqueIndustries = [...new Set(industries.map((ind) => ind.name))];

  const filteredVideos = React.useMemo(
    () =>
      videos.filter(
        (vid) =>
          vid.name.toLowerCase().includes(videoSearch) &&
          (categoryFilter ? vid.category === categoryFilter : true) &&
          (transportFilter ? vid.transport === transportFilter : true) &&
          (locationFilter ? vid.location === locationFilter : true) &&
          (industryFilter ? vid.industry === industryFilter : true)
      ),
    [videoSearch, categoryFilter, transportFilter, locationFilter, industryFilter, videos]
  );

  // Update scroll behavior based on content width
  useEffect(() => {
    const updateScrollClass = (ref, items, cardWidth) => {
      if (!ref.current) return;
      const container = ref.current;
      const contentWidth = items.length * cardWidth;
      const sectionWidth = 0.8 * window.innerWidth; // 80% of viewport width
      if (contentWidth > sectionWidth) {
        container.classList.add('scroll-active');
      } else {
        container.classList.remove('scroll-active');
      }
    };

    updateScrollClass(regionScrollRef, filteredRegions, 278); // 270px card + 8px margin
    updateScrollClass(industryScrollRef, filteredIndustries, 280); // 270px card + 10px margin
    updateScrollClass(videoScrollRef, filteredVideos, 312); // 300px card + 12px margin

    // Re-run on window resize
    const handleResize = () => {
      updateScrollClass(regionScrollRef, filteredRegions, 278);
      updateScrollClass(industryScrollRef, filteredIndustries, 280);
      updateScrollClass(videoScrollRef, filteredVideos, 312);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [filteredRegions, filteredIndustries, filteredVideos]);

  return (
    <div className="font-['Crimson_Pro']">
      {/* Header with TWA Logo */}
      <header className="bg-white py-4 px-8 shadow">
        {/* <a href="https://www.twa.org"> */}
          <img src={Logo} alt="SLU TWA Logo" className="h-12 mx-auto" />
        {/* </a> */}
      </header>

      {/* Regions Section */}
      <section className="bg-gray-100 py-8 px-10 overflow-visible">
        <div className="max-w-8xl mx-auto text-center overflow-visible">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Together, we can invest in second chances and stronger communities.
          </h2>
          <p className="text-xl leading-relaxed mb-8 text-gray-600">
            TWA serves multiple communities across Missouri. Click on a location
            to reach out to the local contact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="relative w-[300px]">
              <input
                ref={regionSearchRef}
                type="text"
                placeholder="Search regions..."
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
                value={regionSearch}
                onChange={handleRegionSearch}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
            <div className="relative w-[200px]">
              <select
                value={locationFilter}
                onChange={handleLocationFilter}
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
              >
                <option value="">All Locations</option>
                {uniqueLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
          </div>
          {Object.entries(groupedByState).map(([state, cities]) => (
            <div key={state} className="mb-8">
              <h2 className="text-[24px] font-bold mb-4 text-[#003DA5]">
                {state}
              </h2>
              <div
                ref={regionScrollRef}
                className="flex flex-nowrap w-full overflow-x-auto overflow-y-visible scroll-smooth scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-[#003DA5]"
              >
                {filteredRegions.map((city, index) => (
                  <CityCard key={`${city.cityId}-${index}`} city={city} />
                ))}
              </div>
            </div>
          ))}
          {filteredRegions.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No regions found.</p>
          )}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-100 py-8 px-10">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003DA5] mb-4 text-center">
            Industries
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="relative w-[300px]">
              <input
                ref={industrySearchRef}
                type="text"
                placeholder="Search industries..."
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
                value={industrySearch}
                onChange={handleIndustrySearch}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
            <div className="relative w-[200px]">
              <select
                value={locationFilter}
                onChange={handleLocationFilter}
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
              >
                <option value="">All Locations</option>
                {uniqueLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
            <div className="relative w-[200px]">
              <select
                value={industryFilter}
                onChange={handleIndustryFilter}
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
              >
                <option value="">All Industries</option>
                {uniqueIndustries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
          </div>
          <div
            ref={industryScrollRef}
            className="flex flex-nowrap w-full overflow-scroll scroll-smooth scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-[#003DA5] scroll-active:overflow-x-auto"
          >
            {filteredIndustries.length > 0 ? (
              filteredIndustries.map((industry, index) => (
                <IndustryCard key={`${industry.id}-${index}`} industry={industry} />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-8">No industries found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-gray-100 py-8 px-10">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003DA5] mb-4 text-center">
            Candidate Videos
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="relative w-[300px]">
              <input
                ref={videoSearchRef}
                type="text"
                placeholder="Search candidates..."
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
                value={videoSearch}
                onChange={handleVideoSearch}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
            <div className="relative w-[200px]">
              <select
                value={locationFilter}
                onChange={handleLocationFilter}
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
              >
                <option value="">All Locations</option>
                {uniqueLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
            <div className="relative w-[200px]">
              <select
                value={industryFilter}
                onChange={handleIndustryFilter}
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
              >
                <option value="">All Industries</option>
                {uniqueIndustries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
            <div className="relative w-[200px]">
              <select
                value={categoryFilter}
                onChange={handleCategoryFilter}
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
              >
                <option value="">All Categories</option>
                <option value="offense">Offense</option>
                <option value="non-offense">Non-Offense</option>
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
            <div className="relative w-[200px]">
              <select
                value={transportFilter}
                onChange={handleTransportFilter}
                className="border border-[#003DA5] bg-white rounded-lg pl-10 pr-4 py-2 text-[#003DA5] text-[14px] font-semibold w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#003DA5]"
              >
                <option value="">All Transport</option>
                <option value="public">Public Transport</option>
                <option value="car">Car</option>
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#003DA5] text-[16px]" />
            </div>
          </div>
          <div
            ref={videoScrollRef}
            className="flex flex-nowrap w-full overflow-scroll scroll-smooth scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-[#003DA5] scroll-active:overflow-x-auto"
          >
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video, index) => (
                <VideoCard
                  key={`${video.id}-${index}`}
                  video={video}
                  toggleFavorite={toggleFavorite}
                  openResumeModal={openResumeModal}
                  deleteVideo={deleteVideo}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-8">No candidates found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        showModal={showResumeModal}
        setShowResumeModal={setShowResumeModal}
        selectedVideo={selectedVideo}
      />
      <Community />
    </div>
  );
};

export default VideoPlatform;