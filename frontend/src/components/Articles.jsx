import React from 'react'
import Card from './Card';
import Navbar from './Navbar';
import Footer from './Footer';
import CardSection from './CardSection';
import CardArticle from './CardArticle';

const Articles = () => {
  const articles = [
    {
      title: "Understanding Your Menstrual Cycle",
      desc: "Learn about the phases of your cycle and how they affect mood and energy.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Managing PMS Naturally",
      desc: "Natural remedies, diet ideas, and lifestyle hacks to ease PMS symptoms.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Yoga for Hormonal Balance",
      desc: "Poses that help relieve cramps, reduce stress, and boost hormonal health.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Foods That Support Your Cycle",
      desc: "Discover nutrient-rich foods that support hormonal balance during your cycle.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Mental Health & Periods",
      desc: "How to manage stress, anxiety, and mood swings during your cycle.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Self-Care During Menstruation",
      desc: "Simple tips for self-care and comfort during your periods.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];


  return (
      <>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mb-13
          ">
      {articles.map((item,idx) => {
        return <CardArticle key={idx} title={item.title} desc={item.desc} btnText="Read more" src={item.image} />
      })}
        </div>
         
      </>
  )
}

export default Articles