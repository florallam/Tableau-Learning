import { useEffect, useRef } from "react";
const { tableau } = window;
// import { TableauDashboard } from "./Tableau";

const BlogList = ({ blogs, title }) => {
  // let split =blogs.body.split('\n') 
  function splitSentences(sentence) {
    return sentence.split('\n');
  }

  function EmbedTableau({url}) {
    const ref = useRef(null);
    // const url = 'https://public.tableau.com/views/CourseraTableau_16973521766220/MedianWagePerSubgroup?:language=en-US&:display_count=n&:origin=viz_share_link'
    useEffect(() => {
      const container = ref.current;
      try{
        const viz = new tableau.Viz(container, url, {
          width: '100%',
          height: '90vh',
        });

  
      // Return a cleanup function to remove the visualization when unmounting
        return () => {
          viz.dispose(); // Dispose of the old visualization to prevent conflicts
        };
      }catch(error){
        console.error("Error with url", error)
      }
    }, [url]);
  
    return <div ref={ref} />;
  }

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{blog.title}</h2>
          <h3>Notes</h3>
          <ul className="bullet-points">
            {splitSentences(blog.body).map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>
          <EmbedTableau url={blog.webpage}/>

        </div>
      ))}
    </div>
  );
}

export default BlogList;