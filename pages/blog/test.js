import Iframe from "../../components/blog/iframe";

const Test = () => {
  return (
    <Iframe>
      <iframe
        src="http://localhost:3002/map"
        style={{ width: "100%", height: "100vh" }}
      ></iframe>
    </Iframe>
  );
};

export default Test;
