import { Link } from "react-router-dom";
import defaultImage from "../images/2015_5_18_16_0_1_59.jpg";


const Blog = () => {
  return (
      <div className="col-12 rounded-4 border border-primary p-4">
        <img src={defaultImage} alt="" className="w-100 rounded-4" />
        <h4 className="my-3">Lorem ipsum dolor sit amet</h4>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in volu
        </h6>
        <Link to="/DetailsBlogs" className="text-dark h5 mt-3 d-block">
          Read more
        </Link>
      </div>
  );
};

export default Blog;
