"use client";

import VideoCallICon from "@mui/icons-material/VideoCall";
import { Button, Stack } from "@mui/material";
import AgoraUIKit from "agora-react-uikit";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PropTypes = {
  videoCallingId: string;
};

const VideoCall = ({ videoCallingId }: PropTypes) => {
  const [startVideoCall, setStartVideoCall] = useState(false);
  const router = useRouter();
  const rtcProps = {
    appId: process.env.VIDEO_CALL_APP_ID as string,
    channel: videoCallingId, // your agora channel
    token: null, // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => {
      setStartVideoCall(false);
      router.push("/dashboard");
    },
  };
  return startVideoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <Stack
      sx={{
        maxWidth: "500px",
        width: "100%",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => setStartVideoCall(true)}
        endIcon={<VideoCallICon />}
      >
        Start Call
      </Button>

      <Image
        src="https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151106734.jpg?size=626&ext=jpg&ga=GA1.1.1452987919.1718032947&semt=ais_user"
        width={500}
        height={500}
        alt="doctor image"
      />
    </Stack>
  );
};

export default VideoCall;
