import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(`ENTER YOUR CODE:
//Start Typing....  `);
  const [loading, setLoading] = useState(false);

  const [review, setReview] = useState(``);
  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Review failed", error);
    } finally {
      setLoading(false);
    }
  }

 return (
   <main>
     <div className="left">
       <div className="code-wrapper">
         <Editor
           value={code}
           onValueChange={(code) => setCode(code)}
           highlight={(code) =>
             prism.highlight(code, prism.languages.javascript, "javascript")
           }
           padding={10}
           style={{
             fontFamily: '"Fira code", "Fira Mono", monospace',
             fontSize: 14,
             backgroundColor: "black",
             color: "white",
             boxSizing: "border-box",
             width: "100%",
             minHeight: "100%",
             margin: 0,
             border: "none",
             outline: "none",
           }}
         />
       </div>
       <div onClick={reviewCode} className="review">
         REVIEW
       </div>
     </div>

     <div className="right">
       {loading ? (
         <div className="generating-wrapper">
           <div className="spinner" />
           <div className="generating-loader">
             Generating<span className="dot one">.</span>
             <span className="dot two">.</span>
             <span className="dot three">.</span>
           </div>
         </div>
       ) : (
         <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
       )}
     </div>
   </main>
 );

}

export default App;
