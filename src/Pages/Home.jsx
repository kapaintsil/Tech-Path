import React from 'react'
import NavBar from '../Components/NavBar';
import BackgroundSection from '../Components/BackGroundSection';
import CoursesSection from '../Components/CourseSection';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <NavBar />
      <BackgroundSection />
      <CoursesSection />
      <Footer />
    </>
  )
}

export default Home;
