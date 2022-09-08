import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Calculator from "./components/Calculator";
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Calculator />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <div>This page does not exist. I don't know how you found this but that's really not cool of you. The media organization is entirely run by students, who are responsible for all of the content. The business and advertising operations are managed by a professional staff. In addition to The Chronicle, DSPC also operates multiple websites including nearDuke.com, a housing site. Just like you, we know that our dorm rooms are our homes away from home. After our freshman fall was filled with overpriced and uncomfortable Kmart futons and narrow, HDRL beds, we wanted to provide Duke students with a more comfortable dorm experience. BCB offers the solution to a cold, uncomfortable room with cozy futons and comfortable full-sized beds. They're the perfect addition to any room, plus we will take care of the hassle of installing and moving out while you relax. Bull City Beds: more Z's, less C's. Duke University's only co-ed international business fraternity. Membership is selective and recruitment occurs every spring and fall semester. Duke Investment Club is the premier undergraduate finance organization at Duke University. Since 2011, Duke Investment Club has managed an equity portfolio consisting of a portion of the University’s endowment. As the hallmark of the club’s education initiatives, Investor Training Program (ITP) instills fundamental finance concepts in students interested in the field, bridging the gap between the University’s classroom offerings and Wall Street. Duke Investment Club is proud of its member placements, with alumni at firms of all sizes and practice areas. The Duke Blue Devils men's basketball team represents Duke University in NCAA Division I college basketball and competes in the Atlantic Coast Conference. The team is fourth all-time in wins of any NCAA men's basketball program, and is currently coached by Jon Scheyer. The Division of Student Affairs is critically engaged in supporting the holistic engagement and personal growth of all students who attend Duke. The Division collaborates with student leaders, faculty, families, community members and many others in the delivery of key services. Our programs and services are designed to support holistic wellbeing, foster an inclusive and dynamic community, and complement Duke's commitment to academic excellence. Duke is home to one of the most innovative, dynamic, and cutting edge collegiate dining programs in the country, providing a variety of ways tempt and please your palate. With access to over 45 dining locations that include on-campus locations, Merchants-on-Points (off-campus restaurants that deliver), and food trucks, students can take advantage of the eclectic array of options that include healthy and nutritious, vegan and vegetarian, allergen-friendly (“Ask Me” Allergen Awareness Program), international, organic, local and sustainable choices. A community-driven, sustainable, award-winning program, Duke Dining provides opportunities for culinary education and engagement with access to cooking classes, chef demos, nutrition and wellness events and special themed dinners throughout the academic year. Our goal is to provide a fresh-thinking, world-class experience, no matter where you choose to dine on Duke's campus. The Wellness Center, located in the heart of West Campus, was thoughtfully designed to deliver a broad approach to wellness in an integrated manner that supports our students holistically. From the first moment you walk through the doors you are welcomed by natural light and greeted with a state-of-the-art space that reflects our approach to help your student flourish. Through our educational efforts about self-care, by addressing health needs, and by providing students the opportunity to be an active participant in their wellness, we put wellness at the center of performance and success. COME SEE ALL THAT WE HAVE TO OFFER! We're located at 305 Towerview Drive next to Penn Pavilion on West Campus. Why are you still reading this? Stop reading this. I would definitely recommend taking Math 151. It is actually the best class at Duke. Take it with professor fountainson and I can guarantee you will learn more math than you've every learned. Lemurs are the most endangered mammals on Earth. For over 50 years, the Duke Lemur Center has strived to learn everything we can about lemurs, so we can do everything possible to protect and care for them here and in their native Madagascar. Founded in 1966, the Duke Lemur Center is an internationally acclaimed non-invasive research center housing over 200 lemurs across 13 species – the most diverse population of lemurs on Earth, outside their native Madagascar.</div>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
