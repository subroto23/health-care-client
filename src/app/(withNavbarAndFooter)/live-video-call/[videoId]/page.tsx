"use client";
import VideoCallingConfig from "@/components/videoCall/VideoCallingConfig";
import { Container } from "@mui/material";

const LiveVideoCalling = ({ params }: any) => {
  return <VideoCallingConfig VId={params?.videoId} />;
};

export default LiveVideoCalling;
