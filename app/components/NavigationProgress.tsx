import { useNavigation } from "react-router";

function NavigationProgress() {
  const navigation = useNavigation();
  const isNavigating =
    navigation.state === "loading" || navigation.state === "submitting";

  if (!isNavigating) {
    return null;
  }

  return (
    <div
      role="progressbar"
      aria-busy="true"
      aria-label="Loading page"
      className="pointer-events-none fixed top-0 right-0 left-0 z-50 h-1 overflow-hidden bg-gray-100"
    >
      <div
        className="h-full w-1/3 bg-gradient-to-r from-purple-500 to-purple-600"
        style={{
          animation: "slide 1s infinite linear",
          willChange: "transform",
        }}
      />
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  );
}

export default NavigationProgress;
