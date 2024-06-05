"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useOpenContext } from "@/context/OpenProvider";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  const { open, setOpen } = useOpenContext();

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const address = "24 Lanre Awolokun, Gbagada Phase 2, Lagos State";
  return (
    <div className={styles["contactus-root"]}>
      <div className={styles["contactus-container"]}>
        <div className={styles["contactus-title"]}>Contact</div>
        <div className={styles["contactus-content"]}>
          <div className={styles["contactus-left"]}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1.5, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="name" label="Name" variant="outlined" />
              <TextField id="name" label="Email" variant="outlined" />
              <TextField id="name" label="Phone number" variant="outlined" />
              <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={6}
                style={{ width: "100%" }}
                name="comment"
              />
              <div className={styles["sendBtn"]}>
                <button type="submit">Send</button>
              </div>
            </Box>
          </div>
          <div className={styles["contactus-right"]}>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7996105457046!2d3.3814625749447713!3d6.546968393445971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d74a1d96faf%3A0xc6ca00ab91edfc5c!2s${encodeURIComponent(
                address
              )}!5e0!3m2!1sen!2sng!4v1686910536404!5m2!1sen!2sng`}
              width="600"
              height="450"
              style={{ width: "100%", height: "100%", border: "none" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
