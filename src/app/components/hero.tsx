import Image from "next/image";
import styles from "../hero.module.css"

export default function Hero() {
    return (
        <main className={styles.herocontainer}>
            <div className={styles.heroimage}>
                <Image src={"/poster.jpeg"} height={350} width={300} alt="image" />
            </div>
            <h1 className={styles.heading1}>I AM MARYAM RAZA</h1>
            <p className={styles.skills}>
            As a web developer, I possess a strong foundation in HTML and CSS, <br /> enabling me to create well-structured and visually appealing web <br /> applications. My proficiency in TypeScript enhances my JavaScript <br /> development, ensuring type safety and improving code quality. I leverage <br /> Tailwind CSS to build responsive and modern designs efficiently, while <br />Nextjs allows me to develop server-rendered applications that optimize <br />performance and SEO. With a passion for learning and adapting to new <br />technologies, I am committed to delivering user-friendly and innovative web  solutions.<br />
            </p>
        </main>
    );
}