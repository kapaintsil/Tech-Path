import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './Java.css';

function Java() {
  return (
    <div>
      <NavBar />
      <section className="course-section">
        <div className="java-topic">
          <img className="java-image" src="/Course-Logos/java-logo.png" alt="Java Logo" />
          <h3>
            Programming With <strong className="java-strong">Java</strong>
          </h3>
        </div>

        <div>
          <p>
            Java programming is a widely used, object-oriented, high-level programming language developed by James Gosling and his team at Sun Microsystems (now owned by Oracle Corporation). It was officially released in 1995 and quickly gained popularity due to its simplicity, portability, and robustness. Java is designed to be platform-independent, which means that Java programs can run on any device or operating system without modification, as long as there is a Java Virtual Machine (JVM) installed.
          </p>
          <p>Here are some key aspects of Java programming:</p>
          <ul>
            <li>
              <b>Object-Oriented:</b> Java is an object-oriented programming (OOP) language, which means it focuses on creating objects that represent real-world entities, with data and behavior encapsulated within those objects. This paradigm allows developers to write modular, reusable, and maintainable code.
            </li>
            <li>
              <b>Platform Independence:</b> One of the most significant advantages of Java is its "Write Once, Run Anywhere" (WORA) capability. Java code is compiled into an intermediate form called bytecode, which can be executed on any platform with a compatible JVM. This makes Java highly portable and suitable for a wide range of devices and environments.
            </li>
            <li>
              <b>Java Virtual Machine (JVM):</b> The JVM is a crucial component of the Java platform. It interprets the bytecode and executes the Java program on the target platform. Different JVM implementations exist for various operating systems and architectures, ensuring Java's cross-platform compatibility.
            </li>
            <li>
              <b>Syntax:</b> Java's syntax is influenced by C and C++, making it relatively familiar to developers from those backgrounds. Java's syntax is easy to read and understand, featuring curly braces {} for code blocks, semicolons to terminate statements, and a strong type system.
            </li>
            <li>
              <b>Memory Management:</b> Java employs automatic memory management through a process called garbage collection. The JVM automatically handles memory allocation and deallocation, relieving developers from managing memory explicitly. This helps prevent memory leaks and other memory-related issues.
            </li>
            <li>
              <b>Robustness:</b> Java enforces strong type-checking during compile-time, providing robust error handling and reducing the likelihood of runtime errors. It also includes exception handling mechanisms to gracefully deal with errors that may occur during program execution.
            </li>
            <li>
              <b>Libraries and APIs:</b> Java comes with an extensive standard library, known as the Java Standard Edition (Java SE) library, which provides a wide range of built-in functions and classes for various tasks, such as file I/O, networking, GUI development, and more. Additionally, there are numerous third-party libraries and APIs available that further enhance Java's capabilities.
            </li>
            <li>
              <b>Security:</b> Java incorporates a robust security model that prevents unauthorized access to resources and ensures that Java applets and applications run within a controlled environment (sandbox) to prevent potential harm to the user's system.
            </li>
            <li>
              <b>Multithreading:</b> Java supports multithreading, allowing developers to create concurrent applications that can perform multiple tasks simultaneously. This is especially valuable in applications that require efficient handling of tasks like handling user input, network communications, or parallel processing.
            </li>
          </ul>
        </div>

        <div>
          <p>Java Applications:</p>
          <ul>
            <li>
              <b>Web Development:</b> Java is widely used for web development, with frameworks like Spring and JavaServer Faces (JSF) being popular choices. Servlets and JavaServer Pages (JSP) are also commonly used for building dynamic web applications.
            </li>
            <li>
              <b>Mobile Applications:</b> Java is the primary language used for Android app development. Android applications are written in Java and run on Android devices that include a Java-based runtime environment.
            </li>
            <li>
              <b>Enterprise Software:</b> Java is prevalent in the development of large-scale enterprise applications, thanks to its reliability, scalability, and portability. Java Enterprise Edition (Java EE) provides a suite of libraries and APIs tailored for building enterprise-level applications.
            </li>
            <li>
              <b>Scientific Computing:</b> Java is used in scientific computing applications due to its strong numeric support and libraries like Apache Commons Math.
            </li>
            <li>
              <b>Internet of Things (IoT):</b> Java's portability and robustness make it a suitable choice for programming IoT devices and connecting them to the cloud.
            </li>
          </ul>
        </div>

        <div style={{ color: 'gray', textAlign: 'center', paddingTop: '100px' }}>
          <p>Files and Documents on Everything You Need To Know About Java Programming</p>
          <div>
            <a href="/Java-files/Java Fundamentals.pdf" download>
              <button className="files-buttons">
                <img style={{ height: '100px' }} src="/Logos/pdf-icon.png" alt="PDF Icon" />
                <div><b>Java Fundamentals</b></div>
              </button>
            </a>

            <a href="/Java-files/Introduction To Java Programming.pptx" download>
              <button className="files-buttons">
                <img style={{ height: '100px' }} src="/Logos/powerpoint-icon.jpg" alt="PPT Icon" />
                <div><b>Introduction To Java Programming</b></div>
              </button>
            </a>

            <a href="/Java-files/Control Statements I.pptx" download>
              <button className="files-buttons">
                <img style={{ height: '100px' }} src="/Logos/powerpoint-icon.jpg" alt="PPT Icon" />
                <div><b>Java Control Statements I</b></div>
              </button>
            </a>

            <a href="/Java-files/Control Statements II.pptx" download>
              <button className="files-buttons">
                <img style={{ height: '100px' }} src="/Logos/powerpoint-icon.jpg" alt="PPT Icon" />
                <div><b>Java Control Statements II</b></div>
              </button>
            </a>

            <a href="/Java-files/Introduction to Java Applications.pptx" download>
              <button className="files-buttons">
                <img style={{ height: '100px' }} src="/Logos/powerpoint-icon.jpg" alt="PPT Icon" />
                <div><b>Introduction to Java Applications</b></div>
              </button>
            </a>
          </div>

          <div style={{ color: 'gray', textAlign: 'center', paddingTop: '50px' }}>
            <p>Resourceful Websites To Get Everything You Need To Know About Java Programming</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
              <a href="https://www.javatpoint.com/java-tutorial" target="_blank" rel="noreferrer">
                <img src="/images/jtp_logo.png" alt="JavaTpoint Logo" />
              </a>
              <a href="https://www.w3schools.com/java/" target="_blank" rel="noreferrer">
                <b style={{ fontSize: '36px', color: 'rgb(4,170,109)', fontFamily: 'Lobster Two, cursive' }}>W3</b><span style={{ fontSize: '24px', color: 'rgb(4,170,109)' }}> Schools Java</span>
              </a>
              <a href="https://dev.java/" target="_blank" rel="noreferrer">
                <img style={{ height: '30px' }} src="/images/java-logo-vector.png" alt="Dev.java Logo" />
                <b style={{ color: 'white', fontSize: '24px' }}>Dev.java</b>
              </a>
              <a href="https://www.java.com/en/" target="_blank" rel="noreferrer">
                <img style={{ height: '60px' }} src="/images/java-logo-vector.png" alt="Java.com Logo" />
                <b style={{ color: 'white', fontSize: '50px' }}>.com</b>
              </a>
              <a href="https://www.codecademy.com/catalog/language/java" target="_blank" rel="noreferrer">
                <img style={{ height: '70px' }} src="/images/codecademy-logo.png" alt="Codecademy Logo" />
              </a>
            </div>
          </div>

          <div style={{ color: 'gray', textAlign: 'center', paddingTop: '50px' }}>
            <p>The Best YouTube Tutorials to get you Started on Java</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/r59xYe3Vyks" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/BGTx91t8q50" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/eIrMbAQSU34" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xk4_1vDrzzo" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/A74TOX803D0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CFD9EFcNZTQ" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Java;
