import Header from "@/components/Header";
import React from "react";

const Settings = () => {
  const userSettings = {
    username: "johndoe",
    email: "john@gmail.com",
    teamName: "Development Team",
    roleName: "Developer",
  };
  const labelStyles = "block text-sm font-medium dark:text-white";
  const textStyles =
    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";
  return (
    <div className="p-8">
      <Header name="Settings" />
      <div className="space-y-4">
        <div>
          <label htmlFor="" className={labelStyles}>
            Username
          </label>
          <p className={textStyles}>{userSettings.username}</p>
        </div>
        <div>
          <label htmlFor="" className={labelStyles}>
            Email
          </label>
          <p className={textStyles}>{userSettings.email}</p>
        </div>
        <div>
          <label htmlFor="" className={labelStyles}>
            Team
          </label>
          <p className={textStyles}>{userSettings.teamName}</p>
        </div>
        <div>
          <label htmlFor="" className={labelStyles}>
            Role
          </label>
          <p className={textStyles}>{userSettings.roleName}</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
