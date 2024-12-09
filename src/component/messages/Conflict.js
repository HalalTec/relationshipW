import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Conflict = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Conflicts often escalate into arguments.',
            'No attempt to resolve issues, leaving things unresolved.',
            'Communication tends to be defensive or hostile.'
          ],
          reflectiveQuestions: [
            'How often do conflicts feel overwhelming or impossible to resolve?',
            'Do you feel emotionally drained after every disagreement?',
            'How often do you avoid discussing conflicts?'
          ],
          aspiIndication: [
            'Avoids addressing conflicts altogether.',
            'Feels overwhelmed or unsure how to handle disagreements.',
            'Arguments escalate often.'
          ],
          futureQuestions: [
                'Do I feel unable to address conflicts effectively in the defined timeframe?',
                'Am I often caught in recurring conflicts without resolution?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Rarely addresses conflicts.',
                    'Issues linger and resurface frequently.',
                    'Limited willingness to compromise or empathize.'
          ],
          reflectiveQuestions: [
            ' Are conflicts usually ignored or brushed under the rug?',
            'Do you struggle to empathize with your partner’s viewpoint during conflict?',
            'Do you find it hard to talk about disagreements without getting defensive?',
          ],
          aspiIndication: [
                'Acknowledges the presence of conflict but struggles to address it constructively.',
                'Tends to avoid confrontation.'
          ],
          futureQuestions: [
                                'Can I acknowledge when conflicts arise but struggle to respond in a balanced way within the defined timeframe?',
          ]
        },  

        {
            score: 3,
            indication: [
                'Occasional attempts at resolving conflict, but often ineffective.',
                'Communication may be poor or dismissive.',
                'Apologies or resolution are seldom offered.'
            ],
            reflectiveQuestions: [
                'Do you often end conflicts without resolution or understanding?',
                'How frequently do you apologize or seek to resolve conflict?',
                'Are there patterns where conflicts tend to worsen rather than improve?'
            ],
            aspiIndication: [
                    'Makes minimal efforts to resolve conflicts.',
                    'Sometimes communicates during disagreements but lacks clarity or empathy.'
            ],
            futureQuestions: [
                'Am I able to occasionally attempt to resolve conflicts, even if my methods are inconsistent, in the defined timeframe?'
            ]
        },

        {
            score: 4,
            indication: [
                'Conflicts are sometimes resolved, but resolutions tend to be surface-level.',
                'Communication tends to be reactive.',
                'Some progress toward conflict resolution, but feelings may still linger.'
            ],
            reflectiveQuestions: [
                "When conflicts are resolved, do you feel like the solution was just temporary or superficial?",
                'Do you address underlying issues, or is the focus only on the immediate disagreement?',
                'How often do you find yourself resenting unresolved issues?'
            ],
            aspiIndication: [
                'Begins to approach conflicts with the intent to resolve them.',
                'Still struggles with staying calm or empathetic.'
            ],
            futureQuestions: [
                'Do I see myself starting to manage conflicts with intention but sometimes falling short within the defined timeframe?'
            ]
        },
        {
            score: 5,
            indication: [
                'Conflict is acknowledged and addressed, but often through trial and error.',
                'Communication is generally respectful, but can be tense at times.',
                'Apologies and forgiveness are sometimes offered, but not always effectively.'
            ],
            reflectiveQuestions: [
                'Do you acknowledge issues, but still struggle to communicate your emotions clearly?',
                'When resolving conflict, do you feel heard by your partner, but still unsure of the outcome?',
                'How often do you feel your partner is willing to compromise, but with some hesitation?'
            ],
            aspiIndication: [
                'Demonstrates an even mix of successes and setbacks in resolving disagreements.',
                'Open to learning better conflict skills.'                
            ],
            futureQuestions: [
                'Can I envision a mix of successes and frustrations in managing conflicts within the defined timeframe?'
            ]
        },
        {
            score: 6,
            indication: [
                'Conflicts are addressed with moderate effectiveness.',
                'Active listening and empathy are practiced, but consistency can vary.',
                'Apologies and resolution are more frequent, though occasional miscommunication occurs.'
            ],
            reflectiveQuestions: [
                'Are you able to express your feelings openly, but sometimes find it difficult to stay calm in the heat of the moment?',
                'How often do you feel that your partner understands you during conflicts, even if you don’t always agree?',
                'Do you find resolution often happens after a conversation, but sometimes takes time?'
            ],
            aspiIndication: [
                'Shows consistent effort to address conflicts constructively.',
                'Listens actively but may not always achieve resolution.'
            ],
            futureQuestions: [
                'Do I see myself making consistent effort to actively listen and address conflicts within the defined timeframe?'
            ]
        },
        {
            score: 7,
            indication: [
                'Most conflicts are resolved fairly effectively.',
                'Healthy communication is frequent, with minimal defensive behavior.',
                'Both partners feel heard, and resolutions are generally satisfactory.'
            ],
            reflectiveQuestions: [
                'Do you typically feel like conflicts end on a positive note, even if you don’t always fully agree?',
                'How often do you both take time to cool down and listen to each other’s perspectives?',
                'Do you both actively seek compromise during conflicts?'
            ],
            aspiIndication: [
                    'Resolves most conflicts with respect and understanding.',
                    'Uses clear and empathetic communication.'
            ],
            futureQuestions: [
                'Am I confident in managing conflicts with mutual respect and clear communication within the defined timeframe?'
            ]
        }, {
            score: 8,
            indication: [
                'Conflicts are usually resolved through understanding and compromise.',
                'Both partners communicate respectfully and listen actively.',
                'Apologies and forgiveness are given sincerely.'
            ],
            reflectiveQuestions: [
                'How often do you find yourself resolving conflicts in a calm and respectful way?',
                'Are you able to truly understand your partner’s feelings and respond thoughtfully?',
                'Do you feel both of you contribute equally to resolving conflicts?'
            ],
            aspiIndication: [
                'Handles conflicts with maturity and emotional control.',
                'Balances listening and expressing viewpoints effectively.'
            ],
            futureQuestions: [
                'Can I envision myself managing conflicts calmly, balancing listening and expressing my feelings, within the timeframe?'
            ]
        },
        {
            score: 9,
            indication: [
                'Conflict resolution is proactive and constructive.',
                'Communication is highly empathetic and solution-oriented.',
                'Issues are resolved in a timely manner with mutual understanding.'
            ],
            reflectiveQuestions: [
                'Do you actively work on preventing conflicts by discussing potential issues beforehand?',
                'How well do you and your partner handle difficult conversations, even in the midst of stress?',
                'How often do you both feel satisfied with the outcome of a conflict resolution?'
            ],
            aspiIndication: [
                'Rarely avoids or escalates conflicts unnecessarily.',
                "Resolves conflicts with deep understanding of both partners' needs."            ],
            futureQuestions: [
                'Do I feel capable of resolving conflicts while prioritizing both my and my partner’s needs in the defined timeframe?'
            ]
        },
        {
            score: 10,
            indication: [
                'Conflicts are resolved quickly, amicably, and with deep understanding.',
                'Both partners are committed to continuously improving conflict management.',
                'There is a strong sense of unity and trust during conflicts.'
            ],
            reflectiveQuestions: [
                'Do you both proactively create a healthy environment to avoid misunderstandings?',
                'How frequently do you and your partner resolve conflicts in a way that strengthens your relationship?',
                'How confident are you in your ability to navigate conflicts together as a team?'
            ],
            aspiIndication: [
                'Resolves conflicts with ease, mutual respect, and long-term solutions.',
                'Teaches or guides others in conflict resolution.'
            ],
            futureQuestions: [
                'Can I see myself consistently resolving conflicts constructively and serving as a role model for conflict resolution?'
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



 
export default Conflict;