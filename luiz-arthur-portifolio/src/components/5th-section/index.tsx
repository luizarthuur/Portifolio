import { useState } from "react";
import './styles.css';

const freelances = [
  {
    link: "https://hernaneyewear.com.br/quem-usa",
    linkLabel: "Veja o website",
    image: "/Mocks/mock-hernan-eyewear.png",
    alt: "Hernan Eyewear",
    text: "Landing page desenvolvida para mostrar quem utiliza os produtos da marca Hernan Eyewear"
  },
  {
    link: "https://cesarreboques.com/",
    linkLabel: "Veja o website",
    image: "/Mocks/mock-cesar-resgates.png",
    alt: "Cesar Resgates",
    text: "Criação de website para o Cesar Resgates, empresa de resgate de motocicletas, desenvolvimento de website e landing page com WordPress e Elementor, com foco em comunicação clara, design mobile-first e boas práticas de SEO para geração de leads."
  },
  {
    link: "https://hernaneyewear.com.br",
    linkLabel: "Veja o website",
    image: "/Mocks/mock-hernan-eyewear-2.png",
    alt: "Hernan Eyewear",
    text: "Carrossel dinâmico integrado ao GTM e modal de escolha de lentes na página de produto, melhorando a experiência na jornada de compra do usuário"
  },
  {
    link: "https://gabriela-costa-art.wasmer.app/index.php/elementor-10/",
    linkLabel: "Veja o website",
    image: "/Mocks/mock-gabriela.png",
    alt: "Cesar Resgates",
    text: "Criação de landing page para artista visual — estúdio de design e portfólio de pinturas, desenvolvimento com WordPress e Elementor, priorizando apresentação estética, navegação fluida e layout mobile-first que reflete a identidade criativa da artista — transformando a própria página em uma extensão da sua arte."
  },
  
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.25644 1.38454C2.00708 1.28065 1.71967 1.33752 1.52866 1.52853C1.33764 1.71955 1.28078 2.00696 1.38466 2.25632L6.098 13.5697C6.20465 13.8257 6.45866 13.9889 6.73583 13.9796C7.01301 13.9702 7.25545 13.7903 7.34464 13.5277L8.67326 9.61594L12.1953 13.138C12.4557 13.3984 12.8778 13.3984 13.1381 13.138C13.3985 12.8777 13.3985 12.4555 13.1381 12.1952L9.61606 8.67313L13.5278 7.34452C13.7904 7.25533 13.9703 7.01288 13.9797 6.73571C13.989 6.45853 13.8258 6.20453 13.5698 6.09788L2.25644 1.38454ZM6.64988 11.4273L3.23803 3.23791L11.4274 6.64976L8.17232 7.75535C7.97615 7.82198 7.82211 7.97603 7.75548 8.1722L6.64988 11.4273Z" fill="#12F7D6"/>
  </svg>
);

