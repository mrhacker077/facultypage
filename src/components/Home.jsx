import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";
// Importing faculty images
import pradeep from "../faculty/pradeep.jpg";
import akshitha from "../faculty/akshitha.jpg";
import lakshmikanth from "../faculty/lakshmikanth.jpg";
import sheethal from "../faculty/sheethal.jpg";
import akshatha from "../faculty/akshatha.jpg";
import likitha from "../faculty/likitha.jpg";
import akshatha2 from "../faculty/akshatha2.jpg";
import devika from "../faculty/devika.jpg";
import harisha from "../faculty/harisha.jpg";
import pavithra from "../faculty/pavithra.jpg";
import mridula from "../faculty/mridula.jpg";
import narasimha from "../faculty/narasimha.jpg";
import niveditha from "../faculty/niveditha.jpg";
import jayashree from "../faculty/jayashree.jpg";
import shyamaraja from "../faculty/shyamaraja.jpg";
import archana from "../faculty/archana.jpg";
import vishwanatha from "../faculty/vishwanatha.jpg";
import santosh from "../faculty/santosh.jpg";
import udhaya from "../faculty/udhaya.jpg";
import meer from "../faculty/meer.jpg";
// import latheef from "../faculty/latheef.jpg";
import poornima from "../faculty/poornima.jpg";
import priya from "../faculty/priya.jpg";
import thripthika from "../faculty/thripthika.jpg";
import supreetha from "../faculty/supreetha.jpg";
import vasanthi2 from "../faculty/vasanthi2.jpg";
import bhagya from "../faculty/bhagya.jpg";
import dhanyashree from "../faculty/dhanyashree.jpg";
import josline from "../faculty/josline.jpg";
import praveena from "../faculty/praveena.jpg";
import kumudini from "../faculty/kumudini.jpg";
import tahaseen from "../faculty/tahaseen.jpg";
import saritha from "../faculty/saritha.jpg";
import chithrakshi from "../faculty/chithrakshi.jpg";
import nandini from "../faculty/nandini.jpg";
import mamatha from "../faculty/mamatha.jpg";

const departments = [
  {
    name: "Computer Science & Engineering",
    link: "https://mrhacker077.github.io/hodportfolio/",
    faculty: [
      { name: "Pradeep Kumar H M", qualification: "B.E", image: pradeep },
      { name: "Akshitha V", qualification: "B.E, M.Tech", image: akshitha },
      { name: "Lakshmikanth", qualification: "B.E", image: lakshmikanth },
      { name: "M. Sheethal J", qualification: "B.E", image: sheethal },
      { name: "Akshatha D", qualification: "B.E", image: akshatha },
      { name: "Likitha K", qualification: "B.E", image: likitha },
    ],
  },
  {
    name: "Chemical Engineering",
    link: "https://mrhacker077.github.io/hod1portfolio/",
    faculty: [
      { name: "Akshatha K", qualification: "M.Sc", image: akshatha2 },
      { name: "Devika", qualification: "B.E", image: devika },
    ],
  },
  {
    name: "Mechanical Engineering",
    link: "https://mrhacker077.github.io/hod2portfolio/",
    faculty: [
      { name: "Harisha C P", qualification: "B.E, M.Tech", image: harisha },
      { name: "Pavithra Kumara M", qualification: "M.Tech", image: pavithra },
      { name: "Mridula V", qualification: "B.E, M.Tech", image: mridula },
      { name: "Narasimha N Prabhu", qualification: "B.E", image: narasimha },
      { name: "Niveditha", qualification: "B.E", image: niveditha},
    ],
  },
  {
    name: "Civil Engineering",
    link: "https://mrhacker077.github.io/hodportfolio4/",
    faculty: [
      { name: "Jayashree", qualification: "B.E, M.Tech", image: jayashree},
      { name: "Shyamaraja N", qualification: "B.E,(MS research)", image: shyamaraja },
      { name: "Archana J", qualification: "B.E, M.Tech", image: archana },
      { name: "Vishwanatha Mane", qualification: "B.E, M.Tech", image: vishwanatha },
      { name: "Santosh Jude Fernandes", qualification: "B.E, M.Tech", image: santosh },
    ],
  },
  {
    name: "Automobile Engineering",
    link: "https://mrhacker077.github.io/hodportfolio5/",
    faculty: [
      { name: "A.Udhaya kumar", qualification: "M.E, Ph.D", image: udhaya },
      { name: "Meer Mukarram", qualification: "B.E", image: meer },
    ],
  },
  {
    name: "Electronics & Communication Engineering",
    link: "https://mrhacker077.github.io/hodportfolio6/",
    faculty: [
      // { name: "Latheef", qualification: "B.E", image: latheef },
      { name: "Poornima K", qualification: "M.Tech(DECS)", image: poornima },
    ],
  },
  {
    name: "Polymer Technology",
    link: "https://mrhacker077.github.io/hodportfolio7/",
    faculty: [
      { name: "Savitha Priya Pinto ", qualification: "M.Sc", image: priya },
    
    ],
  },
  {
    name: "Electrical & Electronics Engineering",
    link: "https://mrhacker077.github.io/portfolio8/",
    faculty: [
      { name: "Thripthika M P", qualification: "M.Tech", image: thripthika },
      { name: "Supreetha K S", qualification: "B.E", image: supreetha},
      { name: "Vasanthi Vinay", qualification: "B.E", image: vasanthi2 },
      { name: "Bhagya santhosh", qualification: "B.E", image: bhagya },
      { name: "Dhanyashree H K", qualification: "B.E", image: dhanyashree },
      { name: "Josline Priya Dsouza", qualification: "M.Tech", image: josline },
      { name: "Praveena C H", qualification: "B.E", image: praveena },
    ],
  },
  {
    name: "Science and Humanities",
    faculty: [
      { name: "Kumudini M J", qualification: "M.Sc", image: kumudini },
      { name: "Tahaseen Ara", qualification: "M.A, B.Ed", image: tahaseen },
      { name: "Saritha H J", qualification: "M.A, B.Ed", image: saritha },
      { name: "Chithrakshi Prathap", qualification: "M.Sc", image: chithrakshi },
      { name: "Nandini", qualification: "M.Sc", image: nandini },
      { name: "Mamatha", qualification: "BA,MA,B.Ed", image: mamatha },
    ],
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openFacultyPage = (e, dept) => {
    e.stopPropagation();
    navigate("/faculty", { state: { department: dept.name, faculty: dept.faculty } });
  };

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "130px 20px",
        color: "white",
      }}
    >
      <div className="hod-container">
        {departments.map((dept, index) => (
          <div key={index} className="hod-card" onClick={() => toggleDropdown(index)}>
            <h3>{dept.name}</h3>
            {activeIndex === index && (
              <div className="dropdown">
                {dept.link && ( 
                  <a href={dept.link} target="_blank" rel="noopener noreferrer">
                    HOD Portfolio
                  </a>
                )}
                <button onClick={(e) => openFacultyPage(e, dept)}>Faculty Details</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
