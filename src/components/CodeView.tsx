import { CopyBlock, androidstudio } from "react-code-blocks";

interface IProps {
  code: string;
  language: string;
}

const Hero = (props: IProps) => {
  return (
    <div style={{ marginTop: "45px" }}>
      <CopyBlock
        copied={false}
        text={props.code}
        language={props.language}
        codeContainerStyle={{
          background: "#1E1F22",
        }}
        showLineNumbers={true}
        theme={androidstudio}
      />
    </div>
  );
};

export default Hero;
