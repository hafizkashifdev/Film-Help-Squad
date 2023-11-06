import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";

const Guides = () => {
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
            Guides (Coming soon)
          </Typography>
          <Typography className={descClasses}>
            Unlock the Secrets of Cinematic Craftsmanship
          </Typography>
        </Box>
        <Box className="flex flex-column">
          <Typography className={descClasses}>
            Welcome to the Film Help Squad's treasure trove of knowledge and
            inspiration. Our "Guides" page is your gateway to a world of
            valuable resources, tips, and expert insights to help you navigate
            the intricate art of filmmaking and storytelling.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Why Explore Our Guides
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Educational Excellence: &nbsp;
            </span>
            Dive into meticulously crafted guides that cover everything from
            screenwriting to cinematography, acting techniques to
            post-production wizardry. Our guides are curated to help both
            beginners and seasoned pros hone their skills.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Industry Insights: &nbsp;
            </span>
            Gain exclusive access to insider knowledge from industry experts who
            have walked the path to success. Learn from their experiences and
            discover the trade secrets that can set you apart.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Creative Inspiration: &nbsp;
            </span>
            Find inspiration to fuel your creative spark. Explore guides on
            character development, plot twists, and cinematic aesthetics to
            ignite your storytelling imagination.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Practical Advice: &nbsp;
            </span>
            Discover practical tips and tricks that can make your filmmaking
            journey smoother. From budgeting your indie film to selecting the
            right equipment, we've got you covered.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Browse Our Guide Categories{" "}
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Screenwriting: &nbsp;
            </span>
            Master the art of storytelling with our screenwriting guides. Learn
            about plot structure, character development, and dialogue that
            captivates.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Directing: &nbsp;
            </span>
            Dive into the director's chair with guides on visual storytelling,
            shot composition, and directing actors to deliver powerful
            performances.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Cinematography: &nbsp;
            </span>
            Explore the world of camera techniques, lighting, and visual
            aesthetics that make every frame a work of art.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Acting: &nbsp;
            </span>
            Whether you're an actor or a director working with actors, our
            acting guides cover everything from character analysis to audition
            tips.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Post-Production: &nbsp;
            </span>
            Navigate the post-production process with guides on editing, sound
            design, and visual effects that transform raw footage into a
            cinematic masterpiece.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Start Your Learning Journey{" "}
          </Typography>
          <Typography className={descClasses}>
            Ready to unlock the secrets of cinematic craftsmanship? Dive into
            our collection of guides and embark on a learning journey that will
            elevate your creative skills, expand your knowledge, and bring your
            cinematic visions to life.
          </Typography>
          <Typography className={descClasses}>
            Bookmark this page, share it with your fellow filmmakers, and keep
            coming back for fresh insights and inspiration. Together, we'll
            explore the depths of storytelling and filmmaking, one guide at a
            time.
          </Typography>
          <Typography className="heading-20 font-family-red font-weight-600 primary-color">
            Let's begin the adventure!
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default Guides;
