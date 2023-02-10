
import { Accordion ,AccordionSummary, Box, Stack} from "@mui/material";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <Box>


<Accordion>
      <AccordionSummary>
      <Stack  direction="row" spacing={2}>
        <ExitToAppIcon />
       
        <h3>Sign Up</h3>
       
       
      </Stack>
      </AccordionSummary>
    
    </Accordion>


    
    <Accordion>
      <AccordionSummary>
      <Stack direction="row" spacing={2}>
<AccountCircleIcon />
 <h3>Farzan Mirza</h3>
      </Stack>
      </AccordionSummary>
    
    </Accordion>
    
     
    <Accordion>
      <AccordionSummary>
      <Stack  direction="row" spacing={2}>
<NotificationsNoneIcon />
<h3>Notification</h3>
      </Stack >

      </AccordionSummary>
    
    </Accordion>

     
    <Accordion>
      <AccordionSummary>
      <Stack  direction="row" spacing={2}>
        <HomeIcon />
        <Link to='/'>
        <h3>Home</h3>
        </Link>
       
      </Stack>
      </AccordionSummary>
    
    </Accordion>

    <Accordion>
      <AccordionSummary>
      <Stack  direction="row" spacing={2}>
        <AssignmentIcon />
        <Link to='/report'>
        <h3>Report</h3>
        </Link>
       
      </Stack>
      </AccordionSummary>
    
    </Accordion>

    <Accordion>
      <AccordionSummary>
      <Stack  direction="row" spacing={2}>
        <ArchitectureIcon />
        <Link to='/planning'>
        <h3>Planning</h3>
        </Link>
       
      </Stack>
      </AccordionSummary>
    
    </Accordion>

    <Accordion>
      <AccordionSummary>
      <Stack  direction="row" spacing={2}>
        <CurrencyRupeeIcon />
        <Link to='/finance'>
        <h3>Finance</h3>
        </Link>
       
      </Stack>
      </AccordionSummary>
    
    </Accordion>
    </Box>
  );
};

export default Sidebar;
