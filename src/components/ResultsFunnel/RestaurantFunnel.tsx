"use client";
import React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Funnel } from "../common/Funnel/Funnel";
import FoodStep from "./Step/FoodStep";
import RestaurantStep from "./Step/RestaurantStep";
import EndStep from "./Step/EndStep";

const ResultsFunnel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = searchParams.get("funnel-step") as
    | "food"
    | "rastaurant"
    | "choice"
    | null;
  const [step, setStep] = useState<"food" | "rastaurant" | "choice">(
    currentStep || "food"
  );

  return (
    <Funnel steps={["food", "rastaurant", "choice"]} step={step}>
      <Funnel.Step name="food">
        <FoodStep
          onPrev={() => {
            router.push("/");
          }}
          onNext={() => {
            router.push("/results?funnel-step=rastaurant");
            setStep("rastaurant");
          }}
        />
      </Funnel.Step>
      <Funnel.Step name="rastaurant">
        <RestaurantStep
          onPrev={() => {
            router.push("/results?funnel-step=food");
            setStep("food");
          }}
          onNext={() => {
            router.push("/results?funnel-step=choice");
            setStep("choice");
          }}
        />
      </Funnel.Step>
      <Funnel.Step name="choice">
        <EndStep />
      </Funnel.Step>
    </Funnel>
  );
};

export default ResultsFunnel;
