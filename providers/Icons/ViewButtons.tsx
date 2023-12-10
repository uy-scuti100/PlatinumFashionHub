import { Button } from "@/components/ui/button";
import React from "react";

interface DoubleViewProps {
   setView: () => void;
}
interface SingleViewProps {
   setView: () => void;
}
interface DoubleDesktopViewProps {
   setView: () => void;
   view: string;
}
interface TrippleDesktopViewProps {
   setView: () => void;
   view: string;
}
interface QuadrupleDesktopViewProps {
   setView: () => void;
   view: string;
}

export const FourGridView: React.FC<QuadrupleDesktopViewProps> = ({
   setView,
   view,
}) => {
   return (
      <Button
         variant={view === "quadruple" ? "default" : "secondary"}
         className="transition-colors duration-500 ease-in-out">
         <svg
            role="presentation"
            width="18"
            viewBox="0 0 18 18"
            fill="none"
            onClick={setView}>
            <path
               fill="currentColor"
               d="M0 0h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0zm0 4h18v2H0z"></path>
         </svg>
      </Button>
   );
};

export const ThreeGridView: React.FC<TrippleDesktopViewProps> = ({
   setView,
   view,
}) => {
   return (
      <Button
         variant={view === "tripple" ? "default" : "secondary"}
         className="transition-colors duration-500 ease-in-out">
         <svg
            onClick={setView}
            role="presentation"
            width="18"
            viewBox="0 0 18 18"
            fill="none"
            className="cursor-pointer">
            <path
               fill="currentColor"
               d="M0 0h4v4H0zM0 7h4v4H0zM0 14h4v4H0zM7 0h4v4H7zM7 7h4v4H7zM7 14h4v4H7zM14 0h4v4h-4zM14 7h4v4h-4zM14 14h4v4h-4z"></path>
         </svg>
      </Button>
   );
};

export const TwoGridView: React.FC<DoubleDesktopViewProps> = ({
   setView,
   view,
}) => {
   return (
      <Button
         variant={view === "double" ? "default" : "secondary"}
         className="transition-colors duration-500 ease-in-out">
         <svg
            onClick={setView}
            role="presentation"
            width="18"
            viewBox="0 0 18 18"
            fill="none"
            className="cursor-pointer">
            <path
               fill="currentColor"
               d="M0 0h8v8H0zM0 10h8v8H0zM10 0h8v8h-8zM10 10h8v8h-8z"></path>
         </svg>
      </Button>
   );
};
export const SingleView: React.FC<SingleViewProps> = ({ setView }) => {
   return (
      <svg
         onClick={setView}
         role="presentation"
         width="18"
         viewBox="0 0 18 18"
         fill="none"
         className="cursor-pointer">
         <path fill="currentColor" d="M0 0h18v18H0z"></path>
      </svg>
   );
};
export const DoubleView: React.FC<DoubleViewProps> = ({ setView }) => {
   return (
      <svg
         onClick={setView}
         role="presentation"
         width="18"
         viewBox="0 0 18 18"
         fill="none"
         className="cursor-pointer">
         <path
            fill="currentColor"
            d="M0 0h8v8H0zM0 10h8v8H0zM10 0h8v8h-8zM10 10h8v8h-8z"></path>
      </svg>
   );
};
