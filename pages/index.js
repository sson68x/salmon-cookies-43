import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/Home.module.css"
import chinook from "../public/img/chinook.jpg"
import cutter from "../public/img/cutter.jpeg"
import family from "../public/img/family.jpg"
import fish from "../public/img/fish.jpg"
import frostedCookie from "../public/img/frosted-cookie.jpg"
import salmon from "../public/img/salmon.png"
import shirt from "../public/img/shirt.jpg"

export default function Home() {
  return (
    <div >
      <Head>
        <title>Salmon Cookies</title>
      </Head>
      <div className={styles.body}>
        <header className="header">
          <div>
            <div id="logo">
              <Link href="/sales">
                <a className="a">
                  <Image
                    src={salmon}
                    alt="a salmon"
                    className="img"
                    id="salmon-main"
                  />
                </a>
              </Link>
            </div>
            <h1 className="h1">Salmon Cookies</h1>
          </div>
        </header>
        <main className={styles.main}>
          <section className="articles">
            <article className="article">
              <Image
                src={frostedCookie}
                alt="a pair of delicious looking frosted cookies, shaped like salmon"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur aut! Delectus reiciendis
                doloribus aspernatur voluptas nam optio impedit autem explicabo fugit illo, alias, excepturi perspiciatis
                laudantium, repellendus natus. Vel?
              </p>
            </article>
            <article className="article">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia est ex eligendi soluta, accusantium
                dignissimos totam. Quaerat omnis provident voluptas sequi numquam veritatis neque. Id nam unde aperiam! Quis!
              </p>
              <Image
                src={family}
                alt="Pat and his happy family, in their kitchen"
              />
            </article>
            <article className="article">
              <Image
                src={cutter}
                alt="a salmon shaped cookie cutter"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut totam laborum animi mollitia
                exercitationem perferendis deserunt placeat itaque labore nobis quo vero quae natus dolorum molestiae,
                molestias iusto ipsa?
              </p>
            </article>
            <article className="article">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur aut! Delectus reiciendis
                doloribus aspernatur voluptas nam optio impedit autem explicabo fugit illo, alias, excepturi perspiciatis
                laudantium, repellendus natus. Vel?
                Architecto molestiae, quos, deleniti laboriosam tempora deserunt autem nulla, natus beatae maiores eius. At
                vero sint ipsum consequuntur tenetur architecto dolor. Consequuntur at dolor aliquam voluptatibus ipsum quidem
                ipsa dicta.
              </p>
              <Image
                src={fish}
                alt="a collection of colorful fish cookies"
              />
            </article>
            <article className="article">
              <Image
                src={shirt}
                alt="a men's salmon grpahic tee-shirt"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos
                eaque odio iusto cumque, harum optio voluptatibus quasi beatae aut
                eum consequatur vitae mollitia repudiandae magnam maiores sed cum
                tenetur. Delectus necessitatibus numquam, qui architecto
                consequatur voluptates hic optio possimus adipisci similique
                labore ipsa earum quaerat ut et incidunt ratione ducimus cumque
                eaque pariatur, temporibus rerum minima unde. Magni, repudiandae!
              </p>
            </article>
          </section>
          <aside className="aside">
            <h4>Store Locations</h4>
            <ul className="ul">
              <hr />
              <li className="li">
                <em>Seattle, USA</em>
              </li>
              <hr />
              <li className="li">
                <em>Tokyo, Japan</em>
              </li>
              <hr />
              <li className="li">
                <em>Dubai, UAE</em>
              </li>
              <hr />
              <li className="li">
                <em>Paris, France</em>

              </li>
              <hr />
              <li className="li">
                <em>Lima, Peru</em>
              </li>
            </ul>
          </aside>
        </main>

        <footer className={styles.footer}>
          <div id="footer-content">
            <div id="hours">
              Open 7 Days / Week
              <br />
              6:00am - 7:00pm
            </div>
            <div id="tag">
              <Image
                src={chinook}
                alt="a chinook salmon"
              />
              <p>Nothing Brings People Together Like Good Salmon Cookies...</p>
            </div>
            <div id="contact">
              Salmon Cookies 
              <br />
              2901 3rd Ave
              <br />
              Seattle, WA 98121
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
