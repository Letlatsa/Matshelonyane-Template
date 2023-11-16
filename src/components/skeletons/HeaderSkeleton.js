import { Skeleton } from '@mui/material';

function HeaderSkeleton() {
  return (
    <>
      {/* Skeleton for Typography */}
      <Skeleton
        variant="text"
        width={100}
        height={50}
        sx={{
          borderRadius: '8px',
          background: 'linear-gradient(270deg, #C69585 18.75%, rgba(198, 149, 133, 0.00) 109.72%)',
          marginRight: '10px',
          flexShrink: 0
        }}
      />

      {/* Skeleton for Button */}
      <Skeleton
        variant="circular"
        width={44}
        height={44}
        sx={{
          background: 'linear-gradient(270deg, #C69585 18.75%, rgba(198, 149, 133, 0.00) 109.72%)',
          marginRight: '10px',
          flexShrink: 0
        }}
      />
    </>
  );
}

export default HeaderSkeleton;
