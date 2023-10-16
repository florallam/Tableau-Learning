import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Week 2', body: 'Measures are continuous variables while dimensions are discrete or categorical variables \nTo calculate the standard deviation (spread of values within a variable), you can change the means of aggregation\nTo get rid of outliers, you can choose to filter the values or grouping the outlier ids together', webpage: 'https://public.tableau.com/views/CourseraTableau_16973521766220/MedianWagePerSubgroup?:language=en-US&:display_count=n&:origin=viz_share_link', id: 1 },
    { title: 'Week 3', body: 'lorem ipsum...', webpage:'',id: 2 },
    { title: 'Week 4', body: 'lorem ipsum...', webpage:'',id: 3 }
  ])
  return (
    <div className="home">
      <BlogList blogs={blogs} title="Coursera: Data Visualisation and Communication with Tableau" />
    </div>
  );
}
 
export default Home;