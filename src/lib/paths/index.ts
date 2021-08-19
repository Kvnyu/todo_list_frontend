const paths = {
  create: {
    href: '/create',
  },
  home: {
    href: '/',
  },
  update: {
    href: (id: string) => `/update/${id}`,
  },
};

export default paths;
