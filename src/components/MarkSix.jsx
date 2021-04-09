import React,{useState} from 'react'
import  '../styles/MarkSix.css'
export const MarkSix = () => {



const [inputText, setInputText] = useState('')

const [OutPut, setOutPut] = useState('')

const  ChangeLang=()=>{
        const url = "https://api.funtranslations.com/translate/minion.json?text=";
        fetch(url+inputText)
        .then(response => response.json())
        .then(json=>setOutPut(json.contents.translated))
       .catch(()=> setOutPut("Sorry! we're experiencing some technical issue. Please try again later."));
}


    return (
        <div>
             <header>
                <div> 
                    banana talk
                </div>
             </header>

    <main>
        <img src="https://media1.tenor.com/images/232e8bdd50164d9470fe09229af8adc1/tenor.gif?itemid=11174121" alt="minion"/><br/>

        <textarea id="translate-input"  placeholder="Put your message here which you want to convert to banana language"
         onChange={(e)=>{setInputText(e.target.value)}} value={inputText}/>
        <button id="btn-translate" onClick={()=>{ChangeLang()}}>Translate to Banana</button>
        <button id="btn-clear"  onClick={()=>{setInputText("")}}>Clear Text</button>
        <div>Tranlation will come here 👇</div>
        <div id="translate-output">{OutPut}</div>
    </main>

                <footer>
                    <div>about</div>
                    <p>Convert from English to Minion speak.<br/> This language is spoken by the minions in Despicable Me. The language is actually lots of languages.<br/> Yi kai yai yai bananna! Minion is a registered trademark of Universal Studios.</p>
                </footer>
        </div>
    )
}
