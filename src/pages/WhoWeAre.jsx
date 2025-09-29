// import React from "react";
// import { Calendar, Users, TrendingUp, Award, MapPin, Building } from "lucide-react";
// import { timelineEvents,institutions,testimonials, impactStats } from "../data/whoWeAreData";
// import Community from "./Community";

// const WhoWeAre = () => {
//   return (
//     <div className="font-serif min-h-screen" style={{ fontFamily: "'Crimson Pro', serif" }}>
//       {/* Header */}
//       <header className="text-center py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative z-10">
//           <h1 className="text-7xl font-bold mb-8 tracking-wide">WHO WE ARE</h1>
//           <p className="text-xl max-w-4xl mx-auto leading-relaxed px-6">
//             SLU TWA serves as a practical extension of Saint Louis University's Jesuit mission, embodying a faith that does justice by directly addressing systemic inequalities and empowering individuals through education and employment. The SLU Transformative Workforce Academy (TWA) promotes human dignity, social equity, and inclusion.
//           </p>
//         </div>
//       </header>

//       {/* Navigation Cards */}
//       <section className="py-16 px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-600">
//               <Users className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-2xl font-bold mb-3">MISSION</h3>
//               <p className="text-gray-600">Empowering justice-involved individuals through comprehensive support and meaningful employment opportunities.</p>
//             </div>
//             <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-green-600">
//               <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
//               <h3 className="text-2xl font-bold mb-3">IMPACT</h3>
//               <p className="text-gray-600">Measurable results in employment placement, retention, and community transformation.</p>
//             </div>
//             <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-purple-600">
//               <Award className="w-12 h-12 text-purple-600 mb-4" />
//               <h3 className="text-2xl font-bold mb-3">TEAM</h3>
//               <p className="text-gray-600">Dedicated professionals passionate about creating pathways to success.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-6xl font-bold mb-12 text-center text-gray-800">MISSION</h2>
//           <div className="bg-blue-50 rounded-2xl p-12 mb-16">
//             <p className="text-xl leading-relaxed text-center text-gray-700 mb-8">
//               The Transformative Workforce Academy is part of a Saint Louis University interdepartmental collaboration designed to support and integrate those in Missouri most at risk of and impacted by incarceration so we can all live fruitful, prison-free lives.
//             </p>
//             <p className="text-lg leading-relaxed text-center text-gray-600">
//               TWA's focus is helping those who are justice-involved, especially those recently coming out of prison, find and retain meaningful employment.
//             </p>
//           </div>

//           {/* History Timeline */}
//           <div className="mb-16">
//             <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">HISTORY</h3>
//             <div className="space-y-8">
//               {timelineEvents.map((event, index) => (
//                 <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
//                   <div className="flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full text-2xl font-bold flex-shrink-0">
//                     {event.year}
//                   </div>
//                   <div>
//                     <h4 className="text-2xl font-bold mb-3 text-gray-800">{event.title}</h4>
//                     <p className="text-gray-600 leading-relaxed">{event.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* MO DOC Institutions */}
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white mb-16">
//             <h4 className="text-3xl font-bold mb-8 text-center">Missouri Department of Corrections Institutions</h4>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {institutions.map((institution, index) => (
//                 <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//                   <div className="flex items-center gap-3">
//                     <Building className="w-6 h-6" />
//                     <span className="text-sm font-medium">{institution}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Vision */}
//           <div>
//             <h3 className="text-4xl font-bold mb-8 text-center text-gray-800">VISION</h3>
//             <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12">
//               <p className="text-xl leading-relaxed text-center text-gray-700">
//                 SLU's initiatives engage the whole lifespan, including prevention, in-prison, and reentry services. Through research, information-sharing, and direct services in areas such as education, legal defense, life skills training, and employment placement, SLU seeks to address the root causes of crime by providing support and resources to those who all too often see no alternative.
//               </p>
//               <p className="text-lg leading-relaxed text-center text-gray-600 mt-6">
//                 As part of that effort, TWA's focus is preparing and connecting justice-involved jobseekers with vetted fair chance employers to find and retain meaningful employment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       {/* <section className="py-20 px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-6xl font-bold mb-8 text-center text-gray-800">IMPACT</h2> */}

