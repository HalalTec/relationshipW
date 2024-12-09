import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Emotional = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Emotional distance is high. Partners feel misunderstood or disconnected. There is a lack of emotional support. Communication feels cold or distant.'
          ],
          reflectiveQuestions: [
            'Do you often feel emotionally isolated or neglected in the relationship?',
            'Are there frequent misunderstandings or arguments about how each of you feels?',
            'How often do you feel unsupported when you express your emotions?'
          ],
          aspiIndication: [
            'Minimal emotional connection; rarely share feelings; often feel distant or disconnected.'
          ],
          futureQuestions: [
                'Do we currently struggle to share even basic emotions with each other?',
                "In the defined timeframe, do I realistically believe we can begin acknowledging each other's feelings?"
            ]
        },
        {
            score: 2,
          indication: [
                    ' Limited emotional intimacy. There is a noticeable lack of emotional availability. Few attempts to connect emotionally are made.'
          ],
          reflectiveQuestions: [
            'Do you struggle to express your feelings to each other?',
            'Do you feel that your emotional needs are often unmet?',
            'When was the last time you had a heartfelt conversation with your partner?',
          ],
          aspiIndication: [
            'Limited sharing of emotions; occasional misunderstandings; emotional support is rare and inconsistent.'
    ],
    futureQuestions: [
        'Have I noticed that we only share emotions in moments of crisis or need?',
        'Can I envision us creating occasional opportunities to connect emotionally within the timeframe?'
    ]
        },  

        {
            score: 3,
            indication: [
                'Emotional connection feels strained. You may feel misunderstood, but there’s occasional effort to connect.'
            ],
            reflectiveQuestions: [
                'How often do you feel emotionally disconnected, even if your partner is physically present?',
                'Are there instances where you feel your emotions are not acknowledged or validated?',
                'What’s stopping both of you from connecting more deeply emotionally?'
            ],
            aspiIndication: [
                'Infrequent but growing emotional openness; some willingness to address misunderstandings and show care.'
            ],
            futureQuestions: [
                'Do I feel we’re starting to open up more, though it’s still inconsistent?',
                'Can I see us discussing emotions more openly at least a few times in the defined timeframe?'
            ]
        },

        {
            score: 4,
            indication: [
                'Occasional emotional connection, but it’s not consistent. There’s some effort to connect, but it’s often hindered by busy schedules or other stressors.'
            ],
            reflectiveQuestions: [
                'Is it difficult for you to open up to your partner about your deeper emotions?',
                'Do you find it challenging to share your vulnerabilities with each other?',
                'How frequently do you have emotionally fulfilling interactions?'
            ],
            aspiIndication: [
                'Moderate connection; some emotional conversations; still room to foster vulnerability and consistent support.'
            ],
            futureQuestions: [
                'Are we able to share deeper emotions on occasion, but not consistently?',
                'Could we aim to have more meaningful conversations in the defined timeframe?'
            ]
        },
        {
            score: 5,
            indication: [
                'There is an emotional bond, but it feels inconsistent. Partners may connect emotionally during specific moments, but lack of depth still exists.'
            ],
            reflectiveQuestions: [
                'Do you have occasional moments where you feel truly heard and understood by your partner?',
                'How often do you experience deep, genuine emotional connections with your partner?',
                'Do you feel emotionally secure in the relationship, or is it inconsistent?'
            ],
            aspiIndication: [
                'Comfortable sharing feelings occasionally; beginning to work through emotional challenges together.'                
            ],
            futureQuestions: [
                'Do I feel moderately supported emotionally, even if there are gaps?',
                'Is it realistic to expect us to deepen this emotional support within the timeframe?'
            ]
        },
        {
            score: 6,
            indication: [
                'Emotional connection is strong, but could be improved in certain areas. You both support each other emotionally, but sometimes struggles arise.'
            ],
            reflectiveQuestions: [
                'When was the last time you felt completely supported emotionally by your partner?',
                'How often do you feel comfortable being vulnerable with each other?',
                'Are there emotional barriers that occasionally arise during difficult situations?'
            ],
            aspiIndication: [
                'Regular emotional sharing; actively listening to each other; occasional emotional disconnects still occur.'
            ],
            futureQuestions: [
                "Do we show signs of prioritizing each other's emotional well-being?",
                'In the defined timeframe, could we become more consistent in expressing care and understanding?'
            ]
        },
        {
            score: 7,
            indication: [
                'Emotional bond is healthy. There’s a sense of mutual respect and understanding, but some deeper emotional connections might still need nurturing.'
            ],
            reflectiveQuestions: [
                'Do you feel emotionally safe when discussing sensitive topics with your partner?',
                'How comfortable are you with sharing your fears, anxieties, and dreams with each other?',
                'Do both of you show empathy and understanding when the other is going through emotional difficulties?'
            ],
            aspiIndication: [
                    'Strong emotional connection; frequent emotional support; handle challenges with understanding and patience.'
            ],
            futureQuestions: [
                'Do I feel seen and heard emotionally most of the time?',
                'Could we consistently strengthen this bond in the defined timeframe to address lingering challenges?'
            ]
        }, {
            score: 8,
            indication: [
                'Emotional connection is strong, and you both support each other regularly. There’s an understanding of each other’s needs, and emotional intimacy is evident.'
            ],
            reflectiveQuestions: [
                'Do you often express love and care for each other through both words and actions?',
                'How often do you both show empathy and understanding in difficult emotional situations?',
                'Do you both feel heard and valued when you share your feelings?'
            ],
            aspiIndication: [
                'Deep emotional intimacy; mutual understanding; handle most challenges with emotional resilience and mutual respect.'
            ],
            futureQuestions: [
                'Are we highly attuned to each other’s emotional needs?',
                'In the defined timeframe, could we further reinforce this connection to navigate emotions more smoothly?'
            ]
        },
        {
            score: 9,
            indication: [
                'Deep emotional connection and mutual support. You consistently feel valued, loved, and emotionally safe in the relationship.'
            ],
            reflectiveQuestions: [
                'How often do you feel emotionally connected and understood by your partner, even without words?',
                'Do you both show a high level of emotional intelligence, understanding each other’s needs instinctively?',
                'Are there frequent moments when both of you emotionally lift each other up?'
            ],
            aspiIndication: [
                'Exceptional emotional connection; rarely misunderstand each other; a sense of emotional security is present.'
            ],
            futureQuestions: [
                'Do I feel deeply secure and connected emotionally in our relationship?',
                'Is it realistic to expect us to reach near-perfect understanding within the defined timeframe?'
            ]
        },
        {
            score: 10,
            indication: [
                'Exceptional emotional connection. You both provide unwavering emotional support. The relationship feels emotionally fulfilling and deeply connected in every aspect.'
            ],
            reflectiveQuestions: [
                'Do you feel like your partner is your emotional rock, always there for you?',
                'How frequently do you both share your innermost feelings, knowing you’ll be met with understanding and support?',
                'Do you feel completely emotionally secure, valued, and loved by your partner, regardless of external circumstances?'
            ],
            aspiIndication: [
                'Complete emotional harmony; effortlessly share emotions; a sense of profound and unshakable emotional intimacy.'
            ],
            futureQuestions: [
                'Do we consistently operate as a unit emotionally, with no barriers?',
                'Can I imagine maintaining this seamless emotional connection in the defined timeframe?'
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



 
export default Emotional;