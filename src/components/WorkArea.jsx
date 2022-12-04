function WorkArea({title, subtitle, image, alt, text}) {
  return (
    <div>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <p>{text}</p>
    </div>
  );
}

export default WorkArea;