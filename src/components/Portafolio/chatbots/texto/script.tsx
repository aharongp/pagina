import { useLocation } from "react-router-dom";
import { chatbotTexto } from "./infoTexto";
import { useEffect } from "react";

export default function ScriptTexto() {
    const location = useLocation();
    useEffect(() => {
        const checkUrlAndHandleScripts = () => {
        const urlPattern = /^\/texto\/(\d+)$/; 
        const match = location.pathname.match(urlPattern); 

        if (match) {
          const id = match[1];
          const chatbot = chatbotTexto.find(bot => bot.id === Number(id));

          if (chatbot) {
            const script1 = document.createElement('script');
            script1.src = chatbot.src1; 
            script1.className = "bubble-botpress"
            script1.onload = () => {
                document.body.removeChild(script1);
            };
            document.body.appendChild(script1);
  
            const script2 = document.createElement('script');
            script2.className = "chatbot-botpress"
            script2.src = chatbot.src2; 
            script2.onload = () => {
                document.body.removeChild(script2);
            };
            document.body.appendChild(script2);
          }
        } else {
          const iframeWebchat = document.getElementsByName('webchat');
          while (iframeWebchat.length > 0) {
            let iframe1 = iframeWebchat[0].parentNode as ParentNode;
            iframe1.removeChild(iframeWebchat[0]);
          }
          const iframeFab = document.getElementsByName('fab');
          while (iframeFab.length > 0) {
            let iframe1 = iframeFab[0].parentNode as ParentNode;
            iframe1.removeChild(iframeFab[0]);
          }
          const styles = document.body.getElementsByTagName('style');
          while (styles.length > 0) {
            document.body.removeChild(styles[0]);
          }
        }
      };
      checkUrlAndHandleScripts();
    }, [location.pathname]); 
  
    return null; 
  }