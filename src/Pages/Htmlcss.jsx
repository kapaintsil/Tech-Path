import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './CoursePage.css'; // Changed import

function Htmlcss() {
  return (
    <div className="course-page">
      <NavBar />
      <header className="course-header">
        <img className="course-logo" src="/images/html-css-logo.png" alt="HTML and CSS Logo" />
        <h1 className="course-title">
          <span className="highlight">HTML</span> & <span className="highlight">CSS</span>
        </h1>
      </header>

      <main className="course-content">
        <p>
          HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the fundamental
          building blocks of web development. HTML provides the structure and content of a webpage,
          while CSS is used to style and present the HTML content.
        </p>

        <h3>HTML (Hypertext Markup Language)</h3>
        <p>
          HTML is the standard markup language used to create webpages. It provides the structure and content
          of a webpage, allowing you to define the different elements and their relationships. HTML documents
          are composed of HTML tags, which are enclosed in angle brackets.
        </p>

        <h4>Common HTML Tags:</h4>
        <ul>
          <li><b>&lt;!DOCTYPE html&gt;:</b> Specifies the HTML version (HTML5).</li>
          <li><b>&lt;html&gt;:</b> The root element of an HTML document.</li>
          <li><b>&lt;head&gt;:</b> Contains meta-information (title, styles, scripts).</li>
          <li><b>&lt;title&gt;:</b> Sets the webpage title in the browser tab.</li>
          <li><b>&lt;body&gt;:</b> Contains the visible content of the webpage.</li>
          <li><b>&lt;h1&gt; to &lt;h6&gt;:</b> Headings of different levels.</li>
          <li><b>&lt;p&gt;:</b> Defines a paragraph of text.</li>
          <li><b>&lt;a&gt;:</b> Creates hyperlinks.</li>
          <li><b>&lt;img&gt;:</b> Displays images.</li>
          <li><b>&lt;ul&gt; and &lt;li&gt;:</b> Create unordered lists.</li>
        </ul>

        <h4>Basic HTML Structure Example:</h4>
        <div className="code-block">
          <pre>
            <code>
{`<!DOCTYPE html>
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
            </code>
          </pre>
        </div>

        <h4>HTML Tags and Attributes</h4>
        <p><b>HTML Tags</b> are elements or markers that define the structure and content of a webpage.</p>
        <div className="resource-grid">
            <img src="/photos/html-tags.jpg" alt="HTML Tags" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/html-tags2.jpeg" alt="HTML Tags" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/html-tags3.jpg" alt="HTML Tags" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
        </div>
        <p><b>HTML Attributes</b> provide additional information or modify the behavior of HTML elements.</p>
        <div className="code-block">
            <pre><code>{`<a href="https://www.example.com">Click here</a>`}</code></pre>
        </div>
        <div className="resource-grid">
            <img src="/photos/html-attributes1.jpg" alt="HTML Attributes" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/html-attributes2.jpeg" alt="HTML Attributes" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/html-attributes3.jpg" alt="HTML Attributes" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
        </div>

        <h3>CSS (Cascading Style Sheets)</h3>
        <p>CSS is a language used to control the presentation and layout of web pages.</p>
        <h4>Core Concepts of CSS:</h4>
        <ul>
          <li><b>Selectors:</b> Choose which element(s) to style.</li>
          <li><b>Properties:</b> Define appearance (e.g., `color`, `font-size`).</li>
          <li><b>Values:</b> Instructions for properties (e.g., `red`, `16px`).</li>
          <li><b>Declaration Block:</b> A group of properties and values inside curly braces `{ }`.</li>
        </ul>

        <h4>Example of HTML linked to a CSS file:</h4>
        <div className="code-block">
          <pre>
            <code>
{`<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <h1>Hello, CSS!</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
            </code>
          </pre>
        </div>

        <h4>Example of CSS code:</h4>
        <div className="code-block">
          <pre>
            <code>
{`/* styles.css */
h1 {
  color: red;
  font-size: 30px;
}
p {
  color: blue;
  font-size: 16px;
}`}
            </code>
          </pre>
        </div>
        <div className="resource-grid">
            <img src="/photos/css-image1.jpeg" alt="CSS Example 1" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/css-image2.jpeg" alt="CSS Example 2" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/css-image3.jpeg" alt="CSS Example 3" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/css-image4.jpeg" alt="CSS Example 4" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            <img src="/photos/css-image5.jpeg" alt="CSS Example 5" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
        </div>
      </main>

      <section className="resource-section">
        <h3>Files and Documents</h3>
        <p>Downloadable resources to supplement your learning.</p>
        <div className="resource-grid">
          <a href="/html-css-files/Intro_to_HTML.ppt" download className="resource-card">
            <img src="/images/powerpoint-icon.jpg" alt="PowerPoint Icon" />
            <div className="resource-card-title">Introduction To HTML</div>
          </a>
          {/* Add other files here */}
        </div>
      </section>

      <section className="resource-section">
        <h3>Helpful Websites</h3>
        <p>Curated links to external resources for further learning.</p>
        <div className="resource-grid">
          <a href="https://html.com/" target="_blank" rel="noreferrer" className="resource-card">
            <img src="/images/html-com-logo.webp" alt="HTML.com Logo" />
            <div className="resource-card-title">HTML.com</div>
          </a>
          <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer" className="resource-card">
            <div className="resource-card-title">W3Schools HTML</div>
          </a>
           <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer" className="resource-card">
            <div className="resource-card-title">W3Schools CSS</div>
          </a>
        </div>
      </section>

      <section className="youtube-section">
        <h3>YouTube Tutorials</h3>
        <p>Hand-picked video tutorials to get you started.</p>
        <div className="youtube-grid">
          <iframe className="youtube-video" src="https://www.youtube.com/embed/iwNUJU5D3aI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="youtube-video" src="https://www.youtube.com/embed/qz0aGYrrlhU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Htmlcss;