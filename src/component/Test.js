import {  useState } from "react";
import Career from "./Career";
import Result from "./Result";
import Carousel from "./Carousel";
import Message from "./Message";
import Warning from "./Warning";

const Test = ({selected}) => {
    const [warning, setWarning] = useState(false)
    const [val, setVal] = useState()
    const [counter, setCounter] = useState(1);
    const [style, setSty] = useState({backgroundColor: "#ED6A56"})
    const [p, setP] = useState("Communication")
    const [career, setCareer] = useState([])
    const [health, setHealth] = useState([])
    const [money, setMoney] = useState([])
    const [per, setPer] = useState([])
    const [rel, setRel] = useState([])
    const [fun, setFun] = useState([])
    const [physical, setPhysical] = useState([])
    const [spirit, setSpirit] = useState([])
    const [cont, setCont] = useState([])
    const [pur, setPur] = useState([])
    const [item, setItem] = useState([ " How openly and honestly do you express your thoughts and feelings to your partner?",
                                        "To what extent do you feel heard and understood by your partner when you communicate?",
                                        "How effectively do you and your partner discuss and resolve important issues?"])
    const tip =["Tip 1", "Tip 2", "Tip 3"]
    const [message, setMessage] = useState(false)
    const [msg, setMsg] = useState(0)
    const [check, setChecker] = useState(false)



    const confirm = (e) => {
        setMsg(e.target.textContent)
        setMessage(true)
   }
const confirmFuture = (e) => {
        setMsg(e.target.textContent)
        setChecker(true)
    }
   
    const submit = (e) => {
        e.preventDefault();
        let ans= e.target.textContent
        setCounter(counter + 1);
        setVal(ans)

        if (counter <= 2) {
            setCareer([...career, ans]);
            
        }

       
        if (counter === 2 && counter < 4) {
            setSty({ backgroundColor: "#F09B36" });
            setP("Emotional Connection");
       
            setItem([
                "How emotionally close do you feel to your partner on a day-to-day basis?",
                "To what degree do you feel your partner is attuned to your emotional needs?",
                "How satisfied are you with the level of emotional support in your relationship?"
            ])
            
          
        } 
       if(counter > 2 && counter <= 4){ 
            setMoney([...money, ans]);

        }
        
        
         if (counter ===4 && counter < 6) {
            setSty({ backgroundColor: "#FFC74E" });
            setP("Physical Intimacy");
            setItem([
                "How satisfied are you with the frequency and quality of physical affection in your relationship?",
                "To what extent do you feel comfortable expressing your physical needs and desires to your partner?",
                "How well do you and your partner maintain physical connection outside of sexual intimacy?"
            ])
            
        } 
        
        if(counter > 4 && counter <= 6){ 
            setHealth([...health, ans]);

        }
        
        if (counter === 6 && counter < 8) {
            setSty({ backgroundColor: "#A0B470" });
            setP("Shared Values and Goals");
            setItem([
                    "How aligned are you and your partner on core values and beliefs?",
                    "To what degree do you share common goals for your future together?",
                    "How often do you discuss and re-evaluate your shared values and goals as a couple?"
            ])
        }
        
        if(counter > 6 && counter <= 8){ 
            setRel([...rel, ans]);

        }
        
        if (counter === 8 && counter < 10) {
            setSty({ backgroundColor: "#6E9E75" });
            setP("Trust and Respect");
            setItem([
                "How much do you trust your partner to be honest and faithful?",
                "To what extent do you feel respected by your partner in your decisions and boundaries?",
                "How confident are you in your partner's commitment to the relationship?"
            ])
        } 
        if(counter > 8 && counter <= 10){ 
            setPer((e) => [...e, ans]);
        }
        if (counter === 10 && counter < 12) {
            setSty({ backgroundColor: "#73CCE4" });
            setP("Quality Time Together");
            setItem([
                "How satisfied are you with the amount of quality time you spend together?",
                "To what degree do you prioritize and protect your time together as a couple?",
                "How engaging and fulfilling do you find the activities you share with your partner?"

            ])
        } 
        if(counter > 10 && counter <= 12){ 
            setFun((p) => [...p, ans]);
        }
        
         if (counter === 12 && counter < 14) {
            setSty({ backgroundColor: "#869ACF" });
            setP("Conflict Management");
            setItem([
                "How effectively do you and your partner resolve disagreements?",
                "To what extent do you feel heard and validated during conflicts?",
                "How well do you maintain respect and connection even during disagreements?"
            ])

        } 

        if(counter > 12 && counter <= 14){ 
            setPhysical((res) => [...res, ans]);
        }

        if (counter === 14 && counter < 16) {
            setSty({ backgroundColor: "#895881" });
            setP("Spiritual Connection");
            setItem([
                "How aligned are you and your partner in your spiritual or philosophical beliefs?",
                "To what degree do you share spiritual practices or experiences together?",
                "How supportive is your partner of your individual spiritual journey?"

            ])


        } 

        if(counter > 14 && counter <= 16){ 
            setSpirit((re) => [...re, ans]);
        }

         if (counter === 16 && counter < 18) {
            setSty({ backgroundColor: "#ff5733" });
            setP("Partnership and Teamwork");
            setItem([
                "How well do you and your partner collaborate on shared responsibilities?",
                "To what extent do you feel you're part of a team in facing life's challenges?",
                "How balanced do you feel the division of labor is in your relationship?"
             
            ])
        } 

        if(counter > 16 && counter <= 18){ 
            setPur((v) => [...v, ans]);
        }

         if (counter === 18 && counter < 20) {
            setSty({ backgroundColor: "#58261b" });
            setP("Long-Term Vision");
            setItem([
                "How clear and aligned is your shared vision for the future of your relationship?",
                "To what degree do you actively plan and work towards your long-term goals as a couple?",
                "How often do you discuss and adjust your long-term plans together?"
            ])
        }
        
        if(counter > 18 && counter <= 20){ 
            setCont((pr) => [...pr, ans]);
        }

        if(counter === 20 ) {
            if (career.length < 1 || health.length < 1 || money.length < 1 ||
                per.lenght < 1 || rel.length < 1 || fun.length < 1 || physical.length < 1 ||
                spirit.length < 1 || cont.length < 1 || pur.length < 1) {
        
                    alert("Please answer all the questions!");
                    setCounter(1)
                    setSty({backgroundColor: "#ED6A56"})
                    setP("Career and Professional Growth")
            }
        }
            close()
    }

    const close = () => {
        setMessage(false)
        setWarning(false)
        setChecker(false)
    }


 
       
   
    

   

    

      
   

    return ( 
       
       <div>
                     {counter <= 20 && (   <header style={style}> {p}  </header> )}
                <div className="section">
                {counter === 1 && (
                <Career question="How satisfied are you with the quality and effectiveness of communication between you and your partner?" />

            )}
           
                {counter === 2 && (
                <Career question="How satisfied do you want with the quality and effectiveness of communication between you and your partner in the next" select={selected}/>
            )}

        {counter === 3 && (
                <Career question= "How deep and fulfilling is the emotional connection you share with your partner?" />
            )}
        {counter === 4 && (
                <Career question="How deep and fulfilling do you want the emotional connection you share with your partner in the next" select={selected}/>
            )}
        {counter === 5 && (
                <Career question= "How satisfied are you with the level of physical intimacy in your relationship?" />
            )}
        {counter === 6 && (
                <Career question= "How satisfied do you want to be with the level of physical intimacy in your relationship in the next" select={selected}/>
            )}
        {counter === 7 && (
                <Career question="How aligned do you and your partner feel in terms of shared values and long-term goals?" />
            )}
        {counter === 8 && (
                <Career question="How aligned do you and your partner want to feel in terms of shared values and long-term goals in the next" select={selected}/>
            )}
        {counter === 9 && (
                <Career question= "How strong is the sense of trust and mutual respect in your relationship?"/>
            )}
        {counter === 10 && (
                <Career question= "How strong do you want the sense of trust and mutual respect in your relationship in the next" select={selected} />
            )}
         {counter === 11 && (
                <Career question= "How satisfied are you with the quality and amount of time you spend together?" />
            )}
        {counter === 12 && (
                <Career question= "How satisfied do you want to be with the quality and amount of time you spend together in the next" select={selected} />
            )}
        {counter === 13 && (
                <Career question="How effectively do you and your partner manage and resolve conflicts?" />
            )}
        {counter === 14 && (
                <Career question="How effectively do you and your partner want to manage and resolve conflicts in the next" select={selected} />
            )}
        {counter === 15 && (
                <Career question= "How connected do you feel with your partner on a spiritual or deeper existential level?" />
            )}
        {counter === 16 && (
                <Career question= "How connected do you want to feel with your partner on a spiritual or deeper existential level in the next" select={selected} />
            )}
        {counter === 17 && (
                <Career question="How well do you and your partner work as a team to navigate life's challenges and responsibilities?" />
            )}
         {counter === 18 && (
                <Career question="How well do you and your partner want to work as a team to navigate life's challenges and responsibilities in the next" select={selected}/>
            )}
         {counter === 19 && (
                <Career question= "How confident are you in the shared vision and direction of your future together?" />
            )}
         {counter === 20 && (
                <Career question= "How confident do you want to be in the shared vision and direction of your future together in the next" select={selected}/>
            )}
          
          {message === true && (< Message msg= {msg-1} close={close} p={p} submit={submit} quest={0} />)}
          {check === true && (< Message msg= {msg-1} close={close} p={p} submit={submit} quest={1} />)}          
            {counter <= 20 && ( 
                <>
                    {counter % 2 === 1 && (<Carousel items={item} tips = {tip}/>)}
                    <ol>
                    {counter % 2 === 1 &&( <>    
                <span onClick={confirm}> 1 </span>
                <span onClick={confirm}>2</span>
                <span onClick={confirm}>3</span>
                <span onClick={confirm}>4</span>
                <span onClick={confirm}>5</span>
                <span onClick={confirm}>6</span>
                <span onClick={confirm}>7</span>
                <span onClick={confirm}> 8</span>
                <span onClick={confirm}>9</span>
                <span onClick={confirm}>10</span>
                </>
                 )}
                {counter % 2 != 1 &&( <>     
                    <span onClick={confirmFuture} style={{filter: 1 < val ? 'blur(2px)' : 'none',
                                        cursor: 1 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 1 < val ? 'none' : 'auto'}}> 1 </span>
                <span onClick={confirmFuture} style={{filter: 2 < val ? 'blur(2px)' : 'none',
                                        cursor: 2 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 2 < val ? 'none' : 'auto'}}>2</span>
                <span onClick={confirmFuture} style={{filter: 3 < val ? 'blur(2px)' : 'none',
                                        cursor: 3 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 3 < val ? 'none' : 'auto'}}>3</span>
                <span onClick={confirmFuture} style={{filter: 4 < val ? 'blur(2px)' : 'none',
                                        cursor: 4 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 4 < val ? 'none' : 'auto'}}>4</span>
                <span onClick={confirmFuture} style={{filter: 5 < val ? 'blur(2px)' : 'none',
                                        cursor: 5 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 5 < val ? 'none' : 'auto'}}>5</span>
                <span onClick={confirmFuture} style={{filter: 6 < val ? 'blur(2px)' : 'none',
                                        cursor: 6 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 6 < val ? 'none' : 'auto'}}>6</span>
                <span onClick={confirmFuture} style={{filter: 7 < val ? 'blur(2px)' : 'none',
                                        cursor: 7 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 7 < val ? 'none' : 'auto'}}>7</span>
                <span onClick={confirmFuture} style={{filter: 8 < val ? 'blur(2px)' : 'none',
                                        cursor: 8 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 8 < val ? 'none' : 'auto'}}> 8</span>
                <span onClick={confirmFuture} style={{filter: 9 < val ? 'blur(2px)' : 'none',
                                        cursor: 9 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 9 < val ? 'none' : 'auto'}}>9</span>
                <span onClick={confirmFuture} style={{filter: 10 < val ? 'blur(2px)' : 'none',
                                        cursor: 10 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 10 < val ? 'none' : 'auto'}}>10</span>
                </>
                 )}
                </ol>
                </>
                   )}
                </div>
                {counter <= 16 && ( 
                    <footer style={style} className="foot"> </footer>
                )}
                    {counter > 20 && (
                <Result career={career}  
                        money={money}
                        per= {per}
                        rel= {rel}
                        fun = {fun}
                    physical = {physical} 
                    spirit = {spirit}
                    health = {health}
                    contribution = {cont}
                    purpose = {pur}
                    selected = {selected}
                

                />
            )}
             
                </div>
            )
            
}
 
export default Test;