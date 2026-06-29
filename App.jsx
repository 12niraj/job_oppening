import React from 'react'
import Card from './card'
import User from './assets/user'



const App = () => {

  const jobs = [
  {
    brandLogo: "data:image/png;base64,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",
    company: "Amazon",
    posted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo:  "data:image/png;base64,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",
    company: "Google",
    posted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    company: "Microsoft",
    posted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Noida, India"
  },
  {
    brandLogo:"https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    posted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo:"https://pngimg.com/uploads/meta/meta_PNG12.png",
    company: "Meta",
    posted: "6 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Remote"
  },
  {
    brandLogo:  "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    company: "Netflix",
    posted: "10 days ago",
    post: "UI Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Adobe",
    posted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    company: "Tesla",
    posted: "8 days ago",
    post: "Java Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    company: "NVIDIA",
    posted: "9 days ago",
    post: "AI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company:  "Intel",
    posted: "7 days ago",
    post: "Cloud Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "Chennai, India"
  }
];

  return (
    <div className='parent'>
     
     {
      jobs.map((elem)=>{
      return <Card company={elem.company}
                   brandlogo={elem.brandLogo}
                   post={elem.post} 
                   posted={elem.posted}
                   time={elem.tag1}
                   level={elem.tag2} 
                   pay={elem.pay}
                   locatin={elem.location}/>
                   
      })
     }
    
     
    </div>
  )
}

export default App
