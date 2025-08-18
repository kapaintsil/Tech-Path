import React from 'react'
import NavBar from '../Components/NavBar';
import './Htmlcss.css';
import Footer from '../Components/Footer';

function Htmlcss() {
  return (
    <div>
      <NavBar />
      <section className="course-section">
      {/* ---------------- HTML Section ---------------- */}
      <section>
        <div className="html-scc-topic">
          <img className="html-css-image" src="images/html-css-logo.png" alt="" />
          <h1>
            <strong className="html-strong"> HTML</strong> and{" "}
            <strong className="css-topic">CSS</strong>
          </h1>
        </div>

        <div>
          <p>
            HTML (<strong className="html-strong">Hypertext Markup Language</strong>) and CSS (
            <strong style={{ color: "blue" }}>Cascading Style Sheets</strong>) are the fundamental
            building blocks of web development. HTML provides the structure and content of a webpage,
            while CSS is used to style and present the HTML content.
          </p>

          <div>
            Let's start with <strong className="html-strong">HTML</strong>.
            <p>
              HTML (<strong style={{ color: "brown" }}>Hypertext Markup Language</strong>) is the
              standard markup language used to create webpages. It provides the structure and content
              of a webpage, allowing you to define the different elements and their relationships.
            </p>

            <p>
              HTML documents are composed of HTML tags, which are enclosed in angle brackets. Tags
              are used to mark up the different parts of a webpage. Let's explore some commonly used
              HTML tags:
            </p>

            <ol>
              <li>
                <b>!DOCTYPE html:</b> This declaration is placed at the very beginning of an HTML
                document and specifies the version of HTML being used. In modern web development,
                &lt;!DOCTYPE html&gt; is used to indicate the HTML5 doctype.
              </li>
              <li>
                <b>html:</b> The <b>html</b> tag serves as the root element of an HTML document. All
                other elements will be contained within this tag.
              </li>
              <li>
                <b>head:</b> The <b>head</b> tag contains meta-information about the HTML document,
                such as the document title, character encoding, linked stylesheets, and scripts. It
                is not displayed directly on the webpage.
              </li>
              <li>
                <b>title:</b> The <b>title</b> tag sets the title of the webpage, which appears in
                the browser's title bar or tab.
              </li>
              <li>
                <b>body:</b> The <b>body</b> tag contains the visible content of the webpage.
              </li>
              <li>
                <b>h1</b> to <b>h6:</b> These tags represent headings of different levels.
              </li>
              <li>
                <b>p:</b> The <b>p</b> tag defines a paragraph of text.
              </li>
              <li>
                <b>a:</b> The <b>a</b> tag is used to create hyperlinks. It requires an href.
              </li>
              <li>
                <b>img:</b> The <b>img</b> tag is used to display images on a webpage.
              </li>
              <li>
                <b>ul</b> and <b>li:</b> Used to create unordered lists.
              </li>
            </ol>

            <p>
              These are just a few of the many HTML tags available. HTML offers a wide range of tags
              to structure and format content, create tables, embed multimedia, build forms, and
              more.
            </p>
            <p>
              Remember, HTML is a markup language, not a programming language. It defines the
              structure and content of a webpage, while CSS is used to style and visually enhance the
              HTML elements.
            </p>
          </div>

          <p>
            An <strong style={{ color: "brown" }}>HTML</strong> document consists of elements
            enclosed in angle brackets. Here's an example of a basic HTML structure:
          </p>

          <div>
            <textarea
              readOnly
              style={{
                width: "602px",
                height: "247px",
                color: "blue",
                backgroundColor: "black",
                fontSize: "15px",
              }}
              defaultValue={`<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a paragraph of text.</p>
  <img src="image.jpg" alt="Description of the image" />
</body>
</html>`}
            />
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: "center", paddingTop: "30px" }}>
            <b>HTML Tags and Attributes</b>
          </h3>

          <p>
            <strong className="html-strong">HTML</strong> <strong className="html-tags">Tags</strong>
            :
          </p>
          <p>
            HTML tags are elements or markers that define the structure and content of a webpage.
          </p>
          <div style={{ textAlign: "center" }}>
            <img className="semantic-tag" src="photos/html-tags.jpg" alt="" />
            <img className="html-tag2" src="photos/html-tags2.jpeg" alt="" />
            <img className="html-tag3" src="photos/html-tags3.jpg" alt="" />
          </div>

          <p>
            <strong className="html-strong">HTML</strong>{" "}
            <strong className="html-attributes">Attributes</strong>:
          </p>
          <p>
            Attributes provide additional information or modify behavior of HTML elements. Example:
          </p>
          <textarea
            style={{
              color: "red",
              backgroundColor: "black",
              height: "38px",
              width: "496px",
            }}
            readOnly
            defaultValue={`<a href="https://www.example.com">Click here</a>`}
          />
          <div style={{ textAlign: "center" }}>
            <img className="html-attributes-image" src="photos/html-attributes1.jpg" alt="" />
            <img className="html-attributes-image" src="photos/html-attributes3.jpg" alt="" />
            <img className="html-attributes-image" src="photos/html-attributes2.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* ---------------- CSS Section ---------------- */}
      <section>
        <p>
          <b>CSS</b>
        </p>
        <p>
          CSS (Cascading Style Sheets) is a language used to control the presentation and layout of
          web pages.
        </p>

        <ol>
          <li>
            <b>Selectors:</b> Choose which element(s) to style.
          </li>
          <li>
            <b>Properties:</b> Define appearance (color, font-size, etc.).
          </li>
          <li>
            <b>Values:</b> Instructions for properties.
          </li>
          <li>
            <b>Declaration Block:</b> Group of properties + values inside {`{ }`}.
          </li>
        </ol>

        <p>
          Example HTML + CSS:
        </p>

        <textarea
          readOnly
          style={{
            width: "661px",
            height: "209px",
            color: "blue",
            backgroundColor: "black",
            fontSize: "15px",
          }}
          defaultValue={`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <h1>Hello, CSS!</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
        />

        <textarea
          readOnly
          style={{
            width: "706px",
            height: "261px",
            color: "red",
            backgroundColor: "black",
            fontSize: "15px",
          }}
          defaultValue={`h1 {
  color: red;
  font-size: 30px;
}
p {
  color: blue;
  font-size: 16px;
}`}
        />

        <div style={{ textAlign: "center" }}>
          <img className="css-image" src="photos/css-image1.jpeg" alt="" />
          <img className="css-image" src="photos/css-image2.jpeg" alt="" />
          <img className="css-image" src="photos/css-image3.jpeg" alt="" />
          <img className="css-image" src="photos/css-image4.jpeg" alt="" />
          <img className="css-image" src="photos/css-image5.jpeg" alt="" />
        </div>
      </section>

      {/* ---------------- Files Section ---------------- */}
      <div>
        <p style={{ color: "gray", textAlign: "center" }}>
          Files and Documents on HTML and CSS
        </p>
        <div style={{ textAlign: "center" }}>
          <a href="html-css-files/Intro_to_HTML.ppt" download>
            <button className="files-buttons">
              <img style={{ height: "100px" }} src="images/powerpoint-icon.jpg" alt="" />
              <div>
                <b>Introduction To HTML</b>
              </div>
            </button>
          </a>
          {/* Repeat buttons for all files ... */}
        </div>
      </div>

      {/* ---------------- Websites Section ---------------- */}
      <div style={{ color: "gray", textAlign: "center", paddingTop: "50px" }}>
        <p>
          Resourceful Websites To Get Everything You Need To Know About <b>HTML</b> and <b>CSS</b>
        </p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button className="websites-link-button">
            <a href="https://html.com/" target="_blank" rel="noreferrer">
              <img src="images/html-com-logo.webp" alt="" />
            </a>
          </button>
          <button className="websites-link-button">
            <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer">
              W3 Schools HTML
            </a>
          </button>
          <button className="websites-link-button">
            <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer">
              W3 Schools CSS
            </a>
          </button>
        </div>
      </div>

      {/* ---------------- YouTube Section ---------------- */}
      <div style={{ color: "gray", textAlign: "center", paddingTop: "50px" }}>
        <p>The Best YouTube Tutorials to get you Started on HTML and CSS</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iwNUJU5D3aI"
            title="HTML CSS Tutorial"
            frameBorder="0"
            allowFullScreen
          />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qz0aGYrrlhU"
            title="HTML CSS Tutorial 2"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
      </section>
      <Footer />
    </div>
  )
}

export default Htmlcss;