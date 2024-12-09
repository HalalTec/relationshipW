import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Trust = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Trust is significantly broken or not present.',
            'There is constant disrespect in words or actions.',
            'Partners don’t confide in or rely on each other.'
          ],
          reflectiveQuestions: [
            'Do you feel betrayed or constantly worried about your partner’s behavior?',
            'Is there a lack of empathy or understanding from your partner?',
            'Do you feel unsafe or unvalued in your relationship?'
          ],
          aspiIndication: [
            ' Minimal trust exists.',
            "Consistent doubts about partner's intentions or actions."
          ],
          futureQuestions: [
                'Is it possible for us to begin addressing the causes of mistrust in the defined timeframe?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Minimal trust, often questioning intentions.',
                    'Respect feels inconsistent or conditional.',
                    'Frequent doubts or conflicts undermine trust.'
          ],
          reflectiveQuestions: [
            ' Do you find yourself questioning your partner’s motives regularly?',
            'Are there moments where respect feels absent or manipulative?',
            'Do you feel uncertain about the stability of the relationship?',
          ],
          aspiIndication: [
                'Rare moments of trust but frequent miscommunication.',
                'Respect is expressed inconsistently.'
          ],
          futureQuestions: [
                                'Can we identify and start resolving specific misunderstandings or sources of disrespect in this timeframe?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Trust issues are present but not overwhelming.',
                'Some acts of respect, but may be overshadowed by occasional disrespect.',
                'Small betrayals or misunderstandings occur.'
            ],
            reflectiveQuestions: [
                'Do you occasionally feel disregarded or unheard by your partner?',
                'Are there times when you doubt your partner’s sincerity?',
                'Do you feel your concerns are not always taken seriously?'
            ],
            aspiIndication: [
                    'Some efforts to rebuild trust, but there is hesitation.',
                    'Mutual respect is not always expressed or felt.'
            ],
            futureQuestions: [
                'Can we consistently practice small actions that demonstrate trust and respect within this timeframe?'
            ]
        },

        {
            score: 4,
            indication: [
                'Trust is weak, but there are some positive moments of openness.',
                'Respect is more often shown than not.',
                'Doubts and misunderstandings are frequent.'
            ],
            reflectiveQuestions: [
                "Do you sometimes feel valued, but not consistently?",
                'Are there moments where you feel that your partner’s actions are misaligned with their words?',
                'Does trust often get restored after misunderstandings, but not without effort?'
            ],
            aspiIndication: [
                'A foundation of trust is forming but not yet stable.',
                'Respect is situational rather than consistent.'
            ],
            futureQuestions: [
                'Can we create and follow shared agreements to strengthen trust and respect during this timeframe?'
            ]
        },
        {
            score: 5,
            indication: [
                'Trust is moderate; there are some unresolved issues.',
                'Respect is generally present but can be compromised under stress.',
                'Occasional misunderstandings or disappointments occur.'
            ],
            reflectiveQuestions: [
                'Do you feel valued but sometimes overlooked in the relationship?',
                'Are there trust issues that come up periodically but can be worked through?',
                'Do you sometimes feel your partner isn’t fully present or supportive?'
            ],
            aspiIndication: [
                'Trust is developing, though some insecurities remain.',
                'Respect is generally shown, but lapses occur occasionally.'                
            ],
            futureQuestions: [
                'Can we identify and reduce situations that challenge our trust or respect within this timeframe?'
            ]
        },
        {
            score: 6,
            indication: [
                'Trust is mostly intact, with occasional lapses.',
                'Respect is usually evident but can falter in stressful situations.',
                'Most conflicts are resolved with understanding.'
            ],
            reflectiveQuestions: [
                'Do you trust your partner more often than not, but still have occasional doubts?',
                'Do you feel respected most of the time, but there are moments of tension?',
                'When issues arise, are they usually addressed with mutual respect?'
            ],
            aspiIndication: [
                'Trust is becoming reliable, with occasional doubts.',
                'Respect is actively practiced in most interactions.'
            ],
            futureQuestions: [
                'Can we consistently reinforce our trust and respect through intentional actions in this timeframe?'
            ]
        },
        {
            score: 7,
            indication: [
                'Strong trust, though some small doubts or past hurts may linger.',
                'Mutual respect is generally consistent and maintained.',
                'Challenges are usually met with healthy communication.'
            ],
            reflectiveQuestions: [
                'Do you feel confident in your partner’s intentions and actions?',
                'Do you experience respect from your partner even in disagreements?',
                'Is there occasional tension, but nothing that severely damages the connection?'
            ],
            aspiIndication: [
                    'Strong trust exists, with rare moments of doubt.',
                    'Respect is a norm in communication and actions.'
            ],
            futureQuestions: [
                'Do others seek my input on global market dynamics?',
                'Can I deepen my cross-cultural connections and collaboration skills in the timeframe?'
            ]
        }, {
            score: 8,
            indication: [
                'Trust is strong, and partners generally feel safe and supported.',
                'Respect is evident in most interactions.',
                'Both partners work to maintain trust and respect through healthy communication.'
            ],
            reflectiveQuestions: [
                'Do you feel that trust is an ongoing strength in your relationship?',
                'Are you regularly treated with kindness, even in stressful moments?',
                'Do you believe your partner holds your best interests at heart?'
            ],
            aspiIndication: [
                'Actively leads cross-border initiatives.',
                'Can adapt business strategies to suit different cultural and economic contexts effectively.'
            ],
            futureQuestions: [
                'Can we maintain and build on this foundation of trust and respect consistently in the defined timeframe?'
            ]
        },
        {
            score: 9,
            indication: [
                'Trust is very strong; partners have a deep sense of security.',
                'Respect is unwavering, even during disagreements.',
                'There is an active effort to build and maintain trust and respect.'
            ],
            reflectiveQuestions: [
                'Do you feel a deep sense of security and mutual trust in your relationship?',
                'Do you feel constantly valued and supported by your partner?',
                'Is there a healthy, ongoing dialogue to ensure trust and respect remain intact?'
            ],
            aspiIndication: [
                'Trust is implicit in all interactions.'
            ],
            futureQuestions: [
                'Can we strengthen our shared vision for the relationship while upholding trust and respect in this timeframe?'
            ]
        },
        {
            score: 10,
            indication: [
                'Trust is unshakable; partners are fully reliable and open with each other.',
                'Respect is a natural part of the relationship, and both partners consistently honor each other.',
                'No significant breaches of trust or disrespect occur'
            ],
            reflectiveQuestions: [
                'Do you feel completely safe and supported by your partner at all times?',
                'Do you both have an unspoken understanding of how much you respect each other?',
                'Are there no major trust or respect issues, and you work together seamlessly as a team?'
            ],
            aspiIndication: [
                'Unshakable trust and mutual respect define the relationship.',
                'Trust and respect are natural and effortless.'
            ],
            futureQuestions: [
                'Can we model our level of trust and respect to inspire others in relationships within this timeframe?'
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



 
export default Trust;