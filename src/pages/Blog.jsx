import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import {WhatsappShareButton,
   WhatsappIcon, 
   FacebookShareButton, 
   FacebookIcon, 
   TwitterShareButton,
   TwitterIcon} from 'react-share'


function Blog() {
  const { id } = useParams();
  const shareUrl = window.location.href;

  const {axios} = useAppContext();

  const [data, setData] = useState(null);

  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  };

  const fetchComments = async () => {
    try {
      const {data} = await  axios.post('/api/blog/comments', {blogId: id})
      if(data.success){
        setComments(data.comments)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
try {
  const {data} = await  axios.post('/api/blog/add-comment', {blog: id, name, content})
  if(data.success){
    toast.success(data.message)
    setName(' ')
    setContent(' ')
  }else{
    toast.error(data.message)
  }
} catch (error) {
  toast.error(error.message)
}

  };



  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);
  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        className="absolute -top-50 -z-1 opacity-50"
        alt=""
      />
      <Navbar />

      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published On {Moment(data.createdAt).format("Do MMM YY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-mrdium text-primary">
          Anuom
        </p>
      </div>
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} className="rounded-3xl mb-5" alt="" />

        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* comment section */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} className="w-6" alt="" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(data.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
            <textarea
              required
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              placeholder="Please eneter your comment"
            ></textarea>
            <button
              className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">Share</p>
          <div className="flex">

            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon/>
            </WhatsappShareButton>

            <FacebookShareButton url={shareUrl}>
              <FacebookIcon/>
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl}>
              <TwitterIcon/>
            </TwitterShareButton>



          </div>
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
   <Loader/>
  );
}

export default Blog;