export default function FifthSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? freelances.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === freelances.length - 1 ? 0 : i + 1));

  const freelance = freelances[current];

  return (
    <>
      <section className='fifth-section'>
        <div className='fourth-section-initial-content'>
        <div>
                <svg width="1280" height="146" viewBox="0 0 1664 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_33_411)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M816 16C816 7.16344 823.163 0 832 0C840.837 0 848 7.16344 848 16V28C848 36.8366 840.837 44 832 44H830V43.8762C822.107 42.892 816 36.1592 816 28V16ZM832 40C838.627 40 844 34.6274 844 28V16C844 9.37258 838.627 4 832 4C825.373 4 820 9.37258 820 16V28C820 34.6274 825.373 40 832 40Z" fill="#12F7D6"/>
                <path d="M833.333 9.16663V16.5H830.667V9.16663H833.333Z" fill="#12F7D6"/>
                </g>
                <path d="M832.5 60C832.5 59.7239 832.276 59.5 832 59.5C831.724 59.5 831.5 59.7239 831.5 60H832.5ZM832 142.887L834.887 140L832 137.113L829.113 140L832 142.887ZM831.5 62.8571C831.5 63.1333 831.724 63.3571 832 63.3571C832.276 63.3571 832.5 63.1333 832.5 62.8571H831.5ZM832.5 68.5714C832.5 68.2953 832.276 68.0714 832 68.0714C831.724 68.0714 831.5 68.2953 831.5 68.5714H832.5ZM831.5 74.2857C831.5 74.5619 831.724 74.7857 832 74.7857C832.276 74.7857 832.5 74.5619 832.5 74.2857H831.5ZM832.5 80C832.5 79.7239 832.276 79.5 832 79.5C831.724 79.5 831.5 79.7239 831.5 80H832.5ZM831.5 85.7143C831.5 85.9904 831.724 86.2143 832 86.2143C832.276 86.2143 832.5 85.9904 832.5 85.7143H831.5ZM832.5 91.4286C832.5 91.1524 832.276 90.9286 832 90.9286C831.724 90.9286 831.5 91.1524 831.5 91.4286H832.5ZM831.5 97.1429C831.5 97.419 831.724 97.6429 832 97.6429C832.276 97.6429 832.5 97.419 832.5 97.1429H831.5ZM832.5 102.857C832.5 102.581 832.276 102.357 832 102.357C831.724 102.357 831.5 102.581 831.5 102.857H832.5ZM831.5 108.571C831.5 108.848 831.724 109.071 832 109.071C832.276 109.071 832.5 108.848 832.5 108.571H831.5ZM832.5 114.286C832.5 114.01 832.276 113.786 832 113.786C831.724 113.786 831.5 114.01 831.5 114.286H832.5ZM831.5 120C831.5 120.276 831.724 120.5 832 120.5C832.276 120.5 832.5 120.276 832.5 120H831.5ZM832.5 125.714C832.5 125.438 832.276 125.214 832 125.214C831.724 125.214 831.5 125.438 831.5 125.714H832.5ZM831.5 131.429C831.5 131.705 831.724 131.929 832 131.929C832.276 131.929 832.5 131.705 832.5 131.429H831.5ZM832.5 137.143C832.5 136.867 832.276 136.643 832 136.643C831.724 136.643 831.5 136.867 831.5 137.143H832.5ZM831.5 60V62.8571H832.5V60H831.5ZM831.5 68.5714V74.2857H832.5V68.5714H831.5ZM831.5 80V85.7143H832.5V80H831.5ZM831.5 91.4286V97.1429H832.5V91.4286H831.5ZM831.5 102.857V108.571H832.5V102.857H831.5ZM831.5 114.286V120H832.5V114.286H831.5ZM831.5 125.714V131.429H832.5V125.714H831.5ZM831.5 137.143V140H832.5V137.143H831.5ZM833 60C833 59.4477 832.552 59 832 59C831.448 59 831 59.4477 831 60H833ZM832 145.774L837.774 140L832 134.226L826.226 140L832 145.774ZM831 62.8571C831 63.4094 831.448 63.8571 832 63.8571C832.552 63.8571 833 63.4094 833 62.8571H831ZM833 68.5714C833 68.0191 832.552 67.5714 832 67.5714C831.448 67.5714 831 68.0191 831 68.5714H833ZM831 74.2857C831 74.838 831.448 75.2857 832 75.2857C832.552 75.2857 833 74.838 833 74.2857H831ZM833 80C833 79.4477 832.552 79 832 79C831.448 79 831 79.4477 831 80H833ZM831 85.7143C831 86.2666 831.448 86.7143 832 86.7143C832.552 86.7143 833 86.2666 833 85.7143H831ZM833 91.4286C833 90.8763 832.552 90.4286 832 90.4286C831.448 90.4286 831 90.8763 831 91.4286H833ZM831 97.1429C831 97.6951 831.448 98.1429 832 98.1429C832.552 98.1429 833 97.6951 833 97.1429H831ZM833 102.857C833 102.305 832.552 101.857 832 101.857C831.448 101.857 831 102.305 831 102.857H833ZM831 108.571C831 109.124 831.448 109.571 832 109.571C832.552 109.571 833 109.124 833 108.571H831ZM833 114.286C833 113.733 832.552 113.286 832 113.286C831.448 113.286 831 113.733 831 114.286H833ZM831 120C831 120.552 831.448 121 832 121C832.552 121 833 120.552 833 120H831ZM833 125.714C833 125.162 832.552 124.714 832 124.714C831.448 124.714 831 125.162 831 125.714H833ZM831 131.429C831 131.981 831.448 132.429 832 132.429C832.552 132.429 833 131.981 833 131.429H831ZM833 137.143C833 136.591 832.552 136.143 832 136.143C831.448 136.143 831 136.591 831 137.143H833ZM831 60V62.8571H833V60H831ZM831 68.5714V74.2857H833V68.5714H831ZM831 80V85.7143H833V80H831ZM831 91.4286V97.1429H833V91.4286H831ZM831 102.857V108.571H833V102.857H831ZM831 114.286V120H833V114.286H831ZM831 125.714V131.429H833V125.714H831ZM831 137.143V140H833V137.143H831Z" fill="white"/>
                <defs>
                <clipPath id="clip0_33_411">
                <rect width="32" height="44" fill="white" transform="translate(816)"/>
                </clipPath>
                </defs>
                </svg>
        </div>

          <h1 className='third-section-title'>Freelances</h1>
          <svg width="159" height="11" viewBox="0 0 159 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-2.0504e-05 5.33325C-2.0504e-05 8.27877 2.38779 10.6666 5.33331 10.6666C8.27883 10.6666 10.6666 8.27877 10.6666 5.33325C10.6666 2.38773 8.27883 -8.15392e-05 5.33331 -8.15392e-05C2.38779 -8.15392e-05 -2.0504e-05 2.38773 -2.0504e-05 5.33325ZM148 5.33325C148 8.27877 150.388 10.6666 153.333 10.6666C156.279 10.6666 158.667 8.27877 158.667 5.33325C158.667 2.38773 156.279 -8.15392e-05 153.333 -8.15392e-05C150.388 -8.15392e-05 148 2.38773 148 5.33325ZM5.33331 5.33325V6.33325H153.333V5.33325V4.33325H5.33331V5.33325Z" fill="#12F7D6"/>
          </svg>
          <p className='fourth-section-description'>Alguns dos freelances que tive o prazer de desenvolver ao longo da minha trajetória.</p>
        </div>

        <div className='fourth-section-projects-container'>
          <div className="carousel-wrapper">

            <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Freelance anterior">
              <span className="carousel-arrow-chevron" />
            </button>

            <div className="carousel-card" key={current}>
              <a href={freelance.link} target="_blank" rel="noopener noreferrer" className="carousel-link fourth-section-project-link">
                {freelance.linkLabel}
                <ArrowIcon />
              </a>
              <img
                src={freelance.image}
                alt={freelance.alt}
                className="carousel-image fourth-section-project-image"
              />
              <p className="carousel-title-text">O que foi feito neste freelance?</p>
              <p className="carousel-card-text">{freelance.text}</p>
            </div>

            <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Próximo freelance">
              <span className="carousel-arrow-chevron" />
            </button>

          </div>

          <div className="carousel-dots">
            {freelances.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para freelance ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}