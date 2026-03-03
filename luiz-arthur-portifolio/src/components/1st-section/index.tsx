import './styles.css';

export default function FirstSection() {
    return (
        <section className="first-section">
            <h1 className='first-section-title'>Desenvolvedor Full Stack</h1>
            <div className="first-section-container">

                 <div className="first-section-card-info">
                    <div className="first-section-card-info-content">
                        <img src="/dev-image.png" alt="Imagem de perfil do desenvolvedor" className="first-section-card-info-content-image" />
                        <h2 className="first-section-card-info-content-name">Luiz Arthur</h2>
                        <p className="first-section-card-info-content-job">Desenvolvedor Full Stack</p>
                    </div>

                    <div className="first-section-card-info-social-media">
                        <a href="mailto:luizarthurwinter@gmail.com" target="_blank" rel="noopener noreferrer">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.583361 3.48988C0.583267 3.49564 0.583257 3.50139 0.583333 3.50715V10.5C0.583333 11.4638 1.3695 12.25 2.33333 12.25H11.6667C12.6305 12.25 13.4167 11.4638 13.4167 10.5V3.50721C13.4167 3.50141 13.4167 3.4956 13.4166 3.4898C13.4111 2.53063 12.6271 1.75 11.6667 1.75H2.33333C1.37287 1.75 0.588839 2.53067 0.583361 3.48988ZM1.81217 3.2398C1.90864 3.04904 2.10702 2.91667 2.33333 2.91667H11.6667C11.893 2.91667 12.0914 3.04904 12.1878 3.2398L7 6.87128L1.81217 3.2398ZM12.25 4.62038V10.5C12.25 10.8195 11.9862 11.0833 11.6667 11.0833H2.33333C2.01383 11.0833 1.75 10.8195 1.75 10.5V4.62038L6.66548 8.06122C6.86633 8.20182 7.13367 8.20182 7.33452 8.06122L12.25 4.62038Z" fill="#12F7D6"/>
                        </svg>
                        <span className="first-section-card-info-social-media">luizarthurwinter@gmail.com</span>
                        </a>
                    </div>

                    <div className="first-section-card-info-social-media">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 3.5C5.71133 3.5 4.66666 4.54467 4.66666 5.83333C4.66666 7.122 5.71133 8.16667 6.99999 8.16667C8.28865 8.16667 9.33332 7.122 9.33332 5.83333C9.33332 4.54467 8.28865 3.5 6.99999 3.5ZM5.83332 5.83333C5.83332 5.189 6.35566 4.66667 6.99999 4.66667C7.64432 4.66667 8.16666 5.189 8.16666 5.83333C8.16666 6.47767 7.64432 7 6.99999 7C6.35566 7 5.83332 6.47767 5.83332 5.83333Z" fill="#12F7D6"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.6761 13.9018C6.67627 13.9019 6.67641 13.902 6.99999 13.4167L6.6761 13.9018C6.87204 14.0324 7.12762 14.0327 7.32356 13.902L6.99999 13.4167C7.32356 13.902 7.3234 13.9021 7.32356 13.902L7.32555 13.9007L7.32944 13.8981L7.3428 13.8891C7.35416 13.8813 7.37036 13.8703 7.39108 13.8559C7.43251 13.8272 7.49205 13.7854 7.56711 13.7312C7.71717 13.6228 7.92961 13.4646 8.18368 13.2623C8.69088 12.8584 9.36868 12.275 10.0485 11.5574C11.3842 10.1475 12.8333 8.10947 12.8333 5.83333C12.8333 4.28624 12.2187 2.80251 11.1248 1.70854C10.0308 0.614581 8.54709 0 6.99999 0C5.45289 0 3.96916 0.614581 2.8752 1.70854C1.78124 2.80251 1.16666 4.28624 1.16666 5.83333C1.16666 8.10947 2.61581 10.1475 3.95152 11.5574C4.6313 12.275 5.3091 12.8584 5.8163 13.2623C6.07037 13.4646 6.28281 13.6228 6.43287 13.7312C6.50793 13.7854 6.56747 13.8272 6.6089 13.8559C6.62962 13.8703 6.64582 13.8813 6.65718 13.8891L6.67054 13.8981L6.67443 13.9007L6.6761 13.9018ZM3.70016 2.5335C4.57533 1.65833 5.76231 1.16667 6.99999 1.16667C8.23767 1.16667 9.42465 1.65833 10.2998 2.5335C11.175 3.40867 11.6667 4.59566 11.6667 5.83333C11.6667 7.64053 10.4908 9.39415 9.20152 10.7551C8.5688 11.4229 7.9341 11.9697 7.45693 12.3497C7.27934 12.4911 7.12423 12.6089 6.99999 12.7007C6.87575 12.6089 6.72064 12.4911 6.54305 12.3497C6.06588 11.9697 5.43118 11.4229 4.79846 10.7551C3.50917 9.39415 2.33332 7.64053 2.33332 5.83333C2.33332 4.59566 2.82499 3.40867 3.70016 2.5335Z" fill="#12F7D6"/>
                        </svg>
                        <span className="first-section-card-info-social-media">Brasil</span>
                    </div>

                    <div className="first-section-card-info-social-media">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 0C4.78587 0 4.34075 0.184374 4.01256 0.512563C3.68437 0.840752 3.5 1.28587 3.5 1.75V2.33333H1.75C0.783502 2.33333 0 3.11684 0 4.08333V9.91667C0 10.8832 0.783502 11.6667 1.75 11.6667H11.0833C12.0498 11.6667 12.8333 10.8832 12.8333 9.91667V4.08333C12.8333 3.11684 12.0498 2.33333 11.0833 2.33333H9.33333V1.75C9.33333 1.28587 9.14896 0.840752 8.82077 0.512563C8.49258 0.184374 8.04746 0 7.58333 0H5.25ZM8.16667 2.33333V1.75C8.16667 1.59529 8.10521 1.44692 7.99581 1.33752C7.88642 1.22812 7.73804 1.16667 7.58333 1.16667H5.25C5.09529 1.16667 4.94692 1.22812 4.83752 1.33752C4.72812 1.44692 4.66667 1.59529 4.66667 1.75V2.33333H8.16667ZM4.66667 3.5H8.16667V10.5H4.66667V3.5ZM3.5 3.5H1.75C1.42783 3.5 1.16667 3.76117 1.16667 4.08333V9.91667C1.16667 10.2388 1.42783 10.5 1.75 10.5H3.5V3.5ZM9.33333 10.5V3.5H11.0833C11.4055 3.5 11.6667 3.76117 11.6667 4.08333V9.91667C11.6667 10.2388 11.4055 10.5 11.0833 10.5H9.33333Z" fill="#12F7D6"/>
                        </svg>
                        <span className="first-section-card-info-social-media">CLT e PJ / Freelancer</span>
                    </div>

                    <div className="first-section-card-info-social-media">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_518_742)">
                        <path d="M9.91417 0.622203C8.99648 0.614228 8.11237 0.967009 7.45226 1.60456L7.44624 1.61047L6.4429 2.60797C6.21443 2.83511 6.21336 3.20445 6.4405 3.43292C6.66764 3.66139 7.03698 3.66247 7.26545 3.43533L8.26563 2.44096C8.70539 2.01767 9.29357 1.78352 9.90403 1.78883C10.5158 1.79414 11.101 2.03954 11.5337 2.47215C11.9663 2.90477 12.2117 3.49 12.217 4.10179C12.2223 4.71199 11.9884 5.29992 11.5654 5.73962L9.8192 7.48583C9.58265 7.72247 9.29791 7.90553 8.98442 8.02247C8.67093 8.13941 8.33596 8.18757 8.00223 8.16366C7.66849 8.13976 7.3438 8.04437 7.05018 7.88395C6.75656 7.72353 6.50087 7.50184 6.30046 7.23391C6.10749 6.97593 5.74192 6.92323 5.48394 7.1162C5.22596 7.30917 5.17326 7.67474 5.36623 7.93272C5.66685 8.33461 6.05038 8.66714 6.49082 8.90777C6.93125 9.14841 7.41829 9.2915 7.91889 9.32735C8.41949 9.3632 8.92194 9.29097 9.39217 9.11556C9.8624 8.94015 10.2894 8.66567 10.6442 8.31072L12.3942 6.56079L12.4013 6.55356C13.0388 5.89345 13.3916 5.00935 13.3836 4.09166C13.3756 3.17397 13.0076 2.29612 12.3586 1.6472C11.7097 0.998268 10.8319 0.630177 9.91417 0.622203Z" fill="#12F7D6"/>
                        <path d="M6.08111 4.6726C5.58051 4.63675 5.07805 4.70898 4.60782 4.88439C4.13762 5.05979 3.71064 5.33425 3.35584 5.68916L1.60584 7.43916L1.59873 7.44639C0.96118 8.1065 0.608399 8.99061 0.616374 9.9083C0.624348 10.826 0.992439 11.7038 1.64137 12.3528C2.2903 13.0017 3.16814 13.3698 4.08583 13.3778C5.00352 13.3857 5.88762 13.0329 6.54773 12.3954L6.55496 12.3883L7.55246 11.3908C7.78027 11.163 7.78027 10.7936 7.55246 10.5658C7.32466 10.338 6.95531 10.338 6.7275 10.5658L5.73378 11.5596C5.29408 11.9825 4.70616 12.2164 4.09597 12.2111C3.48417 12.2058 2.89894 11.9604 2.46633 11.5278C2.03371 11.0952 1.78831 10.51 1.783 9.89816C1.77769 9.28796 2.01164 8.70004 2.43458 8.26034L4.1808 6.51412C4.41734 6.27749 4.70209 6.09442 5.01558 5.97748C5.32906 5.86054 5.66403 5.81239 5.99777 5.83629C6.3315 5.86019 6.65619 5.95559 6.94981 6.11601C7.24344 6.27643 7.49913 6.49812 7.69954 6.76605C7.89251 7.02403 8.25807 7.07673 8.51605 6.88375C8.77403 6.69078 8.82673 6.32522 8.63376 6.06724C8.33315 5.66535 7.94961 5.33281 7.50918 5.09218C7.06874 4.85155 6.58171 4.70846 6.08111 4.6726Z" fill="#12F7D6"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_518_742">
                        <rect width="14" height="14" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span className="first-section-card-info-social-media">COLOCAR LINK DO SITE</span>
                    </div>

                    <div className="first-section-card-tecnologies">
                            <span className="first-section-card-tecnologies-item">React</span>
                            <span className="first-section-card-tecnologies-item">Javascript</span>
                            <span className="first-section-card-tecnologies-item">Python</span>
                    </div>

                    <div>
                        <a href="/curriculo-luiz-arthur.pdf" download={"curriculo-luiz-arthur.pdf"}>
                        <button>Baixe meu CV</button>
                        </a>
                    </div>

                 </div>

                 <div className="first-section-card-text">
                    <h1 className='first-section-card-text-title'><p className='simulated-html'>{"<h1>"}</p>Olá, sou o <strong className='first-section-card-text-name'>Luiz Arthur</strong>, Desenvolvedor Full Stack</h1><p className='simulated-html'>{"</h1>"}</p>
                    <p className='simulated-html'>{"<p>"}</p> <p className='first-section-card-text-text'>Auxilio empresas no crescimento através da criação de experiências web excepcionais. Se você procura um desenvolvedor focado em resultados: </p> <p className='simulated-html'>{"</p>"}</p>
                    <a href="https://wa.me/5548984376911" className='first-section-card-text-link-whatsapp'><span className='first-section-card-text-link'>Vamos conversar?</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#12F7D6" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg></a>
                 </div>

                 <div className="first-section-card-proggraming-languages">

                    <div className='first-section-card-proggraming-languages-div'>
                        <h3 className='first-section-card-proggraming-languages-number'>2</h3>
                        <p className='first-section-card-proggraming-languages-text'>Linguagens de programação</p>
                    </div>

                    <div className='first-section-card-proggraming-languages-div'>
                        <h3 className='first-section-card-proggraming-languages-number'>5</h3>
                        <p className='first-section-card-proggraming-languages-text'>Ferramentas de desenvolvimento</p>
                    </div>

                    <div className='first-section-card-proggraming-languages-div'>
                        <h3 className='first-section-card-proggraming-languages-number'>2</h3>
                        <p className='first-section-card-proggraming-languages-text'>Anos de experiência</p>
                    </div>

                 </div>

            </div>
        </section>
    )
}