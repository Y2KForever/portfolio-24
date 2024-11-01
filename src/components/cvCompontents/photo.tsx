import photo from '$assets/images/head.webp';
import { Verify } from '@/assets/icons/verify';

export const Photo = () => {
  return (
    <div className="flex flex-col" style={{ marginLeft: 25, height: 200, width: 200 }}>
      <img
        className="border-slate-500 border-8 rounded-full"
        src={photo}
        width={200}
        height={200}
        style={{ marginBottom: '-40px' }}
      />
      <Verify
        className="text-cyan-400"
        style={{
          alignSelf: 'end',
          marginRight: 10,
          marginTop: '-10px',
        }}
      />
    </div>
  );
};
