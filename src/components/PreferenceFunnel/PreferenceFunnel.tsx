"use client";
import { Funnel } from "@/components/common/Funnel/Funnel";
import DislikesStep from "./Step/DislikesStep";
import LikesStep from "./Step/LikesStep";
import MoodStep from "./Step/MoodStep";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const PreferenceFunnel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = searchParams.get("funnel-step") as
    | "dislikes"
    | "likes"
    | "mood"
    | null;
  const [step, setStep] = useState<"dislikes" | "likes" | "mood">(
    currentStep || "dislikes"
  );

  return (
    <Funnel steps={["dislikes", "likes", "mood"]} step={step}>
      <Funnel.Step name="dislikes">
        <DislikesStep
          onPrev={() => {
            router.push("/");
            setStep("dislikes");
          }}
          onNext={() => {
            router.push("/preferences?funnel-step=likes");
            setStep("likes");
          }}
        />
      </Funnel.Step>
      <Funnel.Step name="likes">
        <LikesStep
          onPrev={() => {
            router.push("/preferences?funnel-step=dislikes");
            setStep("dislikes");
          }}
          onNext={() => {
            router.push("/preferences?funnel-step=mood");
            setStep("mood");
          }}
        />
      </Funnel.Step>
      <Funnel.Step name="mood">
        <MoodStep
          onPrev={() => {
            router.push("/preferences?funnel-step=likes");
            setStep("likes");
          }}
          onNext={() => {
            router.push("/results");
          }}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default PreferenceFunnel;
