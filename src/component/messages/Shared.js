import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Shared = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Frequent misalignment in core values and life goals',
            'Struggles to understand or respect each other’s values',
            'Little to no shared vision for the future'
          ],
          reflectiveQuestions: [
            'Do you find it hard to communicate your values and goals with each other?',
            'Do your differences often cause tension or frustration?',
            "Are you unsure of your partner's values or goals?"
          ],
          aspiIndication: [
            'Barely any mutual understanding of values.',
            'Frequent disregard for each other’s preferences or perspectives.'
          ],
          futureQuestions: [
                "Have we experienced consistent misunderstandings or disregard for each other's values in the defined timeframe?",
                'Is shared respect almost absent?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Significant differences in key values or goals',
                    'Attempts to align have led to conflict or feelings of compromise',
                    'Rarely discuss future plans together'
          ],
          reflectiveQuestions: [
            'Do you often feel misunderstood when sharing your values?',
            'Are your life goals different to the point of creating a divide?',
            'How often do you discuss shared goals?',
          ],
          aspiIndication: [
                'Rare alignment in values.',
                'Minor effort to show mutual respect, but often falls short.'
          ],
          futureQuestions: [
                                'Are we struggling to identify shared values?',
                                'Have moments of respect been occasional and insufficient in the defined timeframe?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Acknowledge some overlap in values but struggle with alignment',
                'Conversations about shared goals often lead to compromise',
                'Only occasional agreement on major life decisions'
            ],
            reflectiveQuestions: [
                'Are there specific values or goals where you feel disconnected?',
                'Do you sometimes feel like you’re settling when discussing future plans?',
                'How often do you agree on your shared vision?'
            ],
            aspiIndication: [
                    'Acknowledgment of some shared values but little follow-through in actions.',
                    'Respect is inconsistent.'
            ],
            futureQuestions: [
                'Do we occasionally align on certain values but fail to prioritize them together?',
                'Has mutual respect been more situational than consistent?'
            ]
        },

        {
            score: 4,
            indication: [
                'Some common values but significant disagreements on future plans or key principles',
                'A mix of shared and differing goals',
                'Open to compromise but unsure about long-term compatibility'
            ],
            reflectiveQuestions: [
                'Do you see room for improvement in how your values align?',
                'Are you open to compromising on your goals for the sake of the relationship?',
                'Do you often discuss future plans?'
            ],
            aspiIndication: [
                'Emerging clarity on shared values but limited application in decision-making.',
                'Respect shown in small but meaningful ways.'
            ],
            futureQuestions: [
                'Are we beginning to uncover shared values but not yet integrating them meaningfully?',
                'Has respect been genuine but not yet habitual?'
            ]
        },
        {
            score: 5,
            indication: [
                'Moderate alignment on key values, but with occasional disagreements on how to pursue common goals',
                'Able to have some discussions about shared vision'
            ],
            reflectiveQuestions: [
                'Do you both feel a sense of shared purpose, but sometimes struggle with how to achieve it?',
                'Are there specific values that still create friction?',
                'How well do you align on major life decisions?'
            ],
            aspiIndication: [
                'Moderate alignment in shared values but still room for improvement.',
                'Respect is shown regularly in daily interactions.'                
            ],
            futureQuestions: [
                'Have we experienced steady improvement in respecting and acknowledging each other’s values in the defined timeframe?',
                'Are we midway to alignment?'
            ]
        },
        {
            score: 6,
            indication: [
                'Shared values on most significant aspects of life',
                'Ongoing conversations about future goals',
                'Willing to work through differences for the sake of alignment'
            ],
            reflectiveQuestions: [
                'Are you satisfied with the direction of your shared goals, but see areas for improvement?',
                'How often do you have open discussions about your shared vision?',
                'Do you feel like your values are mostly aligned, but need more work?'
            ],
            aspiIndication: [
                'Solid understanding of shared values and mutual effort to respect them.',
                'Respect is visible and reciprocated consistently.'
            ],
            futureQuestions: [
                ' Have we developed a shared language for our values?',
                "Do we both actively demonstrate respect for each other's perspectives and needs?"
            ]
        },
        {
            score: 7,
            indication: [
                'Strong alignment in core values and general agreement on life goals',
                'Discussions on future plans are more collaborative and purposeful'
            ],
            reflectiveQuestions: [
                'Do you frequently agree on the bigger picture goals in your life?',
                'How aligned are you on how to raise children, career paths, or lifestyle choices?',
                'Do you often feel that you are on the same page about the future?'
            ],
            aspiIndication: [
                    'Strong alignment in values with proactive application.',
                    'Respect has become second nature in interactions.'
            ],
            futureQuestions: [
                'Have we reached a point where most of our decisions reflect our shared values?',
                'Is respect a natural part of how we communicate and act?'
            ]
        }, {
            score: 8,
            indication: [
                ' Almost complete alignment in values and future aspirations',
                'Actively collaborating on creating and fulfilling shared goals',
                'Mutual respect and understanding of each other’s aspirations'
            ],
            reflectiveQuestions: [
                'Do you feel deeply understood and respected for your values?',
                'Do you regularly discuss and plan towards your shared vision?',
                'How strongly do you believe in the goals you share?'
            ],
            aspiIndication: [
                'Deep connection rooted in shared values.',
                'Respect extends even in challenging situations.'
            ],
            futureQuestions: [
                'Have we managed to maintain mutual respect and value alignment, even in moments of stress or conflict?',
                'Are we building on our shared foundation?'
            ]
        },
        {
            score: 9,
            indication: [
                'Deep and unwavering alignment on all major values and life goals',
                'Both actively support each other in achieving shared and individual aspirations',
                'Consistently prioritize mutual goals and values in everyday decisions'
            ],
            reflectiveQuestions: [
                'Do you often feel like you are united in all of your major life goals?',
                'Do you feel a sense of security knowing your values are so well aligned?',
                'How often do you feel encouraged by your partner’s support for shared goals?'
            ],
            aspiIndication: [
                'Exceptional alignment of shared values, guiding most actions.',
                'Respect is unwavering and deeply ingrained.'
            ],
            futureQuestions: [
                'Do our actions consistently reflect our shared values without compromise?',
                'Is our mutual respect apparent in all areas of our partnership?'
            ]
        },
        {
            score: 10,
            indication: [
                'Perfect alignment on all shared values and life goals',
                'Strong, unified vision for the future',
                'Both partners feel fulfilled, supported, and understood in all aspects of shared goals'
            ],
            reflectiveQuestions: [
                'Do you feel like there is no gap in your shared vision and goals?',
                'Are you both always on the same page about important life decisions?',
                'How often do you feel that your relationship supports your greatest aspirations?',
            ],
            aspiIndication: [
                'Perfect synergy in shared values and respect, forming the bedrock of the relationship.',
                'Shared values and respect are exemplary.'
            ],
            futureQuestions: [
                'Have we achieved a level of respect and value alignment that feels ideal and unshakable?',
                'Is our relationship a model for shared respect and values?'
            ]
        },
        {
            score: 10,
            indication: 'Exceptional spiritual connection, profound inner peace, complete alignment with purpose, deeply fulfilling spiritual practices, strong sense of transcendence.',
            reflectiveQuestions: [
                'Do you feel a profound, unbreakable connection to your spirituality and purpose?',
                'Are you consistently at peace, with a deep sense of fulfillment and clarity?',
                'Does your spirituality define and elevate your daily life?'


            ]
        }

      ];

      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
      };
      

      
      if (quest < 1) {
        return ( 
            <>
                       <div className="message" >
                    <div className="card"> 
                    <div className="confirm">
                    <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
                    <button onClick={close} style={{color:"red"}} className="close">X</button>
                    </div>  
                    <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
                    <h3>Indicators for level {currentIndex+1}:</h3>
                    <p style={{fontSize:"15px"}}> {categories[currentIndex].indication} </p>
                    <h3> Reflective Questions:</h3>
                    <ul style={{textAlign:"left"}}>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[0]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[1]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[2]}</li>
                    </ul>
                    <div className="ref-button">
                    <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
                    
                    <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
                    </div>
                    </div>
                </div>
                </>
        )
      }else {
        return (<> 
        
            {/* future */}
                  <div className="message" >
               <div className="card"> 
               <div className="confirm">
               <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
               <button onClick={close} style={{color:"red"}} className="close">X</button>
               </div>
               <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
               <h3>Aspirational Indicators {currentIndex+1}:</h3>
               <ul style={{textAlign:"left"}}>
               {categories[currentIndex].aspiIndication.map((indication, index) => (
                   <li key={index} style={{ listStyle: "disc" }}>
                   {indication}
                   </li>
               ))}
               </ul>
               <h3> Reflective Questions:</h3>
               <ul style={{textAlign:"left"}}>
               {categories[currentIndex].futureQuestions.map((indication, index) => (
                   <li key={index} style={{ listStyle: "disc" }}>
                   {indication}
                   </li>
               ))}
               </ul>                
               <div className="ref-button">
               <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
               
               <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
               </div>
               </div>
           </div>
           </>
           
       
    );
     }
   

          
}



 
export default Shared;