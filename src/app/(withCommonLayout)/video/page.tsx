import VideoCall from "@/components/UI/VideoCall/VideoCall";

type PropsTypes = { searchParams: { videoCallingId: string } };

const VideoCalling = ({ searchParams }: PropsTypes) => {
  const videoCallingId = searchParams?.videoCallingId;
  return <VideoCall videoCallingId={videoCallingId} />;
};

export default VideoCalling;
