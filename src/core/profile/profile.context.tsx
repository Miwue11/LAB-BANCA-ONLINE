import React from "react";

interface Context {
  userName: string;
  setUserProfile: (userName: string) => void;
}

const noUserLogin = "no user login";

const ProfileContext = React.createContext<Context>({
  userName: noUserLogin,
  setUserProfile: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [userProfile, setUserProfile] = React.useState<string>("");

  return (
    <ProfileContext.Provider value={{ userName: userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
export const useProfileContext = () => {
  try {
    return React.useContext(ProfileContext);
  } catch (error) {
    console.error("useProfileContext must be used within a ProfileProvider");
    throw error;
  }
};