//           {/* Statistics */}
//           {/* <div className="mb-16">
//             <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">STATISTICS</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {impactStats.map((stat, index) => (
//                 <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
//                   <div className="text-4xl font-bold text-blue-600 mb-3">{stat.number}</div>
//                   <h4 className="text-xl font-semibold mb-2 text-gray-800">{stat.label}</h4>
//                   <p className="text-gray-600 text-sm">{stat.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div> */}

//           {/* Testimonials */}
//           {/* <div>
//             <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">TESTIMONIALS</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
//                   <div className="text-4xl text-blue-600 mb-4">"</div>
//                   <p className="text-gray-700 leading-relaxed mb-6 italic">{testimonial.quote}</p>
//                   <div className="border-t pt-4">
//                     <div className="font-semibold text-gray-800">{testimonial.name}</div>
//                     <div className="text-sm text-gray-600">{testimonial.role}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section> */}

//  <section className="py-20 px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-6xl font-bold mb-8 text-center text-gray-800">IMPACT</h2>

//           {/* Employer Benefits */}
//           <div className="mb-16">
//             <div className="bg-white rounded-2xl p-12 shadow-lg mb-12">
//               <h3 className="text-4xl font-bold mb-8 text-center text-gray-800">EMPLOYERS</h3>
//               <p className="text-lg leading-relaxed text-center text-gray-700 mb-8 max-w-4xl mx-auto">
//                 We recruit employers from a wide variety of industries and can provide training, creative troubleshooting, and trauma-informed approaches that benefit all employees. Now more than ever, employers across the country are reexamining their hiring policies to engage justice-involved applicants. These companies are seeing firsthand what research has consistently shown: that second chance employment not only benefits justice-involved individuals and their families, but also contributes to the success of businesses and communities.
//               </p>
//               <p className="text-xl font-semibold text-center text-blue-600 max-w-3xl mx-auto">
//                 Second-chance employers have potential to save $3,146 per hire and discover some of the hardest working and most loyal employees, hiring justice-involved talent has never been a smarter business move.
//               </p>
//             </div>

