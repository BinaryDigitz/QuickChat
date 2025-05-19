import React, { useState } from "react";
import { ChatContainer, RightSidebar, Sidebar } from "../components/exportComp";

function Home() {
  const [selectedUser, setSelectedUser] = useState(false);
  return (
    <div className="h-screen w-full sm:px-[15%] sm:py-[5%]">
      <div
        className={`grid backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid-cols-1 relative ${
          selectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;
