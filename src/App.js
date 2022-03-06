import Header from "./header";
import {books} from "./data"
function App() {
  return (
    <>
      <Header />
      {books.map((book)=>{
        const {img,discription,author}=book;
      
      return(
      <article className="bookblock">
        <div className="bookimg">
          <img src={img} alt="" />
        </div>
          <div className="discription">
            <h2>{discription}</h2>
          </div>
          <div className="author">
            <h3>{author}</h3>
          </div>
        
      </article>
      )
    })}
    </>
)
}

export default App;
