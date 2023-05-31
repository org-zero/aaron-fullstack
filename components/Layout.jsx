import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export default function Layout({ children, title, description }) {

    const hack = "Pentester"
    const developer = "Fullstack"

    Layout.defaultprops = {

      title : "Aaron Experti IT",
      description : "Application create with NextJs"
  }

    return (
        <div>

      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
         
          <nav className="Navbar">
         
          <div className='Navbar_Left'> <br /> <i class="fa fa-code-fork" aria-hidden="true"></i> Aaron P. - Expert It</div>

          <div className='Navbar_Rigth'>
             <Link href="Fullstack"  className='links'> <i className='fa fa-code'></i> {developer}  </Link>
             <Link href="Pentester"   className='links'> <i className='fa fa-bug'></i> {hack} </Link>
          </div>
         
          </nav>

        <main>
           {children}
         </main>


       <br /><br />
   


        
     <div class="row">
     <div class="column" ><br /><br />
     <h2>About Me</h2> <br />
     <p>Software Developer :</p>
     <p>I started when was young to informatic, I now is my passion </p> <br />
     <p>Experience at the topics on the websites.I love to make the websites for my clients.</p>
     <br /><br />
    <Image
      src="/img/hackers.png"
      className='anonymus'
      width={100}
      height={100}
    >
    </Image>

     </div>
     <div class="column" > <br /><br />
     <h2>Information</h2> <br />
     <p>Location : <br /> <em>Costa Rica, San Jose : Desamparados</em> </p> <br /><br />
     <p>Call Me, my Cell Phone :<br /> <em>6144 - 7976</em> </p> <br /><br />
     <p>Write me for Email : <br /> <br />    <em> aaronfullstackdeveloper@gmail.com</em> </p>
    </div>

    <div class="column" > <br /><br />
    <h2>Comunnicate with me</h2> <br />
   <p>
   "I invite you to connect with me through my portfolio website, where refined aesthetics and visionary creativity converge, igniting possibilities for exceptional collaborations."
<br /><br />

"Discover a realm of refined craftsmanship and exquisite design as you navigate through my portfolio website. I look forward to connecting with you and discussing how we can bring your vision to life in the most elegant and impactful way possible."
   </p> 
     </div>
    </div>

   
        </div>
    )
    
}


