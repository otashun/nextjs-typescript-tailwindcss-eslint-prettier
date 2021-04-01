// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export default (_: any, res: any): void => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  res.statusCode = 200;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  res.json({ name: 'John Doe' });
};
