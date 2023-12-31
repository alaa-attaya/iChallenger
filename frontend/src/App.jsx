import React, { useEffect, useState } from "react";
import "./styles/app.css";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingHOC from "./components/LoadingHOC";
import LandingPage from "./pages/LandingPage";
import ContactusPage from "./pages/ContactusPage";
import LoginPage from "./pages/LoginPage";
import Loading from "./components/Loading";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import ProfilePageView from "./pages/ProfilePageView";
import ProfilePageSettings from "./pages/ProfilePageSettings";
import NotFound from "./components/NotFound";
import Forums from "./pages/Forums";
import GameForum from "./pages/GameForum";
import PostPage from "./pages/PostPage";
import Tournaments from "./pages/Tournaments";
import FollowingActivity from "./pages/FollowingActivity";
import Leaderboards from "./pages/Leaderboards";
import TournamentPage from "./pages/TournamentPage";
import { refreshToken, verifyToken } from "./services/auth";

const WrappedLandingPage = LoadingHOC(LandingPage);
const WrappedContactusPage = LoadingHOC(ContactusPage);
const WrappedLoginPage = LoadingHOC(LoginPage);
const WrappedForgotPasswordPage = LoadingHOC(ForgotPasswordPage);
const WrappedProfilePage = LoadingHOC(ProfilePage);
const WrappedProfilePageView = LoadingHOC(ProfilePageView);
const WrappedProfilePageSettings = LoadingHOC(ProfilePageSettings);
const WrappedNotFound = LoadingHOC(NotFound);
const WrappedForums = LoadingHOC(Forums);
const WrappedTournaments = LoadingHOC(Tournaments);
const WrappedFollowingActivity = LoadingHOC(FollowingActivity);
const WrappedLeaderboards = LoadingHOC(Leaderboards);
const WrappedGameForum = LoadingHOC(GameForum);
const WrappedPostPage = LoadingHOC(PostPage);
const WrappedTournamentPage = LoadingHOC(TournamentPage);

const App = () => {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [verificationInProgress, setVerificationInProgress] = useState(false);
  const handleTokenChange = async () => {
    const token = localStorage.getItem("token");
    setUserSignedIn(!!token);
    setVerificationInProgress(true);
    const currentPath = window.location.pathname;

    if (
      (currentPath === "/Profile" && !token) ||
      (currentPath === "/Settings" && !token) ||
      (currentPath === "/Forum/:username" && !token) ||
      (currentPath === "/Forum/:username/:post" && !token) ||
      (currentPath === "/Activity" && !token)
    ) {
      window.location.href = "/Login";
    } else if (userSignedIn) {
      try {
        const userData = await verifyToken();
        if (!userData) {
          localStorage.clear();
        } else {
          setUserProfile(userData);
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        setUserProfile(null);
      }
    } else {
      setUserProfile(null);
    }
    setVerificationInProgress(false);
  };

  useEffect(() => {
    handleTokenChange();
    const refreshInterval = setInterval(() => {
      if (userSignedIn) {
        refreshToken()
          .then((newToken) => {
            if (!newToken) {
              localStorage.clear();
              clearInterval(refreshInterval);
            } else {
              localStorage.setItem("token", newToken);
            }
          })
          .catch((error) => {
            console.error("Token refresh failed:", error);
            localStorage.clear();
          });
      }
    }, 180000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [userSignedIn]);

  window.addEventListener("storage", (e) => {
    if (e.key === "token") {
      handleTokenChange();
    }
  });

  return (
    <BrowserRouter>
      {verificationInProgress ? (
        <Loading />
      ) : (
        <div className="app">
          <Navbar userProfile={userProfile} setUserProfile={setUserProfile} />
          <main>
            {" "}
            <Routes>
              <Route path="/" element={<WrappedLandingPage />} />
              <Route path="/Home" element={<WrappedLandingPage />} />
              <Route path="/Contactus" element={<WrappedContactusPage />} />
              <Route
                path="/Login"
                element={<WrappedLoginPage setUserProfile={setUserProfile} />}
              />
              <Route
                path="/ForgotPassword"
                element={<WrappedForgotPasswordPage />}
              />
              <Route
                path="/Profile"
                element={
                  <WrappedProfilePage
                    userProfile={userProfile}
                    setUserProfile={setUserProfile}
                  />
                }
              />
              <Route
                path="/Profile/:username"
                element={
                  <WrappedProfilePageView
                    userProfile={userProfile}
                    setUserProfile={setUserProfile}
                  />
                }
              />

              <Route
                path="/Settings"
                element={
                  <WrappedProfilePageSettings
                    userProfile={userProfile}
                    setUserProfile={setUserProfile}
                  />
                }
              />
              <Route
                path="/Activity"
                element={<WrappedFollowingActivity userProfile={userProfile} />}
              />
              <Route path="/Forums" element={<WrappedForums />} />
              <Route
                path="/Forums/:gamename"
                element={<WrappedGameForum userProfile={userProfile} />}
              />
              <Route
                path="/Forums/:gamename/:post"
                element={<WrappedPostPage userProfile={userProfile} />}
              />
              <Route
                path="/Tournaments"
                element={<WrappedTournaments userProfile={userProfile} />}
              />
              <Route
                path="/Tournaments/:tournamentid"
                element={<WrappedTournamentPage userProfile={userProfile} />}
              />
              <Route
                path="/Leaderboards"
                element={<WrappedLeaderboards userProfile={userProfile} />}
              />

              <Route path="*" element={<WrappedNotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
