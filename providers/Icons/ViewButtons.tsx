import { Button } from "@/components/ui/button";
import React from "react";

interface DoubleViewProps {
   setView: () => void;
   view: string;
}
interface SingleViewProps {
   setView: () => void;
   view: string;
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
         onClick={setView}
         variant={view === "quadruple" ? "default" : "secondary"}
         className="transition-colors duration-500 ease-in-out">
         <svg role="presentation" width="18" viewBox="0 0 18 18" fill="none">
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
         onClick={setView}
         variant={view === "tripple" ? "default" : "secondary"}
         className="transition-colors duration-500 ease-in-out">
         <svg
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
         onClick={setView}
         variant={view === "double" ? "default" : "secondary"}
         className="transition-colors duration-500 ease-in-out">
         <svg
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
export const SingleView: React.FC<SingleViewProps> = ({ setView, view }) => {
   return (
      <svg
         onClick={setView}
         role="presentation"
         width="20"
         height="20"
         viewBox="0 0 18 18"
         fill="none"
         className={`cursor-pointer ${view === "single" ? "" : "opacity-50"}`}>
         <path fill="currentColor" d="M0 0h18v18H0z"></path>
      </svg>
   );
};
export const DoubleView: React.FC<DoubleViewProps> = ({ setView, view }) => {
   return (
      <svg
         onClick={setView}
         role="presentation"
         width="20"
         height="20"
         viewBox="0 0 18 18"
         fill="none"
         className={`cursor-pointer ${view === "double" ? "" : "opacity-50"}`}>
         <path
            fill="currentColor"
            d="M0 0h8v8H0zM0 10h8v8H0zM10 0h8v8h-8zM10 10h8v8h-8z"></path>
      </svg>
   );
};
