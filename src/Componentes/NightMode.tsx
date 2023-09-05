import {useState,useEffect} from "react";

const DarkMode = ()=>{

    const [nightTheme,setNightTheme]=useState("Light");

    useEffect(()=>{
        if(nightTheme==='dark'){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[nightTheme]);

    const handleTheme=()=>{
        setNightTheme(nightTheme==="dark" ? "Light" : "dark");
    };

    return(
    <div className="fixed bottom-4 right-4">
        <button className="p-2 bg-slate-300 rounded-xl" onClick={handleTheme}>
            {nightTheme==="dark" ? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUFJREFUSEu1ldE5BDEUhf+tgA5QASpABZRABXRAB0sF6IAK2ApQASVQwe7324wvZrJJZmf2vOQhyTk3597cO2HDmGyYn5LALnAKnABn6wSTE7gCpoH0ETgfS2AbuG9FfAE8jCXwFGyJ+bTodQyBG+A6QTSKgNZ8Aq5t3AHmpDfiJJtEvU/hC9jrzQ7/yjTl/eA8xC8wyp1MlN/hFa7ViAXmFbesJBNejb4CEr8D/gvXImIBL+wXbywPaJMlbXWlYCX+WhkL3AKXlQLxMW0zOAklPgZmTVnHAm68rCGQunLYWNhudkZzNFDkAzhoONoCbrwNEPgJFv0VQKpd5350SbvTdVfNA0VM+laJMewbub2q09JzA8dppogTLYfnQG4n6KA0Mr2gkOPSKms6rSVpQdi/ksSrklzpSP2xmhfUsyVOLgAf0jMZOtUWHQAAAABJRU5ErkJggg=="/>
                : 
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZhJREFUSEu1lYExBEEQRd9FgAgQASJABIgAESACRIAIkAERIAMiQATIQD3VczW3N7s7W267amvm6mb/7/79p3fCyDEZGZ8+gmXgEDgF3K8MTaiL4Ai4CmBxf7J9NU8bwV1kLtAbsAG8ADvVyHGwRHABnEfGVvENPC2KwAwFM3aB58h6YQQCbgOXgJUYNvcL+ADW/yPRGvAe0rhXmhSv0YdjwP5UR94Drahr7gG1z8Pft4BESpeTd5LlBKm5uTz5y0q0GhVYSVXkBEn/1NwmwGY0fWkISU5wDZwAZ4D7UuiyB0ASK7Lqxy7JShLdxGhok0BX2ei97IDVp7BS42+s5ATpDtTacT8SEdCK8vgEdOLcsEuNPAgpqhoZYAIqrWNlKnNzVCQ7SrQ1xI5hba3sUJzeo9IsSpfK1Uok6wvlEtz+zFzGEoGHbJqleqF0io0vhWcFlsCYM0jbuPZF9fRjY1iNlbj62FhN4epZZVFeLTwTfV80M9OSTZfkIH4nBC9K2UeQgMzUxrn6WIUyunbOpVqCvia3/j86wS+UkVUZlM9ZYAAAAABJRU5ErkJggg=="/>
            }
        </button>
    </div>
    )
}
export default DarkMode;