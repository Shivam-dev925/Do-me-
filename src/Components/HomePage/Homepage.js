import React from "react";
import "./HomePage.css";
import { Section } from "../../Styles/Section";
import Card from "../Cards/Card";
import { Button } from "../../Styles/Button";
import { Link } from "react-router-dom";
import { UseAuth } from "../Context/AuthContext";
function Homepage() {
  const { user } = UseAuth();
  return (
    <div className="  container-fluid">
      <div className="row">
        <Section className=" col-12 " minHeight="89vh" bg="#0c2d48">
          <div className="row">
            <div className="col-sm-12 col-md-6     Home__Landing__left">
              <h1>Organize all aspects of your life</h1>
              <p className="para">
                Get to-dos out of your mind, and get them done in less time.
              </p>
              {user ? (
                <Link to="/Do-me">
                  <Button
                    color="black"
                    bg="#7393B3"
                    bgHover="#145DA0"
                    pd="0.7rem 4rem "
                  >
                    Explore
                  </Button>{" "}
                </Link>
              ) : (
                <Link to="/Sign-in">
                  <Button
                    color="black"
                    bg="#7393B3"
                    bgHover="#145DA0"
                    pd="0.7rem 4rem "
                  >
                    Explore
                  </Button>
                </Link>
              )}
            </div>
            <div className="col-sm-12 col-md-6  Home__Landing__right">
              <video
                muted
                controls
                width="100%"
                height="87%"
                src="images/video.mp4"
              ></video>
            </div>
          </div>
        </Section>
      </div>
      <div className="row">
        <Section bg="#99BADD" className=" features col-12" minHeight="170vh">
          <div></div>

          <div className="featues__row  row">
            <div className="col-12">
              <h1 className="Heading container">
                Simplify operating and manage with transparency
              </h1>
            </div>
          </div>
          <div className="row">
            <div className=" cards__wraopper col-sm-10   col-md-4  mt-5   ">
              <Card
                img="images/features1.jpg"
                header="Maintaing tasks"
                para="user can maintain or manage the live events or upcoming events/ tasks very easily.."
              />
            </div>
            <div className=" cards__wraopper col-sm-10   col-md-4   mt-5    ">
              <Card
                img="images/features2.jpg"
                header="   Remainders"
                para="Easily sets the timing of upcoming event and this cool feature remainders you before starting the event.."
              />
            </div>
            <div className=" cards__wraopper col-sm-10   col-md-4   mt-5     ">
              <Card
                img="images/features3.jpg"
                header="pomadora clocks"
                para="users can also explore the cool clocks as well as timer and stopwatch.."
              />
            </div>
          </div>
        </Section>
        <div className="container-fluid">
          <div className="row">
            <Section
              className=" request__demo col-12"
              minHeight="105vh"
              bg="#0c2d48"
            >
              <div></div>

              <div className=" request__demo__content row  ">
                <div className="col-12">
                  <h1 className="container Heading">
                    Say goodbye to long queues, big updates, and confusion.
                  </h1>
                </div>
                <div className="col-12">
                  <p className="para container my-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam corporis iusto porro sit omnis inventore quasi quis.
                    Ut excepturi exercitationem dicta, debitis non modi
                    doloremque aspernatur earum, maxime, illum omnis!
                  </p>
                </div>
                <div className="col-12">
                  {user ? (
                    <Link to="/Do-me">
                      <Button
                        color="black"
                        bg="#7393B3"
                        bgHover="#145DA0"
                        pd="0.7rem 2.5rem "
                      >
                        Explore
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/Sign-in">
                      <Button
                        color="black"
                        bg="#7393B3"
                        bgHover="#145DA0"
                        pd="0.7rem 2.5rem "
                      >
                        Explore
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