//             {/* Employer Process */}
//             <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white mb-12">
//               <h4 className="text-3xl font-bold mb-8 text-center">Our Employer Partner Process</h4>
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
//                   <p className="text-sm leading-relaxed">We meet virtually or in person to hear about your company, your talent needs, and your hiring process.</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
//                   <p className="text-sm leading-relaxed">We connect you with SLU TWA candidates for your consideration.</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
//                   <p className="text-sm leading-relaxed">We provide support for you and SLU TWA jobseekers throughout the hiring process and beyond.</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
//                   <p className="text-sm leading-relaxed">TWA works with employers to improve public safety and reduce recidivism together.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Statistics */}
//           <div className="mb-16">
//             <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">KEY STATISTICS</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {impactStats.map((stat, index) => (
//                 <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
//                   <div className="text-4xl font-bold text-blue-600 mb-3">{stat.number}</div>
//                   <h4 className="text-xl font-semibold mb-2 text-gray-800">{stat.label}</h4>
//                   <p className="text-gray-600 text-sm">{stat.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonials */}
//           <div>
//             <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">TESTIMONIALS</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
//                   <div className="text-4xl text-blue-600 mb-4">"</div>
//                   <p className="text-gray-700 leading-relaxed mb-6 italic">{testimonial.quote}</p>
//                   <div className="border-t pt-4">
//                     <div className="font-semibold text-gray-800">{testimonial.name}</div>
//                     <div className="text-sm text-gray-600">{testimonial.role}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section
//       <section className="py-20 px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-6xl font-bold mb-12 text-center text-gray-800">TEAM</h2>
//           <p className="mb-16 text-center text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
//             Our team is composed of dedicated professionals passionate about empowering justice-involved
//             individuals and fostering equitable employment opportunities.
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamMembers.map((member, idx) => (
//               <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
//                 <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
//                   {member.name.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
//                 <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
//                 <div className="space-y-2 text-sm text-gray-600">
//                   <p><strong>Email:</strong> {member.email}</p>
//                   <p><strong>Phone:</strong> {member.phone}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Contact Section */}
//       {/* <section className="py-20 px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-6xl font-bold mb-8">CONTACT US</h2>
//           <p className="mb-16 text-xl leading-relaxed">
//             Get in touch with our team for questions, collaborations, or ways to support our mission.
//           </p>

//           <div className="grid md:grid-cols-2 gap-8">
//             {teamMembers.map((member, idx) => (
//               <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
//                 <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
//                 <div className="space-y-2 text-left">
//                   <p><strong>Role:</strong> {member.role}</p>
//                   <p><strong>Email:</strong> {member.email}</p>
//                   <p><strong>Phone:</strong> {member.phone}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//       <Community />
//     </div>
//   );
// };

// export default WhoWeAre;

import React from "react";
import {
  Users,
  TrendingUp,
  Award,
  MapPin,
  Building,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import {
  timelineEvents,
  institutions,
  programUpdates,
  sponsors,
  updatedImpactStats,
  jobFairStats,
  jobFairSponsors,
  updatedTestimonials,
} from "../data/whoWeAreData";
import Community from "./Community";

const WhoWeAre = () => {
  return (
    <div
      className="font-serif min-h-screen"
      style={{ fontFamily: "'Crimson Pro', serif" }}
    >
      {/* Header */}
      <header className="text-center py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-7xl font-bold mb-8 tracking-wide">WHO WE ARE</h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed px-6 mb-8">
            SLU TWA serves as a practical extension of Saint Louis University's
            Jesuit mission, embodying a faith that does justice by directly
            addressing systemic inequalities and empowering individuals through
            education and employment. The SLU Transformative Workforce Academy
            (TWA) promotes human dignity, social equity, and inclusion.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold">
              SLU TWA prepares and connects justice-involved jobseekers with
              vetted second chance employers to help them find and retain
              meaningful employment
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Cards */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-600"
              onClick={() => (window.location.href = "#mission")}
            >
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">MISSION</h3>
              <p className="text-gray-600">
                Empowering justice-involved individuals through comprehensive
                support and meaningful employment opportunities.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-green-600"
              onClick={() => (window.location.href = "#impact")}
            >
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">IMPACT</h3>
              <p className="text-gray-600">
                Measurable results in employment placement, retention, and
                community transformation.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-purple-600"
              onClick={() => (window.location.href = "#team")}
            >
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">TEAM</h3>
              <p className="text-gray-600">
                Dedicated professionals passionate about creating pathways to
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto" id="mission">
          <h2 className="text-6xl font-bold mb-12 text-center text-gray-800">
            MISSION
          </h2>
          <div className="bg-blue-50 rounded-2xl p-12 mb-16">
            <p className="text-xl leading-relaxed text-center text-gray-700 mb-8">
              The Transformative Workforce Academy is part of a Saint Louis
              University interdepartmental collaboration designed to support and
              integrate those in Missouri most at risk of and impacted by
              incarceration so we can all live fruitful, prison-free lives.
            </p>
            <p className="text-lg leading-relaxed text-center text-gray-600">
              TWA's focus is helping those who are justice-involved, especially
              those recently coming out of prison, find and retain meaningful
              employment.
            </p>
          </div>

          {/* Program Updates Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-8 text-center text-gray-800">
              WHAT'S WORKING - PROGRAM UPDATES
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {programUpdates.map((update, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{update}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* History Timeline */}
          <div className="mb-16" id="history">
            <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">
              HISTORY
            </h3>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full text-2xl font-bold flex-shrink-0">
                    {event.year}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-gray-800">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MO DOC Institutions */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white mb-16">
            <h4 className="text-3xl font-bold mb-8 text-center">
              Missouri Department of Corrections Institutions
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {institutions.map((institution, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-6 h-6" />
                    <span className="text-sm font-medium">{institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div>
            <h3
              className="text-4xl font-bold mb-8 text-center text-gray-800"
              id="vision"
            >
              VISION
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12">
              <p className="text-xl leading-relaxed text-center text-gray-700">
                SLU's initiatives engage the whole lifespan, including
                prevention, in-prison, and reentry services. Through research,
                information-sharing, and direct services in areas such as
                education, legal defense, life skills training, and employment
                placement, SLU seeks to address the root causes of crime by
                providing support and resources to those who all too often see
                no alternative.
              </p>
              <p className="text-lg leading-relaxed text-center text-gray-600 mt-6">
                As part of that effort, TWA's focus is preparing and connecting
                justice-involved jobseekers with vetted fair chance employers to
                find and retain meaningful employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-8 bg-gray-50" id="impact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-8 text-center text-gray-800">
            IMPACT
          </h2>

          {/* Key Statistics Since 2020 */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-8 text-center text-gray-800">
              SINCE 2020
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {updatedImpactStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-3">
                    {stat.number}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Job Fair Results */}
            <div className="bg-white rounded-2xl p-12 shadow-lg mb-12">
              <h4 className="text-3xl font-bold mb-8 text-center text-gray-800">
                JOB FAIR RESULTS
              </h4>{" "}
              {/*(10/25/22 + 04/25/23)*/}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {jobFairStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-blue-50 rounded-xl p-6"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <h5 className="text-lg font-semibold mb-1 text-gray-800">
                      {stat.label}
                    </h5>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center bg-green-50 rounded-xl p-6">
                <p className="text-lg font-semibold text-green-800 mb-2">
                  100% of jobseekers who engaged with employers had at least 1
                  employer interested in next steps
                </p>
              </div>
            </div>
          </div>

          {/* Employer Benefits */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-12 shadow-lg mb-12">
              <h3 className="text-4xl font-bold mb-8 text-center text-gray-800">
                EMPLOYERS
              </h3>
              <p className="text-lg leading-relaxed text-center text-gray-700 mb-8 max-w-4xl mx-auto">
                We recruit employers from a wide variety of industries and can
                provide training, creative troubleshooting, and trauma-informed
                approaches that benefit all employees. Now more than ever,
                employers across the country are reexamining their hiring
                policies to engage justice-involved applicants. These companies
                are seeing firsthand what research has consistently shown: that
                second chance employment not only benefits justice-involved
                individuals and their families, but also contributes to the
                success of businesses and communities.
              </p>
              <p className="text-xl font-semibold text-center text-blue-600 max-w-3xl mx-auto">
                Second-chance employers have potential to save $3,146 per hire
                and discover some of the hardest working and most loyal
                employees, hiring justice-involved talent has never been a
                smarter business move.
              </p>
            </div>

            {/* Employer Process */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white mb-12">
              <h4 className="text-3xl font-bold mb-8 text-center">
                Our Employer Partner Process
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <p className="text-sm leading-relaxed">
                    We meet virtually or in person to hear about your company,
                    your talent needs, and your hiring process.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <p className="text-sm leading-relaxed">
                    We connect you with SLU TWA candidates for your
                    consideration.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <p className="text-sm leading-relaxed">
                    We provide support for you and SLU TWA jobseekers throughout
                    the hiring process and beyond.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <p className="text-sm leading-relaxed">
                    TWA works with employers to improve public safety and reduce
                    recidivism together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">
              TESTIMONIALS
            </h3>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-8 w-max">
                {updatedTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow w-80 flex-shrink-0"
                  >
                    <div className="text-4xl text-blue-600 mb-4">"</div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div>
            <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">
              MADE POSSIBLE BY
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">
                  Program Partners
                </h4>
                <div className="space-y-3">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 rounded-lg p-3 text-center"
                    >
                      <span className="font-medium text-gray-700">
                        {sponsor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">
                  Job Fair Sponsors
                </h4>
                <div className="space-y-3">
                  {jobFairSponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-lg p-3 text-center"
                    >
                      <span className="font-medium text-gray-700">
                        {sponsor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">LET'S GET TO WORK</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join us in creating meaningful employment opportunities and
            transforming lives in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://slu.edu/secondchance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Visit slu.edu/secondchance
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="mailto:TWA@SLU.EDU"
              className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              Contact Us
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 px-8 bg-gray-50">
        {/* New Location */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white mb-16">
          <h4 className="text-3xl font-bold mb-8 text-center">
            NEW LOCATION ON SLU'S CAMPUS
          </h4>
          <div className="text-center max-w-2xl mx-auto">
            <h5 className="text-2xl font-bold mb-4">BROUSTER HALL</h5>
            <div className="space-y-3 text-lg">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6" />
                <span>3840 LINDELL BLVD. ST. LOUIS, MO 63108</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                <span>(314) 977-5498</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                <span>TWA@SLU.EDU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <Community />
      </section>
    </div>
  );
};

export default WhoWeAre;
