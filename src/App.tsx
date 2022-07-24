import { ArrowDownward, Check, GitHub, LinkedIn, Mail, Twitter } from '@mui/icons-material';
import { Avatar, Box, Button, Chip, IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import { Container } from '@mui/system';

function App() {
  const theme = useTheme()
  return (
    <Container sx={{
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"

    }}>
      <Avatar
        sx={{
          height: "auto",
          width: {
            xs: "50%",
            md: "15%"
          },
          borderRadius: 1000,
          overflow: "hidden",
          display: "flex",
        }}>
        <img src="/me.png" alt='selim can özdemir' style={{ height: "auto", width: "100%" }} />
      </Avatar>
      <Typography textAlign={"center"} variant='h3'>Selim Can Özdemir</Typography>
      <Typography textAlign={"center"} color="gray" variant='h6'>Software Developer</Typography>
      <Box sx={{
        display: "flex",
      }}>
        <Tooltip title="@0xselfdestruct">
          <IconButton LinkComponent={"a"} target="_blank" href="https://www.linkedin.com/in/0xselfdestruct/" referrerPolicy="no-referrer" >
            <LinkedIn />
          </IconButton>
        </Tooltip>
        <Tooltip title="@0xselfdestruct">
          <IconButton LinkComponent={"a"} target="_blank" href="https://github.com/0xselfdestruct/" referrerPolicy="no-referrer" >
            <GitHub />
          </IconButton>
        </Tooltip>
        <Tooltip title="@0xselfdestruct">
          <IconButton LinkComponent={"a"} target="_blank" href="https://twitter.com/0xselfdestruct" referrerPolicy="no-referrer" >
            <Twitter />
          </IconButton>
        </Tooltip>
        <Tooltip title="0xselfdestruct@protonmail.com">
          <IconButton LinkComponent={"a"} target="_blank" href="mailto:0xselfdestruct@protonmail.com" referrerPolicy="no-referrer" >
            <Mail />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{
        marginTop: theme.spacing(3),
        paddingTop: theme.spacing(1),
        width: {
          xs: "90%",
          md: "60%",
          textAlign: "center"
        }
      }} >
        <Typography>
          Experienced, friendly, positive and motivated person who likes working on exciting projects.
          Software developer with 5+ years of experience in many fields like: Front-end, back-end, web3.
          Familiar with linux servers, web application security and smart contract security.
        </Typography>
      </Box>


      <Box sx={{
        width: "100%",
        marginTop: theme.spacing(3),
        paddingTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }} >
        <Typography variant='h4' color={"gray"}>Skills</Typography>
        <Container sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingTop: theme.spacing(1)
        }}>
          <Chip label="Front-End Development" variant="outlined" />
          <Chip label="Back-End Development" variant="outlined" />
          <Chip label="Blockchain/Web3 Development" variant="outlined" />
          <Chip label="Linux System Administration" variant="outlined" />
        </Container>
      </Box>

      <Box sx={{
        width: "100%",
        marginTop: theme.spacing(3),
        paddingTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }} >
        <Typography variant='h4' color={"gray"}>Tech Stack</Typography>
        <Container sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: {
            xs: "90%",
            md: "60%",
          },
          flexWrap: "wrap",
          paddingTop: theme.spacing(1)
        }}>
          <Chip label="Solidity" variant="outlined" />
          <Chip label="React / React Native" variant="outlined" />
          <Chip label="TypeScript" variant="outlined" />
          <Chip label="Node.js" variant="outlined" />
          <Chip label="Go" variant="outlined" />
          <Chip label="Python" variant="outlined" />
          <Chip label="Php / CodeIgniter / Laravel" variant="outlined" />
          <Chip label="MySQL" variant="outlined" />
          <Chip label="MongoDB" variant="outlined" />
          <Chip label="Postgresql" variant="outlined" />
          <Chip label="CSS/SCSS/SASS" variant="outlined" />
          <Chip label="Express.js" variant="outlined" />
          <Chip label="GraphQL" variant="outlined" />
          <Chip label="Docker" variant="outlined" />
          <Chip label="Linux" variant="outlined" />
          <Chip label="QEMU / Libvirt" variant="outlined" />
        </Container>
      </Box>

      <Box sx={{
        width: "100%",
        marginTop: theme.spacing(3),
        paddingTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }} >
        <Typography variant='h4' color={"gray"}>Experience</Typography>
        <Container sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: {
            xs: "90%",
            md: "50%",
          },
          flexWrap: "wrap",
          paddingTop: theme.spacing(1)
        }}>

          <Box sx={{
            marginBottom: theme.spacing(2),
            textAlign: "center",
          }}>
            <Typography fontWeight={"bold"}>Freelance Software Developer</Typography>
            <Typography component={"span"} color={"gray"}>Oct 2016 - Dec 2020 | Antalya/Turkey</Typography>
            <Typography variant="body2">
              It was my learning journey. I broke a lot and failed while trying to learn how tech stuff works.
              Meanwhile I have improved my cyber security skills, joined contests,
              worked on one-time projects like hybrid mobile apps, api's and commercial websites.
            </Typography>
          </Box>


          <Box>
            <ArrowDownward />
          </Box>


          <Box sx={{
            marginBottom: theme.spacing(2),
            textAlign: "center",
          }}>
            <Typography fontWeight={"bold"}>Aselsis A.Ş. | Front-End & Mobile Application Developer</Typography>
            <Typography component={"span"} color={"gray"}>Dec 2020 - Aug 2021 | Antalya/Turkey</Typography>
            <Typography variant="body2">
              I Worked in a Front-End development team on applications like Online school app(web),
              Truck logistics app(web, mobile) and Vehicle GPS tracking system(web, mobile),
              collaborated with the embedded developer and the back-end developer
              on these projects to develop user interface and improve the performance.
            </Typography>
          </Box>


          <Box>
            <ArrowDownward />
          </Box>


          <Box sx={{
            marginBottom: theme.spacing(2),
            textAlign: "center",
          }}>
            <Typography fontWeight={"bold"}>Freelance Web3 Developer</Typography>
            <Typography component={"span"} color={"gray"}>Sep 2021 - Apr 2022 | Remote</Typography>
            <Typography variant="body2">
              Designed & Developed NFT projects.
              Collaborated with the other development teams and dao’s for on-chain, off-chain integrations, web applications, UI developments.
              For more: <Button
                variant="text"
                sx={{
                  margin: 0,
                  padding: 0
                }}
                LinkComponent={"a"}
                target={"_blank"}
                referrerPolicy="no-referrer"
                href="https://twitter.com/0xselfdestruct/status/1503361171004567555">Click</Button>
            </Typography>
          </Box>

          <Box>
            <ArrowDownward />
          </Box>

          <Box sx={{
            marginBottom: theme.spacing(2),
            textAlign: "center",
          }}>
            <Typography fontWeight={"bold"}>DexGame | Blockchain Developer</Typography>
            <Typography component={"span"} color={"gray"}>Apr 2022 - Now | Remote</Typography>
            <Typography variant="body2">
              Developing smart contracts and working on web3 integrations.
            </Typography>
          </Box>

          <Box sx={{
            marginBottom: theme.spacing(4)
          }}>
            <Check />
          </Box>

        </Container>
      </Box>



    </Container>
  );
}

export default App;
