"use client";
import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VideoCallingConfig = ({ VId }: any) => {
  const meetingContainerRef = useRef<HTMLDivElement | null>(null);
  const myMeeting = async () => {
    if (!meetingContainerRef.current) {
      return;
    }

    // generate Kit Token
    const appID = Number(process.env.NEXT_PUBLIC_VIDEO_APP_ID);
    const serverSecret = process.env.NEXT_PUBLIC_VIDEO_SERVER_SECRET as string;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      VId,
      Date.now().toString(),
      VId
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    zp.joinRoom({
      container: meetingContainerRef.current,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            VId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_480P,
    });
  };
  useEffect(() => {
    myMeeting();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <Box>
      <Box ref={meetingContainerRef} />
    </Box>
  );
};

export default VideoCallingConfig;
