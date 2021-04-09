import React,{useState} from 'react'
import  '../styles/MarkSeven.css'
export const MarkSeven = () => {



const [inputText, setInputText] = useState('')

const [OutPut, setOutPut] = useState('')

const  ChangeLang=()=>{
        const url = "https://api.funtranslations.com/translate/yoda.json";
        fetch(url+inputText)
        .then(response => response.json())
        .then(json=>setOutPut(json.contents.translated))
       .catch(()=> setOutPut("Sorry! we're experiencing some technical issue. Please try again later."));
}


    return (
        <div>
             <header className="yoda-header">
                <div> 
                Yoda translator 
                </div>
             </header>

    <main className="yoda">
        <img src="https://media.giphy.com/media/zQhFEBrX6plKg/giphy.gif" alt="Yoda"/><br/>

        <textarea id="translate-input"  placeholder="Put your message here which you want to convert to banana language"
         onChange={(e)=>{setInputText(e.target.value)}} value={inputText}/>
        <button id="btn-translate" onClick={()=>{ChangeLang()}}>Translate to Yoda</button>
        <button id="btn-clear"  onClick={()=>{setInputText("")}}>Clear Text</button>
        <div>Tranlation will come here 👇</div>
        <div id="translate-output">{OutPut}</div>
    </main>

                <footer>
                    <div>about</div>
                    <p>Convert from English to Yoda speak.<br/> This language is spoken by the Yodas in Despicable Me. The language is actually lots of languages.<br/> Yi kai yai yai bananna! Yoda is a registered trademark of Universal Studios.</p>
                </footer>
        </div>
    )
}
