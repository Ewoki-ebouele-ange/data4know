import React, {useState,useEffect} from 'react';
import './App.css';
import Logo from './Assets/low logo blue.png'
import {BiMenu} from "react-icons/bi"
import {FaChevronRight} from "react-icons/fa"

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const menu_btn = document.querySelector(".menu_btn");

    menu_btn.addEventListener("click", toggleMenu);

    return () => {
      menu_btn.removeEventListener("click", toggleMenu);
    };
  }, [isMenuOpen]);

  useEffect(() => {


    const header = document.querySelector("header");

    window.addEventListener('resize', function() {
      if (header) {
        if (window.innerWidth <= 930 ){
          header.classList = "sticky"
        }else {
          header.classList = ""
        }
      }
    })

    window.addEventListener("scroll", function() {
      
      if (header) {
        if (window.scrollY > 0) {
          header.classList = 'sticky'
          
        }  else if (window.innerWidth <= 930 ){
          header.classList = "sticky"
        }else {
          header.classList = ""
        }
        
      }});
  }, []); // [] signifie que cet effet s'exécute une seule fois après le montage du composant
 
  return (
    <div className="App">
      <header className="navbar">
        <div className="img_data4know">
          <img src={Logo} alt="Dataforknow" />
        </div>
        <div className="links">
            <ul className={`${isMenuOpen ? "actived" : ""}`}>
              <li><a href="#">Services</a></li>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Équipe</a></li>
              <li><a href="#">Nous contacter</a></li>
              <li><a href="#">English</a></li>
            </ul>
        </div>
        <div className="menu_btn">
          Menu <span> <BiMenu /></span>
        </div> 
      </header>
      <div className="banner">
          <div className="lib_pot">
            <p className='lib'>Nous libérons le <span className='potentiel'> potentiel</span> <br /> de votre organisation grâce <br /> à l'intelligence artificielle.</p>
            <p className='avec'>Avec <u>vous</u>. <br /> Un pas à la <u>fois</u>.</p>
          </div>
          <div className='concret'>
            <p>Baseline concrétise vos ambitions avec <br />
               des solutions sur mesure qui vous rendent <br />
               plus <strong>productif</strong> , <strong>innovant</strong>  et <strong>efficace</strong> .
            </p>
            <span className='bta'><a href="#"> <span>Planifiez votre consultation gratuite</span> <FaChevronRight /></a></span>
          </div>
      </div>   

      <div className="services">
        <h1>NOS SERVICES</h1>
        <p>Baseline vous accompagne des premiers pas de votre transformation numérique jusqu'à votre adoption de l'intelligence artificielle. À chaque étape, nous vous offrons un service adapté à vos besoins.</p>
        <div className="service_card">
          <div className="card_serv">
            <span className='title'>Réflexion stratégique</span>
            <a class="services-desc-link" href="#">
              <div class="services-desc-brackets"></div>
              <div class="services-desc-bg"></div>
              <div class="services-desc-content d-flex align-items-center py-3 px-4">Analysez vos besoins et planifiez la prochaine étape de votre transformation numérique.</div>
            </a>
          </div>
          <div className="card_serv">
            <span className='title'>Réflexion stratégique</span>
            <a class="services-desc-link" href="#">
              <div class="services-desc-brackets"></div>
              <div class="services-desc-bg"></div>
              <div class="services-desc-content d-flex align-items-center py-3 px-4">Analysez vos besoins et planifiez la prochaine étape de votre transformation numérique.</div>
            </a>
          </div>
          <div className="card_serv">
            <span className='title'>Réflexion stratégique</span>
            <a class="services-desc-link" href="#">
              <div class="services-desc-brackets"></div>
              <div class="services-desc-bg"></div>
              <div class="services-desc-content d-flex align-items-center py-3 px-4">Analysez vos besoins et planifiez la prochaine étape de votre transformation numérique.</div>
            </a>
          </div>
          <div className="card_serv">
            <span className='title'>Réflexion stratégique</span>
            <a class="services-desc-link" href="#">
              <div class="services-desc-brackets"></div>
              <div class="services-desc-bg"></div>
              <div class="services-desc-content d-flex align-items-center py-3 px-4">Analysez vos besoins et planifiez la prochaine étape de votre transformation numérique.</div>
            </a>
          </div>
          <div className="card_serv">
            <span className='title'>Réflexion stratégique</span>
            <a class="services-desc-link" href="#">
              <div class="services-desc-brackets"></div>
              <div class="services-desc-bg"></div>
              <div class="services-desc-content d-flex align-items-center py-3 px-4">Analysez vos besoins et planifiez la prochaine étape de votre transformation numérique.</div>
            </a>
          </div>
          <div className="card_serv">
            <span className='title'>Réflexion stratégique</span>
            <a class="services-desc-link" href="#">
              <div class="services-desc-brackets"></div>
              <div class="services-desc-bg"></div>
              <div class="services-desc-content">Analysez vos besoins et planifiez la prochaine étape de votre transformation numérique.</div>
            </a>
          </div>
        </div>
        <div className='voy'>
          <div className='voyez'><span>Voyez notre offre de services détaillée</span> <FaChevronRight /></div> 
        </div>
      </div>

    </div>
  );
}

export default App;
