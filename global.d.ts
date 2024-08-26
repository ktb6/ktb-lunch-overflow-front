export {};

declare global {
  interface Window {
    naver: any;
  }
}

interface StepProps {
  onPrev: () => void;
  onNext: () => void;
}
