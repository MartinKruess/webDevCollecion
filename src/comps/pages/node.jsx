import { Route, Routes } from "react-router-dom";
import { BackendInfo } from "../backend/backendInfo";
import { Express } from "../backend/express";
import { NodeBasics } from "../backend/nodeBasics";
import { API } from "../backend/api";
import { Security } from "../backend/security";
import { Encrypt } from "../backend/encrypt";
import { Bcrypt } from "../backend/bcrypt";
import { Middleware } from "../backend/middleware";
import { Validation } from "../backend/validation";
import { Cookies } from "../backend/cookies";
import { EmailVerification } from "../fullstack/emailVerification";

export const Node = () => {
  return (
    <>
      <section className="px-8">
        <Routes>
          <Route exact path="/" element={<BackendInfo />} />
          <Route exact path="/node" element={<NodeBasics />} />
          <Route exact path="/express" element={<Express />} />
          <Route exact path="/api" element={<API />} />
          <Route path="/middelware" element={<Middleware />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/security" element={<Security />} />
          <Route path="/encrypt" element={<Encrypt />} />
          <Route path="/bcrypt" element={<Bcrypt />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/verifyMail" element={<EmailVerification />} />
        </Routes>
      </section>
    </>
  );
};
