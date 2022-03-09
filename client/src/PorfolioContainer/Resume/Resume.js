import React,{useState} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";
//import index from 'react-typical'

export default function (props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) =>{
        if (screen.fadeInScreen !==props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

     const fadeInSubcription = 
     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


     const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        );
      };
    
    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills",logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ];

    const programmingSkillsDetails = [
        {skill: "JavaScript", ratingPercentage: 85},
        {skill: "python", ratingPercentage:70},
        {skill: "PHP", ratingPercentage:70},
        {skill: "Java", ratingPercentage:60},
        {skill: "React JS", ratingPercentage:80},
        {skill: "Node JS", ratingPercentage:70},
        {skill: "Mongo DB", ratingPercentage:70},
        {skill: "Express JS", ratingPercentage:70},
        {skill: "Laravel", ratingPercentage: 70},
        {skill: "HTML & CSS",ratingPercentage: 80},
    ];

    const projectsDetails = [
        {
            title: "Record Management System",
            duration: { fromDate: "2021", toDate:"2022"},
            description: "A web application built with NodeJS and ExpressJS that follows the structure of CRUD Operations where records are captured organized protected and destroyed in accordance with the approved schedules",
            subHeading : "Solves the problem of lose of information and data distruction, "
        },
        {
            title: "E-commerce web application",
            duration: { fromDate:"2021", toDate:"2022"},
            description: "Online ecommerce website for showcasing and selling products online ",
            subHeading: "Technologies Used: MongoDB, ExpressJS, ReactJS, NodeJS, Redux, Bootsrap.",
        },

        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2021", toDate: "2022"},
            description: " A Personal Portfolio website to showcase my details and projects",
            subHeading: "Technologies Used: ReactJS, NodeJS and Bootstrap"
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading = {"University of Cape Coast, Ghana"}
            subHeading = {"BACHELOR OF COMPUTER SCIENCE"}
            fromDate = {"2012"}
            toDate = {"2016"}
            />
            <ResumeHeading
            heading = {"Software training institute, Ghana"}
            subHeading = {"POST GRADUATE IN SOFTWARE ENGINEERING"}
            fromDate = {"2016"}
            toDate = {"2017"}
            />
            <ResumeHeading 
            heading = {"ALISON Online Training"}
            subHeading = {"AWS Solutions Architect Certification Training"}
            fromDate = {"2022"}
            toDate = {"Present"}
            />
        </div>,


        /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Safedevs Technologies"}
          subHeading={"Remote Software Developer"}
          fromDate={"08-2020 "}
          toDate={"01-2022"}
        />

        <ResumeHeading
          heading={"Al Barakah Holding -Abu Dhabi"}
          subHeading={"Software Developer"}
          fromDate={"05-2018"}
          toDate={"04-2020"}
        />
        <ResumeHeading
          heading={"Ghana Cocoaboard, Accra-Ghana"}
          subHeading={"Software Developer, Contract"}
          fromDate={"02-2017"}
          toDate={"11-2017"}
        />
        
      </div>
    </div>,
    
            <div className='resume-screen-container programming-skills-container' key="programming-skills">
                {programmingSkillsDetails.map((skill, index)=>(
                   <div className='skill-parent' key={index}>
                       <div className='heading-bullet'></div>
                           <span>{skill.skill}</span>
                           <div className='skill-percentage'>
                               <div style={{width: skill.ratingPercentage + "%"}} 
                               className='active-percentage-bar'>
                                
                               </div>
                            </div>
                       </div>
                
                ))}
            </div>,
           <div className='resume-screen-container' key="projects">
               {projectsDetails.map((projectsDetails, index)=>(
                 <ResumeHeading
                 key={index}
                 heading={projectsDetails.title}
                 subHeading ={projectsDetails.subHeading}
                 description ={projectsDetails.description}
                 fromDate={projectsDetails.duration.fromDate}
                 toDate ={projectsDetails.duration.toDate}
                 />  
               ))}
           </div>,

                 
           <div className='resume-screen-container' key="interest">
               <ResumeHeading
               heading ="Traveling"
               description = "I love travelling the world and exploring different culture "
               />
               <ResumeHeading
               heading ="Football"
               description = "I like  to challenge my reflexes a lot while competing in gootball games"
               />
               <ResumeHeading
               heading ="Music"
               description = "Listening to soothing music is something i can never compromise with"
               />
           </div>,
           
             
    ];

     const handleCarousal =(index)=>{
         let offsetHeight = 360;
         let newCarousalOffset ={
             style: { transform: "translateY(" + index * offsetHeight * -1 + "px)"},
         };
         setCarousalOffSetStyle(newCarousalOffset);
         setSelectedBulletIndex(index);
     };

     const getBullets =()=>{
         return resumeBullets.map((bullet,index)=>(
            <div 
             onClick={()=>handleCarousal(index)}
             className={index=== selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
             key ={index} >
                 <img className='bullet-logo'
                 src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                 alt='no internet connection'
                 />
                 <span className='bullet-label'>{bullet.label}</span>
            </div>
         ));
     };

     const getResumeScreens =()=>{
         return (
             <div style={carousalOffSetStyle.style}
             className ="resume-details-carousal">
                 {resumeDetails.map((ResumeDetail)=>ResumeDetail)}
             </div>
         );
     };

     return (
        <div
          className="resume-container screen-container "
          id={props.id || ""}
        >
          <div className="resume-content">
            <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
            <div className="resume-card">
              <div className="resume-bullets">
                <div className="bullet-container">
                  <div className="bullet-icons"></div>
                  <div className="bullets">{getBullets()}</div>
                </div>
              </div>
    
              <div className="resume-bullet-details">{getResumeScreens()}</div>
            </div>
          </div>
        </div>
      );
    };
    
    