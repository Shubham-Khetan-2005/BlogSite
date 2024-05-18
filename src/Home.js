import useFetch from "./useFetch";
import BlogList from "./BlogList";

function Home() {
  const name = "Shubham";
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      <h1>
        Hey there, I am {name} <br /> and <br />
        This is my first <p className="changeColour">React</p> project
      </h1>
      <h2 className="greet">Here are some of the blogs for you, my Friend</h2>

      {/* This is a Prop */}
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;
