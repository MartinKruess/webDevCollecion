import { FullstackApp } from "../fullstack/fullstackApp";
import { FullstackInfo } from "../fullstack/fullstackInfo";
import { ErrorHandling } from "../fullstack/errorHandling";
import { Route, Routes } from "react-router-dom";

export const Fullstack = () => {
  return (
    <>
      <section className="px-8">
        <Routes>
          <Route path="/app" element={<FullstackApp />} />

          <Route path="/info" element={<FullstackInfo />} />

          <Route path="/preview" element={<FullstackApp />} />
          <Route path="/error-test" element={<ErrorHandling />} />
        </Routes>
      </section>
    </>
  );
};
