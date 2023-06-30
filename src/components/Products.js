// eslint-disable-next-line
import { Search, SentimentDissatisfied } from "@mui/icons-material";
import {
  // eslint-disable-next-line
  CircularProgress,
  Grid,
  // eslint-disable-next-line
  InputAdornment,
  // eslint-disable-next-line
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
// eslint-disable-next-line
import axios from "axios";
// eslint-disable-next-line
import { useSnackbar } from "notistack";
// eslint-disable-next-line
import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
import "./Products.css";



const Products = () => {







  return (
    <div>
      <Header>

      </Header>

       <Grid container>
         <Grid item className="product-grid">
           <Box className="hero">
             <p className="hero-heading">
               India’s <span className="hero-highlight">FASTEST DELIVERY</span>{" "}
               to your door step
             </p>
           </Box>
         </Grid>
       </Grid>
      <Footer />
    </div>
  );
};

export default Products;
