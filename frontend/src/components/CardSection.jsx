import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mb-13">
      <Card
        title="Track Your Cycle"
        desc="Easily log and track your periods, fertile days, and ovulation. Stay prepared and understand your body better."
        btnText="Start Tracking"
        link="/tracker"
        protectedPage={true} // only logged-in users can access
      />

      <Card
        title="Mood & Symptom Journal"
        desc="Record your daily moods, pain levels, and symptoms. Gain insights into your health patterns over time."
        btnText="Log Now"
        link="/journal"
        protectedPage={true} // only logged-in users can access
      />

      <Card
        title="Health Awareness Hub"
        desc="Read articles and tips about women’s health, nutrition, mental well-being, and lifestyle."
        btnText="Read Articles"
        link="/articles"
        protectedPage={false} // public page
      />
    </div>
  );
};

export default CardSection;
