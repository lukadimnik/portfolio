import React from "react";
import { Grid, Cell, ListItem, ListItemContent, List } from "react-mdl";

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Luka Dimnik</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions{" "}
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  luka.dimnik88@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
