import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Long = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Lack of alignment on future goals or aspirations.',
            'Little or no discussion about long-term plans.',
            'Partners feel disconnected or uncertain about the future.',
            "No shared vision for the relationship's direction."
          ],
          reflectiveQuestions: [
            'How often do you and your partner talk about the future?',
            'Do you feel uncertain or disconnected from your partner’s long-term aspirations?',
            'Is there a sense of direction or purpose in your relationship?'
          ],
          aspiIndication: [
            'No clear long-term vision for the relationship. No future plans or direction.'
          ],
          futureQuestions: [
                'Do you and your partner discuss the future of your relationship?',
                'Have you set any long-term goals together?',
                'How often do you reflect on the direction you want your relationship to take?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Occasional discussions about the future, but no clear vision.',
                    'One partner feels more invested in long-term planning than the other.',
                    'Future plans are often disconnected or conflicting.'
          ],
          reflectiveQuestions: [
            'Are your future goals clearly aligned, or do you find them to be mismatched?',
            'Does one of you often take the lead in planning for the future?',
            'How often do these conversations lead to concrete actions or plans?',
          ],
          aspiIndication: [
                'Some vague ideas about the future but no concrete goals. Lack of alignment.'
          ],
          futureQuestions: [
                                'Are there any dreams or aspirations that you have discussed together, but have not fully explored or planned?',
                                'How often do you feel uncertain about the long-term direction of your relationship?',
                                'Is there a disconnect between your individual long-term visions?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some alignment on future goals, but still considerable confusion.',
                'Disagreements or hesitations about the direction of the relationship.',
                'Few shared aspirations, leading to occasional tension.'
            ],
            reflectiveQuestions: [
                'When discussing the future, do you often find yourselves at odds or unsure about the direction?',
                'Are you both equally invested in long-term plans, or is one partner more hesitant?',
                'What specific areas cause uncertainty or tension when planning your future together?'
            ],
            aspiIndication: [
                    'Some future plans, but they are unclear or unrealistic. Minimal alignment on major aspects.'
            ],
            futureQuestions: [
                'Do you have a general idea of what you want for the future, but struggle to articulate it clearly?',
                "How often do you feel like your long-term goals are not aligned with your partner's vision?",
                'Are there any future aspirations you haven’t fully discussed or committed to?'
            ]
        },

        {
            score: 4,
            indication: [
                'A vague idea of shared goals, but no solid plan.',
                'Disconnected future plans, but some effort to align.',
                'Frequent doubts or indecision about the future.'
            ],
            reflectiveQuestions: [
                "Do you have a basic idea of where your relationship is heading, even if it's not clearly defined?",
                'How often do you both discuss your future, and how do you address disagreements?',
                'Are there areas where you feel unsure about your joint path ahead?'
            ],
            aspiIndication: [
                'Future vision is slightly clearer but lacks depth in terms of shared goals.'
            ],
            futureQuestions: [
                'Do you and your partner have some common future goals, but they may still feel disconnected or underdeveloped?',
                'Have you discussed any challenges that may prevent you from reaching these shared goals?',
                "Are you both aware of each other's major future aspirations?"
            ]
        },
        {
            score: 5,
            indication: [
                'Moderate alignment on the big picture, but lacking in specifics.',
                'Both partners feel somewhat invested in the future but are unsure about certain aspects.',
                'Some effort made to create a long-term vision but limited follow-through.'
            ],
            reflectiveQuestions: [
                'How aligned are you and your partner on the major aspects of your future together?',
                'Are there any aspects of your long-term vision that you feel unclear about or disagree on?',
                'How actively are you working together to build that future vision?'
            ],
            aspiIndication: [
                'Basic shared vision for the future but with room for refinement and deeper commitment.'                
            ],
            futureQuestions: [
                'Do you and your partner have a mutual understanding of where you want your relationship to go?',
                'Are your long-term visions aligned, but still need refinement?',
                'How much effort have you both invested in planning for the long-term?'
            ]
        },
        {
            score: 6,
            indication: [
                'Shared long-term vision but not always consistent.',
                'Both partners take some steps toward mutual goals, but with occasional delays or obstacles.',
                "There is mutual interest, but it's not always clear how to make it a reality."
            ],
            reflectiveQuestions: [
                'Are you both clear on the general direction but encounter occasional setbacks?',
                'How do you ensure your long-term vision stays consistent, despite life changes?',
                'What kind of actions are you both taking to work toward this vision?'
            ],
            aspiIndication: [
                'Clear vision for the future with some alignment on major life goals. Some uncertainty remains.'
            ],
            futureQuestions: [
                ' Have you identified concrete goals together, such as financial stability, family planning, or career paths?',
                'Are both of you actively contributing ideas and energy toward the long-term vision?',
                'How confident are you that your shared vision is achievable?'
            ]
        },
        {
            score: 7,
            indication: [
                'Clear and agreed-upon long-term vision.',
                'Both partners feel motivated and empowered to pursue shared goals.',
                'Regular discussions on future aspirations and ongoing alignment.'
            ],
            reflectiveQuestions: [
                'How often do you revisit your long-term vision together?',
                'Do both of you feel equally committed to working towards your shared goals?',
                'What steps are you taking to ensure your vision is actively progressing?'
            ],
            aspiIndication: [
                    'Strong, shared long-term vision with most major goals aligned, but room for more planning.'
            ],
            futureQuestions: [
                'Do you both feel strongly committed to the same long-term goals?',
                'How regularly do you review and adjust your shared vision as circumstances change?',
                'Have you both made sacrifices or changes in your lives to align more closely with each other’s long-term plans?'
            ]
        }, {
            score: 8,
            indication: [
                'A strong and consistent vision for the future, with shared values and goals.',
                'Both partners are actively aligned and working toward the same outcomes.',
                'There is a deep connection to shared aspirations and mutual support.'
            ],
            reflectiveQuestions: [
                'How clear and aligned are your long-term goals and values?',
                'Are you both equally contributing to building your shared future?',
                'What makes you feel confident in the direction your relationship is heading?'
            ],
            aspiIndication: [
                'Highly aligned and committed vision, with most important goals set. Execution has begun.'
            ],
            futureQuestions: [
                'Are you both actively working toward your long-term goals together?',
                'How well have you organized your lives to match the vision you share?',
                'Have you faced and overcome any major obstacles as a couple toward your future?'
            ]
        },
        {
            score: 9,
            indication: [
                'Highly synchronized long-term vision, with frequent planning and action.',
                "Both partners demonstrate ongoing effort to support each other's dreams and aspirations.",
                'The relationship is a strong partnership, with mutual trust in the future.'
            ],
            reflectiveQuestions: [
                'How strongly do you and your partner trust each other’s vision and abilities to achieve it?',
                'How often do you take deliberate steps to bring your future vision to life?',
                'How much mutual respect and support do you feel in the pursuit of your long-term goals?'
            ],
            aspiIndication: [
                'Very clear, deeply connected long-term vision with a solid action plan. Most goals are in progress.'
            ],
            futureQuestions: [
                'Do you and your partner have a detailed roadmap for your future?',
                'Are both of you consistently taking steps that move you closer to your shared aspirations?',
                'How often do you check in with each other to ensure you are on track with your long-term plans?'
            ]
        },
        {
            score: 10,
            indication: [
                'Fully aligned and thriving long-term vision, with clear, actionable steps and commitment.',
                'Both partners are consistently working toward mutual goals, with shared responsibility and accountability.',
                'The relationship feels secure and flourishing, with a shared, vibrant future.'
            ],
            reflectiveQuestions: [
                'How often do you feel deeply connected through communication?',
                "Do you both feel completely in sync with each other's thoughts and feelings?",
                'When challenges arise, do you feel confident that your communication will strengthen your relationship?'
            ],
            aspiIndication: [
                'A fully realized, deeply aligned long-term vision with ongoing progress and fulfillment.'
            ],
            futureQuestions: [
                'Are you and your partner living the life you envisioned together?',
                'Have you both achieved most, if not all, of the goals you set together?',
                'How regularly do you celebrate the milestones you’ve reached as a couple?'
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



 
export default Long;