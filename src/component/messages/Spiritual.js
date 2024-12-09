import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Spiritual = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Very low or no spiritual connection. Disagreement on spiritual beliefs or no common ground.'
          ],
          reflectiveQuestions: [
            'Do we avoid discussing spiritual matters altogether?',
            'Are our spiritual beliefs in conflict?',
            'Do we lack any shared practices or understanding about spirituality?'
          ],
          aspiIndication: [
            'Minimal awareness or practice of shared spiritual values.',
            'Rare discussions about spirituality or its role in life.'
          ],
          futureQuestions: [
                'Do we currently acknowledge the role of spirituality, even if we have not started exploring it together?'
            ]
        },
        {
            score: 2,
          indication: [
                    ' Minimal spiritual connection. One partner may be disconnected, and spiritual discussions may lead to tension.'
          ],
          reflectiveQuestions: [
            'Is one of us uninterested or uncomfortable with spiritual discussions?',
            'Is there a sense of distance when we try to engage in spiritual topics?',
            'Have we not explored spirituality together in a long time?',
          ],
          aspiIndication: [
                'Occasional recognition of spirituality in your relationship.',
                'Sporadic individual practices, not shared as a couple.'
          ],
          futureQuestions: [
                                'Are we willing to have occasional conversations about spirituality within the defined timeframe?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Limited spiritual connection. Some disagreements or apathy, with little to no shared practices.'
            ],
            reflectiveQuestions: [
                "Do we sometimes struggle to understand or support each other's spiritual beliefs?",
                'Are spiritual discussions brief or avoided?',
                'Do we rarely engage in any spiritual practices together, such as prayer, meditation, or attending services?'
            ],
            aspiIndication: [
                    'Acknowledgment of spiritual differences but mutual respect.',
                    'Beginning to discuss the role of spirituality together.'
            ],
            futureQuestions: [
                'Can we commit to open-minded discussions about how our spiritual beliefs impact our relationship?'
            ]
        },

        {
            score: 4,
            indication: [
                'Small spiritual connection. There may be some shared beliefs or practices, but there is room for growth and alignment.'
            ],
            reflectiveQuestions: [
                "Do we occasionally share spiritual moments but not consistently?",
                'Do we differ in how we practice our spirituality, but respect each other’s views?',
                'Is there an occasional but brief effort to explore spirituality together?'
            ],
            aspiIndication: [
                'Some alignment on spiritual beliefs or practices.',
                'Occasional joint participation in spiritual activities.'
            ],
            futureQuestions: [
                'Will we take at least one shared step towards aligning our spiritual practices in the defined timeframe?'
            ]
        },
        {
            score: 5,
            indication: [
                'Average spiritual connection. Some shared practices, but there’s a noticeable gap in values or practices.'
            ],
            reflectiveQuestions: [
                'Do we sometimes engage in spiritual discussions or activities together?',
                'Are we sometimes in alignment on spiritual beliefs, but still have different priorities or approaches?',
                'Is there a moderate but irregular sense of shared spirituality in our lives?'
            ],
            aspiIndication: [
                'Balanced respect for each other’s spiritual needs.',
                "Commitment to learning about each other's spiritual values."                
            ],
            futureQuestions: [
                'Are we prepared to explore each other’s beliefs and try to meet each other halfway on shared practices?'
            ]
        },
        {
            score: 6,
            indication: [
                'Solid spiritual connection. We are usually aligned on spiritual values, but there’s still room for deeper practice and growth.'
            ],
            reflectiveQuestions: [
                'Do we often align in our spiritual beliefs and practices, but still have occasional disagreements?',
                'Are we regularly engaging in shared spiritual activities, though we sometimes miss the mark?',
                'Do we feel a sense of support for each other’s spiritual journey, but still want to grow together?'
            ],
            aspiIndication: [
                'Regular discussions and efforts to align on spiritual goals.',
                'Experimenting with shared rituals or practices.'
            ],
            futureQuestions: [
                'Can we envision consistent efforts to develop shared spiritual goals within the defined timeframe?'
            ]
        },
        {
            score: 7,
            indication: [
                'Strong spiritual connection. We regularly share spiritual practices, with minimal tension or conflict in beliefs.'
            ],
            reflectiveQuestions: [
                'Do we frequently engage in spiritual activities or discussions that deepen our connection?',
                'Are we mostly aligned in our values, beliefs, and practices, though there may still be minor differences?',
                'Do we support each other in spiritual growth, and share practices like prayer or meditation regularly?'
            ],
            aspiIndication: [
                    'Established shared spiritual practices (e.g., meditation, prayer, study).',
                    'Regular check-ins about spiritual growth.'
            ],
            futureQuestions: [
                'Are we ready to cultivate regular practices that enhance spiritual connection in our relationship?'
            ]
        }, {
            score: 8,
            indication: [
                'Very strong spiritual connection. Almost complete alignment on spiritual beliefs and practices.'
            ],
            reflectiveQuestions: [
                'Do we frequently share spiritual experiences that deepen our bond?',
                'Are we consistently aligned in our spiritual practices and support each other’s spiritual goals?',
                'Do we regularly prioritize spirituality in our relationship, and it feels natural for both of us?'
            ],
            aspiIndication: [
                'Strong mutual understanding of each other’s spiritual journeys.',
                'Active alignment on spiritual values and goals.'
            ],
            futureQuestions: [
                'Will we actively prioritize spiritual growth as a core part of our relationship within the timeframe?'
            ]
        },
        {
            score: 9,
            indication: [
                'Nearly perfect spiritual connection. Very little to no tension, and our practices deeply enrich our relationship.'
            ],
            reflectiveQuestions: [
                ' Do we share a profound spiritual bond, with only minimal differences?',
                'Do we practice spirituality together frequently, and it enriches our lives on a deep level?',
                'Do we have a common and shared vision for spiritual growth and development?'
            ],
            aspiIndication: [
                'Deep integration of spirituality into your relationship.',
                'Consistent shared rituals that bring joy and peace.'
            ],
            futureQuestions: [
                'Can we visualize ourselves fully aligned and finding peace through shared spiritual practices?'
            ]
        },
        {
            score: 10,
            indication: [
                'Complete spiritual connection. Perfect alignment in all areas of spiritual beliefs, values, and practices, fully shared.'
            ],
            reflectiveQuestions: [
                'Do we have an entirely unified spiritual belief system and practices?',
                'Is our spiritual connection so deep that it permeates every aspect of our relationship?',
                'Do we feel a complete sense of alignment, mutual respect, and support in our spiritual journeys?'
            ],
            aspiIndication: [
                'Complete harmony and fulfillment in spiritual connection.',
                'A relationship deeply rooted in shared spiritual values.'
            ],
            futureQuestions: [
                'Are we prepared to fully integrate spirituality as a foundation for how we live and love together?'
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



 
export default Spiritual;