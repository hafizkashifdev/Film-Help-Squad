import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobAudPage from "./pages/JobAudPage";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import EmployersPage from "./pages/EmployersPage";
import AgentsPage from "./pages/AgentsPage";
import ServiceDirectoryPage from "./pages/ServiceDirectoryPage";
import ContactUsPage from "./pages/ContactUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { Layout } from "./layout/Layout";
import Actors from "./fetures/for-employers/Actors";
import Voiceover from "./fetures/for-employers/Voiceover";
import Singers from "./fetures/for-employers/Singers";
import Dancers from "./fetures/for-employers/Dancers";
import ChildActors from "./fetures/for-employers/ChildActors";
import Entertainers from "./fetures/for-employers/Entertainers";
import FilmTvPro from "./fetures/for-employers/FilmTvPro";
import Theatre from "./fetures/for-employers/Theatre";
import MusicPro from "./fetures/for-employers/MusicPro";
import Talent from "./fetures/for-employers/Talent";
import HelpPage from "./pages/HelpPage";
import TCsPage from "./pages/TCsPage";
import AboutUsPage from "./pages/AboutUsPage";
import WorkWithUsPage from "./pages/WorkWithUsPage";
import SignInPage from "./pages/SignInPage";
import CreateProfilePage from "./pages/CreateProfilePage";
import ForumGuidelines from "./fetures/forum-guidelines/ForumGuidelines";
import NoticesEvents from "./fetures/notices-events/NoticesEvents";
import Guides from "./fetures/guides/Guides";
import LearnMoreAgent from "./fetures/learn-more-agent/LearnMoreAgent";
import LearnMoreEmployer from "./fetures/learn-more-employer/LearnMoreEmployer";
function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Layout>
        <Routes>
          <Route exact path={"/"} Component={HomePage} />
          <Route exact path={"/jobs-auditions"} Component={JobAudPage} />
          <Route
            exact
            path={"/professionals/search-professionals"}
            Component={ProfessionalsPage}
          />
          <Route
            exact
            path={"/employers/search-employers"}
            Component={EmployersPage}
          />
          <Route exact path={"/agents/search-agents"} Component={AgentsPage} />
          <Route exact path={"/contact-us"} Component={ContactUsPage} />
          <Route exact path={"/privacy-policy"} Component={PrivacyPolicyPage} />
          <Route exact path={"/help"} Component={HelpPage} />
          <Route exact path={"/terms&conditions"} Component={TCsPage} />
          <Route exact path={"/careers"} Component={WorkWithUsPage} />
          <Route exact path={"/about-us"} Component={AboutUsPage} />
          <Route exact path={"/actors"} Component={Actors} />
          <Route exact path={"/voiceover-artist"} Component={Voiceover} />
          <Route exact path={"/singers"} Component={Singers} />
          <Route exact path={"/talent"} Component={Talent} />
          <Route exact path={"/dancers"} Component={Dancers} />
          <Route exact path={"/child-actors"} Component={ChildActors} />
          <Route exact path={"/entertainers"} Component={Entertainers} />
          <Route exact path={"/film&tv-production"} Component={FilmTvPro} />
          <Route exact path={"/theatre-professionals"} Component={Theatre} />
          <Route exact path={"/music-professionals"} Component={MusicPro} />
          <Route exact path={"/sign-in"} Component={SignInPage} />
          <Route
            exact
            path={"/agents/create-profile"}
            Component={CreateProfilePage}
          />
          <Route
            exact
            path={"/employers/create-profile"}
            Component={CreateProfilePage}
          />
          <Route
            exact
            path={"/professionals/create-profile"}
            Component={CreateProfilePage}
          />
          <Route exact path={"/forum-guidelines"} Component={ForumGuidelines} />
          <Route exact path={"/notices&events"} Component={NoticesEvents} />
          <Route exact path={"/guides"} Component={Guides} />
          <Route exact path={"/learn-more-agents"} Component={LearnMoreAgent} />
          <Route exact path={"/learn-more-employers"} Component={LearnMoreEmployer} />
          <Route
            exact
            path={"/service-directory"}
            Component={ServiceDirectoryPage}
          />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
