import React from "react";
import Main from "./main/main";
import Service from "./service/service";
import Projects from "./projects/projects";
import OurTeam from "./ourTeam/ourTeam";
import News from "./news/news";

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Main />
        <Service />
        <Projects />
        <OurTeam />
        <News />
      </>
    );
  }
}
