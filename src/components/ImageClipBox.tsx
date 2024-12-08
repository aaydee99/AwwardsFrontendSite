interface ImageClipBoxProps {
    src: string;
    clipClass?: string;
  }
  
  const ImageClipBox: React.FC<ImageClipBoxProps> = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img src={src} alt="Clip box content" />
    </div>
  );
  
  export default ImageClipBox;
  