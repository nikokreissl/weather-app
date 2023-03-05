import React, { useState, useEffect } from "react";
import Form from "../Form";
import List from "../List";
import "./Main.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import useFetch from "../../hooks/useFetch";

export default function Main() {
  const { weather } = useFetch();

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(activityName, activityCheckbox) {
    const newActivity = {
      name: activityName,
      isForGoodWeather: activityCheckbox,
      id: uid(),
    };
    setActivities([newActivity, ...activities]);
    // const newActivities = [newActivity, ...activities];
    // setActivities(
    //   newActivities.filter(
    //     (activity) => activity.isForGoodWeather === isGoodWeather
    //   )
    // );
  }

  function handleDeleteActivity(id) {
    console.log("Click");
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <main>
      <p>{`${weather.temperature} ${weather.condition}`}</p>
      {weather.isGoodWeather ? <p>Good Weather!</p> : <p>Bad Weather!</p>}
      <Form onAddActivity={handleAddActivity} />
      <List
        activities={activities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
    </main>
  );
}
