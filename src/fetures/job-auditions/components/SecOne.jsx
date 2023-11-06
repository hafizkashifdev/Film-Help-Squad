import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../../assets/SVG/Search-Icon.svg";
import { CustomTextField } from "../../../components/custom-text-field/custom-text-field";
import { DashboardSelect } from "../../../components/dashboard-select/dashboard-select";
import { GlobalSocialIcons } from "../../../components/social-icons/social-icons";

const SecOne = () => {
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  return (
    <Grid
      container
      sx={{
        pt: { lg: "9rem", xs: "5rem" },
        pb: { lg: "13rem", xs: "6rem" },
        flexDirection: { lg: "row", xs: "column" },
        px: { md: "", xs: "1rem" },
      }}
      className="primary-bg-color justify-center align-center"
    >
      <Grid
        item
        xl={10.6}
        lg={11.5}
        xs={12}
        className="flex flex-column align-center justify-center"
        sx={{ gap: { lg: 4, xs: 2 }, maxWidth: "1169px" }}
      >
        <Box>
          <Typography
            sx={{ maxWidth: "1169px" }}
            className="font-weight-400 heading-60 font-family-dm white-color center-text"
          >
            <span className="green-color">1000+ </span>New Auditions &
            Production Jobs Posted Every Month
          </Typography>
          <Typography sx={{mt: {md: 5, sm: 3, xs: 2}}} className="heading-40 font-weight-400 font-family-dm white-color center-text">
            Search Jobs
          </Typography>
        </Box>
        <Grid
          container
          className="flex-column align-center"
          sx={{ gap: { lg: 4, xs: 2 } }}
        >
          <Grid
            container
            className="justify-center"
            sx={{ gap: { lg: 4, xs: 2 } }}
          >
            <Grid item lg={2} md={7} xs={10}>
              <CustomTextField
                name={""}
                EndIcon={<SearchIcon />}
                fullWidth
                placeholder="Search Keyword"
              />
            </Grid>
            <Grid item lg={2} md={7} xs={10}>
              <DashboardSelect
                fullWidth
                placeholder="Gender"
                selectVal={gender}
                setSelectVal={setGender}
                data={["Male", "Female", "LGBTQIA+", "Prefer Not To Say"]}
              />
            </Grid>
            <Grid item lg={2} md={7} xs={10}>
              <DashboardSelect
                fullWidth
                placeholder="Actor"
                selectVal={role}
                setSelectVal={setRole}
                data={[
                  "Actors",
                  "Singers",
                  "Dancers",
                  "Voiceover Artists",
                  "Child Actor",
                  "Talent",
                  "Entertainer",
                  "Crew Job",
                  "Theatre Jobs",
                  "Music Jobs",
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={0.2} xs={12}>
        <GlobalSocialIcons />
      </Grid>
    </Grid>
  );
};

export default SecOne;

// import React, { useState } from "react";
// import { Grid, Typography, Box } from "@mui/material";
// import { ReactComponent as SearchIcon } from "../../../assets/SVG/Search-Icon.svg";
// import { CustomTextField } from "../../../components/custom-text-field/custom-text-field";
// import { DashboardSelect } from "../../../components/dashboard-select/dashboard-select";
// import { GlobalSocialIcons } from "../../../components/social-icons/social-icons";

// const SecOne = () => {
//   const [gender, setGender] = useState("");
//   const [role, setRole] = useState("");
//   return (
//     <Grid
//       container
//       sx={{
//         pt: { lg: "9rem", xs: "5rem" },
//         pb: { lg: "13rem", xs: "6rem" },
//         flexDirection: { lg: "row", xs: "column" },
//         px: { md: "", xs: "2rem" },
//       }}
//       className="primary-bg-color justify-center align-center"
//     >
//       <Grid
//         item
//         xl={10.6}
//         lg={11.5}
//         xs={12}
//         className="flex flex-column align-center justify-center"
//         sx={{ gap: { lg: 4, xs: 2 }, maxWidth: "1169px"  }}
//       >
//         <Box>
//           <Typography
//             sx={{ maxWidth: "1169px" }}
//             className="font-weight-400 heading-60 font-family-dm white-color center-text"
//           >
//             <span className="green-color">1000+ </span>New Auditions &
//             Production Jobs Posted Every Month
//           </Typography>
//         </Box>
//         <Box className="flex flex-column" gap={"2rem"}>
//           <Typography className="heading-40 font-weight-400 font-family-dm white-color center-text">
//             Search Jobs
//           </Typography>
//           <Grid container sx={{ gap: 2, justifyContent: "center" }}>
//             <Grid item md={4} xs={12}>
//             <CustomTextField
//               name={""}
//               fullWidth
//               EndIcon={<SearchIcon />}
//               placeholder="Search Keyword"
//             />
//             </Grid>
//             <Grid item md={4} xs={12}>
//             <DashboardSelect
//               fullWidth
//               placeholder="Gender"
//               selectVal={gender}
//               setSelectVal={setGender}
//               data={["Male", "Female", "LGBTQIA+", "Prefer Not To Say"]}
//             />
//             </Grid>
//             <Grid item md={4} xs={12}>
//             <DashboardSelect
//             fullWidth
//               placeholder="Select a Role"
//               selectVal={role}
//               setSelectVal={setRole}
//               data={[
//                 "Actors",
//                 "Singers",
//                 "Dancers",
//                 "Voiceover Artists",
//                 "Child Actor",
//                 "Talent",
//                 "Entertainer",
//                 "Crew Job",
//                 "Theatre Jobs",
//                 "Music Jobs",
//               ]}
//             />
//             </Grid>
//           </Grid>
//         </Box>
//       </Grid>
//       <Grid item lg={0.2} xs={12}>
//         <GlobalSocialIcons />
//       </Grid>
//     </Grid>
//   );
// };

// export default SecOne;
