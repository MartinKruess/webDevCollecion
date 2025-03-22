import { DatabaseInfo } from "../database/databaseInfo";
import { InstallMongo } from "../database/installMongo";
import { MongoSchemas } from "../database/mongoSchemas";
import { MongoDB } from "../database/mongoDB";
import { MongoRefs } from "../database/assets/mongorefs";
import { Route, Routes } from "react-router-dom";
import { MongoLinux } from "../database/assets/mongoLinux";

export const Database = () => {
  return (
    <>
      <section className="px-8">
        <Routes>
          <Route path="/" element={<DatabaseInfo />} />
          <Route path="installMongo" element={<InstallMongo />} />
          <Route path="atlas" element={<MongoDB />} />
          <Route path="schemas" element={<MongoSchemas />} />
          <Route path="references" element={<MongoRefs />} />
        </Routes>
      </section>
    </>
  );
};
