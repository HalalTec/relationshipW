import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Physical = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            '1inimal physical intimacy.',
            'Rarely or never engaged in any form of physical touch (hugs, hand-holding, kissing).',
            'No sexual intimacy or significant struggles in this area.'
          ],
          reflectiveQuestions: [
            'Do you feel emotionally distant when it comes to physical connection?',
            'Is there physical or emotional discomfort when you are physically close to your partner?',
            'Have there been any past experiences or beliefs that may be affecting your openness to intimacy?'
          ],
          aspiIndication: [
            ' Minimal physical connection with partner.',
            'Occasional or no communication about physical needs.',
            'Uncertainty about comfort levels with physical intimacy.'
          ],
          futureQuestions: [
                'Am I comfortable initiating conversations about physical intimacy in the defined timeframe?',
                'Do I see a possibility for slight improvement in this area?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Physical touch is infrequent and lacks emotional warmth.',
                    'Occasional, but unsatisfying physical affection.',
                    'There is little to no meaningful sexual connection.'
          ],
          reflectiveQuestions: [
            'How often do you feel physically disconnected from your partner?',
            'Do you ever feel that your needs for closeness and touch are not being met?',
            'What would make you feel more comfortable in being physically intimate?',
          ],
          aspiIndication: [
                'Some physical closeness but limited expression of affection.',
                'Rarely initiates physical touch.',
                'Acknowledges need for improvement in physical intimacy.'
          ],
          futureQuestions: [
                                'Can I imagine creating moments of physical closeness with my partner in the defined timeframe?',
                                'Will I be ready to express my physical needs better?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Limited physical intimacy with minimal emotional connection.',
                'Physical affection occurs but feels routine or forced.',
                'Sexual intimacy is rare and lacks deep connection.'
            ],
            reflectiveQuestions: [
                "Do you feel physically distant, even if you're close to your partner?",
                'Are there areas in your relationship where you want more touch or closeness?',
                'How can you introduce more intentional moments of physical connection?'
            ],
            aspiIndication: [
                    'Occasional physical intimacy or touch.',
                    'Beginning to explore boundaries and preferences.',
                    'Comfortable addressing basic concerns.'
            ],
            futureQuestions: [
                'Do I feel capable of consistently showing small physical gestures of affection in the defined timeframe?',
                "Can I take steps to understand my partner's preferences?"
            ]
        },

        {
            score: 4,
            indication: [
                'Physical intimacy is inconsistent, and intimacy feels disconnected.',
                'Some affectionate gestures, but not frequent.',
                'Sexual intimacy is sporadic, and sometimes awkward.'
            ],
            reflectiveQuestions: [
                "When was the last time you felt emotionally close during physical intimacy?",
                'How satisfied are you with the amount of physical closeness in your relationship?',
                'Do you have clear communication about physical intimacy with your partner?'
            ],
            aspiIndication: [
                'Regular physical affection but with some inconsistencies.',
                'Open to learning about partner’s needs.',
                'Feels safe discussing improvements.'
            ],
            futureQuestions: [
                'Will I commit to actively improving consistency in physical affection?',
                'Am I willing to discuss physical intimacy more openly with my partner?'
            ]
        },
        {
            score: 5,
            indication: [
                'Physical affection occurs, but it’s often tied to routine or habit.',
                'Sexual intimacy happens but lacks spontaneity or emotional depth.',
                "There's an occasional emotional connection during intimacy."
            ],
            reflectiveQuestions: [
                'How comfortable do you feel expressing your physical needs to your partner?',
                'How often do you and your partner make time for affectionate physical touch?',
                'Do you feel safe and comfortable during moments of physical closeness?'
            ],
            aspiIndication: [
                'Physical intimacy is present but may feel routine.',
                'Clear communication about likes and dislikes.',
                'Exploring new ways to connect physically.'                
            ],
            futureQuestions: [
                'Can I explore new approaches to physical intimacy in the defined timeframe?',
                'Am I committed to maintaining clear communication with my partner?'
            ]
        },
        {
            score: 6,
            indication: [
                "Physical touch is somewhat regular, but it's often practical or functional.",
                'Sexual intimacy is more frequent but may still lack full emotional connection.',
                'Affectionate gestures are present but can feel mechanical.'
            ],
            reflectiveQuestions: [
                'Does your partner initiate physical affection regularly, or do you?',
                'When you are physically close to your partner, do you feel supported and loved?',
                'Are there specific actions or gestures you wish your partner would take to improve physical connection?'
            ],
            aspiIndication: [
                'Physical connection is strong but could be deeper.',
                'Willingness to try new experiences together.',
                'Feels connected but desires more spontaneity.'
            ],
            futureQuestions: [
                'Can I prioritize physical intimacy more often in the defined timeframe?',
                'Will I encourage more spontaneity and variety in physical connection?'
            ]
        },
        {
            score: 7,
            indication: [
                'Physical intimacy occurs frequently, with moments of emotional warmth.',
                'Sexual intimacy is meaningful, though not always spontaneous.',
                'Both partners are making efforts to stay connected.'
            ],
            reflectiveQuestions: [
                'How often do you feel emotionally satisfied during physical closeness?',
                'Is there a healthy balance of physical affection and emotional closeness?',
                'What do you both do to ensure that your physical connection feels nurturing and genuine?'
            ],
            aspiIndication: [
                    'Mutual satisfaction with physical intimacy but occasional gaps.',
                    'Both partners feel valued and desired.',
                    'Actively building trust and deeper connection.'
            ],
            futureQuestions: [
                'Will I continue fostering mutual understanding and trust in this area?',
                'Can I ensure both my partner and I feel consistently valued in our physical relationship?'
            ]
        }, {
            score: 8,
            indication: [
                    'Regular, affectionate physical touch that feels sincere and intimate.',
                    'Sexual intimacy is emotionally engaging and passionate.',
                    'Physical closeness is aligned with emotional closeness.'
            ],
            reflectiveQuestions: [
                'How do you both ensure that physical intimacy feels emotionally fulfilling?',
                'Do you feel that your physical intimacy enhances your emotional bond?',
                'Are there any areas in your physical connection that you feel could still improve?'
            ],
            aspiIndication: [
                'High level of satisfaction with physical intimacy.',
                'Physical touch strengthens emotional connection.',
                'Both partners feel their needs are met most of the time.'
            ],
            futureQuestions: [
                "Can I maintain a consistent effort to meet both my needs and my partner's?",
                'Am I prepared to strengthen the connection emotionally through physical touch?'
            ]
        },
        {
            score: 9,
            indication: [
                'Physical intimacy is regular and deeply emotionally connected.',
                'Sexual intimacy is highly fulfilling, with both partners feeling completely comfortable.',
                'Affection is both tender and passionate, with high emotional satisfaction.'
            ],
            reflectiveQuestions: [
                'How would you describe the level of closeness you feel when physically intimate with your partner?',
                'How much do you feel that your physical connection strengthens your relationship overall?',
                'What practices or actions have helped create such a strong physical bond?'
            ],
            aspiIndication: [
                'Physical intimacy is an integral, joyful part of the relationship.',
                'Partners are adventurous yet respectful of boundaries.',
                'Strong alignment on physical needs and expectations.'
            ],
            futureQuestions: [
                'Can I envision physical intimacy as a regular, joyful part of our relationship?',
                'Will I remain respectful of boundaries while deepening our physical connection?'
            ]
        },
        {
            score: 10,
            indication: [
                'Physical intimacy is a constant source of joy, emotional connection, and fulfillment.',
                'There is a perfect balance of affection, touch, and sexual intimacy, all of which enhance the relationship.',
                'Sexual intimacy is always fulfilling, and both partners actively nurture this connection.'
            ],
            reflectiveQuestions: [
                ' When was the last time you both experienced total emotional and physical satisfaction in intimacy?',
                "How do you both work together to keep your physical connection at this high level of intimacy?",
                'What steps do you take to ensure that your physical intimacy continues to grow and thrive?'
            ],
            aspiIndication: [
                'Exceptional physical intimacy, deeply integrated with emotional and mental connection.',
                'Partners have complete trust and openness.',
                'Feels effortless and fulfilling for both.'
            ],
            futureQuestions: [
                'Can I imagine achieving complete trust and openness in physical intimacy in the defined timeframe?',
                'Will I sustain this high level of connection and effort?'
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



 
export default Physical;