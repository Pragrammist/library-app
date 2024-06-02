"use client"
import { Link, Stack } from "@mui/material";
import { SecondaryBackground } from "./library/containers/secondary-container/secondary-container";

export default function NotFound() {
    return (
      <SecondaryBackground height="60vh">
        <Stack alignItems="center" justifyContent="center" height="60vh">
            <Link variant="h1" href="/" fontSize={100}>`¯\_(ツ)_/¯`</Link>
        </Stack>
      </SecondaryBackground>
    )
  }
  