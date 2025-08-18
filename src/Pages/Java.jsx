import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './CoursePage.css'; // Changed import

function Java() {
  return (
    <div className="course-page">
      <NavBar />
      <header className="course-header">
        <img className="course-logo" src="/Course-Logos/java-logo.png" alt="Java Logo" />
        <h1 className="course-title">
          Programming With <span className="highlight">Java</span>
        </h1>
      </header>

      <main className="course-content">
        <p>
          Java is a widely used, object-oriented, high-level programming language developed by Sun Microsystems (now owned by Oracle). Released in 1995, it quickly gained popularity for its simplicity, portability, and robustness. Java is designed to be platform-independent, meaning Java programs can run on any device with a Java Virtual Machine (JVM).
        </p>

        <h3>Key Aspects of Java Programming:</h3>
        <ul>
          <li><b>Object-Oriented:</b> Java is an object-oriented programming (OOP) language, focusing on creating objects that represent real-world entities.</li>
          <li><b>Platform Independence:</b> Java's "Write Once, Run Anywhere" (WORA) capability allows code to be compiled into bytecode, which can run on any platform with a JVM.</li>
          <li><b>Java Virtual Machine (JVM):</b> The JVM interprets bytecode and executes the Java program on the target platform.</li>
          <li><b>Syntax:</b> Java's syntax is influenced by C and C++, making it relatively easy to learn for developers with a background in those languages.</li>
          <li><b>Automatic Memory Management:</b> Java uses a garbage collector to automatically manage memory, preventing memory leaks.</li>
          <li><b>Robustness:</b> Java's strong type-checking and exception handling mechanisms make it a robust language.</li>
          <li><b>Rich Standard Library:</b> Java provides an extensive standard library (Java SE) with a wide range of built-in functions and classes.</li>
          <li><b>Security:</b> Java's security model runs applications in a controlled sandbox environment to prevent harm to the user's system.</li>
          <li><b>Multithreading:</b> Java has built-in support for multithreading, allowing for the creation of concurrent applications.</li>
        </ul>

        <h3>Common Applications of Java:</h3>
        <ul>
          <li><b>Web Development:</b> Used for building dynamic web applications with frameworks like Spring and JavaServer Faces (JSF).</li>
          <li><b>Mobile Applications:</b> The primary language for Android app development.</li>
          <li><b>Enterprise Software:</b> Prevalent in large-scale enterprise applications due to its reliability and scalability.</li>
          <li><b>Scientific Computing:</b> Used in scientific applications with libraries like Apache Commons Math.</li>
          <li><b>Internet of Things (IoT):</b> A suitable choice for programming IoT devices.</li>
        </ul>
      </main>

      <section className="resource-section">
        <h3>Downloadable Files</h3>
        <p>Downloadable resources to supplement your learning.</p>
        <div className="resource-grid">
          <a href="/Java-files/Java Fundamentals.pdf" download className="resource-card">
            <img src="/Logos/pdf-icon.png" alt="PDF Icon" />
            <div><b>Java Fundamentals</b></div>
          </a>
          <a href="/Java-files/Introduction To Java Programming.pptx" download className="resource-card">
            <img src="/Logos/powerpoint-icon.jpg" alt="PPT Icon" />
            <div><b>Introduction To Java Programming</b></div>
          </a>
          <a href="/Java-files/Control Statements I.pptx" download className="resource-card">
            <img src="/Logos/powerpoint-icon.jpg" alt="PPT Icon" />
            <div><b>Java Control Statements I</b></div>
          </a>
          <a href="/Java-files/Control Statements II.pptx" download className="resource-card">
            <img src="/Logos/powerpoint-icon.jpg" alt="PPT Icon" />
            <div><b>Java Control Statements II</b></div>
          </a>
          <a href="/Java-files/Introduction to Java Applications.pptx" download className="resource-card">
            <img src="/Logos/powerpoint-icon.jpg" alt="PPT Icon" />
            <div><b>Introduction to Java Applications</b></div>
          </a>
        </div>
      </section>

      <section className="resource-section">
        <h3>Helpful Websites</h3>
        <p>Curated links to external resources for further learning.</p>
        <div className="resource-grid">
          <a href="https://www.javatpoint.com/java-tutorial" target="_blank" rel="noreferrer" className="resource-card">
            <img src="/images/jtp_logo.png" alt="JavaTpoint Logo" />
            <div className="resource-card-title">JavaTpoint</div>
          </a>
          <a href="https://www.w3schools.com/java/" target="_blank" rel="noreferrer" className="resource-card">
            <div className="resource-card-title">W3Schools Java</div>
          </a>
          <a href="https://dev.java/" target="_blank" rel="noreferrer" className="resource-card">
            <img style={{ height: '30px' }} src="/images/java-logo-vector.png" alt="Dev.java Logo" />
            <div className="resource-card-title">Dev.java</div>
          </a>
          <a href="https://www.java.com/en/" target="_blank" rel="noreferrer" className="resource-card">
            <img style={{ height: '60px' }} src="/images/java-logo-vector.png" alt="Java.com Logo" />
             <div className="resource-card-title">Java.com</div>
          </a>
          <a href="https://www.codecademy.com/catalog/language/java" target="_blank" rel="noreferrer" className="resource-card">
            <img style={{ height: '70px' }} src="/images/codecademy-logo.png" alt="Codecademy Logo" />
            <div className="resource-card-title">Codecademy</div>
          </a>
        </div>
      </section>

      <section className="youtube-section">
        <h3>YouTube Tutorials</h3>
        <p>Hand-picked video tutorials to get you started.</p>
        <div className="youtube-grid">
          <iframe className="youtube-video" src="https://www.youtube.com/embed/r59xYe3Vyks" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/BGTx91t8q50" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/eIrMbAQSU34" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/xk4_1vDrzzo" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/A74TOX803D0" title="YouTube video player" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/CFD9EFcNZTQ" title="YouTube video player" allowFullScreen></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Java;
