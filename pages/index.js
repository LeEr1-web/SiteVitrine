import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

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
          </section>

          <section id="agence" className={styles.cardGrid}>
            <a href="#agence">
              <div className={styles.card}>
                <h2>Publicité</h2>
                <p>Publicité sur Insta/Twitter pour booster votre visibilité.</p>
                <Image src="/images/pub.png" alt="formation" width={50} height={50} />
                <a href="https://forms.gle/AnsMKGhH7TkpkCX67">
                  <button className={styles.button}>Demande</button>
                </a>
              </div> 
            </a>

            <a href="#agence">
              <div className={styles.card}>
                <h2>Formation</h2>
                <p>Formation pour devenir chatter ou se lancer dans le management.</p>
                <Image src="/images/formation.png" alt="formation" width={50} height={50} />
                <button className={styles.button}>Accèder aux formation</button>
              </div>
            </a>

            <a href="#agence">
              <div className={styles.card}>
                <h2>Recrutement Modèle</h2>
                <p>Rejoignez notre réseau de modèles et augmentez vos revenus.</p>
                <a href="#info">
                  <button className={styles.button}>Des Question??</button>
                </a>
                <Image src="/images/model_logo.png" alt="modèles" width={50} height={50} />
                <a href="https://forms.gle/AnsMKGhH7TkpkCX67">
                  <button className={styles.button}>Postuler</button>
                </a>
              </div>
            </a>
          </section>

          <table  cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#0d0d0d' }}>
                  <th>
                    OFM BUSINESS est une agence OnlyFans 360° proposant à la fois une prestation de manager, 
                    <br/>de la délégation de chatters, ainsi que de la formation.
                  </th>
                  <th> 
                    Un max d’abonnés<br/>
                    Grâce à nos stratégies d’acquisition de trafic, vous allez obtenir rapidement de nouveaux abonnés.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li><img src="https://nextjs.org/icons/file.svg" alt="money" /> Augmentation de vos gains Onlyfans & MYM</li>
                      <li><img src="https://nextjs.org/icons/file.svg" alt="contract" /> Publicité et partenariats rentables</li>
                      <li><img src="https://nextjs.org/icons/file.svg" alt="planning" /> Formatioéns spécifiques pour chatters et gestion</li>
                      <li><img src="https://nextjs.org/icons/file.svg" alt="conversion" /> Stratégies pour recruter des modèles performants</li>
                    </ul>
                  </td>
                  <td>
                    Management OnlyFans<br/>
                    En déléguant votre compte OnlyFans a une agence OnlyFans, vous n’aurez plus qu’à créer le contenu. Le reste est géré.
                  </td>
                </tr>
              </tbody>
            </table>

            <section id="about" className={styles.info}>

            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#0d0d0d', color: 'white' }}>
                  <th>Question</th>
                  <th>Réponse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>🚀 Combien de temps avant d’avoir des résultats ?</td>
                  <td>
                    Le délai pour obtenir des résultats dépend de votre engagement et de la qualité de votre contenu. Avec notre agence, 
                    <br/>vous pourriez générer des revenus entre 500€ et 5000€ dès le premier mois. 
                    <br/>Nos stratégies permettent d’atteindre des revenus de plus de 10 000€ par mois avec une gestion optimale.
                  </td>
                </tr>
                <tr>
                  <td>🎭 Est-ce que je peux réussir sans montrer mon visage ?</td>
                  <td>
                    Oui, il est possible de réussir sans montrer votre visage. 
                    <br/>Notre agence a développé des stratégies pour vous aider à rester anonyme tout en maximisant vos résultats. 
                    <br/>Montrer votre visage peut aider à renforcer la connexion avec les abonnés, mais ce n'est pas obligatoire.
                  </td>
                </tr>
                <tr>
                  <td>🍆 Dois-je faire du contenu hard pour réussir ?</td>
                  <td>
                    Non, vous n'êtes pas obligé de produire du contenu explicite. 
                    <br/>Notre agence respecte vos préférences et peut vous aider à réussir avec des contenus modérés ou artistiques. 
                    <br/>De nombreux créateurs réussissent très bien sans avoir à créer du contenu "hard".
                  </td>
                </tr>
                <tr>
                  <td>💰 Quel pourcentage prend l’agence ?</td>
                  <td>
                    La commission de l’agence varie en fonction de vos besoins et du niveau de service demandé. 
                    <br/>En général, elle se situe entre 30% et 70% des revenus générés, avec une répartition moyenne à 50%. 
                    <br/>Nous déterminons cela ensemble selon les services fournis (gestion, marketing, etc.).
                  </td>
                </tr>
                <tr>
                  <td>🥷 Faire OnlyFans en étant anonyme ?</td>
                  <td>
                    Vous pouvez rester anonyme grâce à des pseudonymes, 
                    <br/>le blocage géographique, et une gestion sécurisée de votre compte. 
                    <br/>Notre agence propose des stratégies spécifiques pour garantir votre discrétion tout en maximisant vos revenus.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

        </main>

        <footer className={styles.footer}>
          <div className={styles.contact}>
            <a href="https://www.instagram.com/rise_up.agency/" target="_blank" >
              <Image src="https://nextjs.org/icons/file.svg"  width={24} height={24} />
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" >
              <Image src="https://nextjs.org/icons/file.svg" width={24} height={24} />
              Twitter/X
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
