import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Quality = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Little to no time spent together'
          ],
          reflectiveQuestions: [
            'Do we regularly find ourselves too busy for each other?',
            'How often do we feel disconnected or distant?'
          ],
          aspiIndication: [
            'Rarely spend time together; no shared activities; constant distractions when together.',
            'Feel disconnected; minimal communication outside logistics or practical matters.'
          ],
          futureQuestions: [
                'Do we currently make time to connect, or do other priorities always come first?',
                'Is it possible for us to carve out even a small moment of meaningful time together within the defined timeframe?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Rarely spend quality time together'
          ],
          reflectiveQuestions: [
            'When was the last time we had uninterrupted time together?',
            'Do we prioritize time with each other, or is it often overlooked?',
          ],
          aspiIndication: [
                'Occasional time spent together, but it often feels superficial or rushed.',
                'Feel somewhat disconnected, with rare moments of true connection.'
          ],
          futureQuestions: [
                                'Have we identified what prevents us from spending consistent quality time together?',
                                'Are we willing to start with one intentional activity or conversation in the defined timeframe?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Time together is infrequent and short'
            ],
            reflectiveQuestions: [
                "Do we feel we have enough time to really connect and enjoy each other's company?",
                'How much of our time together feels rushed or distracted?'
            ],
            aspiIndication: [

                'Spend time together sporadically; beginning to prioritize meaningful moments.',
                'Conversations begin to touch on emotional or personal topics, though not consistently.'
            ],
            futureQuestions: [
                'Do we know what “quality time” looks like for both of us?',
                'Can we realistically aim to engage in a meaningful activity together once in the defined timeframe?'
            ]
        },

        {
            score: 4,
            indication: [
                'Time together is brief and usually task-focused (e.g., chores, errands)'
            ],
            reflectiveQuestions: [
                "Are our moments together mostly spent in functional activities rather than personal connection?",
                'Do we struggle to find time for enjoyable, relaxed activities together?'
            ],
            aspiIndication: [
                'More regular time spent together, but quality can still be improved.',
                'Beginning to recognize the value of shared experiences.'
            ],
            futureQuestions: [
                'Do we notice any benefits when we spend focused time together?',
                'Can we identify specific activities or moments that have deepened our connection, and plan for more in the defined timeframe?'
            ]
        },
        {
            score: 5,
            indication: [
                "Spend some quality time, but it's inconsistent"
            ],
            reflectiveQuestions: [
                'How often do we schedule time just for us, without distractions or external obligations?',
                'Do we feel that our time together brings us closer, or is it more routine?'
            ],
            aspiIndication: [
                'Consistently spend time together, but some distractions remain.',
                'Growing awareness of the importance of focused, uninterrupted connection.'                
            ],
            futureQuestions: [
                'Are we making progress in aligning our schedules and priorities to create more shared time?',
                'In the defined timeframe, can we commit to removing one common distraction during our time together?'
            ]
        },
        {
            score: 6,
            indication: [
                'Spend quality time, but still have significant distractions'
            ],
            reflectiveQuestions: [
                'Do we make efforts to eliminate distractions when we’re together?',
                'How frequently do we engage in meaningful conversation during our time together?'
            ],
            aspiIndication: [
                'Shared activities become more regular and meaningful.',
                'Conversations are deeper and reflect mutual care and curiosity.'
            ],
            futureQuestions: [
                'Are we starting to feel more connected as a result of the time we spend together?',
                'Are there opportunities to deepen our existing rituals or routines during the defined timeframe?'
            ]
        },
        {
            score: 7,
            indication: [
                'Spend regular quality time together, but it could be more enriching'
            ],
            reflectiveQuestions: [
                'Do we feel like we are making the most of our time together, or could it be more engaging?',
                'How often do we try new activities or have spontaneous moments together?'
            ],
            aspiIndication: [
                    'Quality time is a priority, and distractions are minimized.',
                    'Regularly engage in activities that are enjoyable and meaningful for both partners.'
            ],
            futureQuestions: [
                'Do we notice consistent positive outcomes in our relationship as we spend more time together?',
                'Are we able to schedule and stick to intentional time together consistently in the defined timeframe?'
            ]
        }, {
            score: 8,
            indication: [
                'Have meaningful and enjoyable time together, most of the time'
            ],
            reflectiveQuestions: [
                'Do we look forward to our time together?',
                'How often do we have shared activities that deepen our bond and connection?'
            ],
            aspiIndication: [
                'Feel deeply connected through regular, uninterrupted quality time.',
                'Shared activities and conversations foster growth, trust, and understanding.'
            ],
            futureQuestions: [
                'Are we fully present during our time together?',
                'Can we enhance our quality time by exploring new shared experiences in the defined timeframe?'
            ]
        },
        {
            score: 9,
            indication: [
                'Consistently spend quality time that strengthens the relationship'
            ],
            reflectiveQuestions: [
                'Are we intentional in creating opportunities for quality time?',
                'How often do we have genuine, fulfilling interactions that make us feel closer?'
            ],
            aspiIndication: [
                'Time spent together is highly meaningful, fostering emotional intimacy and shared purpose.',
                'Strong sense of alignment in how time together is spent.'
            ],
            futureQuestions: [
                'Do we feel our relationship is growing stronger because of the time we prioritize for each other?',
                'Can we identify additional ways to enrich the quality of our time together during the defined timeframe?'
            ]
        },
        {
            score: 10,
            indication: [
                ' Quality time is a priority, and deeply strengthens the relationship'
            ],
            reflectiveQuestions: [
                'How often do we reflect on the quality of our time together and make adjustments if needed?',
                'Do we intentionally nurture our relationship through deep, meaningful moments, free from distractions?'
            ],
            aspiIndication: [
                'Quality time together is exceptional; deeply enriching, fulfilling, and aligned with shared values and aspirations.',
                'Feel a deep sense of joy and connection during every shared moment.'
            ],
            futureQuestions: [
                'Do we feel fully satisfied with the quality and quantity of time we spend together?',
                'Are there any small adjustments we can make to sustain this level of connection in the defined timeframe?'
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



 
export default Quality;