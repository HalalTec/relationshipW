import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Partnership = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Significant lack of cooperation',
            'Frequent conflict and misunderstandings',
            'Minimal shared goals or vision',
            'One partner feels isolated or unsupported',
            'Regularly feels like you’re working against each other'
          ],
          reflectiveQuestions: [
            "Do we struggle to understand each other's needs or goals?",
            'Are we often in conflict, unable to resolve differences?',
            "Does it feel like we're not working toward the same future?"
          ],
          aspiIndication: [
            'Minimal or no collaboration on shared goals.',
            'Significant misunderstandings or conflict.',
            'Rarely communicate or work as a team.',
            'Limited trust.'
          ],
          futureQuestions: [
                'Are we currently in a state of frequent misunderstandings or conflict?',
                'Do I feel confident that we can improve teamwork in the defined timeframe?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Limited cooperation, with some communication breakdowns',
                    'Rare collaboration, often one-sided efforts',
                    'There is some resentment or frustration',
                    'Few common activities or initiatives'
          ],
          reflectiveQuestions: [
            'Do we sometimes feel frustrated or unsupported in our tasks together?',
            'Are our conversations more about fixing problems than building something positive?',
          ],
          aspiIndication: [
                'Occasional collaboration but inconsistent.',
                'Communication is sporadic and lacks clarity.',
                'Basic level of trust and willingness to improve exists.'
          ],
          futureQuestions: [
                                'Can we take small steps to improve trust and collaboration?',
                                'Are we willing to discuss small tasks we can handle together within the defined timeframe?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some effort toward cooperation, but not consistent',
                'Communication issues are frequent, but attempts are made to improve',
                'Occasional team-building, but lacks consistency',
                'One partner often feels overwhelmed or carrying most of the weight'
            ],
            reflectiveQuestions: [
                'Do we communicate well during calm moments, but struggle during stress?',
                'Is one partner often more involved or invested than the other?'
            ],
            aspiIndication: [
                    'Collaboration occurs but lacks alignment with shared goals.',
                    'Communication has improved but can still be unclear.',
                    'Beginning to identify common values.'
            ],
            futureQuestions: [
                'Do we share any common values that we can build upon?',
                'Can we make a plan to consistently address small issues and work as a team within the defined timeframe?'
            ]
        },

        {
            score: 4,
            indication: [
                'Communication efforts are there, but often fail to meet needs',
                'Joint decisions are sometimes made, but not always aligned',
                'Acknowledge differences, but find it hard to compromise',
                'Some teamwork, but occasional lack of harmony'
            ],
            reflectiveQuestions: [
                "Do we find it hard to make joint decisions without conflict?",
                'Are we often misaligned on our goals or values?'
            ],
            aspiIndication: [
                'Basic teamwork on small shared goals.',
                'Communication has become clearer but still lacks depth.',
                'Trust is steadily growing.'
            ],
            futureQuestions: [
                'Can we identify specific goals we both care about?',
                'Are we prepared to set time aside for regular check-ins to discuss teamwork in the defined timeframe?'
            ]
        },
        {
            score: 5,
            indication: [
                'Efforts to cooperate are balanced but not always effective',
                'Regular discussions on shared goals, but not fully aligned',
                'Teamwork occurs, but it is more transactional than relational',
                'Sometimes lack emotional support in teamwork'
            ],
            reflectiveQuestions: [
                'Do we generally agree on our future but have trouble aligning on the path there?',
                'Are we more focused on getting things done than building emotional connection?'
            ],
            aspiIndication: [
                'Moderate teamwork on some shared goals.',
                'Open communication is developing but sometimes challenging.',
                'Trust and support are moderately strong.'                
            ],
            futureQuestions: [
                'Can we identify areas where our teamwork is effective and where it needs improvement?',
                'Are we ready to prioritize building trust further within the defined timeframe?'
            ]
        },
        {
            score: 6,
            indication: [
                'Communication is usually clear with some room for improvement',
                'Efforts at teamwork are consistent but may lack depth',
                'Partners can align on smaller tasks, but struggle on bigger ones',
                'Emotional support is offered, but it’s not always in sync'
            ],
            reflectiveQuestions: [
                'Are we able to align on smaller, everyday tasks, but struggle with bigger decisions?',
                'Do we support each other, though there are times when it feels disconnected?'
            ],
            aspiIndication: [
                'Consistent teamwork on a few shared goals.',
                'Communication is clear but emotional openness is limited.',
                'Alignment on values is becoming evident.'
            ],
            futureQuestions: [
                'Can we identify ways to strengthen emotional openness?',
                'Are we prepared to commit to improving teamwork and expanding shared goals within the defined timeframe?'
            ]
        },
        {
            score: 7,
            indication: [
                'Cooperation is fairly effective, and the partnership feels productive',
                'Communication is mostly smooth, but minor issues arise',
                'More shared initiatives and common goals emerging',
                'Joint efforts bring a sense of accomplishment'
            ],
            reflectiveQuestions: [
                'Do we share a vision for the future, even if it requires compromise?',
                'Do we feel we’re growing together through our shared efforts?'
            ],
            aspiIndication: [
                    'High level of collaboration on shared goals.',
                    'Clear and frequent communication.',
                    'Growing emotional openness and mutual support.'
            ],
            futureQuestions: [
                'Do we feel confident about the progress we’ve made together?',
                'Are we ready to tackle more significant shared projects within the defined timeframe?'
            ]
        }, {
            score: 8,
            indication: [
                'Strong collaboration, often achieving common goals',
                'Regular emotional and practical support',
                'Shared activities and a deepening connection through teamwork',
                'Cooperation is natural, even in challenging times'
            ],
            reflectiveQuestions: [
                'Do we actively encourage each other’s growth and success?',
                'Do we tackle challenges as a united team, even under pressure?'
            ],
            aspiIndication: [
                'Seamless collaboration on most shared goals.',
                'Deep, clear, and regular communication.',
                'High level of trust and shared values.'
            ],
            futureQuestions: [
                'Are we both clear on our shared aspirations?',
                'Are we prepared to deepen our emotional connection and expand teamwork in all areas within the defined timeframe?'
            ]
        },
        {
            score: 9,
            indication: [
                ' Highly effective teamwork with minimal issues',
                'Excellent communication, rarely requiring clarification',
                'Deep alignment on shared values and goals',
                'Strong emotional support and encouragement in all efforts'
            ],
            reflectiveQuestions: [
                'Do we feel completely supported and in sync in our partnership?',
                'Do we naturally work as a team, even without explicitly planning?'
            ],
            aspiIndication: [
                'Exceptional teamwork with aligned aspirations.',
                'Communication is open, empathetic, and encouraging.',
                'Trust and mutual support are a strong foundation.'
            ],
            futureQuestions: [
                'Are we aligned on most aspects of our partnership?',
                'Can we identify and take action on ways to sustain and further enhance our teamwork within the defined timeframe?'
            ]
        },
        {
            score: 10,
            indication: [
                'Perfect partnership and teamwork, functioning effortlessly',
                'Flawless communication, no misunderstandings',
                'Strong synergy, with both partners working toward mutual success',
                'Always feel supported, empowered, and connected'
            ],
            reflectiveQuestions: [
                'Do we feel like an unshakable team, both in the big and small moments?',
                'Do we consistently empower each other’s dreams and achieve our goals together?'
            ],
            aspiIndication: [
                'Complete alignment on shared goals and aspirations.',
                'Communication is effortlessly clear and empathetic.',
                'Total trust and unwavering mutual support.'
            ],
            futureQuestions: [
                'Have we reached a point where teamwork feels effortless and deeply rewarding?',
                'Are we fully committed to sustaining and growing this connection in the defined timeframe?'
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



 
export default Partnership;