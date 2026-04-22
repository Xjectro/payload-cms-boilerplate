declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '@payloadcms/next/css' {
  // side-effect import
}
