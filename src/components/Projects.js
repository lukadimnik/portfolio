import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  Button,
  CardMenu,
  IconButton,
  CardText,
  CardActions
} from "react-mdl";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleCategories = () => {
    if (activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://themeforest.img.customer.envatousercontent.com/files/177409567/reactpreview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=8030235fed05d7a2650481bfcc7227a8) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://themeforest.img.customer.envatousercontent.com/files/177409567/reactpreview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=8030235fed05d7a2650481bfcc7227a8) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://themeforest.img.customer.envatousercontent.com/files/177409567/reactpreview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=8030235fed05d7a2650481bfcc7227a8) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://themeforest.img.customer.envatousercontent.com/files/177409567/reactpreview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=8030235fed05d7a2650481bfcc7227a8) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://themeforest.img.customer.envatousercontent.com/files/177409567/reactpreview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=8030235fed05d7a2650481bfcc7227a8) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (activeTab === 3) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://themeforest.img.customer.envatousercontent.com/files/177409567/reactpreview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=8030235fed05d7a2650481bfcc7227a8) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="category-tabs">
        <Tabs
          activeTab={activeTab}
          onChange={tabId => setActiveTab(tabId)}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJs</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
