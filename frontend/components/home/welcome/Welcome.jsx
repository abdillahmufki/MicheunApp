import React, { useState } from "react";
import { View } from "react-native";
import PoinDashboard from "./PoinDashboard";

import UserGreeting from "./UserGreeting";
import JobTypeTabs from "./JobTypeTabs";

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const jobTypes = ["Full-time", "Part-time", "Contractor"];

  return (
    <View>
      <UserGreeting />
      <PoinDashboard />

      <JobTypeTabs
        jobTypes={jobTypes}
        activeJobType={activeJobType}
        setActiveJobType={setActiveJobType}
      />
    </View>
  );
};

export default Welcome;
