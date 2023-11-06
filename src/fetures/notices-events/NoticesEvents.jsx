import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";

const NoticesEvents = () => {
  const headingClasses = [
    "heading-30",
    "font-weight-400",
    "font-family-dm",
    "dm-color",
  ];
  const descClasses = [
    "heading-20",
    "font-weight-400",
    "font-family-lato",
    "text-desc-color",
  ];

  return (
    <Container
      className="flex justify-center align-center"
      sx={{ mt: { md: "6rem", sm: "3rem", xs: "2rem" } }}
    >
      <Card
        sx={{
          maxWidth: "1600px",
          boxShadow: "0px 31.00949px 64px 0px rgba(0, 0, 0, 0.08)",
          p: { md: "60px", sm: "40px", xs: "20px" },
          gap: "2rem",
          borderRadius: "25px",
        }}
        className="width-100 flex flex-column"
      >
        <Box>
          <Typography className="primary-color heading-40 font-family-dm font-weight-400">
            Notices and Events
          </Typography>
          <Typography className={descClasses}>
            Stay in the Cinematic Loop
          </Typography>
        </Box>
        <Box className="flex flex-column">
          <Typography className={descClasses}>
            Welcome to the pulse of the Film Help Squad community! Our "Notices
            and Events" page is your gateway to all the latest happenings in the
            world of filmmaking. We believe that staying informed and engaged is
            crucial for every creative soul, so we've curated this space to keep
            you up-to-date with exciting news, opportunities, and events.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            What You'll Find Here
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Project Calls: &nbsp;
            </span>
            Explore the latest project calls, casting notices, and collaboration
            opportunities. Your next big role or film project could be just a
            click away.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Film Festivals: &nbsp;
            </span>
            Stay in the know about upcoming film festivals, both local and
            international. Showcase your work on the big screen and celebrate
            cinema with fellow enthusiasts.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Workshops and Webinars: &nbsp;
            </span>
            Sharpen your skills and expand your knowledge through our selection
            of workshops and webinars conducted by industry experts. Learn from
            the best to become the best.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Exclusive Community Events: &nbsp;
            </span>
            Be the first to know about our exclusive community events, from
            virtual screenings to filmmaker meet-ups. Join us for a memorable
            cinematic experience.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Get Involved</Typography>
          <Typography className={descClasses}>
            Participation is key to making the most of our "Notices and Events"
            page:
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Stay Updated: &nbsp;
            </span>
            Check back often to discover the latest notices, events, and
            opportunities that align with your interests.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Submit Your Event: &nbsp;
            </span>
            If you're hosting a film-related event, workshop, or project call,
            let us know! Share your event with our community, and let the
            collaboration begin.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Connect and Collaborate: &nbsp;
            </span>
            When you find an event or opportunity that sparks your interest,
            don't hesitate to connect with fellow members and potential
            collaborators. Your next creative adventure may be just a
            conversation away.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Never Miss a Beat </Typography>
          <Typography className={descClasses}>
            Don't let the cinematic world pass you by. Bookmark this page,
            follow us on social media, and subscribe to our newsletter to ensure
            you're always in the cinematic loop. We're here to fuel your
            creativity, celebrate your achievements, and be your guide on your
            cinematic journey.
          </Typography>
          <Typography className="heading-20 font-family-red font-weight-600 primary-color">
            Stay tuned, stay inspired, and let's create movie magic together!
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default NoticesEvents;
