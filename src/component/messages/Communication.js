import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Communication = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Communication is virtually non-existent.',
            'Arguments or misunderstandings dominate conversations.',
            'Feelings are often ignored or dismissed.'
          ],
          reflectiveQuestions: [
            'How often do you feel unheard or misunderstood in your conversations?',
            'Do you struggle to share your thoughts or emotions with your partner?',
            'When was the last time you felt fully understood by your partner?'
          ],
          aspiIndication: [
            'Minimal to no communication.',
            'Conversations are mostly surface-level or nonexistent.'
          ],
          futureQuestions: [
                'Do you currently avoid discussing important topics with your partner?',
                "Do you believe it's possible to maintain minimal communication in the defined timeframe?"
            ]
        },
        {
            score: 2,
          indication: [
                    ' Communication is rare or limited.',
                    'When communicated, it is often through conflict or tension.',
                'Efforts to communicate are met with resistance.'
          ],
          reflectiveQuestions: [
            'How do you feel when you try to talk to your partner?',
            'Is it hard to start meaningful conversations?',
            'Do you frequently leave conversations feeling frustrated or ignored?',
          ],
          aspiIndication: [
                'Rarely communicate beyond daily logistics.',
                'Discomfort or lack of openness in sharing thoughts or feelings.'
          ],
          futureQuestions: [
                                'Are you willing to move toward occasional non-logistical conversations?',
                                'Can you sustain minimal yet occasional emotional connection in the defined timeframe?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Communication feels forced or awkward.',
                'There are frequent misunderstandings or unspoken tension.',
                'Emotional expression is limited.'
            ],
            reflectiveQuestions: [
                'Do you find it difficult to express your true feelings?',
                'Is there an underlying tension or discomfort when you talk?',
                'How often do you avoid important conversations with your partner?'
            ],
            aspiIndication: [
                    'Some basic emotional sharing.',
                    'Frequent misunderstandings or unaddressed issues linger.'
            ],
            futureQuestions: [
                'Do you find it possible to increase emotional openness slightly?',
                'Will occasional misunderstandings still be acceptable in the defined timeframe?'
            ]
        },

        {
            score: 4,
            indication: [
                'Communication is often one-sided.',
                'Your partner struggles to listen actively or engage in meaningful conversations.',
                'Small misunderstandings are common.'
            ],
            reflectiveQuestions: [
                "Do you often feel like you're talking more than your partner?",
                'How much effort does your partner put into understanding your perspective?',
                'Are misunderstandings easily resolved, or do they linger?'
            ],
            aspiIndication: [
                'Communication occurs but lacks depth.',
                'Beginning to address sensitive topics sporadically.'
            ],
            futureQuestions: [
                'Can you sustain semi-regular sensitive conversations?',
                'Do you believe your current efforts can lead to modest progress within the defined timeframe?'
            ]
        },
        {
            score: 5,
            indication: [
                'Communication is functional but lacks emotional depth.',
                'Both partners speak, but there’s little connection or empathy.',
                'Issues are addressed but may not be fully understood or resolved.'
            ],
            reflectiveQuestions: [
                'Do you often feel like your conversations lack emotional connection?',
                'Are you able to share your worries or joys freely?',
                'How comfortable are you in addressing difficult topics with your partner?'
            ],
            aspiIndication: [
                'A balance between logistics and emotional sharing.',
                'Some improvements in understanding each other.'                
            ],
            futureQuestions: [
                'Can you consistently alternate between practical and emotional communication?',
                'Are you open to acknowledging and improving misunderstandings in the timeframe?'
            ]
        },
        {
            score: 6,
            indication: [
                'Communication is relatively open, though sometimes challenging.',
                'You try to listen and be heard, but not always effectively.',
                'Emotional sharing happens occasionally but lacks consistency.'
            ],
            reflectiveQuestions: [
                'How easy is it for both of you to speak openly without fear of judgment?',
                'When you disagree, how effectively do you express your emotions?',
                'Do you feel emotionally supported during conversations?'
            ],
            aspiIndication: [
                'Increasing ability to listen actively and empathize.',
                'Occasional deep conversations.'
            ],
            futureQuestions: [
                'Can you realistically engage in active listening most of the time?',
                'Will frequent deep conversations become part of your pattern within the defined timeframe?'
            ]
        },
        {
            score: 7,
            indication: [
                'Communication is generally clear and respectful.',
                'Both partners make an effort to understand one another.',
                'Conflicts arise but are handled with a focus on resolution.'
            ],
            reflectiveQuestions: [
                'Do you both actively listen and try to understand each other?',
                'How often do you find yourselves resolving conflicts constructively?',
                'Do you feel emotionally validated when speaking with your partner?'
            ],
            aspiIndication: [
                    'Comfortable discussing sensitive issues.',
                    'Communication feels more like a partnership.'
            ],
            futureQuestions: [
                'Are you prepared to be more vulnerable in discussions?',
                'Can you and your partner address most sensitive topics without fear or resentment in the timeframe?'
            ]
        }, {
            score: 8,
            indication: [
                'Communication is mostly positive and empathetic.',
                'Both partners are skilled at expressing thoughts and feelings.',
                'Difficult conversations are handled with patience and care.'
            ],
            reflectiveQuestions: [
                'How often do you both feel heard and understood during challenging discussions?',
                'Are you both comfortable expressing vulnerability to each other?',
                'How often do you feel emotionally connected during conversations?'
            ],
            aspiIndication: [
                'Strong ability to resolve conflicts through communication.',
                'Regular check-ins and deep conversations.'
            ],
            futureQuestions: [
                'Can you and your partner practice routine emotional check-ins?',
                'Is it realistic to expect conflict resolution will become seamless in the defined timeframe?'
            ]
        },
        {
            score: 9,
            indication: [
                'Communication is open, honest, and deeply connected.',
                'Both partners feel emotionally safe to express themselves.',
                'Conflicts are resolved quickly and with mutual respect.'
            ],
            reflectiveQuestions: [
                'How often do you feel emotionally safe and fully understood?',
                'Are you both able to have deep, meaningful conversations without fear of judgment?',
                'How often do you feel your partner is truly attuned to your emotional needs?'
            ],
            aspiIndication: [
                'High trust and openness.',
                'Communication fosters growth and deepens connection regularly.'
            ],
            futureQuestions: [
                'Can you realistically achieve a level of communication that is growth-oriented?',
                'Will both of you feel consistently secure in expressing needs during the timeframe?'
            ]
        },
        {
            score: 10,
            indication: [
                'Communication is flawless, with both partners fully attuned to each other’s emotional needs.',
                'There is a deep, constant flow of understanding and support.',
                'Both partners feel that their communication is a cornerstone of their relationship.'
            ],
            reflectiveQuestions: [
                'How often do you feel deeply connected through communication?',
                "Do you both feel completely in sync with each other's thoughts and feelings?",
                'When challenges arise, do you feel confident that your communication will strengthen your relationship?'
            ],
            aspiIndication: [
                'Exceptional communication: vulnerable, open, and transformative.',
                'Communication is effortless and resilient.'
            ],
            futureQuestions: [
                'Can you see yourselves maintaining consistently high communication levels with no unresolved issues?',
                'Will communication naturally transform your relationship in the timeframe?'
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



 
export default Communication;