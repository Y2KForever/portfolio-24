import headerImage from '$assets/images/header.jpg'

export const Header = () => {
  return (
    <div style={{ marginBottom: '-75px' }}>
      <img src={headerImage} height={200} style={{ objectFit: 'fill' }} width={'100%'} />
    </div>
  );
}