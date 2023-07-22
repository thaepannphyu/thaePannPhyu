import React from "react";
import { Timeline, Text } from "@mantine/core";
import { AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai";

const Education = () => {
  return (
    <div>
      {/* <h2 className=" uppercase text-left py-3 font-light ">
        education roadmap
      </h2> */}
      <Timeline active={2} lineWidth={2} bulletSize={18}>
        <Timeline.Item title="2018" bullet={<AiFillCheckCircle size={18} />}>
          <Text color="dimmed" size="sm">
            Pass Matriculation Exam
          </Text>
          <Text size="xs" mt={4}>
            From Mayangone
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2019 - 2021"
          bullet={<AiFillCheckCircle size={18} />}>
          <Text color="dimmed" size="sm">
            Diploma In Electronics And Communication
          </Text>
          <Text size="xs" mt={4}>
            From Government Institute Of Technology
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022 - 2023"
          bullet={<AiFillCheckCircle size={18} />}>
          <Text color="dimmed" size="sm">
            Special Web Design Certification
          </Text>
          <Text size="xs" mt={4}>
            From MMS-IT
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022 - present"
          bullet={<AiFillClockCircle className=" text-white" size={18} />}>
          <Text color="dimmed" size="sm">
            Web Application Development Certification
          </Text>
          <Text size="xs" mt={4}>
            In MMS-IT
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022 - present"
          bullet={<AiFillClockCircle className=" text-white" size={18} />}>
          <Text color="dimmed" size="sm">
            B.sc in Computer Science
          </Text>
          <Text size="xs" mt={4}>
            In University Of People
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;
