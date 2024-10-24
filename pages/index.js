import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Agence de Recrutement et Formation OFM</title>
        <meta name="description" content="Formation, publicité, partenariats et recrutement de modèles pour OnlyFans et MYM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        
        {/* Barre de navigation sticky */}
        <nav className={styles.navbar}>
          <a href="#agence"><h1>Agence #1</h1></a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <main className={styles.main}>
          <h1 className={styles.title}>Bienvenue chez OFM Business</h1>

          <section className={styles.description}>
            <p>
              Spécialisée dans la formation, Marketing, Management, Augmentation de gains, publicité/partenariats, et recrutement de modèles pour OnlyFans et MYM.
            </p>
          </section>

          <section id="contact" className={styles.contact}>
            <div>
              <a href="https://www.instagram.com/rise_up.agency/" target="_blank">
                <Image src="/images/instagram.png" width={50} height={50} alt="Instagram" />
                Instagram
              </a>
            </div>
            <div>
              <a href="https://twitter.com" target="_blank">
                <Image src="/images/twitter.png" width={50} height={50} alt="Twitter" />
                Twitter/X
              </a>
            </div>
            <div>
              <a href="https://twitter.com" target="_blank">
                <Image src="/images/twitter.png" width={50} height={50} alt="Twitter" />
                Telegram
              </a>
            </div>
          </section>

          <section id="agence" className={styles.cardGrid}>
            <div className={styles.card}>
              <a href="https://forms.gle/AnsMKGhH7TkpkCX67">
                <h2>Publicité</h2>
                <p>Publicité sur Insta/Twitter pour booster votre visibilité.</p>
                <Image src="/images/pub.png" alt="formation" width={50} height={50} />
              </a> 
            </div>
    
            <div className={styles.card}>
              <a>
                <h2>Formation</h2>
                <p>Formation pour devenir chatter ou se lancer dans le management.</p>
                <Image src="/images/formation.png" alt="formation" width={50} height={50} />
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://forms.gle/AnsMKGhH7TkpkCX67">
                <h2>Recrutement Modèle</h2>
                <p>Rejoignez notre réseau de modèles et augmentez vos revenus.</p>
                <Image src="/images/model_logo.png" alt="modèles" width={50} height={50} />
              </a>
            </div>
          </section>

          <section id="about" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}className={styles.more}>
          
            <div style={{ backgroundColor: '#0d0d0d', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, marginRight: '10px' }}>
              <p>
                OFM BUSINESS est une agence OnlyFans 360° proposant à la fois une prestation de manager,
                de la délégation de chatters, ainsi que de la formation.
              </p>
              </div>
              <div style={{ flex: 1, marginRight: '10px' }}>
              <p>
                Un max d’abonnés<br />
                Grâce à nos stratégies d’acquisition de trafic, vous allez obtenir rapidement de nouveaux abonnés.
              </p>
              </div>
              <div style={{ flex: 1 }}>
              <p>
                On fidélise vos abonnés<br />
                Grâce aux équipes de chatters 24h sur 24 et 7 jours sur 7, vos messages privés seront gérés à 100%.
              </p>
              </div>
            </div>

            <div style={{ display: 'flex', padding: '10px' }}>
              <div style={{ flex: 1, marginRight: '10px' }}>
                <ul>
                  <li><img src="https://nextjs.org/icons/file.svg" alt="money" /> Augmentation de vos gains Onlyfans & MYM</li>
                  <li><img src="https://nextjs.org/icons/file.svg" alt="contract" /> Publicité et partenariats rentables</li>
                  <li><img src="https://nextjs.org/icons/file.svg" alt="planning" /> Formations spécifiques pour chatters et gestion</li>
                  <li><img src="https://nextjs.org/icons/file.svg" alt="conversion" /> Stratégies pour recruter des modèles performants</li>
                </ul>
              </div>
              <div style={{ flex: 1, marginRight: '10px' }}>
                <p>
                Management OnlyFans<br />
                En déléguant votre compte OnlyFans à une agence, vous n’aurez plus qu’à créer le contenu. Le reste est géré.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p>
                Tunnels de conversion<br />
                Les tunnels de conversion les plus puissants pour augmenter vos ventes de photos et vidéos PPV.
                </p>
              </div>
            </div>
          </section>

          <section id="about" className={styles.info}>
            <div>
              <h3>🚀 Combien de temps avant d’avoir des résultats ?</h3>
              <p>
                Le délai pour obtenir des résultats dépend de votre engagement et de la qualité de votre contenu. Avec notre agence, 
                <br/>vous pourriez générer des revenus entre 500€ et 5000€ dès le premier mois. 
                <br/>Nos stratégies permettent d’atteindre des revenus de plus de 10 000€ par mois avec une gestion optimale.
              </p>
            </div>

            <div>
              <h3>🎭 Est-ce que je peux réussir sans montrer mon visage ?</h3>
              <p>
                Oui, il est possible de réussir sans montrer votre visage. 
                <br/>Notre agence a développé des stratégies pour vous aider à rester anonyme tout en maximisant vos résultats. 
                <br/>Montrer votre visage peut aider à renforcer la connexion avec les abonnés, mais ce n'est pas obligatoire.
              </p>
            </div>

            <div>
              <h3>🍆 Dois-je faire du contenu hard pour réussir ?</h3>
              <p>
                Non, vous n'êtes pas obligé de produire du contenu explicite. 
                <br/>Notre agence respecte vos préférences et peut vous aider à réussir avec des contenus modérés ou artistiques. 
                <br/>De nombreux créateurs réussissent très bien sans avoir à créer du contenu "hard".
              </p>
            </div>

            <div>
              <h3>💰 Quel pourcentage prend l’agence ?</h3>
              <p>
                La commission de l’agence varie en fonction de vos besoins et du niveau de service demandé. 
                <br/>En général, elle se situe entre 30% et 70% des revenus générés, avec une répartition moyenne à 50%. 
                <br/>Nous déterminons cela ensemble selon les services fournis (gestion, marketing, etc.).
              </p>
            </div>

            <div>
              <h3>🥷 Faire OnlyFans en étant anonyme ?</h3>
              <p>
                Vous pouvez rester anonyme grâce à des pseudonymes, 
                <br/>le blocage géographique, et une gestion sécurisée de votre compte. 
                <br/>Notre agence propose des stratégies spécifiques pour garantir votre discrétion tout en maximisant vos revenus.
              </p>
            </div>
          </section>

        </main>

        <footer className={styles.footer}>
          <section id="contact" className={styles.contact}>
            <div>
              <a href="https://www.instagram.com/rise_up.agency/" target="_blank">
                <Image src="/images/instagram.png" width={50} height={50} alt="Instagram" />
                Instagram
              </a>
            </div>
            <div>
              <a href="https://twitter.com" target="_blank">
                <Image src="/images/twitter.png" width={50} height={50} alt="Twitter" />
                Twitter/X
              </a>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}
