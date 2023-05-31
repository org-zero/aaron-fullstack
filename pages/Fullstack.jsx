import Layout from "@/components/Layout"
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Fullstack.module.css"



export default function Fullstack () {

    
    return(
      
        <Layout title="Fullstack Web Developer" description="Fuulstack">
          
          <div className={styles.fullstack_container}>

 <br /> <br />
  <div className={styles.typewriter}>
    <h1>I'm Full Stack Developer Jr.</h1>
  </div>
  <br /><br />
  <p className={styles.text}>I build things for the web. <br />
   I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
   <br /> Currently, I’m focused on building accessible, human-centered products at Upstatement..</p>
   <br />
   <p className={styles.text}>Since beginning my journey as a freelance developer  over  2 years ago, 
   I've done remote work for agencies, consulted for startups,
    and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
</p>
<br /> <br />

<section>
  <button className={styles.button}>
 -  <i className="fa fa-whatsapp"></i><a href="https://wa.link/b0dj1b"> WhatsApp -</a>
  </button>
</section>
          </div>
          
          <div className={styles.scrollmenu}>
               
                <a href="https://github.com/org-zero"><i className=" fa fa-github"></i> You Looks my projects on Github </a>
                <a href="https://www.linkedin.com/in/aaron-padilla-somarribas-658715275/"><i className=" fa fa-linkedin"></i> Contact me by Linkedin</a>
                <a href="https://www.freelancer.es/u/aaronfullstack07"><i className=" fa fa-code"></i> Hire me by Freelancer</a>
                <a href="https://www.instagram.com/org_zero/"><i className=" fa fa-instagram"></i> Follow me to Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100092653993282"><i className=" fa fa-facebook"></i> Follow my channel on Facebook</a>
  
          </div>

<br />
<div className={styles.noticia}>
  <img className={styles.izquierda} src="../img/hack0.gif"></img>
  <aside>
  <div>
<div className={styles.bg_move}>
        <i className="fas fa-palette"></i>
        <h1> About Me & My Skills : </h1> <br />
       </div>

       <p> Hi friend, I`m web developer, I`m used to creating websites for hobbie, I very like 
            programming in next and react. I have started when was a young on the informatic world and I take very serously me make to job!
       </p>
       <p>  <br />
        This is skills me : <br /> <br />  Javascript &rarr;   Frameworks and Libraries : Reatc, Next, Node, Typescript. <br /> <br />
        PHP , Python & Java - HTML & CSS- SCSS - Boopstrap -  Material UI/UX. 
       </p>
</div>
  </aside>
  <div className={styles.reset}></div>
</div>


<div>
<div className={styles.bg_move}>
        <i className="fas fa-palette"></i>
        <h1>- Projects like a Fullstack Web Developer - </h1>
    </div>

</div>

<br />
<div className={styles.parent}>

<div className={styles.child}><div> <p> Portfolio : It created in React - Framework Javascript.</p>  
<img src="../img/react.png" alt="imgs" className={styles.imgs} />
<section>
<Link href="https://aaron-cibersecurity.netlify.app/"> <div className={styles.caja_flash}>Web App - React</div></Link>

</section> <br /><br /> <br />
</div></div>

<div className={styles.child}><div><p> App create with in Next JS, I use pure CSS for styles the website  </p> 
<img src="../img/next.webp" alt="imgs" className={styles.imgs} />
<section>
 <Link href="https://org-zero.github.io/framework-z/Hacking/"><div className={styles.caja_flash}>Web App - Next </div></Link> 
</section>  <br /><br /> <br />

</div></div>


<div className={styles.child}><div><p>Contact form have created with PHP and Mysql also It use Boopstrap  </p>
<img src="../img/php.webp" alt="imgs" className={styles.imgs} />
<section>
<Link href="https://aaron-contact-form-php.000webhostapp.com/"> <div className={styles.caja_flash}>Web App - PHP</div></Link> 
</section>  <br /><br /> <br />
</div></div>

<div className={styles.child}><div><p>Portfolio have created with HTML - CSS - Javascript.  </p>
<img src="../img/html.png" alt="imgs" className={styles.imgs} />
<section>
 <Link href="https://aaron-developer.netlify.app/"><div className={styles.caja_flash}>Web App - Html & Js</div></Link> 
</section> <br /><br /><br />
</div></div>




</div>


<br />

<div className={styles.grid}>
  <article className={styles.main}>
    <h1>About me as developer Front End: </h1> <br />
    <p>
    As a web developer with experience in various programming languages and web tools, I am passionate about 
    creating effective and creative solutions for technical challenges. <br /> <br /> With a strong focus on frontend development, 
    I have worked on web development projects of various sizes, from small websites to larger web applications. <br /> <br /> Additionally, 
    I take pride in my ability to work in a team and effectively communicate with colleagues and clients.
     I am committed to continuously learning and improving my skills to create high-quality, high-performance web solutions.
    </p>
  </article>
  <section className={styles.side}>
    <h1>About me as back end developer</h1>
    <p className={styles.text_back_end}>
    As a back-end web developer, my primary focus is on the server-side of web development. <br /> <br />

I have extensive experience working with programming languages such as Node.js, Python, and PHP, and am well-versed in database technologies like MySQL, MongoDB, and PostgreSQL. <br /><br />

I specialize in building robust, scalable, and efficient back-end systems that power complex web applications. I have expertise in developing RESTful APIs, integrating with third-party services and APIs, and building secure user authentication and authorization systems.    </p>
  </section>
  
</div>

<div>
<img src="../img/computer.gif" alt="imgs" className={styles.img_end}  />
</div>


        </Layout>
    )
}